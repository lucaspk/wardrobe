---
name: gerar-looks
description: Gera looks do guarda-roupa (camisa, camiseta, bermuda, terno, blazer, jaqueta), recorta, converte WebP e atualiza o índice. Use when generating outfit images, looks, camisetas, bermudas, or running the gpt/to_crop pipeline.
---

# Gerar looks

Leia só `data/looks-manifest.json`. Não leia `PROMPT-GERAR-LOOKS.md`, `README.md`, `combinator.js`, `script.js`, `docs/prompts/`, transcripts nem imagens.

1. PNG em `gpt/to_crop/` com o filename do manifesto. No nome, use `topFile` quando existir; senão o id.
2. Rode `python3 scripts/finish_looks.py`. Não recorte, converta nem indexe na mão.
3. Não edite `combinator.js` se a cor já está no manifesto. Cor nova: id + hex no combinator e no manifesto.
4. Não edite `script.js`.
5. Sem QA visual: não leia PNG/WebP, não abra o combinador, não faça screenshot.
6. Até ~24 looks neste agente. Matriz maior: batches paralelos.
7. Uma referência WebP (a do manifesto, se o enquadramento servir). Não gere o que `ocultar` lista.
8. Depois do script, apague só fontes desta geração.

Prompt: mesmo modelo, pose e fundo da referência; mude só as peças pedidas; use o hex do manifesto; canvas para o recorte central 776×1024.
