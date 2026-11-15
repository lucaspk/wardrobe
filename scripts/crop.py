"""Pad to 1536x1024 if needed, then crop the center 776x1024 from gpt/to_crop/."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
TO_CROP = ROOT / "gpt" / "to_crop"
OUT = ROOT / "gpt"

CANVAS = (1536, 1024)
FINAL = (776, 1024)
CROP_LEFT = 380
CROP_RIGHT = 1536 - 380


def sample_bg(img: Image.Image) -> tuple[int, int, int]:
    rgb = img.convert("RGB")
    w, h = rgb.size
    samples = [
        rgb.getpixel((0, 0)),
        rgb.getpixel((w - 1, 0)),
        rgb.getpixel((0, h - 1)),
        rgb.getpixel((w - 1, h - 1)),
        rgb.getpixel((min(8, w - 1), min(8, h - 1))),
    ]
    return tuple(sum(c[i] for c in samples) // len(samples) for i in range(3))


def pad_to_canvas(img: Image.Image) -> Image.Image:
    if img.size == CANVAS:
        return img.convert("RGB")
    rgb = img.convert("RGB")
    w, h = rgb.size
    if h != CANVAS[1]:
        w = max(1, round(w * CANVAS[1] / h))
        rgb = rgb.resize((w, CANVAS[1]), Image.Resampling.LANCZOS)
        h = CANVAS[1]
    if w > CANVAS[0]:
        left = (w - CANVAS[0]) // 2
        rgb = rgb.crop((left, 0, left + CANVAS[0], h))
        return rgb
    canvas = Image.new("RGB", CANVAS, sample_bg(rgb))
    canvas.paste(rgb, ((CANVAS[0] - w) // 2, 0))
    return canvas


def crop_sides(img: Image.Image) -> Image.Image:
    return img.crop((CROP_LEFT, 0, CROP_RIGHT, img.height))


def prepare(img: Image.Image) -> Image.Image:
    if img.size == FINAL:
        return img.convert("RGB")
    return crop_sides(pad_to_canvas(img))


def main() -> None:
    files = sorted(TO_CROP.glob("*.png"))
    if not files:
        print("Nenhum PNG em gpt/to_crop/")
        return

    for src in files:
        with Image.open(src) as im:
            im.load()
            cropped = prepare(im)
        if cropped.size != FINAL:
            raise ValueError(f"{src.name}: expected {FINAL}, got {cropped.size}")
        cropped.save(OUT / src.name, optimize=True)
        src.unlink()
        print(f"{src.name} -> {cropped.size}")

    print(f"Feito: {len(files)} em gpt/")


if __name__ == "__main__":
    main()
