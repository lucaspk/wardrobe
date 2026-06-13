"""Crop horizontal fixo para imagens 1536x1024 em gpt/to_crop/."""
from pathlib import Path

from PIL import Image

TO_CROP = Path(__file__).parent / "gpt" / "to_crop"
OUT = Path(__file__).parent / "gpt"

TARGET_SIZE = (1536, 1024)
CROP_LEFT = 380
CROP_RIGHT = 1536 - 380


def crop_sides(img: Image.Image) -> Image.Image:
    return img.crop((CROP_LEFT, 0, CROP_RIGHT, img.height))


def main() -> None:
    files = sorted(TO_CROP.glob("*.png"))
    if not files:
        print("Nenhum PNG em gpt/to_crop/")
        return

    for src in files:
        im = Image.open(src)
        if im.size != TARGET_SIZE:
            print(f"skip (size {im.size}): {src.name}")
            continue
        cropped = crop_sides(im)
        cropped.save(OUT / src.name, optimize=True)
        src.unlink()
        print(f"{src.name}: {im.size} -> {cropped.size}")

    print(f"Feito: {len(list(OUT.glob('*.png')))} em gpt/")


if __name__ == "__main__":
    main()
