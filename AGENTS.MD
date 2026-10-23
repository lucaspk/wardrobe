
- Sempre gerar imagems no diretório /gpt/to_crop.

- Sempre gerar looks para todas as cores de calçados mapeados.

- Use múltiplos agentes paralelos em batches para organizar o trabalho, dividir e paralelizar para ganhar eficiência e agilidade.

- Ao final da geração, corte tal como as outras imagens para ficar consistente.

- Depois de cortar, salve temporariamente o PNG em /gpt.

- Converta para WebP em /gpt/compressed com scripts/convert_looks_to_webp.py. Depois de validar a conversão, o script deve mover automaticamente o PNG para /gpt/raws. O destino final dos PNGs é sempre /gpt/raws, nunca a raiz de /gpt. Preserve originais arquivados; em caso de conteúdo diferente com o mesmo nome, use um sufixo para evitar perda.

- Ao final da geração, apague todos arquivos desnecessários.

- Sempre incluir no script.js os looks gerados.

- Se for algo apropriado para combinador, também acrescente lá.

