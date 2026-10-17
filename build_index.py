"""Gera o índice das combinações em PNG na raiz de gpt/ e WebP em gpt/compressed/."""
import json
from pathlib import Path

ROOT = Path(__file__).parent
GPT_DIR = ROOT / "gpt"
COMPRESSED_DIR = GPT_DIR / "compressed"
patterns = (
    "camisa-*-calca-*-calcado-*.png",
    "terno-*-camisa-*-calca-*-calcado-*.png",
)
files = {
    path.name
    for pattern in patterns
    for path in GPT_DIR.glob(pattern)
}
files.update(
    path.name.removesuffix(".webp") + ".png"
    for pattern in (pattern.removesuffix(".png") + ".webp" for pattern in patterns)
    for path in COMPRESSED_DIR.glob(pattern)
)
files = sorted(files)
(ROOT / "gpt-index.json").write_text(json.dumps(files, ensure_ascii=False), encoding="utf-8")
print(f"{len(files)} looks")
