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
];

let carouselIndex = -1;
let filteredList = [];

// --- Filter ---

const PIECE_COLOR_MAP = {
  branca: 'Branco', branco: 'Branco',
  preta: 'Preto', preto: 'Preto',
  cinza: 'Cinza',
  'azul-claro': 'Azul',
  'azul-marinho': 'Azul marinho',
  'azul-petroleo': 'Azul marinho',
  vinho: 'Vinho',
  bege: 'Bege',
  marrom: 'Marrom',
  verde: 'Verde', 'verde-claro': 'Verde', 'verde-oliva': 'Verde',
  amarela: 'Outro',
  ferrugem: 'Bordô',
  'laranja-queimado': 'Bordô',
  lilas: 'Outro',
  rosa: 'Outro',
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
  const match = file.match(/^camisa-(.+)-calca-(.+)-calcado-(.+?)(?:-\d+)?\.jpg$/);
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
