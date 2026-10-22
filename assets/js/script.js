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
let carouselTrigger = null;
const carouselZoom = { scale: 1, x: 0, y: 0, pointers: new Map(), gesture: null };
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
    favoritesList.innerHTML = '<div class="empty-state"><p>Nenhum look salvo nos favoritos ainda.</p></div>';
    return;
  }

  favoritesList.innerHTML = favorites.map((img, index) => `
    <article class="favorite-card" data-index="${index}">
      <div class="favorite-card-image" data-open="${index}">
        <img src="${escapeAttr(img.imageDataUrl || imageSrc(img))}" alt="${escapeAttr(formatLookName(img.name) || 'Imagem')}" loading="lazy">
      </div>
      <div class="favorite-card-body">
        ${img.name ? `<div class="favorite-card-name">${formatLookParts(img.name)}</div>` : ''}
        <button type="button" class="favorite-remove" data-remove="${index}" aria-label="Desfavoritar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/>
          </svg>
        </button>
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
  if (!button) return;
  const isFavorite = currentLook !== null && favorites.some((item) => item.file === currentLook.file);
  button.disabled = !currentLook || savingFavorite;
  button.classList.toggle('is-favorite', isFavorite);
  button.setAttribute('aria-pressed', String(isFavorite));
  const label = savingFavorite
    ? 'Salvando favorito...'
    : isFavorite
      ? 'Desfavoritar'
      : 'Favoritar';
  button.setAttribute('aria-label', label);
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

function openCarousel(index, items = favorites) {
  if (!items.length || index < 0 || index >= items.length) return;
  carouselItems = items.slice();
  carouselTrigger = document.activeElement;
  carouselIndex = index;
  document.getElementById('carousel-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  updateCarouselView();
  document.getElementById('carousel-close').focus();
}

function closeCarousel() {
  document.getElementById('carousel-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  carouselIndex = -1;
  resetCarouselZoom();
  carouselTrigger?.focus();
  carouselTrigger = null;
}

function updateCarouselView() {
  const img = carouselItems[carouselIndex];
  if (!img) return;

  document.getElementById('carousel-image').src = img.imageDataUrl || imageSrc(img);
  document.getElementById('carousel-image').alt = formatLookName(img.name) || 'Imagem';
  resetCarouselZoom();

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

function updateCarouselZoom() {
  const image = document.getElementById('carousel-image');
  const viewport = image.parentElement;
  const maxX = Math.max(0, (image.offsetWidth * carouselZoom.scale - viewport.clientWidth) / 2);
  const maxY = Math.max(0, (image.offsetHeight * carouselZoom.scale - viewport.clientHeight) / 2);
  carouselZoom.x = Math.max(-maxX, Math.min(maxX, carouselZoom.x));
  carouselZoom.y = Math.max(-maxY, Math.min(maxY, carouselZoom.y));
  image.style.transform = `translate(${carouselZoom.x}px, ${carouselZoom.y}px) scale(${carouselZoom.scale})`;
  viewport.classList.toggle('is-zoomed', carouselZoom.scale > 1);
  viewport.classList.toggle('is-dragging', carouselZoom.scale > 1 && carouselZoom.pointers.size > 0);
  document.getElementById('carousel-zoom-level').textContent = `${Math.round(carouselZoom.scale * 100)}%`;
  document.getElementById('carousel-zoom-out').disabled = carouselZoom.scale <= 1;
  document.getElementById('carousel-zoom-in').disabled = carouselZoom.scale >= 4;
  document.getElementById('carousel-zoom-reset').disabled = carouselZoom.scale === 1;
}

function resetCarouselZoom() {
  Object.assign(carouselZoom, { scale: 1, x: 0, y: 0, gesture: null });
  carouselZoom.pointers.clear();
  updateCarouselZoom();
}

function setCarouselZoom(scale, clientX, clientY) {
  const rect = document.getElementById('carousel-image').parentElement.getBoundingClientRect();
  const x = clientX == null ? 0 : clientX - rect.left - rect.width / 2;
  const y = clientY == null ? 0 : clientY - rect.top - rect.height / 2;
  const next = Math.max(1, Math.min(4, scale));
  const ratio = next / carouselZoom.scale;
  carouselZoom.x = x - (x - carouselZoom.x) * ratio;
  carouselZoom.y = y - (y - carouselZoom.y) * ratio;
  carouselZoom.scale = next;
  updateCarouselZoom();
}

function startCarouselGesture() {
  const points = [...carouselZoom.pointers.values()];
  carouselZoom.gesture = null;
  if (points.length === 1) {
    carouselZoom.gesture = { ...points[0], panX: carouselZoom.x, panY: carouselZoom.y };
  } else if (points.length >= 2) {
    const [a, b] = points;
    carouselZoom.gesture = {
      x: (a.x + b.x) / 2, y: (a.y + b.y) / 2,
      distance: Math.hypot(b.x - a.x, b.y - a.y),
      scale: carouselZoom.scale, panX: carouselZoom.x, panY: carouselZoom.y,
    };
  }
  updateCarouselZoom();
}

function initCarouselZoom() {
  const image = document.getElementById('carousel-image');
  const viewport = image.parentElement;
  document.getElementById('carousel-zoom-in').addEventListener('click', () => setCarouselZoom(carouselZoom.scale + 0.5));
  document.getElementById('carousel-zoom-out').addEventListener('click', () => setCarouselZoom(carouselZoom.scale - 0.5));
  document.getElementById('carousel-zoom-reset').addEventListener('click', resetCarouselZoom);
  image.addEventListener('load', updateCarouselZoom);
  window.addEventListener('resize', () => {
    if (carouselIndex >= 0) {
      updateCarouselZoom();
      startCarouselGesture();
    }
  });
  viewport.addEventListener('dblclick', (event) => {
    event.preventDefault();
    setCarouselZoom(carouselZoom.scale > 1 ? 1 : 2, event.clientX, event.clientY);
  });
  viewport.addEventListener('wheel', (event) => {
    if (carouselIndex < 0) return;
    event.preventDefault();
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientHeight : 1;
    setCarouselZoom(carouselZoom.scale * Math.exp(-event.deltaY * unit * 0.002), event.clientX, event.clientY);
  }, { passive: false });
  viewport.addEventListener('pointerdown', (event) => {
    if (carouselIndex < 0 || (event.pointerType === 'mouse' && event.button !== 0)) return;
    viewport.setPointerCapture(event.pointerId);
    carouselZoom.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    startCarouselGesture();
  });
  viewport.addEventListener('pointermove', (event) => {
    if (!carouselZoom.pointers.has(event.pointerId)) return;
    carouselZoom.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const points = [...carouselZoom.pointers.values()];
    const gesture = carouselZoom.gesture;
    if (!gesture) return;
    if (points.length === 1 && carouselZoom.scale > 1) {
      carouselZoom.x = gesture.panX + points[0].x - gesture.x;
      carouselZoom.y = gesture.panY + points[0].y - gesture.y;
    } else if (points.length >= 2 && gesture.distance > 0) {
      const [a, b] = points;
      const rect = viewport.getBoundingClientRect();
      const scale = Math.max(1, Math.min(4, gesture.scale * Math.hypot(b.x - a.x, b.y - a.y) / gesture.distance));
      const ratio = scale / gesture.scale;
      carouselZoom.x = (a.x + b.x) / 2 - rect.left - rect.width / 2 - (gesture.x - rect.left - rect.width / 2 - gesture.panX) * ratio;
      carouselZoom.y = (a.y + b.y) / 2 - rect.top - rect.height / 2 - (gesture.y - rect.top - rect.height / 2 - gesture.panY) * ratio;
      carouselZoom.scale = scale;
    }
    updateCarouselZoom();
  });
  const endGesture = (event) => {
    if (!carouselZoom.pointers.delete(event.pointerId)) return;
    startCarouselGesture();
  };
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((type) => viewport.addEventListener(type, endGesture));
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
  initCarouselZoom();
  favorites = loadFavorites();
  renderFavorites();
  updateFavoriteButton();

  document.getElementById('btn-toggle-favorite').addEventListener('click', () => {
    if (currentLook) toggleFavorite(currentLook);
  });

  const expandButton = document.getElementById('btn-expand-preview');
  expandButton.addEventListener('click', () => {
    if (currentLook) openCarousel(0, [currentLook]);
  });

  window.addEventListener('wardrobe:current-look', (event) => {
    currentLook = event.detail?.file
      ? { file: event.detail.file, name: event.detail.name || '' }
      : null;
    expandButton.disabled = !currentLook;
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
