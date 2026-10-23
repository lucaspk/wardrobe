"""Convert gpt/ PNGs to WebP, validate them, then archive PNGs in gpt/raws/."""
import argparse
import filecmp
import hashlib
from pathlib import Path
import tempfile

try:
    from PIL import Image
except ImportError as error:
    raise SystemExit(
        "This script requires Pillow. Install it with: python3 -m pip install Pillow"
    ) from error


ROOT = Path(__file__).resolve().parent.parent
SOURCE_DIR = ROOT / "gpt"
OUTPUT_DIR = ROOT / "gpt" / "compressed"
ARCHIVE_DIR = ROOT / "gpt" / "raws"


def archive_png(source: Path, archive_dir: Path) -> Path:
    """Keep existing originals, using a content suffix when names collide."""
    archive_dir.mkdir(parents=True, exist_ok=True)
    archived = archive_dir / source.name
    if archived.exists() and not filecmp.cmp(source, archived, shallow=False):
        digest = hashlib.sha256(source.read_bytes()).hexdigest()[:12]
        archived = archive_dir / f"{source.stem}-{digest}{source.suffix}"
    if archived.exists():
        if not filecmp.cmp(source, archived, shallow=False):
            raise FileExistsError(f"Archive conflict: {archived}")
        source.unlink()
    else:
        source.rename(archived)
    return archived


def convert_and_archive(source: Path, output_dir: Path, archive_dir: Path, quality: int) -> tuple[Path, Path, bool]:
    output_dir.mkdir(parents=True, exist_ok=True)
    destination = output_dir / f"{source.stem}.webp"
    converted = False
    with Image.open(source) as image:
        image.load()
        expected_size = image.size
        if not destination.exists():
            has_alpha = "A" in image.getbands() or "transparency" in image.info
            converted_image = image.convert("RGBA" if has_alpha else "RGB")
            save_options = {"quality": quality, "method": 6}
            if image.info.get("icc_profile"):
                save_options["icc_profile"] = image.info["icc_profile"]
            with tempfile.NamedTemporaryFile(dir=output_dir, suffix=".webp", delete=False) as temporary:
                temporary_path = Path(temporary.name)
            try:
                converted_image.save(temporary_path, format="WEBP", **save_options)
                with Image.open(temporary_path) as webp:
                    webp.load()
                    if webp.format != "WEBP" or webp.size != expected_size:
                        raise ValueError(f"Invalid conversion: {source.name}")
                temporary_path.replace(destination)
                converted = True
            finally:
                temporary_path.unlink(missing_ok=True)
    # Existing WebPs must also be readable before the PNG leaves the staging folder.
    with Image.open(destination) as webp:
        webp.load()
        if webp.format != "WEBP" or webp.size != expected_size:
            raise ValueError(f"Invalid existing WebP; PNG retained: {destination.name}")
    archived = archive_png(source, archive_dir)
    return destination, archived, converted


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--quality",
        type=int,
        default=82,
        choices=range(1, 101),
        metavar="1-100",
        help="WebP quality (default: 82)",
    )
    args = parser.parse_args()

    sources = sorted(path for path in SOURCE_DIR.glob("*.png") if path.is_file())
    if not sources:
        print("No root-level PNG outfit images were found in gpt/.")
        return

    converted = 0
    skipped = 0

    for source in sources:
        destination, archived, created = convert_and_archive(source, OUTPUT_DIR, ARCHIVE_DIR, args.quality)
        converted += created
        skipped += not created
        action = "converted" if created else "existing WebP validated"
        print(f"{source.name}: {action} -> {destination.relative_to(ROOT)}; PNG -> {archived.relative_to(ROOT)}")

    print(f"Done: {converted} converted, {skipped} existing; PNGs archived in gpt/raws/.")


if __name__ == "__main__":
    main()
