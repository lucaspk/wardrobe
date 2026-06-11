/* Guarda-roupa — Galeria estática com filtros */

const CATEGORIES = ['Camisa', 'Calça', 'Calçado', 'Look completo', 'Outro'];
const COLORS = [
  'Branco', 'Preto', 'Cinza', 'Azul', 'Azul marinho',
  'Vinho', 'Bordô', 'Bege', 'Cáqui', 'Marrom', 'Verde', 'Outro'
];

// Coloque as imagens no diretório raiz e categorize aqui.
// file: nome do arquivo (ex.: "look-01.jpg")
const CATALOG = [
  { id: '1', file: 'camisa-amarela-calca-azul-marinho-calcado-marrom.jpg', name: 'Camisa amarela · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '2', file: 'camisa-amarela-calca-preta-calcado-bege.jpg', name: 'Camisa amarela · calça preta · calçado bege', category: 'Look completo', color: 'Outro' },
  { id: '3', file: 'camisa-amarela-calca-preta-calcado-marrom.jpg', name: 'Camisa amarela · calça preta · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '4', file: 'camisa-azul-claro-calca-azul-marinho-calcado-branco.jpg', name: 'Camisa azul claro · calça azul marinho · calçado branco', category: 'Look completo', color: 'Azul' },
  { id: '5', file: 'camisa-azul-claro-calca-azul-marinho-calcado-marrom-2.jpg', name: 'Camisa azul claro · calça azul marinho · calçado marrom (2)', category: 'Look completo', color: 'Azul' },
  { id: '6', file: 'camisa-azul-claro-calca-azul-marinho-calcado-marrom-3.jpg', name: 'Camisa azul claro · calça azul marinho · calçado marrom (3)', category: 'Look completo', color: 'Azul' },
  { id: '7', file: 'camisa-azul-claro-calca-azul-marinho-calcado-marrom-4.jpg', name: 'Camisa azul claro · calça azul marinho · calçado marrom (4)', category: 'Look completo', color: 'Azul' },
  { id: '8', file: 'camisa-azul-claro-calca-azul-marinho-calcado-marrom-5.jpg', name: 'Camisa azul claro · calça azul marinho · calçado marrom (5)', category: 'Look completo', color: 'Azul' },
  { id: '9', file: 'camisa-azul-claro-calca-azul-marinho-calcado-marrom.jpg', name: 'Camisa azul claro · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '10', file: 'camisa-azul-claro-calca-bege-calcado-branco-2.jpg', name: 'Camisa azul claro · calça bege · calçado branco (2)', category: 'Look completo', color: 'Azul' },
  { id: '11', file: 'camisa-azul-claro-calca-bege-calcado-branco.jpg', name: 'Camisa azul claro · calça bege · calçado branco', category: 'Look completo', color: 'Azul' },
  { id: '12', file: 'camisa-azul-claro-calca-bege-calcado-marrom-2.jpg', name: 'Camisa azul claro · calça bege · calçado marrom (2)', category: 'Look completo', color: 'Azul' },
  { id: '13', file: 'camisa-azul-claro-calca-bege-calcado-marrom-3.jpg', name: 'Camisa azul claro · calça bege · calçado marrom (3)', category: 'Look completo', color: 'Azul' },
  { id: '14', file: 'camisa-azul-claro-calca-bege-calcado-marrom.jpg', name: 'Camisa azul claro · calça bege · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '15', file: 'camisa-azul-claro-calca-cinza-calcado-marrom.jpg', name: 'Camisa azul claro · calça cinza · calçado marrom', category: 'Look completo', color: 'Azul' },
  { id: '16', file: 'camisa-azul-claro-calca-marrom-calcado-preto.jpg', name: 'Camisa azul claro · calça marrom · calçado preto', category: 'Look completo', color: 'Azul' },
  { id: '17', file: 'camisa-azul-marinho-calca-bege-calcado-azul-marinho.jpg', name: 'Camisa azul marinho · calça bege · calçado azul marinho', category: 'Look completo', color: 'Azul marinho' },
  { id: '18', file: 'camisa-azul-marinho-calca-bege-calcado-marrom.jpg', name: 'Camisa azul marinho · calça bege · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '19', file: 'camisa-azul-marinho-calca-marrom-calcado-preto.jpg', name: 'Camisa azul marinho · calça marrom · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '20', file: 'camisa-azul-marinho-calca-preta-calcado-azul-marinho.jpg', name: 'Camisa azul marinho · calça preta · calçado azul marinho', category: 'Look completo', color: 'Azul marinho' },
  { id: '21', file: 'camisa-azul-marinho-calca-preta-calcado-preto.jpg', name: 'Camisa azul marinho · calça preta · calçado preto', category: 'Look completo', color: 'Azul marinho' },
  { id: '22', file: 'camisa-azul-petroleo-calca-branca-calcado-marrom.jpg', name: 'Camisa azul petróleo · calça branca · calçado marrom', category: 'Look completo', color: 'Azul marinho' },
  { id: '23', file: 'camisa-bege-calca-azul-marinho-calcado-branco.jpg', name: 'Camisa bege · calça azul marinho · calçado branco', category: 'Look completo', color: 'Bege' },
  { id: '24', file: 'camisa-bege-calca-azul-marinho-calcado-marrom.jpg', name: 'Camisa bege · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '25', file: 'camisa-bege-calca-bege-calcado-branco.jpg', name: 'Camisa bege · calça bege · calçado branco', category: 'Look completo', color: 'Bege' },
  { id: '26', file: 'camisa-bege-calca-verde-oliva-calcado-marrom.jpg', name: 'Camisa bege · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '27', file: 'camisa-branca-calca-azul-marinho-calcado-branco.jpg', name: 'Camisa branca · calça azul marinho · calçado branco', category: 'Look completo', color: 'Branco' },
  { id: '28', file: 'camisa-branca-calca-bege-calcado-branco.jpg', name: 'Camisa branca · calça bege · calçado branco', category: 'Look completo', color: 'Branco' },
  { id: '29', file: 'camisa-branca-calca-bege-calcado-marrom-2.jpg', name: 'Camisa branca · calça bege · calçado marrom (2)', category: 'Look completo', color: 'Branco' },
  { id: '30', file: 'camisa-branca-calca-bege-calcado-marrom-3.jpg', name: 'Camisa branca · calça bege · calçado marrom (3)', category: 'Look completo', color: 'Branco' },
  { id: '31', file: 'camisa-branca-calca-bege-calcado-marrom-4.jpg', name: 'Camisa branca · calça bege · calçado marrom (4)', category: 'Look completo', color: 'Branco' },
  { id: '32', file: 'camisa-branca-calca-bege-calcado-marrom-5.jpg', name: 'Camisa branca · calça bege · calçado marrom (5)', category: 'Look completo', color: 'Branco' },
  { id: '33', file: 'camisa-branca-calca-bege-calcado-marrom.jpg', name: 'Camisa branca · calça bege · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '34', file: 'camisa-branca-calca-cinza-calcado-marrom.jpg', name: 'Camisa branca · calça cinza · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '35', file: 'camisa-branca-calca-cinza-calcado-preto.jpg', name: 'Camisa branca · calça cinza · calçado preto', category: 'Look completo', color: 'Branco' },
  { id: '36', file: 'camisa-branca-calca-marrom-calcado-marrom.jpg', name: 'Camisa branca · calça marrom · calçado marrom', category: 'Look completo', color: 'Branco' },
  { id: '37', file: 'camisa-cores-calca-cores-calcado-cores.jpg', name: 'Camisa cores · calça cores · calçado cores', category: 'Outro', color: 'Outro' },
  { id: '38', file: 'camisa-ferrugem-calca-cinza-calcado-branco.jpg', name: 'Camisa ferrugem · calça cinza · calçado branco', category: 'Look completo', color: 'Bordô' },
  { id: '39', file: 'camisa-ferrugem-calca-verde-oliva-calcado-bege.jpg', name: 'Camisa ferrugem · calça verde oliva · calçado bege', category: 'Look completo', color: 'Bordô' },
  { id: '40', file: 'camisa-laranja-queimado-calca-marrom-calcado-branco.jpg', name: 'Camisa laranja queimado · calça marrom · calçado branco', category: 'Look completo', color: 'Bordô' },
  { id: '41', file: 'camisa-lilas-calca-cinza-calcado-marrom.jpg', name: 'Camisa lilás · calça cinza · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '42', file: 'camisa-marrom-calca-bege-calcado-marrom.jpg', name: 'Camisa marrom · calça bege · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '43', file: 'camisa-preta-calca-bege-calcado-marrom.jpg', name: 'Camisa preta · calça bege · calçado marrom', category: 'Look completo', color: 'Preto' },
  { id: '44', file: 'camisa-preta-calca-cinza-calcado-preto.jpg', name: 'Camisa preta · calça cinza · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '45', file: 'camisa-preta-calca-preta-calcado-preto-2.jpg', name: 'Camisa preta · calça preta · calçado preto (2)', category: 'Look completo', color: 'Preto' },
  { id: '46', file: 'camisa-preta-calca-preta-calcado-preto.jpg', name: 'Camisa preta · calça preta · calçado preto', category: 'Look completo', color: 'Preto' },
  { id: '47', file: 'camisa-rosa-calca-cinza-calcado-marrom-2.jpg', name: 'Camisa rosa · calça cinza · calçado marrom (2)', category: 'Look completo', color: 'Outro' },
  { id: '48', file: 'camisa-rosa-calca-cinza-calcado-marrom.jpg', name: 'Camisa rosa · calça cinza · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '49', file: 'camisa-verde-calca-bege-calcado-branco-2.jpg', name: 'Camisa verde · calça bege · calçado branco (2)', category: 'Look completo', color: 'Verde' },
  { id: '50', file: 'camisa-verde-calca-bege-calcado-branco.jpg', name: 'Camisa verde · calça bege · calçado branco', category: 'Look completo', color: 'Verde' },
  { id: '51', file: 'camisa-verde-calca-bege-calcado-marrom-2.jpg', name: 'Camisa verde · calça bege · calçado marrom (2)', category: 'Look completo', color: 'Verde' },
  { id: '52', file: 'camisa-verde-calca-bege-calcado-marrom.jpg', name: 'Camisa verde · calça bege · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '53', file: 'camisa-verde-calca-branca-calcado-marrom.jpg', name: 'Camisa verde · calça branca · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '54', file: 'camisa-verde-claro-calca-bege-calcado-marrom.jpg', name: 'Camisa verde claro · calça bege · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '55', file: 'camisa-verde-oliva-calca-bege-calcado-marrom.jpg', name: 'Camisa verde oliva · calça bege · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '56', file: 'camisa-vinho-calca-bege-calcado-branco.jpg', name: 'Camisa vinho · calça bege · calçado branco', category: 'Look completo', color: 'Vinho' },
  { id: '57', file: 'camisa-vinho-calca-bege-calcado-marrom-2.jpg', name: 'Camisa vinho · calça bege · calçado marrom (2)', category: 'Look completo', color: 'Vinho' },
  { id: '58', file: 'camisa-vinho-calca-bege-calcado-marrom.jpg', name: 'Camisa vinho · calça bege · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '59', file: 'camisa-vinho-calca-branca-calcado-branco.jpg', name: 'Camisa vinho · calça branca · calçado branco', category: 'Look completo', color: 'Vinho' },
  { id: '60', file: 'camisa-vinho-calca-branca-calcado-preto.jpg', name: 'Camisa vinho · calça branca · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '61', file: 'camisa-vinho-calca-cinza-calcado-marrom-2.jpg', name: 'Camisa vinho · calça cinza · calçado marrom (2)', category: 'Look completo', color: 'Vinho' },
  { id: '62', file: 'camisa-vinho-calca-cinza-calcado-marrom.jpg', name: 'Camisa vinho · calça cinza · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '63', file: 'camisa-vinho-calca-cinza-calcado-preto.jpg', name: 'Camisa vinho · calça cinza · calçado preto', category: 'Look completo', color: 'Vinho' },
  { id: '64', file: 'camisa-vinho-calca-preta-calcado-branco-2.jpg', name: 'Camisa vinho · calça preta · calçado branco (2)', category: 'Look completo', color: 'Vinho' },
  { id: '65', file: 'camisa-vinho-calca-preta-calcado-branco.jpg', name: 'Camisa vinho · calça preta · calçado branco', category: 'Look completo', color: 'Vinho' },
  { id: '66', file: 'camisa-vinho-calca-preta-calcado-preto.jpg', name: 'Camisa vinho · calça preta · calçado preto', category: 'Look completo', color: 'Vinho' },
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
  { id: '96', file: 'gpt/camisa-cinza-calca-azul-marinho-calcado-marrom.png', name: 'Camisa cinza · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Cinza' },
  { id: '97', file: 'gpt/camisa-cinza-calca-cinza-pedra-calcado-preto.png', name: 'Camisa cinza · calça cinza pedra · calçado preto', category: 'Look completo', color: 'Cinza' },
  { id: '98', file: 'gpt/camisa-cinza-calca-creme-calcado-marrom.png', name: 'Camisa cinza · calça creme · calçado marrom', category: 'Look completo', color: 'Cinza' },
  { id: '99', file: 'gpt/camisa-cinza-calca-preta-calcado-preto.png', name: 'Camisa cinza · calça preta · calçado preto', category: 'Look completo', color: 'Cinza' },
  { id: '100', file: 'gpt/camisa-cinza-calca-verde-militar-calcado-marrom.png', name: 'Camisa cinza · calça verde militar · calçado marrom', category: 'Look completo', color: 'Cinza' },
  { id: '101', file: 'gpt/camisa-cinza-calca-verde-oliva-calcado-marrom.png', name: 'Camisa cinza · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Cinza' },
  { id: '102', file: 'gpt/camisa-cinza-escuro-calca-vinho-calcado-marrom.png', name: 'Camisa cinza escuro · calça vinho · calçado marrom', category: 'Look completo', color: 'Cinza' },
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
  { id: '128', file: 'gpt/camisa-preta-calca-preta-calcado-preto.png', name: 'Camisa preta · calça preta · calçado preto', category: 'Look completo', color: 'Preto' },
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
  { id: '155', file: 'gpt2/1-camisa-amarela-calca-preta-calcado-marrom.png', name: 'Camisa amarela · calça preta · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '156', file: 'gpt2/1-camisa-bege-calca-preta-calcado-marrom.png', name: 'Camisa bege · calça preta · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '157', file: 'gpt2/1-camisa-marrom-calca-preta-calcado-marrom.png', name: 'Camisa marrom · calça preta · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '158', file: 'gpt2/1-camisa-rosa-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa rosa · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '159', file: 'gpt2/1-camisa-verde-escuro-calca-preta-calcado-marrom.png', name: 'Camisa verde escuro · calça preta · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '160', file: 'gpt2/1-camisa-vermelha-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa vermelha · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '161', file: 'gpt2/2-camisa-amarela-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa amarela · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '162', file: 'gpt2/2-camisa-bege-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa bege · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '163', file: 'gpt2/2-camisa-marrom-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa marrom · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '164', file: 'gpt2/2-camisa-rosa-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa rosa · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '165', file: 'gpt2/2-camisa-verde-escuro-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa verde escuro · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '166', file: 'gpt2/2-camisa-vermelha-calca-cinza-pedra-calcado-marrom.png', name: 'Camisa vermelha · calça cinza pedra · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '167', file: 'gpt2/3-camisa-amarela-calca-cinza-claro-calcado-marrom.png', name: 'Camisa amarela · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '168', file: 'gpt2/3-camisa-bege-calca-cinza-claro-calcado-marrom.png', name: 'Camisa bege · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '169', file: 'gpt2/3-camisa-marrom-calca-cinza-claro-calcado-marrom.png', name: 'Camisa marrom · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '170', file: 'gpt2/3-camisa-rosa-calca-bege-calcado-marrom.png', name: 'Camisa rosa · calça bege · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '171', file: 'gpt2/3-camisa-verde-escuro-calca-cinza-claro-calcado-marrom.png', name: 'Camisa verde escuro · calça cinza claro · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '172', file: 'gpt2/3-camisa-vermelha-calca-bege-calcado-marrom.png', name: 'Camisa vermelha · calça bege · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '173', file: 'gpt2/4-camisa-amarela-calca-bege-calcado-marrom.png', name: 'Camisa amarela · calça bege · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '174', file: 'gpt2/4-camisa-bege-calca-bege-calcado-marrom.png', name: 'Camisa bege · calça bege · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '175', file: 'gpt2/4-camisa-marrom-calca-bege-calcado-marrom.png', name: 'Camisa marrom · calça bege · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '176', file: 'gpt2/4-camisa-verde-escuro-calca-bege-calcado-marrom.png', name: 'Camisa verde escuro · calça bege · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '177', file: 'gpt2/4-camisa-vermelha-calca-marrom-calcado-marrom.png', name: 'Camisa vermelha · calça marrom · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '178', file: 'gpt2/5-camisa-amarela-calca-marrom-calcado-marrom.png', name: 'Camisa amarela · calça marrom · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '179', file: 'gpt2/5-camisa-bege-calca-marrom-calcado-marrom.png', name: 'Camisa bege · calça marrom · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '180', file: 'gpt2/5-camisa-marrom-calca-marrom-calcado-marrom.png', name: 'Camisa marrom · calça marrom · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '181', file: 'gpt2/5-camisa-verde-escuro-calca-marrom-calcado-marrom.png', name: 'Camisa verde escuro · calça marrom · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '182', file: 'gpt2/5-camisa-vermelha-calca-azul-marinho-calcado-marrom.png', name: 'Camisa vermelha · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '183', file: 'gpt2/6-camisa-amarela-calca-azul-marinho-calcado-marrom.png', name: 'Camisa amarela · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '184', file: 'gpt2/6-camisa-bege-calca-azul-marinho-calcado-marrom.png', name: 'Camisa bege · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '185', file: 'gpt2/6-camisa-marrom-calca-azul-marinho-calcado-marrom.png', name: 'Camisa marrom · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '186', file: 'gpt2/6-camisa-verde-escuro-calca-azul-marinho-calcado-marrom.png', name: 'Camisa verde escuro · calça azul marinho · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '187', file: 'gpt2/6-camisa-vermelha-calca-verde-oliva-calcado-marrom.png', name: 'Camisa vermelha · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '188', file: 'gpt2/7-camisa-amarela-calca-verde-oliva-calcado-marrom.png', name: 'Camisa amarela · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '189', file: 'gpt2/7-camisa-bege-calca-verde-oliva-calcado-marrom.png', name: 'Camisa bege · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '190', file: 'gpt2/7-camisa-marrom-calca-verde-oliva-calcado-marrom.png', name: 'Camisa marrom · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '191', file: 'gpt2/7-camisa-verde-escuro-calca-verde-oliva-calcado-marrom.png', name: 'Camisa verde escuro · calça verde oliva · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '192', file: 'gpt2/7-camisa-vermelha-calca-creme-calcado-marrom.png', name: 'Camisa vermelha · calça creme · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '193', file: 'gpt2/8-camisa-amarela-calca-creme-calcado-marrom.png', name: 'Camisa amarela · calça creme · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '194', file: 'gpt2/8-camisa-bege-calca-creme-calcado-marrom.png', name: 'Camisa bege · calça creme · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '195', file: 'gpt2/8-camisa-marrom-calca-creme-calcado-marrom.png', name: 'Camisa marrom · calça creme · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '196', file: 'gpt2/8-camisa-verde-escuro-calca-creme-calcado-marrom.png', name: 'Camisa verde escuro · calça creme · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '197', file: 'gpt2/8-camisa-vermelha-calca-verde-militar-calcado-marrom.png', name: 'Camisa vermelha · calça verde militar · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '198', file: 'gpt2/9-camisa-amarela-calca-verde-militar-calcado-marrom.png', name: 'Camisa amarela · calça verde militar · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '199', file: 'gpt2/9-camisa-bege-calca-verde-militar-calcado-marrom.png', name: 'Camisa bege · calça verde militar · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '200', file: 'gpt2/9-camisa-marrom-calca-verde-militar-calcado-marrom.png', name: 'Camisa marrom · calça verde militar · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '201', file: 'gpt2/9-camisa-verde-escuro-calca-verde-militar-calcado-marrom.png', name: 'Camisa verde escuro · calça verde militar · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '202', file: 'gpt2/9-camisa-vermelha-calca-vinho-calcado-marrom.png', name: 'Camisa vermelha · calça vinho · calçado marrom', category: 'Look completo', color: 'Vinho' },
  { id: '203', file: 'gpt2/10-camisa-amarela-calca-vinho-calcado-marrom.png', name: 'Camisa amarela · calça vinho · calçado marrom', category: 'Look completo', color: 'Outro' },
  { id: '204', file: 'gpt2/10-camisa-bege-calca-vinho-calcado-marrom.png', name: 'Camisa bege · calça vinho · calçado marrom', category: 'Look completo', color: 'Bege' },
  { id: '205', file: 'gpt2/10-camisa-marrom-calca-vinho-calcado-marrom.png', name: 'Camisa marrom · calça vinho · calçado marrom', category: 'Look completo', color: 'Marrom' },
  { id: '206', file: 'gpt2/10-camisa-verde-escuro-calca-vinho-calcado-marrom.png', name: 'Camisa verde escuro · calça vinho · calçado marrom', category: 'Look completo', color: 'Verde' },
  { id: '207', file: 'gpt2/10-camisa-vermelha-calca-preta-calcado-marrom.png', name: 'Camisa vermelha · calça preta · calçado marrom', category: 'Look completo', color: 'Vinho' },
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
];

let carouselIndex = -1;
let filteredList = [];

// --- Filter ---

const PIECE_COLOR_MAP = {
  branca: 'Branco', branco: 'Branco', 'tenis-branco': 'Branco',
  preta: 'Preto', preto: 'Preto',
  cinza: 'Cinza',
  'cinza-escuro': 'Cinza',
  'cinza-claro': 'Cinza',
  'cinza-pedra': 'Cinza',
  'verde-militar': 'Verde',
  azul: 'Azul',
  'azul-claro': 'Azul',
  'azul-marinho': 'Azul marinho',
  'azul-petroleo': 'Azul marinho',
  vinho: 'Vinho',
  bege: 'Bege',
  marrom: 'Marrom',
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
  'Look completo': 'camisa',
};

function mapPieceColor(slug) {
  return PIECE_COLOR_MAP[slug] || 'Outro';
}

function parseLookColors(file) {
  const match = file.match(/camisa-(.+)-calca-(.+)-calcado-(.+?)(?:-\d+)?\.(?:jpe?g|png)$/i);
  if (!match) return null;
  return {
    camisa: mapPieceColor(match[1]),
    calca: mapPieceColor(match[2]),
    calcado: mapPieceColor(match[3]),
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

function init() {
  populateFilterOptions();

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
