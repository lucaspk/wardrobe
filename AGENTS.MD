- Gerar imagens em `gpt/to_crop/` com o nome final do look (`camiseta-…png`, `camisa-…png`, `terno-…png`).

- Depois das imagens em `gpt/to_crop/`, só rodar `python3 scripts/finish_looks.py`. Não recortar, converter ou indexar na mão.

- Não cadastrar looks em `assets/js/script.js`. A fonte é `data/gpt-index.json`.

- Não editar `combinator.js` para looks com cores já na paleta. Só editar se a cor for nova (id + hex) ou se o tipo de peça ainda não existir na UI.

- Respeitar `data/combinator-rules.json`: não gerar cores que o modo oculta ou que estão fora de `somente`. Para desabilitar uma cor na UI, edite esse JSON — não o `combinator.js`.

- Lote pequeno (até ~24 looks, ou uma série de uma peça): fazer neste agente. Não abrir subagente.

- Matriz grande (várias peças × várias cores × vários calçados): aí sim batches paralelos.

- Não fazer QA visual: não ler as imagens geradas, não abrir o browser para conferir looks, não tirar screenshot das fotos, não inspecionar cada PNG/WebP. Confiar no `finish_looks.py`.

- Referência: um WebP 776×1024 de look semelhante, não vários RAW.

- Após o script ok, apagar só fontes desta tarefa em `~/.codex/generated_images/` e temporários. PNG em `gpt/raws/`, WebP em `gpt/compressed/<tipo>/<cor>/`. Não apagar arquivos de outras tarefas.
