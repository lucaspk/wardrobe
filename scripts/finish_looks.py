"""Crop, convert to WebP, archive PNGs, rebuild gpt-index. Run after saving PNGs in gpt/to_crop/."""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))

import build_index  # noqa: E402
import convert_looks_to_webp  # noqa: E402
import crop  # noqa: E402


def main() -> None:
    crop.main()
    convert_looks_to_webp.main()
    build_index.main()


if __name__ == "__main__":
    main()
