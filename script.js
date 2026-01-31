// =======================
// CONFIG
// =======================
const PHONE_NUMBER = "5511988887777"; // <-- TROQUE AQUI PARA O NÚMERO DO WHATSAPP

// =======================
// VARIÁVEIS GLOBAIS
// =======================
let currentProduct = null;
let modalImages = [];
let currentImageIndex = 0;

// =======================
// PRODUTOS
// =======================
const products = [
  {
    id: 1,
    name: "Camisa do São Paulo I 25 ",
    category: "Brasileirão",
    price: 150.00,
    oldPrice: 349.90,
    images: [
      "img/SÃO PAULO/sao.paulo.frente.jpg",
      "img/SÃO PAULO/sao.paulo.costas.jpg",
      "img/SÃO PAULO/sao.paulo.logo.jpg"
    
    ],
  },
  {
    id: 2,
    name: "Manto Flamengo Preta ",
    category: "Brasileirão",
    price: 150.00,
    oldPrice: 249.90,
    images: [
      "img/FLAMENGO/flamengo.frente.jpg",
      "img/FLAMENGO/flamengo.costas.jpg",
      "img/FLAMENGO/flamengo.logo.jpg"
      
    ],
    discount: 28
  },
  {
    id: 3,
    name: "Camisa Corinthians Preta e Branca I 2025",
    category: "Brasileirão",
     price: 150.00,
    oldPrice: 329.9,
    images: [
      "img/CORINTHIANS/timao.frente.n1.jpeg",
      "img/CORINTHIANS/timao.costa.n1.jpeg",
      "img/CORINTHIANS/timao.logo.n1.jpeg"
    ],
    discount: 45
  },
  {
    id: 4,
    name: "Camisa Real Madrid Home 25/26 Jogador",
    category: "Europeu",
   price: 150.00,
    oldPrice: 499.90,
    images: [],
    discount: 50
  },
  {
    id: 5,
    name: "Brasil Retrô 2002 Ronaldo Fenômeno",
    category: "Seleções",
    price: 150.00,
    oldPrice: 329.9,
    images: [
      "img/BRAZIL/brasil.frente.jpeg",
      "img/BRAZIL/brasil.costa.jpg",
      "img/BRAZIL/brasil.detalhe.jpg"
    ],
    discount: 30
  },
  {
    id: 6,
    name: "Jersey Lakers Lebron James 23 Icon",
    category: "NBA",
    price: 150.00,
    oldPrice: 399.90,
    images: [],
  },
  {
    id: 7,
    name: "Brasil Retro 2002 Ronaldo Fenômeno",
    category: "Retro",
    price: 150.00,
    oldPrice: 329.90,
    images: [],
    discount: 30
  }
];

// =======================
// RENDER PRODUTOS
// =======================
function renderProducts(filter = "todos") {
  const container = document.getElementById("grid-produtos");
  container.innerHTML = "";

  const list =
    filter === "todos"
      ? products
      : products.filter(p => p.category === filter);

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    const hasSecondImage = p.images.length > 1;

    card.innerHTML = `
      <div class="product-image-wrapper">
        ${p.discount ? `<span class="badge-discount">-${p.discount}%</span>` : ""}
        <img src="${p.images[0] || ''}" class="product-img primary" alt="${p.name}">
        ${hasSecondImage ? `<img src="${p.images[1]}" class="product-img secondary" alt="${p.name}">` : ""}
      </div>

      <div class="product-info">
        <h3>${p.name}</h3>

        <div class="price-box">
          <span class="old-price">R$ ${p.oldPrice.toFixed(2).replace(".", ",")}</span>
          <span class="new-price">R$ ${p.price.toFixed(2).replace(".", ",")}</span>
        </div>

        <p class="installments">
          12x de R$ ${(p.price / 12).toFixed(2).replace(".", ",")}
        </p>
      </div>
    `;

    // Abrir modal ao clicar na imagem
    card.querySelector(".product-image-wrapper")
      .addEventListener("click", () => openModal(p));

    container.appendChild(card);
  });
}

// =======================
// MODAL (ZOOM)
// =======================
function openModal(product) {
  currentProduct = product;
  modalImages = product.images;
  currentImageIndex = 0;

  const modalImg = document.getElementById("modal-img");
  modalImg.src = modalImages[currentImageIndex] || '';

  document.getElementById("modal-cat").innerText = product.category;
  document.getElementById("modal-title").innerText = product.name;
  document.getElementById("modal-old-price").innerText =
    `R$ ${product.oldPrice.toFixed(2).replace(".", ",")}`;
  document.getElementById("modal-price").innerText =
    `R$ ${product.price.toFixed(2).replace(".", ",")}`;

  document.getElementById("modal-produto").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-produto").classList.remove("active");
  document.body.style.overflow = "auto";
}

// =======================
// NAV SETAS MODAL
// =======================
function nextImage() {
  if (!modalImages.length) return;
  currentImageIndex = (currentImageIndex + 1) % modalImages.length;
  document.getElementById("modal-img").src = modalImages[currentImageIndex];
}

function prevImage() {
  if (!modalImages.length) return;
  currentImageIndex = (currentImageIndex - 1 + modalImages.length) % modalImages.length;
  document.getElementById("modal-img").src = modalImages[currentImageIndex];
}

// =======================
// ZOOM IMAGEM MODAL
// =======================
function toggleZoom() {
  const modalImg = document.getElementById("modal-img");
  modalImg.classList.toggle("zoomed");
}

// =======================
// WHATSAPP
// =======================
function enviarWhatsapp() {
  if (!currentProduct) return;

  // Pegando tamanho selecionado (se houver)
  const sizeInput = document.querySelector('input[name="size"]:checked');
  const size = sizeInput ? sizeInput.value : 'Não selecionado';

  const msg = `Olá! Quero comprar:\n
${currentProduct.name}
Preço: R$ ${currentProduct.price.toFixed(2)}
Tamanho: ${size}`;

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// =======================
// FILTRO
// =======================
window.filterProducts = cat => renderProducts(cat);

// =======================
// INIT
// =======================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  new Swiper('.announcement-swiper', {
    loop: true,
    autoplay: { delay: 3000 },
    direction: 'vertical',
    allowTouchMove: false
  });

  new Swiper('.hero-swiper', {
    loop: true,
    autoplay: { delay: 5000 },
    pagination: { el: '.swiper-pagination', clickable: true }
  });

  new Swiper('.circle-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    grabCursor: true
  });

  // MENU MOBILE
  document.getElementById('menu-mobile-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('open');
  });
  document.getElementById('close-menu').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('open');
  });

  // MODAL NAV
  document.querySelector(".nav-arrow.left").addEventListener("click", prevImage);
  document.querySelector(".nav-arrow.right").addEventListener("click", nextImage);

  // FECHAR MODAL
  document.querySelector(".close-modal").addEventListener("click", closeModal);

  // ZOOM MODAL
  document.getElementById("modal-img").addEventListener("click", toggleZoom);
});
