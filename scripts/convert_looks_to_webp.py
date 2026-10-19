"""Convert root-level outfit PNGs in gpt/ to WebP in gpt/compressed/."""
import argparse
from pathlib import Path

try:
    from PIL import Image
except ImportError as error:
    raise SystemExit(
        "This script requires Pillow. Install it with: python3 -m pip install Pillow"
    ) from error


ROOT = Path(__file__).resolve().parent.parent
SOURCE_DIR = ROOT / "gpt"
OUTPUT_DIR = ROOT / "gpt" / "compressed"


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

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    converted = 0
    skipped = 0

    for source in sources:
        destination = OUTPUT_DIR / f"{source.stem}.webp"
        if destination.exists():
            print(f"skip (already exists): {destination.name}")
            skipped += 1
            continue

        with Image.open(source) as image:
            has_alpha = "A" in image.getbands() or "transparency" in image.info
            converted_image = image.convert("RGBA" if has_alpha else "RGB")
            save_options = {"quality": args.quality, "method": 6}
            icc_profile = image.info.get("icc_profile")
            if icc_profile:
                save_options["icc_profile"] = icc_profile
            converted_image.save(destination, format="WEBP", **save_options)

        print(f"{source.name} -> {destination.relative_to(ROOT)}")
        converted += 1

    print(f"Done: {converted} converted, {skipped} skipped; originals preserved.")


if __name__ == "__main__":
    main()
