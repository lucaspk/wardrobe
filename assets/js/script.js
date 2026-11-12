/* Guarda-roupa — combinador, favoritos e guias */

const COLOR_HEX = {
  Branco: '#F2F0EC',
  Preto: '#1A1A1A',
  'Cinza claro': '#B0B0AE',
  'Cinza pedra': '#8A8880',
  Grafite: '#45484C',
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
  'Azul petróleo': '#1F6268',
  Mostarda: '#BA8D27',
  Camel: '#BC9263',
};


// Looks cadastrados: piloto casual e série de terno chumbo / grafite.
window.WARDROBE_GENERATED_LOOKS = Object.freeze([
  // Piloto casual: camiseta branca + bermuda bege, tênis branco ou loafer caramelo.
  'camiseta-branca-shorts-bege-calcado-branco.png',
  'camiseta-branca-shorts-bege-calcado-caramelo.png',
  'terno-grafite-camisa-azul-claro-calca-grafite-calcado-preto.png',
  'terno-grafite-camisa-azul-claro-calca-grafite-calcado-marrom.png',
  'terno-grafite-camisa-azul-claro-calca-grafite-calcado-branco.png',
  'terno-grafite-camisa-azul-claro-calca-grafite-calcado-cinza-claro.png',
  'terno-grafite-camisa-azul-claro-calca-grafite-calcado-bege.png',
  'terno-grafite-camisa-azul-claro-calca-grafite-calcado-caramelo.png',
  'terno-grafite-camisa-rosa-claro-calca-grafite-calcado-preto.png',
  'terno-grafite-camisa-rosa-claro-calca-grafite-calcado-marrom.png',
  'terno-grafite-camisa-rosa-claro-calca-grafite-calcado-branco.png',
  'terno-grafite-camisa-rosa-claro-calca-grafite-calcado-cinza-claro.png',
  'terno-grafite-camisa-rosa-claro-calca-grafite-calcado-bege.png',
  'terno-grafite-camisa-rosa-claro-calca-grafite-calcado-caramelo.png',
  'terno-grafite-camisa-branco-calca-grafite-calcado-preto.png',
  'terno-grafite-camisa-branco-calca-grafite-calcado-marrom.png',
  'terno-grafite-camisa-branco-calca-grafite-calcado-branco.png',
  'terno-grafite-camisa-branco-calca-grafite-calcado-cinza-claro.png',
  'terno-grafite-camisa-branco-calca-grafite-calcado-bege.png',
  'terno-grafite-camisa-branco-calca-grafite-calcado-caramelo.png',
  'terno-grafite-camisa-lilas-claro-calca-grafite-calcado-preto.png',
  'terno-grafite-camisa-lilas-claro-calca-grafite-calcado-marrom.png',
  'terno-grafite-camisa-lilas-claro-calca-grafite-calcado-branco.png',
  'terno-grafite-camisa-lilas-claro-calca-grafite-calcado-cinza-claro.png',
  'terno-grafite-camisa-lilas-claro-calca-grafite-calcado-bege.png',
  'terno-grafite-camisa-lilas-claro-calca-grafite-calcado-caramelo.png',
  'terno-grafite-camisa-preto-calca-grafite-calcado-preto.png',
  'terno-grafite-camisa-preto-calca-grafite-calcado-marrom.png',
  'terno-grafite-camisa-preto-calca-grafite-calcado-branco.png',
  'terno-grafite-camisa-preto-calca-grafite-calcado-cinza-claro.png',
  'terno-grafite-camisa-preto-calca-grafite-calcado-bege.png',
  'terno-grafite-camisa-preto-calca-grafite-calcado-caramelo.png',
  'terno-grafite-camisa-verde-oliva-calca-grafite-calcado-preto.png',
  'terno-grafite-camisa-verde-oliva-calca-grafite-calcado-marrom.png',
  'terno-grafite-camisa-verde-oliva-calca-grafite-calcado-branco.png',
  'terno-grafite-camisa-verde-oliva-calca-grafite-calcado-cinza-claro.png',
  'terno-grafite-camisa-verde-oliva-calca-grafite-calcado-bege.png',
  'terno-grafite-camisa-verde-oliva-calca-grafite-calcado-caramelo.png',
  'terno-grafite-camisa-amarelo-claro-calca-grafite-calcado-preto.png',
  'terno-grafite-camisa-amarelo-claro-calca-grafite-calcado-marrom.png',
  'terno-grafite-camisa-amarelo-claro-calca-grafite-calcado-branco.png',
  'terno-grafite-camisa-amarelo-claro-calca-grafite-calcado-cinza-claro.png',
  'terno-grafite-camisa-amarelo-claro-calca-grafite-calcado-bege.png',
  'terno-grafite-camisa-amarelo-claro-calca-grafite-calcado-caramelo.png',
  'terno-grafite-camisa-vinho-calca-grafite-calcado-preto.png',
  'terno-grafite-camisa-vinho-calca-grafite-calcado-marrom.png',
  'terno-grafite-camisa-vinho-calca-grafite-calcado-branco.png',
  'terno-grafite-camisa-vinho-calca-grafite-calcado-cinza-claro.png',
  'terno-grafite-camisa-vinho-calca-grafite-calcado-bege.png',
  'terno-grafite-camisa-vinho-calca-grafite-calcado-caramelo.png',
]);

