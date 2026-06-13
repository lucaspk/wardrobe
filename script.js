/* Guarda-roupa — Galeria estática com filtros */

const CATEGORIES = ['Camisa', 'Calça', 'Calçado', 'Jaqueta', 'Blazer', 'Look completo', 'Outro'];
const COLORS = [
  'Branco', 'Preto', 'Cinza claro', 'Cinza pedra', 'Azul', 'Azul marinho',
  'Vinho', 'Bordô', 'Bege', 'Cáqui', 'Marrom', 'Caramelo', 'Verde', 'Outro'
];

// Coloque as imagens no diretório raiz e categorize aqui.
// file: nome do arquivo (ex.: "look-01.jpg")
const CATALOG = [
  { id: '67', file: 'gpt/camisa-azul-claro-calca-verde-militar-calcado-marrom.png', name: 'Camisa azul claro · calça verde militar · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '68', file: 'gpt/camisa-azul-claro-calca-azul-marinho-calcado-marrom.png', name: 'Camisa azul claro · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '69', file: 'gpt/camisa-azul-claro-calca-bege-calcado-preto.png', name: 'Camisa azul claro · calça bege · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '70', file: 'gpt/camisa-azul-claro-calca-cinza-claro-calcado-preto.png', name: 'Camisa azul claro · calça cinza claro · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '71', file: 'gpt/camisa-azul-claro-calca-cinza-pedra-calcado-preto.png', name: 'Camisa azul claro · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '72', file: 'gpt/camisa-azul-claro-calca-creme-calcado-marrom.png', name: 'Camisa azul claro · calça creme · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '73', file: 'gpt/camisa-azul-claro-calca-marrom-calcado-marrom.png', name: 'Camisa azul claro · calça marrom · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '74', file: 'gpt/camisa-azul-claro-calca-preta-calcado-preto.png', name: 'Camisa azul claro · calça preta · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '75', file: 'gpt/camisa-azul-claro-calca-verde-oliva-calcado-marrom.png', name: 'Camisa azul claro · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '76', file: 'gpt/camisa-azul-claro-calca-vinho-calcado-marrom.png', name: 'Camisa azul claro · calça vinho · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '77', file: 'gpt/camisa-azul-marinho-calca-bege-calcado-preto.png', name: 'Camisa azul marinho · calça bege · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '78', file: 'gpt/camisa-azul-marinho-calca-cinza-claro-calcado-preto.png', name: 'Camisa azul marinho · calça cinza claro · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '79', file: 'gpt/camisa-azul-marinho-calca-cinza-pedra-calcado-preto.png', name: 'Camisa azul marinho · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '80', file: 'gpt/camisa-azul-marinho-calca-creme-calcado-marrom.png', name: 'Camisa azul marinho · calça creme · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '81', file: 'gpt/camisa-azul-marinho-calca-marrom-calcado-marrom.png', name: 'Camisa azul marinho · calça marrom · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '82', file: 'gpt/camisa-azul-marinho-calca-preta-calcado-preto.png', name: 'Camisa azul marinho · calça preta · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '83', file: 'gpt/camisa-azul-marinho-calca-verde-militar-calcado-marrom.png', name: 'Camisa azul marinho · calça verde militar · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '84', file: 'gpt/camisa-azul-marinho-calca-verde-oliva-calcado-marrom.png', name: 'Camisa azul marinho · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '85', file: 'gpt/camisa-azul-marinho-calca-vinho-calcado-marrom.png', name: 'Camisa azul marinho · calça vinho · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '86', file: 'gpt/camisa-branca-calca-azul-marinho-calcado-marrom.png', name: 'Camisa branca · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '87', file: 'gpt/camisa-branca-calca-bege-calcado-preto.png', name: 'Camisa branca · calça bege · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '88', file: 'gpt/camisa-branca-calca-cinza-claro-calcado-preto.png', name: 'Camisa branca · calça cinza claro · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '89', file: 'gpt/camisa-branca-calca-cinza-pedra-calcado-preto.png', name: 'Camisa branca · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '90', file: 'gpt/camisa-branca-calca-creme-calcado-marrom.png', name: 'Camisa branca · calça creme · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '91', file: 'gpt/camisa-branca-calca-marrom-calcado-marrom.png', name: 'Camisa branca · calça marrom · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '92', file: 'gpt/camisa-branca-calca-preta-calcado-preto.png', name: 'Camisa branca · calça preta · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '93', file: 'gpt/camisa-branca-calca-verde-militar-calcado-marrom.png', name: 'Camisa branca · calça verde militar · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '94', file: 'gpt/camisa-branca-calca-verde-oliva-calcado-marrom.png', name: 'Camisa branca · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '95', file: 'gpt/camisa-branco-calca-vinho-calcado-marrom.png', name: 'Camisa branco · calça vinho · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '96', file: 'gpt/camisa-cinza-claro-calca-azul-marinho-calcado-marrom.png', name: 'Camisa cinza claro · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Cinza claro' },
  { id: '97', file: 'gpt/camisa-cinza-claro-calca-cinza-pedra-calcado-preto.png', name: 'Camisa cinza claro · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Cinza claro' },
  { id: '98', file: 'gpt/camisa-cinza-escuro-calca-creme-calcado-marrom.png', name: 'Camisa cinza pedra · calça creme · calçado marrom', category: 'Look completo', color: 'Cinza pedra' },
  { id: '99', file: 'gpt/camisa-cinza-claro-calca-preta-calcado-preto.png', name: 'Camisa cinza claro · calça preta · calçado preto', category: 'Look completo', color: 'Cinza claro' },
  { id: '100', file: 'gpt/camisa-cinza-escuro-calca-verde-militar-calcado-marrom.png', name: 'Camisa cinza pedra · calça verde militar · calçado marrom', category: 'Look completo', color: 'Cinza pedra' },
  { id: '101', file: 'gpt/camisa-cinza-escuro-calca-verde-oliva-calcado-marrom.png', name: 'Camisa cinza pedra · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Cinza pedra' },
  { id: '102', file: 'gpt/camisa-cinza-escuro-calca-vinho-calcado-marrom.png', name: 'Camisa cinza pedra · calça vinho · calçado marrom', category: 'Look completo', color: 'Cinza pedra' },
  { id: '103', file: 'gpt/camisa-creme-calca-azul-marinho-calcado-marrom.png', name: 'Camisa creme · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '104', file: 'gpt/camisa-creme-calca-bege-calcado-preto.png', name: 'Camisa creme · calça bege · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '105', file: 'gpt/camisa-creme-calca-cinza-claro-calcado-preto.png', name: 'Camisa creme · calça cinza claro · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '106', file: 'gpt/camisa-creme-calca-cinza-pedra-calcado-preto.png', name: 'Camisa creme · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '107', file: 'gpt/camisa-creme-calca-marrom-calcado-marrom.png', name: 'Camisa creme · calça marrom · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '108', file: 'gpt/camisa-creme-calca-preta-calcado-preto.png', name: 'Camisa creme · calça preta · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '109', file: 'gpt/camisa-creme-calca-verde-militar-calcado-marrom.png', name: 'Camisa creme · calça verde militar · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '110', file: 'gpt/camisa-creme-calca-verde-oliva-calcado-marrom.png', name: 'Camisa creme · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '111', file: 'gpt/camisa-creme-calca-vinho-calcado-marrom.png', name: 'Camisa creme · calça vinho · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '112', file: 'gpt/camisa-lilas-calca-azul-marinho-calcado-marrom.png', name: 'Camisa lilás · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '113', file: 'gpt/camisa-lilas-calca-bege-calcado-preto.png', name: 'Camisa lilás · calça bege · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '114', file: 'gpt/camisa-lilas-calca-cinza-claro-calcado-preto.png', name: 'Camisa lilás · calça cinza claro · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '115', file: 'gpt/camisa-lilas-calca-cinza-pedra-calcado-preto.png', name: 'Camisa lilás · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '116', file: 'gpt/camisa-lilas-calca-creme-calcado-marrom.png', name: 'Camisa lilás · calça creme · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '117', file: 'gpt/camisa-lilas-calca-marrom-calcado-marrom.png', name: 'Camisa lilás · calça marrom · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '118', file: 'gpt/camisa-lilas-calca-preta-calcado-preto.png', name: 'Camisa lilás · calça preta · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '119', file: 'gpt/camisa-lilas-calca-verde-militar-calcado-marrom.png', name: 'Camisa lilás · calça verde militar · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '120', file: 'gpt/camisa-lilas-calca-verde-oliva-calcado-marrom.png', name: 'Camisa lilás · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '121', file: 'gpt/camisa-lilas-calca-vinho-calcado-marrom.png', name: 'Camisa lilás · calça vinho · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '122', file: 'gpt/camisa-preta-calca-azul-marinho-calcado-marrom.png', name: 'Camisa preta · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '123', file: 'gpt/camisa-preta-calca-bege-calcado-preto.png', name: 'Camisa preta · calça bege · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '124', file: 'gpt/camisa-preta-calca-cinza-claro-calcado-preto.png', name: 'Camisa preta · calça cinza claro · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '125', file: 'gpt/camisa-preta-calca-cinza-pedra-calcado-preto.png', name: 'Camisa preta · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '126', file: 'gpt/camisa-preta-calca-creme-calcado-marrom.png', name: 'Camisa preta · calça creme · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '127', file: 'gpt/camisa-preta-calca-marrom-calcado-marrom.png', name: 'Camisa preta · calça marrom · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '128', file: 'gpt/jaqueta-preta-camisa-preta-calca-preta-calcado-preto.png', name: 'Jaqueta preta · camisa preta · calça preta · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '129', file: 'gpt/camisa-preta-calca-verde-militar-calcado-marrom.png', name: 'Camisa preta · calça verde militar · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '130', file: 'gpt/camisa-preta-calca-verde-oliva-calcado-marrom.png', name: 'Camisa preta · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '131', file: 'gpt/camisa-preta-calca-vinho-calcado-marrom.png', name: 'Camisa preta · calça vinho · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '132', file: 'gpt/camisa-rosa-calca-creme-calcado-marrom.png', name: 'Camisa rosa · calça creme · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '133', file: 'gpt/camisa-rosa-calca-marrom-calcado-marrom.png', name: 'Camisa rosa · calça marrom · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '134', file: 'gpt/camisa-rosa-calca-preta-calcado-preto.png', name: 'Camisa rosa · calça preta · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '135', file: 'gpt/camisa-rosa-calca-verde-militar-calcado-marrom.png', name: 'Camisa rosa · calça verde militar · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '136', file: 'gpt/camisa-rosa-calca-verde-oliva-calcado-marrom.png', name: 'Camisa rosa · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '137', file: 'gpt/camisa-rosa-calca-vinho-calcado-marrom.png', name: 'Camisa rosa · calça vinho · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '138', file: 'gpt/camisa-verde-oliva-calca-azul-marinho-calcado-marrom.png', name: 'Camisa verde oliva · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '139', file: 'gpt/camisa-verde-oliva-calca-bege-calcado-preto.png', name: 'Camisa verde oliva · calça bege · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '140', file: 'gpt/camisa-verde-oliva-calca-cinza-claro-calcado-preto.png', name: 'Camisa verde oliva · calça cinza claro · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '141', file: 'gpt/camisa-verde-oliva-calca-cinza-pedra-calcado-preto.png', name: 'Camisa verde oliva · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '142', file: 'gpt/camisa-verde-oliva-calca-creme-calcado-marrom.png', name: 'Camisa verde oliva · calça creme · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '143', file: 'gpt/camisa-verde-oliva-calca-marrom-calcado-marrom.png', name: 'Camisa verde oliva · calça marrom · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '144', file: 'gpt/camisa-verde-oliva-calca-preta-calcado-preto.png', name: 'Camisa verde oliva · calça preta · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '145', file: 'gpt/camisa-verde-oliva-calca-vinho-calcado-marrom.png', name: 'Camisa verde oliva · calça vinho · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '146', file: 'gpt/camisa-vinho-calca-azul-marinho-calcado-marrom.png', name: 'Camisa vinho · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '147', file: 'gpt/camisa-vinho-calca-bege-calcado-preto.png', name: 'Camisa vinho · calça bege · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '148', file: 'gpt/camisa-vinho-calca-cinza-claro-calcado-preto.png', name: 'Camisa vinho · calça cinza claro · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '149', file: 'gpt/camisa-vinho-calca-cinza-pedra-calcado-preto.png', name: 'Camisa vinho · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '150', file: 'gpt/camisa-vinho-calca-creme-calcado-marrom.png', name: 'Camisa vinho · calça creme · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '151', file: 'gpt/camisa-vinho-calca-marrom-calcado-marrom.png', name: 'Camisa vinho · calça marrom · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '152', file: 'gpt/camisa-vinho-calca-preta-calcado-preto.png', name: 'Camisa vinho · calça preta · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '153', file: 'gpt/camisa-vinho-calca-verde-militar-calcado-marrom.png', name: 'Camisa vinho · calça verde militar · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '154', file: 'gpt/camisa-vinho-calca-verde-oliva-calcado-marrom.png', name: 'Camisa vinho · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '155', file: 'gpt/camisa-amarela-calca-preta-calcado-marrom.png', name: 'Camisa amarela · calça preta · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '156', file: 'gpt/camisa-amarela-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa amarela · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '157', file: 'gpt/camisa-amarela-calca-cinza-claro-calcado-marrom.png', name: 'Camisa amarela · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '158', file: 'gpt/camisa-amarela-calca-bege-calcado-marrom.png', name: 'Camisa amarela · calça bege · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '159', file: 'gpt/camisa-amarela-calca-marrom-calcado-marrom.png', name: 'Camisa amarela · calça marrom · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '160', file: 'gpt/camisa-amarela-calca-azul-marinho-calcado-marrom.png', name: 'Camisa amarela · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '161', file: 'gpt/camisa-amarela-calca-verde-oliva-calcado-marrom.png', name: 'Camisa amarela · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '162', file: 'gpt/camisa-amarela-calca-creme-calcado-marrom.png', name: 'Camisa amarela · calça creme · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '163', file: 'gpt/camisa-amarela-calca-verde-militar-calcado-marrom.png', name: 'Camisa amarela · calça verde militar · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '164', file: 'gpt/camisa-amarela-calca-vinho-calcado-marrom.png', name: 'Camisa amarela · calça vinho · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '165', file: 'gpt/camisa-bege-calca-preta-calcado-marrom.png', name: 'Camisa bege · calça preta · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '166', file: 'gpt/camisa-bege-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa bege · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '167', file: 'gpt/camisa-bege-calca-cinza-claro-calcado-marrom.png', name: 'Camisa bege · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '168', file: 'gpt/camisa-bege-calca-bege-calcado-marrom.png', name: 'Camisa bege · calça bege · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '169', file: 'gpt/camisa-bege-calca-marrom-calcado-marrom.png', name: 'Camisa bege · calça marrom · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '170', file: 'gpt/camisa-bege-calca-azul-marinho-calcado-marrom.png', name: 'Camisa bege · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '171', file: 'gpt/camisa-bege-calca-verde-oliva-calcado-marrom.png', name: 'Camisa bege · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '172', file: 'gpt/camisa-bege-calca-creme-calcado-marrom.png', name: 'Camisa bege · calça creme · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '173', file: 'gpt/camisa-bege-calca-verde-militar-calcado-marrom.png', name: 'Camisa bege · calça verde militar · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '174', file: 'gpt/camisa-bege-calca-vinho-calcado-marrom.png', name: 'Camisa bege · calça vinho · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '175', file: 'gpt/camisa-marrom-calca-preta-calcado-marrom.png', name: 'Camisa marrom · calça preta · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '176', file: 'gpt/camisa-marrom-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa marrom · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '177', file: 'gpt/camisa-marrom-calca-cinza-claro-calcado-marrom.png', name: 'Camisa marrom · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '178', file: 'gpt/camisa-marrom-calca-bege-calcado-marrom.png', name: 'Camisa marrom · calça bege · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '179', file: 'gpt/camisa-marrom-calca-marrom-calcado-marrom.png', name: 'Camisa marrom · calça marrom · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '180', file: 'gpt/camisa-marrom-calca-azul-marinho-calcado-marrom.png', name: 'Camisa marrom · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '181', file: 'gpt/camisa-marrom-calca-verde-oliva-calcado-marrom.png', name: 'Camisa marrom · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '182', file: 'gpt/camisa-marrom-calca-creme-calcado-marrom.png', name: 'Camisa marrom · calça creme · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '183', file: 'gpt/camisa-marrom-calca-verde-militar-calcado-marrom.png', name: 'Camisa marrom · calça verde militar · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '184', file: 'gpt/camisa-marrom-calca-vinho-calcado-marrom.png', name: 'Camisa marrom · calça vinho · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '185', file: 'gpt/camisa-rosa-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa rosa · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '186', file: 'gpt/camisa-rosa-calca-cinza-claro-calcado-marrom.png', name: 'Camisa rosa · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '187', file: 'gpt/camisa-rosa-calca-bege-calcado-marrom.png', name: 'Camisa rosa · calça bege · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '188', file: 'gpt/camisa-verde-escuro-calca-preta-calcado-marrom.png', name: 'Camisa verde escuro · calça preta · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '189', file: 'gpt/camisa-verde-escuro-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa verde escuro · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '190', file: 'gpt/camisa-verde-escuro-calca-cinza-claro-calcado-marrom.png', name: 'Camisa verde escuro · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '191', file: 'gpt/camisa-verde-escuro-calca-bege-calcado-marrom.png', name: 'Camisa verde escuro · calça bege · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '192', file: 'gpt/camisa-verde-escuro-calca-marrom-calcado-marrom.png', name: 'Camisa verde escuro · calça marrom · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '193', file: 'gpt/camisa-verde-escuro-calca-azul-marinho-calcado-marrom.png', name: 'Camisa verde escuro · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '194', file: 'gpt/camisa-verde-escuro-calca-verde-oliva-calcado-marrom.png', name: 'Camisa verde escuro · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '195', file: 'gpt/camisa-verde-escuro-calca-creme-calcado-marrom.png', name: 'Camisa verde escuro · calça creme · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '196', file: 'gpt/camisa-verde-escuro-calca-verde-militar-calcado-marrom.png', name: 'Camisa verde escuro · calça verde militar · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '197', file: 'gpt/camisa-verde-escuro-calca-vinho-calcado-marrom.png', name: 'Camisa verde escuro · calça vinho · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '198', file: 'gpt/camisa-vermelha-calca-preta-calcado-marrom.png', name: 'Camisa vermelha · calça preta · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '199', file: 'gpt/camisa-vermelha-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa vermelha · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '200', file: 'gpt/camisa-vermelha-calca-cinza-claro-calcado-marrom.png', name: 'Camisa vermelha · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '201', file: 'gpt/camisa-vermelha-calca-bege-calcado-marrom.png', name: 'Camisa vermelha · calça bege · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '202', file: 'gpt/camisa-vermelha-calca-marrom-calcado-marrom.png', name: 'Camisa vermelha · calça marrom · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '203', file: 'gpt/camisa-vermelha-calca-azul-marinho-calcado-marrom.png', name: 'Camisa vermelha · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '204', file: 'gpt/camisa-vermelha-calca-verde-oliva-calcado-marrom.png', name: 'Camisa vermelha · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '205', file: 'gpt/camisa-vermelha-calca-creme-calcado-marrom.png', name: 'Camisa vermelha · calça creme · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '206', file: 'gpt/camisa-vermelha-calca-verde-militar-calcado-marrom.png', name: 'Camisa vermelha · calça verde militar · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '207', file: 'gpt/camisa-vermelha-calca-vinho-calcado-marrom.png', name: 'Camisa vermelha · calça vinho · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '208', file: 'gpt/camisa-azul-claro-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa azul claro · calça azul marinho · tênis branco', category: 'Look completo', color: 'Azul' },
  { id: '209', file: 'gpt/camisa-azul-claro-calca-bege-calcado-tenis-branco.png', name: 'Camisa azul claro · calça bege · tênis branco', category: 'Look completo', color: 'Azul' },
  { id: '210', file: 'gpt/camisa-azul-claro-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa azul claro · calça cinza claro · tênis branco', category: 'Look completo', color: 'Azul' },
  { id: '211', file: 'gpt/camisa-azul-claro-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa azul claro · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Azul' },
  { id: '212', file: 'gpt/camisa-azul-claro-calca-creme-calcado-tenis-branco.png', name: 'Camisa azul claro · calça creme · tênis branco', category: 'Look completo', color: 'Azul' },
  { id: '213', file: 'gpt/camisa-azul-claro-calca-marrom-calcado-tenis-branco.png', name: 'Camisa azul claro · calça marrom · tênis branco', category: 'Look completo', color: 'Azul' },
  { id: '214', file: 'gpt/camisa-azul-claro-calca-preta-calcado-tenis-branco.png', name: 'Camisa azul claro · calça preta · tênis branco', category: 'Look completo', color: 'Azul' },
  { id: '215', file: 'gpt/camisa-azul-claro-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa azul claro · calça verde militar · tênis branco', category: 'Look completo', color: 'Azul' },
  { id: '216', file: 'gpt/camisa-azul-claro-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa azul claro · calça verde oliva · tênis branco', category: 'Look completo', color: 'Azul' },
  { id: '217', file: 'gpt/camisa-azul-claro-calca-vinho-calcado-tenis-branco.png', name: 'Camisa azul claro · calça vinho · tênis branco', category: 'Look completo', color: 'Azul' },
  { id: '218', file: 'gpt/camisa-azul-marinho-calca-bege-calcado-tenis-branco.png', name: 'Camisa azul marinho · calça bege · tênis branco', category: 'Look completo', color: 'Azul marinho' },
  { id: '219', file: 'gpt/camisa-azul-marinho-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa azul marinho · calça cinza claro · tênis branco', category: 'Look completo', color: 'Azul marinho' },
  { id: '220', file: 'gpt/camisa-azul-marinho-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa azul marinho · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Azul marinho' },
  { id: '221', file: 'gpt/camisa-azul-marinho-calca-creme-calcado-tenis-branco.png', name: 'Camisa azul marinho · calça creme · tênis branco', category: 'Look completo', color: 'Azul marinho' },
  { id: '222', file: 'gpt/camisa-azul-marinho-calca-marrom-calcado-tenis-branco.png', name: 'Camisa azul marinho · calça marrom · tênis branco', category: 'Look completo', color: 'Azul marinho' },
  { id: '223', file: 'gpt/camisa-azul-marinho-calca-preta-calcado-tenis-branco.png', name: 'Camisa azul marinho · calça preta · tênis branco', category: 'Look completo', color: 'Azul marinho' },
  { id: '224', file: 'gpt/camisa-azul-marinho-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa azul marinho · calça verde militar · tênis branco', category: 'Look completo', color: 'Azul marinho' },
  { id: '225', file: 'gpt/camisa-azul-marinho-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa azul marinho · calça verde oliva · tênis branco', category: 'Look completo', color: 'Azul marinho' },
  { id: '226', file: 'gpt/camisa-azul-marinho-calca-vinho-calcado-tenis-branco.png', name: 'Camisa azul marinho · calça vinho · tênis branco', category: 'Look completo', color: 'Azul marinho' },
  { id: '227', file: 'gpt/camisa-branca-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa branca · calça azul marinho · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '228', file: 'gpt/camisa-branca-calca-bege-calcado-tenis-branco.png', name: 'Camisa branca · calça bege · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '229', file: 'gpt/camisa-branca-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa branca · calça cinza claro · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '230', file: 'gpt/camisa-branca-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa branca · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '231', file: 'gpt/camisa-branca-calca-creme-calcado-tenis-branco.png', name: 'Camisa branca · calça creme · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '232', file: 'gpt/camisa-branca-calca-marrom-calcado-tenis-branco.png', name: 'Camisa branca · calça marrom · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '233', file: 'gpt/camisa-branca-calca-preta-calcado-tenis-branco.png', name: 'Camisa branca · calça preta · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '234', file: 'gpt/camisa-branca-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa branca · calça verde militar · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '235', file: 'gpt/camisa-branca-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa branca · calça verde oliva · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '236', file: 'gpt/camisa-cinza-claro-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa cinza claro · calça azul marinho · tênis branco', category: 'Look completo', color: 'Cinza claro' },
  { id: '237', file: 'gpt/camisa-cinza-claro-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa cinza claro · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Cinza claro' },
  { id: '238', file: 'gpt/camisa-cinza-escuro-calca-creme-calcado-tenis-branco.png', name: 'Camisa cinza pedra · calça creme · tênis branco', category: 'Look completo', color: 'Cinza pedra' },
  { id: '239', file: 'gpt/camisa-cinza-claro-calca-preta-calcado-tenis-branco.png', name: 'Camisa cinza claro · calça preta · tênis branco', category: 'Look completo', color: 'Cinza claro' },
  { id: '240', file: 'gpt/camisa-cinza-escuro-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa cinza pedra · calça verde militar · tênis branco', category: 'Look completo', color: 'Cinza pedra' },
  { id: '241', file: 'gpt/camisa-cinza-escuro-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa cinza pedra · calça verde oliva · tênis branco', category: 'Look completo', color: 'Cinza pedra' },
  { id: '242', file: 'gpt/camisa-creme-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa creme · calça azul marinho · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '243', file: 'gpt/camisa-creme-calca-bege-calcado-tenis-branco.png', name: 'Camisa creme · calça bege · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '244', file: 'gpt/camisa-creme-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa creme · calça cinza claro · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '245', file: 'gpt/camisa-creme-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa creme · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '246', file: 'gpt/camisa-creme-calca-marrom-calcado-tenis-branco.png', name: 'Camisa creme · calça marrom · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '247', file: 'gpt/camisa-creme-calca-preta-calcado-tenis-branco.png', name: 'Camisa creme · calça preta · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '248', file: 'gpt/camisa-creme-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa creme · calça verde militar · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '249', file: 'gpt/camisa-creme-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa creme · calça verde oliva · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '250', file: 'gpt/camisa-creme-calca-vinho-calcado-tenis-branco.png', name: 'Camisa creme · calça vinho · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '251', file: 'gpt/camisa-lilas-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa lilás claro · calça azul marinho · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '252', file: 'gpt/camisa-lilas-calca-bege-calcado-tenis-branco.png', name: 'Camisa lilás claro · calça bege · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '253', file: 'gpt/camisa-lilas-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa lilás claro · calça cinza claro · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '254', file: 'gpt/camisa-lilas-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa lilás claro · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '255', file: 'gpt/camisa-lilas-calca-creme-calcado-tenis-branco.png', name: 'Camisa lilás claro · calça creme · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '256', file: 'gpt/camisa-lilas-calca-marrom-calcado-tenis-branco.png', name: 'Camisa lilás claro · calça marrom · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '257', file: 'gpt/camisa-lilas-calca-preta-calcado-tenis-branco.png', name: 'Camisa lilás claro · calça preta · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '258', file: 'gpt/camisa-lilas-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa lilás claro · calça verde militar · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '259', file: 'gpt/camisa-lilas-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa lilás claro · calça verde oliva · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '260', file: 'gpt/camisa-lilas-calca-vinho-calcado-tenis-branco.png', name: 'Camisa lilás claro · calça vinho · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '261', file: 'gpt/camisa-preta-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa preta · calça azul marinho · tênis branco', category: 'Look completo', color: 'Preto' },
  { id: '262', file: 'gpt/camisa-preta-calca-bege-calcado-tenis-branco.png', name: 'Camisa preta · calça bege · tênis branco', category: 'Look completo', color: 'Preto' },
  { id: '263', file: 'gpt/camisa-preta-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa preta · calça cinza claro · tênis branco', category: 'Look completo', color: 'Preto' },
  { id: '264', file: 'gpt/camisa-preta-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa preta · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Preto' },
  { id: '265', file: 'gpt/camisa-preta-calca-creme-calcado-tenis-branco.png', name: 'Camisa preta · calça creme · tênis branco', category: 'Look completo', color: 'Preto' },
  { id: '266', file: 'gpt/camisa-preta-calca-marrom-calcado-tenis-branco.png', name: 'Camisa preta · calça marrom · tênis branco', category: 'Look completo', color: 'Preto' },
  { id: '267', file: 'gpt/camisa-preta-calca-preta-calcado-tenis-branco.png', name: 'Camisa preta · calça preta · tênis branco', category: 'Look completo', color: 'Preto' },
  { id: '268', file: 'gpt/camisa-preta-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa preta · calça verde militar · tênis branco', category: 'Look completo', color: 'Preto' },
  { id: '269', file: 'gpt/camisa-preta-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa preta · calça verde oliva · tênis branco', category: 'Look completo', color: 'Preto' },
  { id: '270', file: 'gpt/camisa-preta-calca-vinho-calcado-tenis-branco.png', name: 'Camisa preta · calça vinho · tênis branco', category: 'Look completo', color: 'Preto' },
  { id: '271', file: 'gpt/camisa-rosa-calca-creme-calcado-tenis-branco.png', name: 'Camisa rosa claro · calça creme · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '272', file: 'gpt/camisa-rosa-calca-marrom-calcado-tenis-branco.png', name: 'Camisa rosa claro · calça marrom · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '273', file: 'gpt/camisa-rosa-calca-preta-calcado-tenis-branco.png', name: 'Camisa rosa claro · calça preta · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '274', file: 'gpt/camisa-rosa-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa rosa claro · calça verde militar · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '275', file: 'gpt/camisa-rosa-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa rosa claro · calça verde oliva · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '276', file: 'gpt/camisa-rosa-calca-vinho-calcado-tenis-branco.png', name: 'Camisa rosa claro · calça vinho · tênis branco', category: 'Look completo', color: 'Outro' },
  { id: '277', file: 'gpt/camisa-verde-oliva-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa verde oliva · calça azul marinho · tênis branco', category: 'Look completo', color: 'Verde' },
  { id: '278', file: 'gpt/camisa-verde-oliva-calca-bege-calcado-tenis-branco.png', name: 'Camisa verde oliva · calça bege · tênis branco', category: 'Look completo', color: 'Verde' },
  { id: '279', file: 'gpt/camisa-verde-oliva-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa verde oliva · calça cinza claro · tênis branco', category: 'Look completo', color: 'Verde' },
  { id: '280', file: 'gpt/camisa-verde-oliva-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa verde oliva · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Verde' },
  { id: '281', file: 'gpt/camisa-verde-oliva-calca-creme-calcado-tenis-branco.png', name: 'Camisa verde oliva · calça creme · tênis branco', category: 'Look completo', color: 'Verde' },
  { id: '282', file: 'gpt/camisa-verde-oliva-calca-marrom-calcado-tenis-branco.png', name: 'Camisa verde oliva · calça marrom · tênis branco', category: 'Look completo', color: 'Verde' },
  { id: '283', file: 'gpt/camisa-verde-oliva-calca-preta-calcado-tenis-branco.png', name: 'Camisa verde oliva · calça preta · tênis branco', category: 'Look completo', color: 'Verde' },
  { id: '284', file: 'gpt/camisa-verde-oliva-calca-vinho-calcado-tenis-branco.png', name: 'Camisa verde oliva · calça vinho · tênis branco', category: 'Look completo', color: 'Verde' },
  { id: '285', file: 'gpt/camisa-vinho-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa vinho · calça azul marinho · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '286', file: 'gpt/camisa-vinho-calca-bege-calcado-tenis-branco.png', name: 'Camisa vinho · calça bege · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '287', file: 'gpt/camisa-vinho-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa vinho · calça cinza claro · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '288', file: 'gpt/camisa-vinho-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa vinho · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '289', file: 'gpt/camisa-vinho-calca-creme-calcado-tenis-branco.png', name: 'Camisa vinho · calça creme · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '290', file: 'gpt/camisa-vinho-calca-marrom-calcado-tenis-branco.png', name: 'Camisa vinho · calça marrom · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '291', file: 'gpt/camisa-vinho-calca-preta-calcado-tenis-branco.png', name: 'Camisa vinho · calça preta · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '292', file: 'gpt/camisa-vinho-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa vinho · calça verde militar · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '293', file: 'gpt/camisa-vinho-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa vinho · calça verde oliva · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '294', file: 'gpt/camisa-azul-claro-calca-cinza-claro-calcado-marrom.png', name: 'Camisa azul claro · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '295', file: 'gpt/camisa-azul-claro-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa azul claro · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '296', file: 'gpt/camisa-branca-calca-bege-calcado-marrom.png', name: 'Camisa branca · calça bege · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '297', file: 'gpt/camisa-branca-calca-cinza-claro-calcado-marrom.png', name: 'Camisa branca · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '298', file: 'gpt/camisa-branca-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa branca · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '299', file: 'gpt/camisa-preta-calca-bege-calcado-marrom.png', name: 'Camisa preta · calça bege · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '301', file: 'gpt/camisa-rosa-calca-cinza-claro-calcado-preto.png', name: 'Camisa rosa · calça cinza claro · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '303', file: 'gpt/camisa-rosa-calca-cinza-pedra-calcado-preto.png', name: 'Camisa rosa · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '304', file: 'gpt/camisa-verde-claro-calca-bege-calcado-marrom.png', name: 'Camisa verde claro · calça bege · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '307', file: 'gpt/camisa-verde-oliva-calca-bege-calcado-marrom.png', name: 'Camisa verde oliva · calça bege · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '308', file: 'gpt/camisa-vinho-calca-bege-calcado-marrom.png', name: 'Camisa vinho · calça bege · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '309', file: 'gpt/camisa-vinho-calca-cinza-claro-calcado-marrom.png', name: 'Camisa vinho · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '310', file: 'gpt/camisa-vinho-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa vinho · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '311', file: 'gpt/camisa-vinho-calca-creme-calcado-preto.png', name: 'Camisa vinho · calça creme · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '312', file: 'gpt/camisa-vinho-calca-branca-calcado-preto.png', name: 'Camisa vinho · calça branca · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '313', file: 'gpt/camisa-vinho-calca-branca-calcado-tenis-branco.png', name: 'Camisa vinho · calça branca · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '314', file: 'gpt/camisa-verde-calca-branca-calcado-marrom.png', name: 'Camisa verde · calça branca · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '317', file: 'gpt/camisa-amarela-calca-preta-calcado-bege.png', name: 'Camisa amarela · calça preta · calçado bege', category: 'Look completo', color: 'Outro' },
  { id: '318', file: 'gpt/blazer-azul-marinho-camisa-azul-claro-calca-bege-calcado-marrom.png', name: 'Blazer azul marinho · camisa azul claro · calça bege · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '319', file: 'gpt/camisa-azul-marinho-calca-bege-calcado-azul-marinho.png', name: 'Camisa azul marinho · calça bege · calçado azul marinho', category: 'Look completo', color: 'Azul marinho' },
  { id: '320', file: 'gpt/camisa-azul-marinho-calca-preta-calcado-azul-marinho.png', name: 'Camisa azul marinho · calça preta · calçado azul marinho', category: 'Look completo', color: 'Azul marinho' },
  { id: '321', file: 'gpt/camisa-azul-petroleo-calca-branca-calcado-marrom.png', name: 'Camisa azul petróleo · calça branca · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '322', file: 'gpt/camisa-cores-calca-cores-calcado-cores.png', name: 'Camisa cores · calça cores · calçado cores', category: 'Outro', color: 'Outro' },
  { id: '323', file: 'gpt/camisa-ferrugem-calca-cinza-calcado-branco.png', name: 'Camisa ferrugem · calça cinza · calçado branco', category: 'Look completo', color: 'Bordô' },
  { id: '324', file: 'gpt/camisa-ferrugem-calca-verde-oliva-calcado-bege.png', name: 'Camisa ferrugem · calça verde oliva · calçado bege', category: 'Look completo', color: 'Bordô' },
  { id: '325', file: 'gpt/camisa-laranja-queimado-calca-marrom-calcado-branco.png', name: 'Camisa laranja queimado · calça marrom · calçado branco', category: 'Look completo', color: 'Bordô' },
  { id: '326', file: 'gpt/camisa-lilas-calca-cinza-calcado-caramelo.png', name: 'Camisa lilás · calça cinza · calçado caramelo', category: 'Look completo', color: 'Outro' },
  { id: '327', file: 'gpt/camisa-marrom-calca-bege-calcado-marrom.png', name: 'Camisa marrom · calça bege · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '328', file: 'gpt/camisa-preta-calca-cinza-calcado-preto.png', name: 'Camisa preta · calça cinza · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '329', file: 'gpt/camisa-rosa-calca-azul-marinho-calcado-preto.png', name: 'Camisa rosa · calça azul marinho · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '330', file: 'gpt/camisa-rosa-calca-bege-calcado-preto.png', name: 'Camisa rosa · calça bege · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '331', file: 'gpt/camisa-rosa-calca-cinza-calcado-caramelo.png', name: 'Camisa rosa · calça cinza · calçado caramelo', category: 'Look completo', color: 'Outro' },
  { id: '332', file: 'gpt/camisa-verde-calca-bege-calcado-branco.png', name: 'Camisa verde · calça bege · calçado branco', category: 'Look completo', color: 'Verde' },
  { id: '333', file: 'gpt/camisa-verde-calca-creme-calcado-caramelo.png', name: 'Camisa verde · calça creme · calçado caramelo', category: 'Look completo', color: 'Verde' },
  { id: '343', file: 'gpt/camisa-branca-calca-bege-calcado-caramelo.png', name: 'Camisa branca · calça bege · calçado caramelo', category: 'Look completo', color: 'Branco' },
  { id: '344', file: 'gpt/camisa-amarela-calca-azul-marinho-calcado-preto.png', name: 'Camisa amarela · calça azul marinho · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '345', file: 'gpt/camisa-amarela-calca-bege-calcado-preto.png', name: 'Camisa amarela · calça bege · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '346', file: 'gpt/camisa-amarela-calca-cinza-claro-calcado-preto.png', name: 'Camisa amarela · calça cinza claro · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '347', file: 'gpt/camisa-amarela-calca-cinza-pedra-calcado-preto.png', name: 'Camisa amarela · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '348', file: 'gpt/camisa-amarela-calca-creme-calcado-preto.png', name: 'Camisa amarela · calça creme · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '349', file: 'gpt/camisa-amarela-calca-marrom-calcado-preto.png', name: 'Camisa amarela · calça marrom · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '350', file: 'gpt/camisa-amarela-calca-preta-calcado-preto.png', name: 'Camisa amarela · calça preta · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '351', file: 'gpt/camisa-amarela-calca-verde-militar-calcado-preto.png', name: 'Camisa amarela · calça verde militar · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '352', file: 'gpt/camisa-amarela-calca-verde-oliva-calcado-preto.png', name: 'Camisa amarela · calça verde oliva · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '353', file: 'gpt/camisa-amarela-calca-vinho-calcado-preto.png', name: 'Camisa amarela · calça vinho · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '354', file: 'gpt/camisa-azul-claro-calca-azul-marinho-calcado-preto.png', name: 'Camisa azul claro · calça azul marinho · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '355', file: 'gpt/camisa-azul-claro-calca-creme-calcado-preto.png', name: 'Camisa azul claro · calça creme · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '356', file: 'gpt/camisa-azul-claro-calca-marrom-calcado-preto.png', name: 'Camisa azul claro · calça marrom · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '357', file: 'gpt/camisa-azul-claro-calca-preta-calcado-marrom.png', name: 'Camisa azul claro · calça preta · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '358', file: 'gpt/camisa-azul-claro-calca-verde-militar-calcado-preto.png', name: 'Camisa azul claro · calça verde militar · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '359', file: 'gpt/camisa-azul-claro-calca-verde-oliva-calcado-preto.png', name: 'Camisa azul claro · calça verde oliva · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '360', file: 'gpt/camisa-azul-claro-calca-vinho-calcado-preto.png', name: 'Camisa azul claro · calça vinho · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '361', file: 'gpt/camisa-azul-marinho-calca-bege-calcado-marrom.png', name: 'Camisa azul marinho · calça bege · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '362', file: 'gpt/camisa-azul-marinho-calca-cinza-claro-calcado-marrom.png', name: 'Camisa azul marinho · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '363', file: 'gpt/camisa-azul-marinho-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa azul marinho · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '364', file: 'gpt/camisa-azul-marinho-calca-creme-calcado-preto.png', name: 'Camisa azul marinho · calça creme · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '365', file: 'gpt/camisa-azul-marinho-calca-marrom-calcado-preto.png', name: 'Camisa azul marinho · calça marrom · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '366', file: 'gpt/camisa-azul-marinho-calca-preta-calcado-marrom.png', name: 'Camisa azul marinho · calça preta · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '367', file: 'gpt/camisa-azul-marinho-calca-verde-militar-calcado-preto.png', name: 'Camisa azul marinho · calça verde militar · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '368', file: 'gpt/camisa-azul-marinho-calca-verde-oliva-calcado-preto.png', name: 'Camisa azul marinho · calça verde oliva · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '369', file: 'gpt/camisa-azul-marinho-calca-vinho-calcado-preto.png', name: 'Camisa azul marinho · calça vinho · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '370', file: 'gpt/camisa-azul-petroleo-calca-branca-calcado-preto.png', name: 'Camisa azul petróleo · calça branca · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '371', file: 'gpt/camisa-bege-calca-azul-marinho-calcado-preto.png', name: 'Camisa bege · calça azul marinho · calçado preto', category: 'Look completo', color: 'Bege' },
  { id: '372', file: 'gpt/camisa-bege-calca-bege-calcado-preto.png', name: 'Camisa bege · calça bege · calçado preto', category: 'Look completo', color: 'Bege' },
  { id: '373', file: 'gpt/camisa-bege-calca-cinza-claro-calcado-preto.png', name: 'Camisa bege · calça cinza claro · calçado preto', category: 'Look completo', color: 'Bege' },
  { id: '374', file: 'gpt/camisa-bege-calca-cinza-pedra-calcado-preto.png', name: 'Camisa bege · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Bege' },
  { id: '375', file: 'gpt/camisa-bege-calca-creme-calcado-preto.png', name: 'Camisa bege · calça creme · calçado preto', category: 'Look completo', color: 'Bege' },
  { id: '376', file: 'gpt/camisa-bege-calca-marrom-calcado-preto.png', name: 'Camisa bege · calça marrom · calçado preto', category: 'Look completo', color: 'Bege' },
  { id: '377', file: 'gpt/camisa-bege-calca-preta-calcado-preto.png', name: 'Camisa bege · calça preta · calçado preto', category: 'Look completo', color: 'Bege' },
  { id: '378', file: 'gpt/camisa-bege-calca-verde-militar-calcado-preto.png', name: 'Camisa bege · calça verde militar · calçado preto', category: 'Look completo', color: 'Bege' },
  { id: '379', file: 'gpt/camisa-bege-calca-verde-oliva-calcado-preto.png', name: 'Camisa bege · calça verde oliva · calçado preto', category: 'Look completo', color: 'Bege' },
  { id: '380', file: 'gpt/camisa-bege-calca-vinho-calcado-preto.png', name: 'Camisa bege · calça vinho · calçado preto', category: 'Look completo', color: 'Bege' },
  { id: '381', file: 'gpt/camisa-branca-calca-azul-marinho-calcado-preto.png', name: 'Camisa branca · calça azul marinho · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '382', file: 'gpt/camisa-branca-calca-creme-calcado-preto.png', name: 'Camisa branca · calça creme · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '383', file: 'gpt/camisa-branca-calca-marrom-calcado-preto.png', name: 'Camisa branca · calça marrom · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '384', file: 'gpt/camisa-branca-calca-preta-calcado-marrom.png', name: 'Camisa branca · calça preta · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '385', file: 'gpt/camisa-branca-calca-verde-militar-calcado-preto.png', name: 'Camisa branca · calça verde militar · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '386', file: 'gpt/camisa-branca-calca-verde-oliva-calcado-preto.png', name: 'Camisa branca · calça verde oliva · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '387', file: 'gpt/camisa-branco-calca-vinho-calcado-preto.png', name: 'Camisa branco · calça vinho · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '388', file: 'gpt/camisa-cinza-claro-calca-azul-marinho-calcado-preto.png', name: 'Camisa cinza claro · calça azul marinho · calçado preto', category: 'Look completo', color: 'Cinza claro' },
  { id: '389', file: 'gpt/camisa-cinza-claro-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa cinza claro · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Cinza claro' },
  { id: '390', file: 'gpt/camisa-cinza-escuro-calca-creme-calcado-preto.png', name: 'Camisa cinza pedra · calça creme · calçado preto', category: 'Look completo', color: 'Cinza pedra' },
  { id: '391', file: 'gpt/camisa-cinza-claro-calca-preta-calcado-marrom.png', name: 'Camisa cinza claro · calça preta · calçado marrom', category: 'Look completo', color: 'Cinza claro' },
  { id: '392', file: 'gpt/camisa-cinza-escuro-calca-verde-militar-calcado-preto.png', name: 'Camisa cinza pedra · calça verde militar · calçado preto', category: 'Look completo', color: 'Cinza pedra' },
  { id: '393', file: 'gpt/camisa-cinza-escuro-calca-verde-oliva-calcado-preto.png', name: 'Camisa cinza pedra · calça verde oliva · calçado preto', category: 'Look completo', color: 'Cinza pedra' },
  { id: '394', file: 'gpt/camisa-cinza-escuro-calca-vinho-calcado-preto.png', name: 'Camisa cinza pedra · calça vinho · calçado preto', category: 'Look completo', color: 'Cinza pedra' },
  { id: '395', file: 'gpt/camisa-cores-calca-cores-calcado-marrom.png', name: 'Camisa cores · calça cores · calçado marrom', category: 'Outro', color: 'Outro' },
  { id: '396', file: 'gpt/camisa-cores-calca-cores-calcado-preto.png', name: 'Camisa cores · calça cores · calçado preto', category: 'Outro', color: 'Outro' },
  { id: '397', file: 'gpt/camisa-creme-calca-azul-marinho-calcado-preto.png', name: 'Camisa creme · calça azul marinho · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '398', file: 'gpt/camisa-creme-calca-bege-calcado-marrom.png', name: 'Camisa creme · calça bege · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '399', file: 'gpt/camisa-creme-calca-cinza-claro-calcado-marrom.png', name: 'Camisa creme · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '400', file: 'gpt/camisa-creme-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa creme · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '401', file: 'gpt/camisa-creme-calca-marrom-calcado-preto.png', name: 'Camisa creme · calça marrom · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '402', file: 'gpt/camisa-creme-calca-preta-calcado-marrom.png', name: 'Camisa creme · calça preta · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '403', file: 'gpt/camisa-creme-calca-verde-militar-calcado-preto.png', name: 'Camisa creme · calça verde militar · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '404', file: 'gpt/camisa-creme-calca-verde-oliva-calcado-preto.png', name: 'Camisa creme · calça verde oliva · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '405', file: 'gpt/camisa-creme-calca-vinho-calcado-preto.png', name: 'Camisa creme · calça vinho · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '406', file: 'gpt/camisa-ferrugem-calca-cinza-calcado-marrom.png', name: 'Camisa ferrugem · calça cinza · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '407', file: 'gpt/camisa-ferrugem-calca-cinza-calcado-preto.png', name: 'Camisa ferrugem · calça cinza · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '408', file: 'gpt/camisa-ferrugem-calca-verde-oliva-calcado-marrom.png', name: 'Camisa ferrugem · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '409', file: 'gpt/camisa-ferrugem-calca-verde-oliva-calcado-preto.png', name: 'Camisa ferrugem · calça verde oliva · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '410', file: 'gpt/camisa-laranja-queimado-calca-marrom-calcado-marrom.png', name: 'Camisa laranja queimado · calça marrom · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '411', file: 'gpt/camisa-laranja-queimado-calca-marrom-calcado-preto.png', name: 'Camisa laranja queimado · calça marrom · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '412', file: 'gpt/camisa-lilas-calca-azul-marinho-calcado-preto.png', name: 'Camisa lilás · calça azul marinho · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '413', file: 'gpt/camisa-lilas-calca-bege-calcado-marrom.png', name: 'Camisa lilás · calça bege · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '414', file: 'gpt/camisa-lilas-calca-cinza-calcado-preto.png', name: 'Camisa lilás · calça cinza · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '415', file: 'gpt/camisa-lilas-calca-cinza-claro-calcado-marrom.png', name: 'Camisa lilás · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '416', file: 'gpt/camisa-lilas-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa lilás · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '417', file: 'gpt/camisa-lilas-calca-creme-calcado-preto.png', name: 'Camisa lilás · calça creme · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '418', file: 'gpt/camisa-lilas-calca-marrom-calcado-preto.png', name: 'Camisa lilás · calça marrom · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '419', file: 'gpt/camisa-lilas-calca-preta-calcado-marrom.png', name: 'Camisa lilás · calça preta · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '420', file: 'gpt/camisa-lilas-calca-verde-militar-calcado-preto.png', name: 'Camisa lilás · calça verde militar · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '421', file: 'gpt/camisa-lilas-calca-verde-oliva-calcado-preto.png', name: 'Camisa lilás · calça verde oliva · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '422', file: 'gpt/camisa-lilas-calca-vinho-calcado-preto.png', name: 'Camisa lilás · calça vinho · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '423', file: 'gpt/camisa-marrom-calca-azul-marinho-calcado-preto.png', name: 'Camisa marrom · calça azul marinho · calçado preto', category: 'Look completo', color: 'Marrom' },
  { id: '424', file: 'gpt/camisa-marrom-calca-bege-calcado-preto.png', name: 'Camisa marrom · calça bege · calçado preto', category: 'Look completo', color: 'Marrom' },
  { id: '425', file: 'gpt/camisa-marrom-calca-cinza-claro-calcado-preto.png', name: 'Camisa marrom · calça cinza claro · calçado preto', category: 'Look completo', color: 'Marrom' },
  { id: '426', file: 'gpt/camisa-marrom-calca-cinza-pedra-calcado-preto.png', name: 'Camisa marrom · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Marrom' },
  { id: '427', file: 'gpt/camisa-marrom-calca-creme-calcado-preto.png', name: 'Camisa marrom · calça creme · calçado preto', category: 'Look completo', color: 'Marrom' },
  { id: '428', file: 'gpt/camisa-marrom-calca-marrom-calcado-preto.png', name: 'Camisa marrom · calça marrom · calçado preto', category: 'Look completo', color: 'Marrom' },
  { id: '429', file: 'gpt/camisa-marrom-calca-preta-calcado-preto.png', name: 'Camisa marrom · calça preta · calçado preto', category: 'Look completo', color: 'Marrom' },
  { id: '430', file: 'gpt/camisa-marrom-calca-verde-militar-calcado-preto.png', name: 'Camisa marrom · calça verde militar · calçado preto', category: 'Look completo', color: 'Marrom' },
  { id: '431', file: 'gpt/camisa-marrom-calca-verde-oliva-calcado-preto.png', name: 'Camisa marrom · calça verde oliva · calçado preto', category: 'Look completo', color: 'Marrom' },
  { id: '432', file: 'gpt/camisa-marrom-calca-vinho-calcado-preto.png', name: 'Camisa marrom · calça vinho · calçado preto', category: 'Look completo', color: 'Marrom' },
  { id: '433', file: 'gpt/camisa-preta-calca-azul-marinho-calcado-preto.png', name: 'Camisa preta · calça azul marinho · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '434', file: 'gpt/camisa-preta-calca-cinza-calcado-marrom.png', name: 'Camisa preta · calça cinza · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '435', file: 'gpt/camisa-preta-calca-cinza-claro-calcado-marrom.png', name: 'Camisa preta · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '436', file: 'gpt/camisa-preta-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa preta · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '437', file: 'gpt/camisa-preta-calca-creme-calcado-preto.png', name: 'Camisa preta · calça creme · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '438', file: 'gpt/camisa-preta-calca-marrom-calcado-preto.png', name: 'Camisa preta · calça marrom · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '439', file: 'gpt/camisa-preta-calca-preta-calcado-marrom.png', name: 'Camisa preta · calça preta · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '440', file: 'gpt/camisa-preta-calca-verde-militar-calcado-preto.png', name: 'Camisa preta · calça verde militar · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '441', file: 'gpt/camisa-preta-calca-verde-oliva-calcado-preto.png', name: 'Camisa preta · calça verde oliva · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '442', file: 'gpt/camisa-preta-calca-vinho-calcado-preto.png', name: 'Camisa preta · calça vinho · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '443', file: 'gpt/camisa-rosa-calca-azul-marinho-calcado-marrom.png', name: 'Camisa rosa · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '444', file: 'gpt/camisa-rosa-calca-cinza-calcado-preto.png', name: 'Camisa rosa · calça cinza · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '445', file: 'gpt/camisa-rosa-calca-creme-calcado-preto.png', name: 'Camisa rosa · calça creme · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '446', file: 'gpt/camisa-rosa-calca-marrom-calcado-preto.png', name: 'Camisa rosa · calça marrom · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '447', file: 'gpt/camisa-rosa-calca-preta-calcado-marrom.png', name: 'Camisa rosa · calça preta · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '448', file: 'gpt/camisa-rosa-calca-verde-militar-calcado-preto.png', name: 'Camisa rosa · calça verde militar · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '449', file: 'gpt/camisa-rosa-calca-verde-oliva-calcado-preto.png', name: 'Camisa rosa · calça verde oliva · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '450', file: 'gpt/camisa-rosa-calca-vinho-calcado-preto.png', name: 'Camisa rosa · calça vinho · calçado preto', category: 'Look completo', color: 'Outro' },
  { id: '451', file: 'gpt/camisa-verde-calca-bege-calcado-preto.png', name: 'Camisa verde · calça bege · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '452', file: 'gpt/camisa-verde-calca-branca-calcado-preto.png', name: 'Camisa verde · calça branca · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '453', file: 'gpt/camisa-verde-calca-creme-calcado-marrom.png', name: 'Camisa verde · calça creme · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '454', file: 'gpt/camisa-verde-calca-creme-calcado-preto.png', name: 'Camisa verde · calça creme · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '455', file: 'gpt/camisa-verde-claro-calca-bege-calcado-preto.png', name: 'Camisa verde claro · calça bege · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '456', file: 'gpt/camisa-verde-escuro-calca-azul-marinho-calcado-preto.png', name: 'Camisa verde escuro · calça azul marinho · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '457', file: 'gpt/camisa-verde-escuro-calca-bege-calcado-preto.png', name: 'Camisa verde escuro · calça bege · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '458', file: 'gpt/camisa-verde-escuro-calca-cinza-claro-calcado-preto.png', name: 'Camisa verde escuro · calça cinza claro · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '459', file: 'gpt/camisa-verde-escuro-calca-cinza-pedra-calcado-preto.png', name: 'Camisa verde escuro · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '460', file: 'gpt/camisa-verde-escuro-calca-creme-calcado-preto.png', name: 'Camisa verde escuro · calça creme · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '461', file: 'gpt/camisa-verde-escuro-calca-marrom-calcado-preto.png', name: 'Camisa verde escuro · calça marrom · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '462', file: 'gpt/camisa-verde-escuro-calca-preta-calcado-preto.png', name: 'Camisa verde escuro · calça preta · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '463', file: 'gpt/camisa-verde-escuro-calca-verde-militar-calcado-preto.png', name: 'Camisa verde escuro · calça verde militar · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '464', file: 'gpt/camisa-verde-escuro-calca-verde-oliva-calcado-preto.png', name: 'Camisa verde escuro · calça verde oliva · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '465', file: 'gpt/camisa-verde-escuro-calca-vinho-calcado-preto.png', name: 'Camisa verde escuro · calça vinho · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '466', file: 'gpt/camisa-verde-oliva-calca-azul-marinho-calcado-preto.png', name: 'Camisa verde oliva · calça azul marinho · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '467', file: 'gpt/camisa-verde-oliva-calca-cinza-claro-calcado-marrom.png', name: 'Camisa verde oliva · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '468', file: 'gpt/camisa-verde-oliva-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa verde oliva · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '469', file: 'gpt/camisa-verde-oliva-calca-creme-calcado-preto.png', name: 'Camisa verde oliva · calça creme · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '470', file: 'gpt/camisa-verde-oliva-calca-marrom-calcado-preto.png', name: 'Camisa verde oliva · calça marrom · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '471', file: 'gpt/camisa-verde-oliva-calca-preta-calcado-marrom.png', name: 'Camisa verde oliva · calça preta · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '472', file: 'gpt/camisa-verde-oliva-calca-vinho-calcado-preto.png', name: 'Camisa verde oliva · calça vinho · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '473', file: 'gpt/camisa-vermelha-calca-azul-marinho-calcado-preto.png', name: 'Camisa vermelha · calça azul marinho · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '474', file: 'gpt/camisa-vermelha-calca-bege-calcado-preto.png', name: 'Camisa vermelha · calça bege · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '475', file: 'gpt/camisa-vermelha-calca-cinza-claro-calcado-preto.png', name: 'Camisa vermelha · calça cinza claro · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '476', file: 'gpt/camisa-vermelha-calca-cinza-pedra-calcado-preto.png', name: 'Camisa vermelha · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '477', file: 'gpt/camisa-vermelha-calca-creme-calcado-preto.png', name: 'Camisa vermelha · calça creme · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '478', file: 'gpt/camisa-vermelha-calca-marrom-calcado-preto.png', name: 'Camisa vermelha · calça marrom · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '479', file: 'gpt/camisa-vermelha-calca-preta-calcado-preto.png', name: 'Camisa vermelha · calça preta · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '480', file: 'gpt/camisa-vermelha-calca-verde-militar-calcado-preto.png', name: 'Camisa vermelha · calça verde militar · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '481', file: 'gpt/camisa-vermelha-calca-verde-oliva-calcado-preto.png', name: 'Camisa vermelha · calça verde oliva · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '482', file: 'gpt/camisa-vermelha-calca-vinho-calcado-preto.png', name: 'Camisa vermelha · calça vinho · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '483', file: 'gpt/camisa-vinho-calca-azul-marinho-calcado-preto.png', name: 'Camisa vinho · calça azul marinho · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '484', file: 'gpt/camisa-vinho-calca-branca-calcado-marrom.png', name: 'Camisa vinho · calça branca · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '485', file: 'gpt/camisa-vinho-calca-marrom-calcado-preto.png', name: 'Camisa vinho · calça marrom · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '486', file: 'gpt/camisa-vinho-calca-preta-calcado-marrom.png', name: 'Camisa vinho · calça preta · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '487', file: 'gpt/camisa-vinho-calca-verde-militar-calcado-preto.png', name: 'Camisa vinho · calça verde militar · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '488', file: 'gpt/camisa-vinho-calca-verde-oliva-calcado-preto.png', name: 'Camisa vinho · calça verde oliva · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '489', file: 'gpt/camisa-ferrugem-calca-azul-marinho-calcado-marrom.png', name: 'Camisa ferrugem · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '490', file: 'gpt/camisa-ferrugem-calca-azul-marinho-calcado-preto.png', name: 'Camisa ferrugem · calça azul marinho · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '491', file: 'gpt/camisa-ferrugem-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça azul marinho · tênis branco', category: 'Look completo', color: 'Bordô' },
  { id: '492', file: 'gpt/camisa-ferrugem-calca-bege-calcado-marrom.png', name: 'Camisa ferrugem · calça bege · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '493', file: 'gpt/camisa-ferrugem-calca-bege-calcado-preto.png', name: 'Camisa ferrugem · calça bege · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '494', file: 'gpt/camisa-ferrugem-calca-bege-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça bege · tênis branco', category: 'Look completo', color: 'Bordô' },
  { id: '495', file: 'gpt/camisa-ferrugem-calca-cinza-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça cinza · tênis branco', category: 'Look completo', color: 'Bordô' },
  { id: '496', file: 'gpt/camisa-ferrugem-calca-cinza-claro-calcado-marrom.png', name: 'Camisa ferrugem · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '497', file: 'gpt/camisa-ferrugem-calca-cinza-claro-calcado-preto.png', name: 'Camisa ferrugem · calça cinza claro · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '498', file: 'gpt/camisa-ferrugem-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça cinza claro · tênis branco', category: 'Look completo', color: 'Bordô' },
  { id: '499', file: 'gpt/camisa-ferrugem-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa ferrugem · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '500', file: 'gpt/camisa-ferrugem-calca-cinza-pedra-calcado-preto.png', name: 'Camisa ferrugem · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '501', file: 'gpt/camisa-ferrugem-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Bordô' },
  { id: '502', file: 'gpt/camisa-ferrugem-calca-creme-calcado-marrom.png', name: 'Camisa ferrugem · calça creme · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '503', file: 'gpt/camisa-ferrugem-calca-creme-calcado-preto.png', name: 'Camisa ferrugem · calça creme · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '504', file: 'gpt/camisa-ferrugem-calca-creme-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça creme · tênis branco', category: 'Look completo', color: 'Bordô' },
  { id: '505', file: 'gpt/camisa-ferrugem-calca-marrom-calcado-marrom.png', name: 'Camisa ferrugem · calça marrom · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '506', file: 'gpt/camisa-ferrugem-calca-marrom-calcado-preto.png', name: 'Camisa ferrugem · calça marrom · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '507', file: 'gpt/camisa-ferrugem-calca-marrom-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça marrom · tênis branco', category: 'Look completo', color: 'Bordô' },
  { id: '508', file: 'gpt/camisa-ferrugem-calca-preta-calcado-marrom.png', name: 'Camisa ferrugem · calça preta · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '509', file: 'gpt/camisa-ferrugem-calca-preta-calcado-preto.png', name: 'Camisa ferrugem · calça preta · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '510', file: 'gpt/camisa-ferrugem-calca-preta-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça preta · tênis branco', category: 'Look completo', color: 'Bordô' },
  { id: '511', file: 'gpt/camisa-ferrugem-calca-verde-militar-calcado-marrom.png', name: 'Camisa ferrugem · calça verde militar · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '512', file: 'gpt/camisa-ferrugem-calca-verde-militar-calcado-preto.png', name: 'Camisa ferrugem · calça verde militar · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '513', file: 'gpt/camisa-ferrugem-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça verde militar · tênis branco', category: 'Look completo', color: 'Bordô' },
  { id: '514', file: 'gpt/camisa-ferrugem-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça verde oliva · tênis branco', category: 'Look completo', color: 'Bordô' },
  { id: '515', file: 'gpt/camisa-ferrugem-calca-vinho-calcado-marrom.png', name: 'Camisa ferrugem · calça vinho · calçado marrom', category: 'Look completo', color: 'Bordô' },
  { id: '516', file: 'gpt/camisa-ferrugem-calca-vinho-calcado-preto.png', name: 'Camisa ferrugem · calça vinho · calçado preto', category: 'Look completo', color: 'Bordô' },
  { id: '517', file: 'gpt/camisa-ferrugem-calca-vinho-calcado-tenis-branco.png', name: 'Camisa ferrugem · calça vinho · tênis branco', category: 'Look completo', color: 'Bordô' },

  { id: '518', file: 'gpt/camisa-amarela-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa amarela · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '519', file: 'gpt/camisa-amarela-calca-bege-calcado-cinza-claro.png', name: 'Camisa amarela · calça bege · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '520', file: 'gpt/camisa-amarela-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa amarela · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '521', file: 'gpt/camisa-amarela-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa amarela · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '522', file: 'gpt/camisa-amarela-calca-creme-calcado-cinza-claro.png', name: 'Camisa amarela · calça creme · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '523', file: 'gpt/camisa-amarela-calca-marrom-calcado-cinza-claro.png', name: 'Camisa amarela · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '524', file: 'gpt/camisa-amarela-calca-preta-calcado-cinza-claro.png', name: 'Camisa amarela · calça preta · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '525', file: 'gpt/camisa-amarela-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa amarela · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '526', file: 'gpt/camisa-amarela-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa amarela · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '527', file: 'gpt/camisa-amarela-calca-vinho-calcado-cinza-claro.png', name: 'Camisa amarela · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '528', file: 'gpt/camisa-azul-claro-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa azul claro · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Azul' },
  { id: '529', file: 'gpt/camisa-azul-claro-calca-bege-calcado-cinza-claro.png', name: 'Camisa azul claro · calça bege · loafer cinza claro', category: 'Look completo', color: 'Azul' },
  { id: '530', file: 'gpt/camisa-azul-claro-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa azul claro · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Azul' },
  { id: '531', file: 'gpt/camisa-azul-claro-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa azul claro · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Azul' },
  { id: '532', file: 'gpt/camisa-azul-claro-calca-creme-calcado-cinza-claro.png', name: 'Camisa azul claro · calça creme · loafer cinza claro', category: 'Look completo', color: 'Azul' },
  { id: '533', file: 'gpt/camisa-azul-claro-calca-marrom-calcado-cinza-claro.png', name: 'Camisa azul claro · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Azul' },
  { id: '534', file: 'gpt/camisa-azul-claro-calca-preta-calcado-cinza-claro.png', name: 'Camisa azul claro · calça preta · loafer cinza claro', category: 'Look completo', color: 'Azul' },
  { id: '535', file: 'gpt/camisa-azul-claro-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa azul claro · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Azul' },
  { id: '536', file: 'gpt/camisa-azul-claro-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa azul claro · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Azul' },
  { id: '537', file: 'gpt/camisa-azul-claro-calca-vinho-calcado-cinza-claro.png', name: 'Camisa azul claro · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Azul' },
  { id: '538', file: 'gpt/camisa-azul-marinho-calca-bege-calcado-cinza-claro.png', name: 'Camisa azul marinho · calça bege · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '539', file: 'gpt/camisa-azul-marinho-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa azul marinho · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '540', file: 'gpt/camisa-azul-marinho-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa azul marinho · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '541', file: 'gpt/camisa-azul-marinho-calca-creme-calcado-cinza-claro.png', name: 'Camisa azul marinho · calça creme · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '542', file: 'gpt/camisa-azul-marinho-calca-marrom-calcado-cinza-claro.png', name: 'Camisa azul marinho · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '543', file: 'gpt/camisa-azul-marinho-calca-preta-calcado-cinza-claro.png', name: 'Camisa azul marinho · calça preta · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '544', file: 'gpt/camisa-azul-marinho-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa azul marinho · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '545', file: 'gpt/camisa-azul-marinho-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa azul marinho · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '546', file: 'gpt/camisa-azul-marinho-calca-vinho-calcado-cinza-claro.png', name: 'Camisa azul marinho · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '547', file: 'gpt/camisa-azul-petroleo-calca-branca-calcado-cinza-claro.png', name: 'Camisa azul petróleo · calça branca · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '548', file: 'gpt/camisa-bege-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa bege · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Bege' },
  { id: '549', file: 'gpt/camisa-bege-calca-bege-calcado-cinza-claro.png', name: 'Camisa bege · calça bege · loafer cinza claro', category: 'Look completo', color: 'Bege' },
  { id: '550', file: 'gpt/camisa-bege-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa bege · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Bege' },
  { id: '551', file: 'gpt/camisa-bege-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa bege · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Bege' },
  { id: '552', file: 'gpt/camisa-bege-calca-creme-calcado-cinza-claro.png', name: 'Camisa bege · calça creme · loafer cinza claro', category: 'Look completo', color: 'Bege' },
  { id: '553', file: 'gpt/camisa-bege-calca-marrom-calcado-cinza-claro.png', name: 'Camisa bege · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Bege' },
  { id: '554', file: 'gpt/camisa-bege-calca-preta-calcado-cinza-claro.png', name: 'Camisa bege · calça preta · loafer cinza claro', category: 'Look completo', color: 'Bege' },
  { id: '555', file: 'gpt/camisa-bege-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa bege · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Bege' },
  { id: '556', file: 'gpt/camisa-bege-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa bege · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Bege' },
  { id: '557', file: 'gpt/camisa-bege-calca-vinho-calcado-cinza-claro.png', name: 'Camisa bege · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Bege' },
  { id: '558', file: 'gpt/camisa-branca-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa branca · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '559', file: 'gpt/camisa-branca-calca-bege-calcado-cinza-claro.png', name: 'Camisa branca · calça bege · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '560', file: 'gpt/camisa-branca-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa branca · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '561', file: 'gpt/camisa-branca-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa branca · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '562', file: 'gpt/camisa-branca-calca-creme-calcado-cinza-claro.png', name: 'Camisa branca · calça creme · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '563', file: 'gpt/camisa-branca-calca-marrom-calcado-cinza-claro.png', name: 'Camisa branca · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '564', file: 'gpt/camisa-branca-calca-preta-calcado-cinza-claro.png', name: 'Camisa branca · calça preta · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '565', file: 'gpt/camisa-branca-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa branca · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '566', file: 'gpt/camisa-branca-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa branca · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '567', file: 'gpt/camisa-branco-calca-vinho-calcado-cinza-claro.png', name: 'Camisa branco · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '568', file: 'gpt/camisa-cinza-claro-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa cinza claro · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Cinza claro' },
  { id: '569', file: 'gpt/camisa-cinza-claro-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa cinza claro · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Cinza claro' },
  { id: '570', file: 'gpt/camisa-cinza-escuro-calca-creme-calcado-cinza-claro.png', name: 'Camisa cinza pedra · calça creme · loafer cinza claro', category: 'Look completo', color: 'Cinza pedra' },
  { id: '571', file: 'gpt/camisa-cinza-claro-calca-preta-calcado-cinza-claro.png', name: 'Camisa cinza claro · calça preta · loafer cinza claro', category: 'Look completo', color: 'Cinza claro' },
  { id: '572', file: 'gpt/camisa-cinza-escuro-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa cinza pedra · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Cinza pedra' },
  { id: '573', file: 'gpt/camisa-cinza-escuro-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa cinza pedra · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Cinza pedra' },
  { id: '574', file: 'gpt/camisa-cinza-escuro-calca-vinho-calcado-cinza-claro.png', name: 'Camisa cinza pedra · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Cinza pedra' },
  { id: '575', file: 'gpt/camisa-cores-calca-cores-calcado-cinza-claro.png', name: 'Camisa cores · calça cores · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '576', file: 'gpt/camisa-creme-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa creme · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '577', file: 'gpt/camisa-creme-calca-bege-calcado-cinza-claro.png', name: 'Camisa creme · calça bege · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '578', file: 'gpt/camisa-creme-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa creme · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '579', file: 'gpt/camisa-creme-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa creme · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '580', file: 'gpt/camisa-creme-calca-marrom-calcado-cinza-claro.png', name: 'Camisa creme · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '581', file: 'gpt/camisa-creme-calca-preta-calcado-cinza-claro.png', name: 'Camisa creme · calça preta · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '582', file: 'gpt/camisa-creme-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa creme · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '583', file: 'gpt/camisa-creme-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa creme · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '584', file: 'gpt/camisa-creme-calca-vinho-calcado-cinza-claro.png', name: 'Camisa creme · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '585', file: 'gpt/camisa-ferrugem-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '586', file: 'gpt/camisa-ferrugem-calca-bege-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça bege · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '587', file: 'gpt/camisa-ferrugem-calca-cinza-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça cinza · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '588', file: 'gpt/camisa-ferrugem-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '589', file: 'gpt/camisa-ferrugem-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '590', file: 'gpt/camisa-ferrugem-calca-creme-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça creme · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '591', file: 'gpt/camisa-ferrugem-calca-marrom-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '592', file: 'gpt/camisa-ferrugem-calca-preta-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça preta · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '593', file: 'gpt/camisa-ferrugem-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '594', file: 'gpt/camisa-ferrugem-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '595', file: 'gpt/camisa-ferrugem-calca-vinho-calcado-cinza-claro.png', name: 'Camisa ferrugem · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '596', file: 'gpt/camisa-laranja-queimado-calca-marrom-calcado-cinza-claro.png', name: 'Camisa laranja queimado · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Bordô' },
  { id: '597', file: 'gpt/camisa-lilas-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa lilás · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '598', file: 'gpt/camisa-lilas-calca-bege-calcado-cinza-claro.png', name: 'Camisa lilás · calça bege · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '599', file: 'gpt/camisa-lilas-calca-cinza-calcado-cinza-claro.png', name: 'Camisa lilás · calça cinza · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '600', file: 'gpt/camisa-lilas-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa lilás · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '601', file: 'gpt/camisa-lilas-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa lilás · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '602', file: 'gpt/camisa-lilas-calca-creme-calcado-cinza-claro.png', name: 'Camisa lilás · calça creme · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '603', file: 'gpt/camisa-lilas-calca-marrom-calcado-cinza-claro.png', name: 'Camisa lilás · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '604', file: 'gpt/camisa-lilas-calca-preta-calcado-cinza-claro.png', name: 'Camisa lilás · calça preta · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '605', file: 'gpt/camisa-lilas-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa lilás · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '606', file: 'gpt/camisa-lilas-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa lilás · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '607', file: 'gpt/camisa-lilas-calca-vinho-calcado-cinza-claro.png', name: 'Camisa lilás · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '608', file: 'gpt/camisa-marrom-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa marrom · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Marrom' },
  { id: '609', file: 'gpt/camisa-marrom-calca-bege-calcado-cinza-claro.png', name: 'Camisa marrom · calça bege · loafer cinza claro', category: 'Look completo', color: 'Marrom' },
  { id: '610', file: 'gpt/camisa-marrom-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa marrom · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Marrom' },
  { id: '611', file: 'gpt/camisa-marrom-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa marrom · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Marrom' },
  { id: '612', file: 'gpt/camisa-marrom-calca-creme-calcado-cinza-claro.png', name: 'Camisa marrom · calça creme · loafer cinza claro', category: 'Look completo', color: 'Marrom' },
  { id: '613', file: 'gpt/camisa-marrom-calca-marrom-calcado-cinza-claro.png', name: 'Camisa marrom · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Marrom' },
  { id: '614', file: 'gpt/camisa-marrom-calca-preta-calcado-cinza-claro.png', name: 'Camisa marrom · calça preta · loafer cinza claro', category: 'Look completo', color: 'Marrom' },
  { id: '615', file: 'gpt/camisa-marrom-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa marrom · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Marrom' },
  { id: '616', file: 'gpt/camisa-marrom-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa marrom · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Marrom' },
  { id: '617', file: 'gpt/camisa-marrom-calca-vinho-calcado-cinza-claro.png', name: 'Camisa marrom · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Marrom' },
  { id: '618', file: 'gpt/camisa-preta-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa preta · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '619', file: 'gpt/camisa-preta-calca-bege-calcado-cinza-claro.png', name: 'Camisa preta · calça bege · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '620', file: 'gpt/camisa-preta-calca-cinza-calcado-cinza-claro.png', name: 'Camisa preta · calça cinza · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '621', file: 'gpt/camisa-preta-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa preta · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '622', file: 'gpt/camisa-preta-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa preta · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '623', file: 'gpt/camisa-preta-calca-creme-calcado-cinza-claro.png', name: 'Camisa preta · calça creme · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '624', file: 'gpt/camisa-preta-calca-marrom-calcado-cinza-claro.png', name: 'Camisa preta · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '625', file: 'gpt/camisa-preta-calca-preta-calcado-cinza-claro.png', name: 'Camisa preta · calça preta · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '626', file: 'gpt/camisa-preta-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa preta · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '627', file: 'gpt/camisa-preta-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa preta · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '628', file: 'gpt/camisa-preta-calca-vinho-calcado-cinza-claro.png', name: 'Camisa preta · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Preto' },
  { id: '629', file: 'gpt/camisa-rosa-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa rosa · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '630', file: 'gpt/camisa-rosa-calca-bege-calcado-cinza-claro.png', name: 'Camisa rosa · calça bege · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '631', file: 'gpt/camisa-rosa-calca-cinza-calcado-cinza-claro.png', name: 'Camisa rosa · calça cinza · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '632', file: 'gpt/camisa-rosa-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa rosa · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '633', file: 'gpt/camisa-rosa-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa rosa · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '634', file: 'gpt/camisa-rosa-calca-creme-calcado-cinza-claro.png', name: 'Camisa rosa · calça creme · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '635', file: 'gpt/camisa-rosa-calca-marrom-calcado-cinza-claro.png', name: 'Camisa rosa · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '636', file: 'gpt/camisa-rosa-calca-preta-calcado-cinza-claro.png', name: 'Camisa rosa · calça preta · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '637', file: 'gpt/camisa-rosa-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa rosa · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '638', file: 'gpt/camisa-rosa-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa rosa · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '639', file: 'gpt/camisa-rosa-calca-vinho-calcado-cinza-claro.png', name: 'Camisa rosa · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Outro' },
  { id: '640', file: 'gpt/camisa-verde-calca-bege-calcado-cinza-claro.png', name: 'Camisa verde · calça bege · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '641', file: 'gpt/camisa-verde-calca-branca-calcado-cinza-claro.png', name: 'Camisa verde · calça branca · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '642', file: 'gpt/camisa-verde-calca-creme-calcado-cinza-claro.png', name: 'Camisa verde · calça creme · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '643', file: 'gpt/camisa-verde-claro-calca-bege-calcado-cinza-claro.png', name: 'Camisa verde claro · calça bege · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '644', file: 'gpt/camisa-verde-escuro-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa verde escuro · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '645', file: 'gpt/camisa-verde-escuro-calca-bege-calcado-cinza-claro.png', name: 'Camisa verde escuro · calça bege · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '646', file: 'gpt/camisa-verde-escuro-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa verde escuro · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '647', file: 'gpt/camisa-verde-escuro-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa verde escuro · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '648', file: 'gpt/camisa-verde-escuro-calca-creme-calcado-cinza-claro.png', name: 'Camisa verde escuro · calça creme · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '649', file: 'gpt/camisa-verde-escuro-calca-marrom-calcado-cinza-claro.png', name: 'Camisa verde escuro · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '650', file: 'gpt/camisa-verde-escuro-calca-preta-calcado-cinza-claro.png', name: 'Camisa verde escuro · calça preta · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '651', file: 'gpt/camisa-verde-escuro-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa verde escuro · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '652', file: 'gpt/camisa-verde-escuro-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa verde escuro · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '653', file: 'gpt/camisa-verde-escuro-calca-vinho-calcado-cinza-claro.png', name: 'Camisa verde escuro · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '654', file: 'gpt/camisa-verde-oliva-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa verde oliva · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '655', file: 'gpt/camisa-verde-oliva-calca-bege-calcado-cinza-claro.png', name: 'Camisa verde oliva · calça bege · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '656', file: 'gpt/camisa-verde-oliva-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa verde oliva · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '657', file: 'gpt/camisa-verde-oliva-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa verde oliva · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '658', file: 'gpt/camisa-verde-oliva-calca-creme-calcado-cinza-claro.png', name: 'Camisa verde oliva · calça creme · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '659', file: 'gpt/camisa-verde-oliva-calca-marrom-calcado-cinza-claro.png', name: 'Camisa verde oliva · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '660', file: 'gpt/camisa-verde-oliva-calca-preta-calcado-cinza-claro.png', name: 'Camisa verde oliva · calça preta · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '661', file: 'gpt/camisa-verde-oliva-calca-vinho-calcado-cinza-claro.png', name: 'Camisa verde oliva · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '662', file: 'gpt/camisa-vermelha-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa vermelha · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '663', file: 'gpt/camisa-vermelha-calca-bege-calcado-cinza-claro.png', name: 'Camisa vermelha · calça bege · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '664', file: 'gpt/camisa-vermelha-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa vermelha · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '665', file: 'gpt/camisa-vermelha-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa vermelha · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '666', file: 'gpt/camisa-vermelha-calca-creme-calcado-cinza-claro.png', name: 'Camisa vermelha · calça creme · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '667', file: 'gpt/camisa-vermelha-calca-marrom-calcado-cinza-claro.png', name: 'Camisa vermelha · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '668', file: 'gpt/camisa-vermelha-calca-preta-calcado-cinza-claro.png', name: 'Camisa vermelha · calça preta · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '669', file: 'gpt/camisa-vermelha-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa vermelha · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '670', file: 'gpt/camisa-vermelha-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa vermelha · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '671', file: 'gpt/camisa-vermelha-calca-vinho-calcado-cinza-claro.png', name: 'Camisa vermelha · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '672', file: 'gpt/camisa-vinho-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa vinho · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '673', file: 'gpt/camisa-vinho-calca-bege-calcado-cinza-claro.png', name: 'Camisa vinho · calça bege · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '674', file: 'gpt/camisa-vinho-calca-branca-calcado-cinza-claro.png', name: 'Camisa vinho · calça branca · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '675', file: 'gpt/camisa-vinho-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa vinho · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '676', file: 'gpt/camisa-vinho-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa vinho · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '677', file: 'gpt/camisa-vinho-calca-creme-calcado-cinza-claro.png', name: 'Camisa vinho · calça creme · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '678', file: 'gpt/camisa-vinho-calca-marrom-calcado-cinza-claro.png', name: 'Camisa vinho · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '679', file: 'gpt/camisa-vinho-calca-preta-calcado-cinza-claro.png', name: 'Camisa vinho · calça preta · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '680', file: 'gpt/camisa-vinho-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa vinho · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '681', file: 'gpt/camisa-vinho-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa vinho · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '682', file: 'gpt/camisa-verde-oliva-calca-verde-militar-calcado-preto.png', name: 'Camisa verde oliva · calça verde militar · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '683', file: 'gpt/camisa-verde-oliva-calca-verde-militar-calcado-marrom.png', name: 'Camisa verde oliva · calça verde militar · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '684', file: 'gpt/camisa-verde-oliva-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa verde oliva · calça verde militar · tênis branco', category: 'Look completo', color: 'Verde' },
  { id: '685', file: 'gpt/camisa-verde-oliva-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa verde oliva · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '686', file: 'gpt/camisa-verde-oliva-calca-verde-oliva-calcado-preto.png', name: 'Camisa verde oliva · calça verde oliva · calçado preto', category: 'Look completo', color: 'Verde' },
  { id: '687', file: 'gpt/camisa-verde-oliva-calca-verde-oliva-calcado-marrom.png', name: 'Camisa verde oliva · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '688', file: 'gpt/camisa-verde-oliva-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa verde oliva · calça verde oliva · tênis branco', category: 'Look completo', color: 'Verde' },
  { id: '689', file: 'gpt/camisa-verde-oliva-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa verde oliva · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Verde' },
  { id: '690', file: 'gpt/camisa-vinho-calca-vinho-calcado-preto.png', name: 'Camisa vinho · calça vinho · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '691', file: 'gpt/camisa-vinho-calca-vinho-calcado-marrom.png', name: 'Camisa vinho · calça vinho · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '692', file: 'gpt/camisa-vinho-calca-vinho-calcado-tenis-branco.png', name: 'Camisa vinho · calça vinho · tênis branco', category: 'Look completo', color: 'Vinho' },
  { id: '693', file: 'gpt/camisa-vinho-calca-vinho-calcado-cinza-claro.png', name: 'Camisa vinho · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Vinho' },
  { id: '694', file: 'gpt/camisa-azul-marinho-calca-azul-marinho-calcado-preto.png', name: 'Camisa azul marinho · calça azul marinho · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '695', file: 'gpt/camisa-azul-marinho-calca-azul-marinho-calcado-marrom.png', name: 'Camisa azul marinho · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '696', file: 'gpt/camisa-azul-marinho-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa azul marinho · calça azul marinho · tênis branco', category: 'Look completo', color: 'Azul marinho' },
  { id: '697', file: 'gpt/camisa-azul-marinho-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa azul marinho · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Azul marinho' },
  { id: '698', file: 'gpt/camisa-creme-calca-creme-calcado-preto.png', name: 'Camisa creme · calça creme · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '699', file: 'gpt/camisa-creme-calca-creme-calcado-marrom.png', name: 'Camisa creme · calça creme · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '700', file: 'gpt/camisa-creme-calca-creme-calcado-tenis-branco.png', name: 'Camisa creme · calça creme · tênis branco', category: 'Look completo', color: 'Branco' },
  { id: '701', file: 'gpt/camisa-creme-calca-creme-calcado-cinza-claro.png', name: 'Camisa creme · calça creme · loafer cinza claro', category: 'Look completo', color: 'Branco' },
  { id: '702', file: 'gpt/camisa-cinza-claro-calca-cinza-claro-calcado-preto.png', name: 'Camisa cinza claro · calça cinza claro · calçado preto', category: 'Look completo', color: 'Cinza claro' },
  { id: '703', file: 'gpt/camisa-cinza-claro-calca-cinza-claro-calcado-marrom.png', name: 'Camisa cinza claro · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Cinza claro' },
  { id: '704', file: 'gpt/camisa-cinza-claro-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa cinza claro · calça cinza claro · tênis branco', category: 'Look completo', color: 'Cinza claro' },
  { id: '705', file: 'gpt/camisa-cinza-claro-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa cinza claro · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Cinza claro' },
  { id: '706', file: 'gpt/camisa-cinza-claro-calca-bege-calcado-preto.png', name: 'Camisa cinza claro · calça bege · calçado preto', category: 'Look completo', color: 'Cinza claro' },
  { id: '707', file: 'gpt/camisa-cinza-claro-calca-bege-calcado-marrom.png', name: 'Camisa cinza claro · calça bege · calçado marrom', category: 'Look completo', color: 'Cinza claro' },
  { id: '708', file: 'gpt/camisa-cinza-claro-calca-bege-calcado-tenis-branco.png', name: 'Camisa cinza claro · calça bege · tênis branco', category: 'Look completo', color: 'Cinza claro' },
  { id: '709', file: 'gpt/camisa-cinza-claro-calca-bege-calcado-cinza-claro.png', name: 'Camisa cinza claro · calça bege · loafer cinza claro', category: 'Look completo', color: 'Cinza claro' },
  { id: '710', file: 'gpt/camisa-cinza-claro-calca-creme-calcado-preto.png', name: 'Camisa cinza claro · calça creme · calçado preto', category: 'Look completo', color: 'Cinza claro' },
  { id: '711', file: 'gpt/camisa-cinza-claro-calca-creme-calcado-marrom.png', name: 'Camisa cinza claro · calça creme · calçado marrom', category: 'Look completo', color: 'Cinza claro' },
  { id: '712', file: 'gpt/camisa-cinza-claro-calca-creme-calcado-tenis-branco.png', name: 'Camisa cinza claro · calça creme · tênis branco', category: 'Look completo', color: 'Cinza claro' },
  { id: '713', file: 'gpt/camisa-cinza-claro-calca-creme-calcado-cinza-claro.png', name: 'Camisa cinza claro · calça creme · loafer cinza claro', category: 'Look completo', color: 'Cinza claro' },
  { id: '714', file: 'gpt/camisa-cinza-claro-calca-marrom-calcado-preto.png', name: 'Camisa cinza claro · calça marrom · calçado preto', category: 'Look completo', color: 'Cinza claro' },
  { id: '715', file: 'gpt/camisa-cinza-claro-calca-marrom-calcado-marrom.png', name: 'Camisa cinza claro · calça marrom · calçado marrom', category: 'Look completo', color: 'Cinza claro' },
  { id: '716', file: 'gpt/camisa-cinza-claro-calca-marrom-calcado-tenis-branco.png', name: 'Camisa cinza claro · calça marrom · tênis branco', category: 'Look completo', color: 'Cinza claro' },
  { id: '717', file: 'gpt/camisa-cinza-claro-calca-marrom-calcado-cinza-claro.png', name: 'Camisa cinza claro · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Cinza claro' },
  { id: '718', file: 'gpt/camisa-cinza-claro-calca-verde-militar-calcado-preto.png', name: 'Camisa cinza claro · calça verde militar · calçado preto', category: 'Look completo', color: 'Cinza claro' },
  { id: '719', file: 'gpt/camisa-cinza-claro-calca-verde-militar-calcado-marrom.png', name: 'Camisa cinza claro · calça verde militar · calçado marrom', category: 'Look completo', color: 'Cinza claro' },
  { id: '720', file: 'gpt/camisa-cinza-claro-calca-verde-militar-calcado-tenis-branco.png', name: 'Camisa cinza claro · calça verde militar · tênis branco', category: 'Look completo', color: 'Cinza claro' },
  { id: '721', file: 'gpt/camisa-cinza-claro-calca-verde-militar-calcado-cinza-claro.png', name: 'Camisa cinza claro · calça verde militar · loafer cinza claro', category: 'Look completo', color: 'Cinza claro' },
  { id: '722', file: 'gpt/camisa-cinza-claro-calca-verde-oliva-calcado-preto.png', name: 'Camisa cinza claro · calça verde oliva · calçado preto', category: 'Look completo', color: 'Cinza claro' },
  { id: '723', file: 'gpt/camisa-cinza-claro-calca-verde-oliva-calcado-marrom.png', name: 'Camisa cinza claro · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Cinza claro' },
  { id: '724', file: 'gpt/camisa-cinza-claro-calca-verde-oliva-calcado-tenis-branco.png', name: 'Camisa cinza claro · calça verde oliva · tênis branco', category: 'Look completo', color: 'Cinza claro' },
  { id: '725', file: 'gpt/camisa-cinza-claro-calca-verde-oliva-calcado-cinza-claro.png', name: 'Camisa cinza claro · calça verde oliva · loafer cinza claro', category: 'Look completo', color: 'Cinza claro' },
  { id: '726', file: 'gpt/camisa-cinza-claro-calca-vinho-calcado-preto.png', name: 'Camisa cinza claro · calça vinho · calçado preto', category: 'Look completo', color: 'Cinza claro' },
  { id: '727', file: 'gpt/camisa-cinza-claro-calca-vinho-calcado-marrom.png', name: 'Camisa cinza claro · calça vinho · calçado marrom', category: 'Look completo', color: 'Cinza claro' },
  { id: '728', file: 'gpt/camisa-cinza-claro-calca-vinho-calcado-tenis-branco.png', name: 'Camisa cinza claro · calça vinho · tênis branco', category: 'Look completo', color: 'Cinza claro' },
  { id: '729', file: 'gpt/camisa-cinza-claro-calca-vinho-calcado-cinza-claro.png', name: 'Camisa cinza claro · calça vinho · loafer cinza claro', category: 'Look completo', color: 'Cinza claro' },
  { id: '730', file: 'gpt/camisa-cinza-escuro-calca-preta-calcado-preto.png', name: 'Camisa cinza pedra · calça preta · calçado preto', category: 'Look completo', color: 'Cinza pedra' },
  { id: '731', file: 'gpt/camisa-cinza-escuro-calca-preta-calcado-marrom.png', name: 'Camisa cinza pedra · calça preta · calçado marrom', category: 'Look completo', color: 'Cinza pedra' },
  { id: '732', file: 'gpt/camisa-cinza-escuro-calca-preta-calcado-tenis-branco.png', name: 'Camisa cinza pedra · calça preta · tênis branco', category: 'Look completo', color: 'Cinza pedra' },
  { id: '733', file: 'gpt/camisa-cinza-escuro-calca-preta-calcado-cinza-claro.png', name: 'Camisa cinza pedra · calça preta · loafer cinza claro', category: 'Look completo', color: 'Cinza pedra' },
  { id: '734', file: 'gpt/camisa-cinza-escuro-calca-cinza-claro-calcado-preto.png', name: 'Camisa cinza pedra · calça cinza claro · calçado preto', category: 'Look completo', color: 'Cinza pedra' },
  { id: '735', file: 'gpt/camisa-cinza-escuro-calca-cinza-claro-calcado-marrom.png', name: 'Camisa cinza pedra · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Cinza pedra' },
  { id: '736', file: 'gpt/camisa-cinza-escuro-calca-cinza-claro-calcado-tenis-branco.png', name: 'Camisa cinza pedra · calça cinza claro · tênis branco', category: 'Look completo', color: 'Cinza pedra' },
  { id: '737', file: 'gpt/camisa-cinza-escuro-calca-cinza-claro-calcado-cinza-claro.png', name: 'Camisa cinza pedra · calça cinza claro · loafer cinza claro', category: 'Look completo', color: 'Cinza pedra' },
  { id: '738', file: 'gpt/camisa-cinza-escuro-calca-cinza-pedra-calcado-preto.png', name: 'Camisa cinza pedra · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Cinza pedra' },
  { id: '739', file: 'gpt/camisa-cinza-escuro-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa cinza pedra · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Cinza pedra' },
  { id: '740', file: 'gpt/camisa-cinza-escuro-calca-cinza-pedra-calcado-tenis-branco.png', name: 'Camisa cinza pedra · calça cinza pedra · tênis branco', category: 'Look completo', color: 'Cinza pedra' },
  { id: '741', file: 'gpt/camisa-cinza-escuro-calca-cinza-pedra-calcado-cinza-claro.png', name: 'Camisa cinza pedra · calça cinza pedra · loafer cinza claro', category: 'Look completo', color: 'Cinza pedra' },
  { id: '742', file: 'gpt/camisa-cinza-escuro-calca-bege-calcado-preto.png', name: 'Camisa cinza pedra · calça bege · calçado preto', category: 'Look completo', color: 'Cinza pedra' },
  { id: '743', file: 'gpt/camisa-cinza-escuro-calca-bege-calcado-marrom.png', name: 'Camisa cinza pedra · calça bege · calçado marrom', category: 'Look completo', color: 'Cinza pedra' },
  { id: '744', file: 'gpt/camisa-cinza-escuro-calca-bege-calcado-tenis-branco.png', name: 'Camisa cinza pedra · calça bege · tênis branco', category: 'Look completo', color: 'Cinza pedra' },
  { id: '745', file: 'gpt/camisa-cinza-escuro-calca-bege-calcado-cinza-claro.png', name: 'Camisa cinza pedra · calça bege · loafer cinza claro', category: 'Look completo', color: 'Cinza pedra' },
  { id: '746', file: 'gpt/camisa-cinza-escuro-calca-marrom-calcado-preto.png', name: 'Camisa cinza pedra · calça marrom · calçado preto', category: 'Look completo', color: 'Cinza pedra' },
  { id: '747', file: 'gpt/camisa-cinza-escuro-calca-marrom-calcado-marrom.png', name: 'Camisa cinza pedra · calça marrom · calçado marrom', category: 'Look completo', color: 'Cinza pedra' },
  { id: '748', file: 'gpt/camisa-cinza-escuro-calca-marrom-calcado-tenis-branco.png', name: 'Camisa cinza pedra · calça marrom · tênis branco', category: 'Look completo', color: 'Cinza pedra' },
  { id: '749', file: 'gpt/camisa-cinza-escuro-calca-marrom-calcado-cinza-claro.png', name: 'Camisa cinza pedra · calça marrom · loafer cinza claro', category: 'Look completo', color: 'Cinza pedra' },
  { id: '750', file: 'gpt/camisa-cinza-escuro-calca-azul-marinho-calcado-preto.png', name: 'Camisa cinza pedra · calça azul marinho · calçado preto', category: 'Look completo', color: 'Cinza pedra' },
  { id: '751', file: 'gpt/camisa-cinza-escuro-calca-azul-marinho-calcado-marrom.png', name: 'Camisa cinza pedra · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Cinza pedra' },
  { id: '752', file: 'gpt/camisa-cinza-escuro-calca-azul-marinho-calcado-tenis-branco.png', name: 'Camisa cinza pedra · calça azul marinho · tênis branco', category: 'Look completo', color: 'Cinza pedra' },
  { id: '753', file: 'gpt/camisa-cinza-escuro-calca-azul-marinho-calcado-cinza-claro.png', name: 'Camisa cinza pedra · calça azul marinho · loafer cinza claro', category: 'Look completo', color: 'Cinza pedra' },
];

let carouselIndex = -1;
let filteredList = [];

// --- Filter ---

const PIECE_COLOR_MAP = {
  branca: 'Branco', branco: 'Branco', 'tenis-branco': 'Branco',
  preta: 'Preto', preto: 'Preto',
  'cinza-claro': 'Cinza claro',
  'cinza-pedra': 'Cinza pedra',
  'cinza-escuro': 'Cinza pedra',
  'verde-militar': 'Verde',
  azul: 'Azul',
  'azul-claro': 'Azul',
  'azul-marinho': 'Azul marinho',
  'azul-petroleo': 'Azul marinho',
  vinho: 'Vinho',
  bege: 'Bege',
  marrom: 'Marrom',
  caramelo: 'Caramelo',
  verde: 'Verde', 'verde-claro': 'Verde', 'verde-oliva': 'Verde',
  amarela: 'Outro',
  vermelha: 'Vinho',
  'verde-escuro': 'Verde',
  ferrugem: 'Bordô',
  'laranja-queimado': 'Bordô',
  lilas: 'Outro',
  rosa: 'Outro',
  creme: 'Branco',
  cores: 'Outro',
};

const CATEGORY_PIECE = {
  Camisa: 'camisa',
  'Calça': 'calca',
  'Calçado': 'calcado',
  Jaqueta: 'jaqueta',
  Blazer: 'blazer',
  'Look completo': 'camisa',
};

function mapPieceColor(slug, piece) {
  if (slug === 'cinza' && (piece === 'calca' || piece === 'calcado')) return 'Cinza pedra';
  return PIECE_COLOR_MAP[slug] || 'Outro';
}

function parseLookColors(file) {
  const basename = file.split('/').pop();
  const withOuter = basename.match(/^(blazer|jaqueta)-(.+)-camisa-(.+)-calca-(.+)-calcado-(.+?)(?:-\d+)?\.(?:jpe?g|png)$/i);
  if (withOuter) {
    const piece = withOuter[1].toLowerCase();
    return {
      [piece]: mapPieceColor(withOuter[2], piece),
      camisa: mapPieceColor(withOuter[3], 'camisa'),
      calca: mapPieceColor(withOuter[4], 'calca'),
      calcado: mapPieceColor(withOuter[5], 'calcado'),
    };
  }
  const match = basename.match(/^camisa-(.+)-calca-(.+)-calcado-(.+?)(?:-\d+)?\.(?:jpe?g|png)$/i);
  if (!match) return null;
  return {
    camisa: mapPieceColor(match[1], 'camisa'),
    calca: mapPieceColor(match[2], 'calca'),
    calcado: mapPieceColor(match[3], 'calcado'),
  };
}

function getActiveFilters() {
  return {
    category: document.getElementById('filter-category').value,
    color: document.getElementById('filter-color').value
  };
}

function filterImages(images, filters) {
  return images.filter((img) => {
    if (filters.category === 'Outro') {
      if (img.category !== 'Outro') return false;
      return !filters.color || img.color === filters.color;
    }

    const colors = parseLookColors(img.file);

    if (filters.category) {
      const piece = CATEGORY_PIECE[filters.category];
      if (!piece || !colors) return false;
      if (filters.color && colors[piece] !== filters.color) return false;
      return true;
    }

    if (filters.color) {
      if (!colors) return img.color === filters.color;
      return colors.camisa === filters.color;
    }

    return true;
  });
}

// --- Gallery ---

function escapeHtml(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function imageSrc(item) {
  return item.file;
}

function renderGallery() {
  const gallery = document.getElementById('gallery');
  filteredList = filterImages(CATALOG, getActiveFilters());

  if (!filteredList.length) {
    gallery.innerHTML = `<div class="empty-state"><p>${
      CATALOG.length
        ? 'Nenhuma imagem encontrada com os filtros aplicados.'
        : 'Nenhuma imagem no catálogo. Adicione os arquivos na pasta raiz e categorize em script.js (CATALOG).'
    }</p></div>`;
    return;
  }

  gallery.innerHTML = filteredList.map((img, index) => `
    <article class="gallery-card" data-index="${index}">
      <div class="gallery-card-image" data-open="${index}">
        <img src="${escapeAttr(imageSrc(img))}" alt="${escapeAttr(img.name || 'Imagem')}" loading="lazy">
      </div>
      <div class="gallery-card-body">
        ${img.name ? `<div class="gallery-card-name">${escapeHtml(img.name)}</div>` : ''}
        <div class="gallery-card-meta">
          ${img.category ? escapeHtml(img.category) : 'Sem categoria'}
          ${img.color ? ' · ' + escapeHtml(img.color) : ''}
        </div>
      </div>
    </article>
  `).join('');

  gallery.querySelectorAll('[data-open]').forEach((el) => {
    el.addEventListener('click', () => openCarousel(Number(el.dataset.open)));
  });
}

// --- Carousel ---

function openCarousel(index) {
  if (!filteredList.length || index < 0 || index >= filteredList.length) return;
  carouselIndex = index;
  document.getElementById('carousel-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  updateCarouselView();
}

function closeCarousel() {
  document.getElementById('carousel-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  carouselIndex = -1;
}

function updateCarouselView() {
  const img = filteredList[carouselIndex];
  if (!img) return;

  document.getElementById('carousel-image').src = imageSrc(img);
  document.getElementById('carousel-image').alt = img.name || 'Imagem';

  const parts = [];
  if (img.name) parts.push(img.name);
  if (img.category) parts.push(img.category);
  if (img.color) parts.push(img.color);
  document.getElementById('carousel-info').textContent = parts.join(' · ') || '';

  document.getElementById('carousel-counter').textContent =
    `${carouselIndex + 1} / ${filteredList.length}`;

  document.getElementById('carousel-prev').style.visibility =
    filteredList.length > 1 ? 'visible' : 'hidden';
  document.getElementById('carousel-next').style.visibility =
    filteredList.length > 1 ? 'visible' : 'hidden';
}

function showNextImage() {
  if (!filteredList.length) return;
  carouselIndex = (carouselIndex + 1) % filteredList.length;
  updateCarouselView();
}

function showPreviousImage() {
  if (!filteredList.length) return;
  carouselIndex = (carouselIndex - 1 + filteredList.length) % filteredList.length;
  updateCarouselView();
}

// --- Init ---

function populateFilterOptions() {
  const catSelect = document.getElementById('filter-category');
  const colorSelect = document.getElementById('filter-color');

  CATEGORIES.forEach((c) => {
    catSelect.innerHTML += `<option value="${c}">${c}</option>`;
  });
  COLORS.forEach((c) => {
    colorSelect.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

function initViewTabs() {
  const panelGallery = document.getElementById('panel-gallery');
  const panelCombinator = document.getElementById('panel-combinator');
  const btnGallery = document.getElementById('view-gallery');
  const btnCombinator = document.getElementById('view-combinator');
  if (!panelGallery || !panelCombinator) return;

  function setView(view) {
    const isGallery = view === 'gallery';
    panelGallery.classList.toggle('hidden', !isGallery);
    panelCombinator.classList.toggle('hidden', isGallery);
    btnGallery.classList.toggle('active', isGallery);
    btnCombinator.classList.toggle('active', !isGallery);
    btnGallery.setAttribute('aria-selected', isGallery);
    btnCombinator.setAttribute('aria-selected', !isGallery);
    if (carouselIndex >= 0 && !isGallery) closeCarousel();
    const hash = isGallery ? '' : '#combinar';
    if (location.hash !== hash) history.replaceState(null, '', hash || location.pathname);
  }

  btnGallery.addEventListener('click', () => setView('gallery'));
  btnCombinator.addEventListener('click', () => setView('combinator'));
  setView(location.hash === '#combinar' ? 'combinator' : 'gallery');
  window.addEventListener('hashchange', () => {
    setView(location.hash === '#combinar' ? 'combinator' : 'gallery');
  });
}

function init() {
  populateFilterOptions();
  initViewTabs();

  document.getElementById('filter-category').addEventListener('change', () => {
    if (carouselIndex >= 0) closeCarousel();
    renderGallery();
  });

  document.getElementById('filter-color').addEventListener('change', () => {
    if (carouselIndex >= 0) closeCarousel();
    renderGallery();
  });

  document.getElementById('carousel-close').addEventListener('click', closeCarousel);
  document.getElementById('carousel-prev').addEventListener('click', showPreviousImage);
  document.getElementById('carousel-next').addEventListener('click', showNextImage);

  document.getElementById('carousel-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'carousel-overlay') closeCarousel();
  });

  document.addEventListener('keydown', (e) => {
    if (carouselIndex < 0) return;
    if (e.key === 'Escape') closeCarousel();
    if (e.key === 'ArrowLeft') showPreviousImage();
    if (e.key === 'ArrowRight') showNextImage();
  });

  renderGallery();
}

document.addEventListener('DOMContentLoaded', init);
