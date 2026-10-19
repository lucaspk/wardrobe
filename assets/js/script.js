/* Guarda-roupa — combinador, favoritos e guias */

const COLOR_HEX = {
  Branco: '#F2F0EC',
  Preto: '#1A1A1A',
  'Cinza claro': '#B0B0AE',
  'Cinza pedra': '#8A8880',
  Azul: '#A8C8E0',
  'Azul marinho': '#1E3A5F',
  Vinho: '#6B2D3C',
  Ferrugem: '#B85A38',
  Bege: '#D4C4A8',
  Cáqui: '#B8A878',
  Marrom: '#6B4A32',
  Caramelo: '#A87848',
  Verde: '#5A6840',
  Lilás: '#D4C4E8',
  Rosa: '#F0C4C8',
  Amarelo: '#F5E6A8',
};



let carouselIndex = -1;
let carouselItems = [];
let favorites = [];
let currentLook = null;
let savingFavorite = false;
let favoritesStorageError = '';

const FAVORITES_STORAGE_KEY = 'wardrobe-favorites';

// --- Favorites ---

function escapeHtml(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function formatLookName(name) {
  if (!name) return '';
  return name.split(' · ').map((part) => {
    const trimmed = part.trim();
    if (!trimmed) return trimmed;
    return trimmed.charAt(0).toLocaleUpperCase('pt-BR') + trimmed.slice(1);
  }).join(' · ');
}

function getLookPartColor(part) {
  const normalized = part
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .replace(/[-/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const colors = [
    { names: ['cinza claro'], hex: COLOR_HEX['Cinza claro'] },
    { names: ['cinza pedra', 'cinza escuro'], hex: COLOR_HEX['Cinza pedra'] },
    { names: ['azul marinho'], hex: COLOR_HEX['Azul marinho'] },
    { names: ['azul claro', 'azul'], hex: COLOR_HEX.Azul },
    { names: ['verde militar', 'verde oliva', 'verde escuro', 'verde'], hex: COLOR_HEX.Verde },
    { names: ['branco', 'branca'], hex: COLOR_HEX.Branco },
    { names: ['preto', 'preta'], hex: COLOR_HEX.Preto },
    { names: ['vinho'], hex: COLOR_HEX.Vinho },
    { names: ['ferrugem', 'laranja queimado'], hex: COLOR_HEX.Ferrugem },
    { names: ['bege'], hex: COLOR_HEX.Bege },
    { names: ['caqui'], hex: COLOR_HEX['Cáqui'] },
    { names: ['marrom'], hex: COLOR_HEX.Marrom },
    { names: ['caramelo'], hex: COLOR_HEX.Caramelo },
    { names: ['lilas'], hex: COLOR_HEX.Lilás },
    { names: ['rosa'], hex: COLOR_HEX.Rosa },
    { names: ['amarelo claro', 'amarelo', 'amarela'], hex: COLOR_HEX.Amarelo },
  ];
  const match = colors.find(({ names }) => names.some((color) => normalized.endsWith(color)));
  return match?.hex || null;
}

function formatLookParts(name) {
  if (!name) return '';
  return name.split(' · ').map((part) => {
    const color = getLookPartColor(part);
    const swatch = color
      ? `<span class="look-part-swatch" style="--part-color: ${color}" aria-hidden="true"></span>`
      : '';
    return `<span class="look-part">${swatch}${escapeHtml(formatLookName(part))}</span>`;
  }).join('');
}

function imageSrc(item) {
  const filename = item.file.split('/').pop().replace(/\.png$/i, '.webp');
  return `gpt/compressed/${filename}`;
}

function renderFavorites() {
  const favoritesList = document.getElementById('favorites-list');
  if (!favoritesList) return;
  const status = document.getElementById('favorites-status');
  if (status) status.textContent = favoritesStorageError;

  if (!favorites.length) {
    carouselItems = [];
    favoritesList.innerHTML = '<div class="empty-state"><p>Nenhum look salvo nos favoritos ainda.</p></div>';
    return;
  }

  carouselItems = favorites;
  favoritesList.innerHTML = favorites.map((img, index) => `
    <article class="favorite-card" data-index="${index}">
      <div class="favorite-card-image" data-open="${index}">
        <img src="${escapeAttr(img.imageDataUrl || imageSrc(img))}" alt="${escapeAttr(formatLookName(img.name) || 'Imagem')}" loading="lazy">
      </div>
      <div class="favorite-card-body">
        ${img.name ? `<div class="favorite-card-name">${formatLookParts(img.name)}</div>` : ''}
        <button type="button" class="favorite-remove" data-remove="${index}">Desfavoritar</button>
      </div>
    </article>
  `).join('');

  favoritesList.querySelectorAll('[data-open]').forEach((el) => {
    el.addEventListener('click', () => openCarousel(Number(el.dataset.open)));
  });
  favoritesList.querySelectorAll('[data-remove]').forEach((el) => {
    el.addEventListener('click', () => {
      const index = Number(el.dataset.remove);
      const item = favorites[index];
      if (item) toggleFavorite(item);
    });
  });
}

function loadFavorites() {
  try {
    favoritesStorageError = '';
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) throw new Error('O conteúdo salvo não é uma lista.');
    return parsed.filter((item) =>
      item
      && typeof item.file === 'string'
      && /^[a-z0-9-]+\.png$/i.test(item.file)
      && typeof item.name === 'string'
      && typeof item.imageDataUrl === 'string'
      && /^data:image\/(?:webp|png|jpeg);base64,/i.test(item.imageDataUrl)
    );
  } catch (error) {
    favoritesStorageError = 'Não foi possível carregar os favoritos do localStorage neste navegador.';
    console.error(favoritesStorageError, error);
    return [];
  }
}

function updateFavoriteButton() {
  const button = document.getElementById('btn-toggle-favorite');
  const label = document.getElementById('favorite-toggle-label');
  if (!button || !label) return;
  const isFavorite = currentLook !== null && favorites.some((item) => item.file === currentLook.file);
  button.disabled = !currentLook || savingFavorite;
  button.classList.toggle('is-favorite', isFavorite);
  button.setAttribute('aria-pressed', String(isFavorite));
  label.textContent = savingFavorite
    ? 'Salvando favorito...'
    : isFavorite
      ? 'Desfavoritar'
      : 'Favoritar';
}

async function createFavoriteImageData(item) {
  const image = new Image();
  image.src = imageSrc(item);
  await image.decode();

  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Não foi possível preparar a imagem para salvar.');
  context.drawImage(image, 0, 0);
  return canvas.toDataURL('image/webp', 0.85);
}

async function toggleFavorite(item) {
  const isFavorite = favorites.some((favorite) => favorite.file === item.file);
  const actionStatus = document.getElementById('favorite-action-status');
  let updated;
  if (isFavorite) {
    updated = favorites.filter((favorite) => favorite.file !== item.file);
  } else {
    savingFavorite = true;
    updateFavoriteButton();
    try {
      const imageDataUrl = await createFavoriteImageData(item);
      updated = [...favorites, { file: item.file, name: item.name, imageDataUrl }];
    } catch (error) {
      favoritesStorageError = 'Não foi possível preparar a imagem para salvar nos favoritos.';
      if (actionStatus) actionStatus.textContent = favoritesStorageError;
      console.error(favoritesStorageError, error);
      renderFavorites();
      return;
    } finally {
      savingFavorite = false;
      updateFavoriteButton();
    }
  }

  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    favoritesStorageError = 'O localStorage deste navegador está indisponível ou sem espaço para salvar este favorito.';
    if (actionStatus) actionStatus.textContent = favoritesStorageError;
    console.error(favoritesStorageError, error);
    renderFavorites();
    return;
  }

  favoritesStorageError = '';
  if (actionStatus) actionStatus.textContent = '';
  favorites = updated;
  renderFavorites();
  updateFavoriteButton();
}

// --- Carousel ---

function openCarousel(index) {
  if (!carouselItems.length || index < 0 || index >= carouselItems.length) return;
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
  const img = carouselItems[carouselIndex];
  if (!img) return;

  document.getElementById('carousel-image').src = img.imageDataUrl || imageSrc(img);
  document.getElementById('carousel-image').alt = formatLookName(img.name) || 'Imagem';

  const parts = [];
  if (img.name) parts.push(formatLookName(img.name));
  if (img.category) parts.push(img.category);
  if (img.color) parts.push(img.color);
  document.getElementById('carousel-info').textContent = parts.join(' · ') || '';

  document.getElementById('carousel-counter').textContent =
    `${carouselIndex + 1} / ${carouselItems.length}`;

  document.getElementById('carousel-prev').style.visibility =
    carouselItems.length > 1 ? 'visible' : 'hidden';
  document.getElementById('carousel-next').style.visibility =
    carouselItems.length > 1 ? 'visible' : 'hidden';
}

function showNextImage() {
  if (!carouselItems.length) return;
  carouselIndex = (carouselIndex + 1) % carouselItems.length;
  updateCarouselView();
}

function showPreviousImage() {
  if (!carouselItems.length) return;
  carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarouselView();
}

// --- Init ---

function initViewTabs() {
  const panelFavorites = document.getElementById('panel-favorites');
  const panelCombinator = document.getElementById('panel-combinator');
  const panelGuide = document.getElementById('panel-guide');
  const btnFavorites = document.getElementById('view-favorites');
  const btnCombinator = document.getElementById('view-combinator');
  const btnGuide = document.getElementById('view-guide');
  if (!panelFavorites || !panelCombinator || !panelGuide || !btnFavorites || !btnCombinator || !btnGuide) return;

  function setView(view) {
    const panels = { favorites: panelFavorites, combinator: panelCombinator, guide: panelGuide };
    const buttons = { favorites: btnFavorites, combinator: btnCombinator, guide: btnGuide };
    Object.entries(panels).forEach(([name, panel]) => {
      const active = name === view;
      panel.classList.toggle('hidden', !active);
      buttons[name].classList.toggle('active', active);
      buttons[name].setAttribute('aria-selected', String(active));
    });
    document.body.classList.toggle('view-combinator', view === 'combinator');
    if (carouselIndex >= 0 && view !== 'favorites') closeCarousel();
    const hash = view === 'combinator' ? '#combinar' : view === 'guide' ? '#guia' : '#favoritos';
    if (location.hash !== hash) history.replaceState(null, '', hash || location.pathname);
  }

  btnFavorites.addEventListener('click', () => setView('favorites'));
  btnCombinator.addEventListener('click', () => setView('combinator'));
  btnGuide.addEventListener('click', () => setView('guide'));
  const initialView = location.hash === '#favoritos'
    ? 'favorites'
    : location.hash === '#guia'
      ? 'guide'
      : 'combinator';
  setView(initialView);
  window.addEventListener('hashchange', () => {
    const view = location.hash === '#guia'
      ? 'guide'
      : location.hash === '#favoritos'
        ? 'favorites'
        : 'combinator';
    setView(view);
  });
}

function init() {
  initViewTabs();
  favorites = loadFavorites();
  renderFavorites();
  updateFavoriteButton();

  document.getElementById('btn-toggle-favorite').addEventListener('click', () => {
    if (currentLook) toggleFavorite(currentLook);
  });

  window.addEventListener('wardrobe:current-look', (event) => {
    currentLook = event.detail?.file
      ? { file: event.detail.file, name: event.detail.name || '' }
      : null;
    updateFavoriteButton();
  });

  window.addEventListener('storage', (event) => {
    if (event.key !== FAVORITES_STORAGE_KEY && event.key !== null) return;
    favorites = loadFavorites();
    renderFavorites();
    updateFavoriteButton();
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

}

document.addEventListener('DOMContentLoaded', init);