let carouselIndex = -1;
let carouselItems = [];
let carouselTrigger = null;
let carouselOrigin = null;
let carouselOriginFile = null;
let carouselMotion = null;
let carouselBodyOverflow = '';
let carouselBackgroundInert = false;
const carouselZoom = { scale: 1, x: 0, y: 0, pointers: new Map(), gesture: null };
let favorites = [];
let currentLook = null;
let savingFavorite = false;
let favoritesStorageError = '';
let exportingFavorites = false;
const pendingFavoriteEntries = new Set();
const favoriteAnimationTimers = new WeakMap();

const FAVORITES_STORAGE_KEY = 'wardrobe-favorites';

// --- Favorites ---

function animateFavoriteElement(element, className, duration) {
  clearTimeout(favoriteAnimationTimers.get(element));
  element.classList.remove(className);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  void element.offsetWidth;
  element.classList.add(className);
  favoriteAnimationTimers.set(element, setTimeout(() => {
    element.classList.remove(className);
    favoriteAnimationTimers.delete(element);
  }, duration));
}

function animateFavoriteButton(button) {
  animateFavoriteElement(button, 'is-popping', 300);
}

function animatePendingFavoriteEntries() {
  const panel = document.getElementById('panel-favorites');
  if (!panel || panel.classList.contains('hidden')) return;
  document.querySelectorAll('#favorites-list .favorite-card').forEach((card) => {
    const item = favorites[Number(card.dataset.index)];
    if (item && pendingFavoriteEntries.delete(item.file)) {
      animateFavoriteElement(card, 'is-entering', 500);
    }
  });
}

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
    { names: ['chumbo grafite', 'chumbo', 'grafite'], hex: COLOR_HEX.Grafite },
    { names: ['azul petroleo (teal)', 'azul petroleo', 'teal'], hex: COLOR_HEX['Azul petróleo'] },
    { names: ['mostarda'], hex: COLOR_HEX.Mostarda },
    { names: ['camel'], hex: COLOR_HEX.Camel },
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
    { names: ['lilas claro', 'lilas'], hex: COLOR_HEX.Lilás },
    { names: ['rosa claro', 'rosa'], hex: COLOR_HEX.Rosa },
    { names: ['amarelo claro', 'amarelo', 'amarela'], hex: COLOR_HEX.Amarelo },
  ];
  const match = colors.find(({ names }) => names.some((color) => normalized.endsWith(color)));
  return match?.hex || null;
}

