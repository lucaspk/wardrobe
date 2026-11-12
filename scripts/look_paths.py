"""Caminhos dos looks: WebP em gpt/compressed/<tipo>/<cor-da-camisa>/."""
from pathlib import Path
import re

LOOK = re.compile(
    r"^(?:(?P<outer>terno|jaqueta|blazer)-[a-z0-9-]+-)?"
    r"(?P<top>camisa|camiseta)-(?P<color>[a-z0-9-]+?)-"
    r"(?:calca|shorts|bermuda)-",
    re.IGNORECASE,
)

KIND_FOLDERS = {
    "terno": "ternos",
    "jaqueta": "jaqueta",
    "blazer": "blazer",
    "camiseta": "camisetas",
    "camisa": "camisas",
}


def look_parts(name: str) -> tuple[str, str]:
    stem = Path(name).stem
    match = LOOK.match(stem)
    if not match:
        raise ValueError(f"Não foi possível classificar o look {name}")
    outer = (match.group("outer") or "").lower()
    top = match.group("top").lower()
    color = match.group("color").lower()
    kind = KIND_FOLDERS[outer] if outer else KIND_FOLDERS[top]
    return kind, color


def compressed_webp_path(compressed_dir: Path, name: str) -> Path:
    filename = Path(name).with_suffix(".webp").name
    kind, color = look_parts(filename)
    return compressed_dir / kind / color / filename
