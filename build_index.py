"""Gera gpt-index.json com os nomes das imagens de combinação em gpt/raws/ e gpt/references/."""
import json
from pathlib import Path

ROOT = Path(__file__).parent
IMAGE_DIRS = (ROOT / "gpt" / "raws", ROOT / "gpt" / "references")
patterns = (
    "camisa-*-calca-*-calcado-*.png",
    "terno-*-camisa-*-calca-*-calcado-*.png",
)
files = sorted({
    p.name
    for image_dir in IMAGE_DIRS
    for pattern in patterns
    for p in image_dir.glob(pattern)
})
(ROOT / "gpt-index.json").write_text(json.dumps(files, ensure_ascii=False), encoding="utf-8")
print(f"{len(files)} looks")