function formatFavoriteColors(name) {
  if (!name) return '';
  const parts = name.split(' · ').map((part) => ({
    label: formatLookName(part.trim()),
    color: getLookPartColor(part),
  }));
  const suit = parts.find(({ label }) => /^terno\s/i.test(label));
  const colorName = (label) => label.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .replace(/^(?:terno|calca)\s+/, '')
    .replace(/\bbranca\b/g, 'branco')
    .replace(/\bpreta\b/g, 'preto');
  return parts.filter(({ label, color }) => {
    const matchingTrousers = suit && /^cal[çc]a\s/i.test(label) && colorName(label) === colorName(suit.label);
    return color && !matchingTrousers;
  }).map(({ label, color }) => {
    return `<span class="favorite-color" role="img" aria-label="${escapeAttr(label)}" title="${escapeAttr(label)}" style="--part-color: ${color}"></span>`;
  }).join('');
}

function imageSrc(item) {
  const filename = item.file.split('/').pop().replace(/\.png$/i, '.webp');
  return `gpt/compressed/${filename}`;
}

function favoriteDownload(item) {
  const source = item.imageDataUrl || imageSrc(item);
  const mime = /^data:image\/(png|jpeg|webp);base64,/i.exec(source)?.[1].toLowerCase();
  const extension = mime === 'jpeg' ? 'jpg' : mime || 'webp';
  const basename = item.file.split('/').pop().replace(/\.[^.]+$/, '');
  return { source, filename: `${basename}.${extension}` };
}

function downloadFile(source, filename) {
  const link = document.createElement('a');
  link.href = source;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function downloadLook(item) {
  if (!item) return;
  const { source, filename } = favoriteDownload(item);
  downloadFile(source, filename);
}

function buildFavoritesExport(items) {
  const cards = items.map((item) => {
    if (!/^data:image\/(?:png|jpeg|webp);base64,/i.test(item.imageDataUrl || '')) {
      throw new Error('Uma foto não está disponível para exportação offline.');
    }
    const { source, filename } = favoriteDownload(item);
    const name = escapeAttr(formatLookName(item.name) || 'Look favorito');
    return `<article><img src="${escapeAttr(source)}" alt="${name}"><h2>${name}</h2><a href="${escapeAttr(source)}" download="${escapeAttr(filename)}">Baixar foto</a></article>`;
  }).join('\n');
  return `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Meus looks favoritos</title><style>
body{margin:0;padding:24px;background:#f6f5f1;color:#242424;font:16px/1.5 system-ui,sans-serif}main{max-width:1200px;margin:auto}h1{font-size:26px}p{color:#626262}.looks{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:24px}article{background:white;padding:12px;border-radius:8px}img{display:block;width:100%;height:auto}h2{font-size:16px;font-weight:500}a{color:#333;text-underline-offset:3px}
</style></head><body><main><h1>Meus looks favoritos</h1><p>${items.length} ${items.length === 1 ? 'look salvo' : 'looks salvos'}. Esta cópia inclui as fotos e pode ser aberta sem internet.</p><div class="looks">${cards}</div></main></body></html>`;
}

async function exportFavorites() {
  if (!favorites.length || exportingFavorites) return;
  exportingFavorites = true;
  renderFavorites();
  let objectUrl;
  try {
    const items = await Promise.all(favorites.map(async (item) => ({
      ...item,
      imageDataUrl: item.imageDataUrl || await createFavoriteImageData(item),
    })));
    const html = buildFavoritesExport(items);
    objectUrl = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
    downloadFile(objectUrl, 'favoritos-guarda-roupa.html');
  } catch (error) {
    const status = document.getElementById('favorites-status');
    if (status) status.textContent = 'Não foi possível exportar os favoritos. Tente novamente.';
    console.error('Não foi possível exportar os favoritos.', error);
  } finally {
    exportingFavorites = false;
    document.querySelectorAll('#btn-export-favorites').forEach((button) => {
      button.disabled = !favorites.length;
    });
    if (objectUrl) setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  }
}

function renderFavorites() {
  for (const file of pendingFavoriteEntries) {
    if (!favorites.some((item) => item.file === file)) pendingFavoriteEntries.delete(file);
  }
  document.querySelectorAll('#btn-export-favorites').forEach((button) => {
    button.disabled = !favorites.length || exportingFavorites;
  });
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
      <button type="button" class="favorite-card-image" data-open="${index}" aria-label="Ampliar: ${escapeAttr(formatLookName(img.name) || 'Look favorito')}" aria-haspopup="dialog">
        <img src="${escapeAttr(img.imageDataUrl || imageSrc(img))}" alt="${escapeAttr(formatLookName(img.name) || 'Imagem')}" loading="lazy">
      </button>
      <div class="favorite-card-body">
        ${img.name ? `<div class="favorite-colors" role="group" aria-label="Cores do look">${formatFavoriteColors(img.name)}</div>` : ''}
        <div class="favorite-card-actions">
        <button type="button" class="favorite-download" data-download="${index}" aria-label="Baixar foto: ${escapeAttr(formatLookName(img.name) || 'Look favorito')}" data-tooltip="Baixar foto">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></svg>
        </button>
        <button type="button" class="favorite-remove" data-remove="${index}" aria-label="Desfavoritar: ${escapeAttr(formatLookName(img.name) || 'Look favorito')}" data-tooltip="Desfavoritar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/>
          </svg>
        </button>
        </div>
      </div>
    </article>
  `).join('');

  favoritesList.querySelectorAll('[data-open]').forEach((el) => {
    el.addEventListener('click', () => openCarousel(Number(el.dataset.open), favorites, el));
  });
  favoritesList.querySelectorAll('[data-remove]').forEach((el) => {
    el.addEventListener('click', () => {
      const index = Number(el.dataset.remove);
      const item = favorites[index];
      if (item) toggleFavorite(item);
    });
  });
  favoritesList.querySelectorAll('[data-download]').forEach((el) => {
    el.addEventListener('click', () => downloadLook(favorites[Number(el.dataset.download)]));
  });
  animatePendingFavoriteEntries();
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

function publishFavoriteState(addedFile = null) {
  window.dispatchEvent(new CustomEvent('wardrobe:favorites-changed', {
    detail: {
      files: favorites.map((item) => item.file),
      saving: savingFavorite,
      error: favoritesStorageError,
      addedFile,
    },
  }));
}

function updateFavoriteButton(addedFile = null) {
  const button = document.getElementById('btn-toggle-favorite');
  if (!button) {
    publishFavoriteState(addedFile);
    return;
  }
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
  if (addedFile && currentLook?.file === addedFile) animateFavoriteButton(button);
  publishFavoriteState(addedFile);
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
    updateFavoriteButton();
    return;
  }

  favoritesStorageError = '';
  if (actionStatus) actionStatus.textContent = '';
  favorites = updated;
  if (!isFavorite) pendingFavoriteEntries.add(item.file);
  renderFavorites();
  updateFavoriteButton(isFavorite ? null : item.file);
}

// --- Carousel ---

function photoBounds(image) {
  if (!image?.isConnected || !image.getClientRects().length) return null;
  const rect = image.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  const ratio = image.naturalWidth / image.naturalHeight;
  if (!Number.isFinite(ratio) || !ratio) return null;
  const width = Math.min(rect.width, rect.height * ratio);
  const height = width / ratio;
  return { left: rect.left + (rect.width - width) / 2, top: rect.top + (rect.height - height) / 2, width, height };
}

function findCarouselOrigin() {
  const item = carouselItems[carouselIndex];
  if (!item) return null;
  if (item.file === carouselOriginFile && photoBounds(carouselOrigin)) return carouselOrigin;
  const source = item.imageDataUrl || imageSrc(item);
  return [...document.querySelectorAll('#combo-preview-img, #compare-reference-img, .favorite-card-image img')]
    .find((image) => (image.getAttribute('src') === source || image.src === source) && photoBounds(image)) || null;
}

function transitionCarousel(opening, origin, complete = () => {}) {
  const overlay = document.getElementById('carousel-overlay');
  const image = document.getElementById('carousel-image');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof image.animate !== 'function') {
    complete();
    return;
  }
  const animations = [];
  let clone = null;
  let timeout;
  let finished = false;
  const imageVisibility = image.style.visibility;
  const originVisibility = origin?.style.visibility;
  const motion = { opening, finish };
  carouselMotion = motion;
  overlay.classList.add('is-transitioning');
  overlay.style.opacity = opening ? '0' : '1';
  image.style.visibility = 'hidden';
  // Decoding can stall too: the dialog must still become usable in that case.
  timeout = setTimeout(finish, 350);

  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(timeout);
    animations.forEach((animation) => animation.cancel());
    clone?.remove();
    image.style.visibility = imageVisibility;
    if (origin) origin.style.visibility = originVisibility;
    overlay.style.opacity = '';
    overlay.classList.remove('is-transitioning');
    if (carouselMotion === motion) carouselMotion = null;
    complete();
  }

  // Decode before measuring the enlarged photo; closing or reopening invalidates this work.
  Promise.resolve(opening && typeof image.decode === 'function' ? image.decode() : undefined)
    .catch(() => {})
    .then(() => {
      if (finished) return;
      const small = photoBounds(origin);
      const large = photoBounds(image);
      const options = { duration: 300, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' };
      if (small && large) {
        const from = opening ? small : large;
        const to = opening ? large : small;
        clone = image.cloneNode(false);
        clone.removeAttribute('id');
        clone.removeAttribute('style');
        clone.className = 'carousel-transition-image';
        clone.alt = '';
        clone.setAttribute('aria-hidden', 'true');
        Object.assign(clone.style, { left: `${from.left}px`, top: `${from.top}px`, width: `${from.width}px`, height: `${from.height}px` });
        document.body.appendChild(clone);
        origin.style.visibility = 'hidden';
        const viewport = image.parentElement.getBoundingClientRect();
        const croppedEdges = [
          viewport.top - from.top,
          from.left + from.width - viewport.right,
          from.top + from.height - viewport.bottom,
          viewport.left - from.left,
        ].map((edge) => `${Math.max(0, edge)}px`).join(' ');
        const clip = opening ? 'inset(0px)' : `inset(${croppedEdges})`;
        animations.push(clone.animate([
          { transform: 'translate(0, 0) scale(1, 1)', clipPath: clip },
          { transform: `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(${to.width / from.width}, ${to.height / from.height})`, clipPath: 'inset(0px)' },
        ], options));
      } else {
        image.style.visibility = imageVisibility;
      }
      animations.push(overlay.animate([{ opacity: opening ? 0 : 1 }, { opacity: opening ? 1 : 0 }], options));
      Promise.all(animations.map((animation) => animation.finished)).then(finish, finish);
      clearTimeout(timeout);
      timeout = setTimeout(finish, 350);
    });
}

function openCarousel(index, items = favorites, trigger = document.activeElement) {
  if (!items.length || index < 0 || index >= items.length) return;
  carouselMotion?.finish();
  carouselItems = items.slice();
  carouselTrigger = trigger;
  carouselOrigin = trigger?.closest('.favorite-card, .combo-preview-frame, .compare-reference-frame')?.querySelector('img') || null;
  carouselOriginFile = items[index].file;
  const background = document.querySelector('.app');
  if (carouselIndex < 0) {
    carouselBodyOverflow = document.body.style.overflow;
    carouselBackgroundInert = background?.inert ?? false;
  }
  if (background) background.inert = true;
  carouselIndex = index;
  document.getElementById('carousel-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  updateCarouselView();
  transitionCarousel(true, findCarouselOrigin());
  document.getElementById('carousel-close').focus({ preventScroll: true });
}

function closeCarousel() {
  if (carouselIndex < 0 || carouselMotion?.opening === false) return;
  carouselMotion?.finish();
  transitionCarousel(false, findCarouselOrigin(), () => {
    document.getElementById('carousel-overlay').classList.add('hidden');
    document.body.style.overflow = carouselBodyOverflow;
    const background = document.querySelector('.app');
    if (background) background.inert = carouselBackgroundInert;
    carouselIndex = -1;
    resetCarouselZoom();
    carouselTrigger?.focus({ preventScroll: true });
    carouselTrigger = null;
    carouselOrigin = null;
    carouselOriginFile = null;
  });
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
  if (!carouselItems.length || carouselMotion) return;
  carouselIndex = (carouselIndex + 1) % carouselItems.length;
  updateCarouselView();
}

function showPreviousImage() {
  if (!carouselItems.length || carouselMotion) return;
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
  if (carouselMotion) return;
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
  document.getElementById('carousel-zoom-reset').addEventListener('click', () => {
    if (!carouselMotion) resetCarouselZoom();
  });
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
    if (carouselIndex < 0 || carouselMotion || (event.pointerType === 'mouse' && event.button !== 0)) return;
    viewport.setPointerCapture(event.pointerId);
    carouselZoom.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    startCarouselGesture();
  });
  viewport.addEventListener('pointermove', (event) => {
    if (carouselMotion || !carouselZoom.pointers.has(event.pointerId)) return;
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
    if (view === 'favorites') animatePendingFavoriteEntries();
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
    if (currentLook) openCarousel(0, [currentLook], expandButton);
  });

  window.addEventListener('wardrobe:current-look', (event) => {
    currentLook = event.detail?.file
      ? { file: event.detail.file, name: event.detail.name || '' }
      : null;
    expandButton.disabled = !currentLook;
    updateFavoriteButton();
  });

  const eventLook = (event) => {
    const item = event.detail;
    if (!item || typeof item.file !== 'string' || !/^[a-z0-9-]+\.png$/i.test(item.file)
      || typeof item.name !== 'string') return null;
    return { file: item.file, name: item.name };
  };

  window.addEventListener('wardrobe:toggle-favorite', (event) => {
    const item = eventLook(event);
    if (item && !savingFavorite) toggleFavorite(item);
  });

  window.addEventListener('wardrobe:open-look', (event) => {
    const item = eventLook(event);
    if (item) openCarousel(0, [item], document.getElementById('btn-expand-reference'));
  });

  window.addEventListener('wardrobe:request-favorites', () => publishFavoriteState());

  window.addEventListener('storage', (event) => {
    if (event.key !== FAVORITES_STORAGE_KEY && event.key !== null) return;
    pendingFavoriteEntries.clear();
    favorites = loadFavorites();
    renderFavorites();
    updateFavoriteButton();
  });

  document.getElementById('carousel-close').addEventListener('click', closeCarousel);
  document.getElementById('carousel-prev').addEventListener('click', showPreviousImage);
  document.getElementById('carousel-next').addEventListener('click', showNextImage);
  document.getElementById('carousel-download')?.addEventListener('click', () => downloadLook(carouselItems[carouselIndex]));
  document.getElementById('btn-export-favorites')?.addEventListener('click', exportFavorites);

  document.getElementById('carousel-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'carousel-overlay') closeCarousel();
  });

  document.addEventListener('keydown', (e) => {
    if (carouselIndex < 0 || e.defaultPrevented) return;
    if (e.key === 'Tab') {
      const controls = [...document.querySelectorAll('#carousel-overlay button:not(:disabled)')]
        .filter((button) => button.getClientRects().length && getComputedStyle(button).visibility !== 'hidden');
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (first && ((e.shiftKey && document.activeElement === first) || (!e.shiftKey && document.activeElement === last))) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      }
    }
    if (e.key === 'Escape') closeCarousel();
    if (e.key === 'ArrowLeft') showPreviousImage();
    if (e.key === 'ArrowRight') showNextImage();
  });

}

document.addEventListener('DOMContentLoaded', init);
