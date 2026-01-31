/* =========================================
1. RESET & VARIÁVEIS GLOBAIS
   ========================================= */

:root {
    --font-primary: 'Montserrat', sans-serif;

    /* CORES PRINCIPAIS */
    --color-black: #000000;
    --color-white: #ffffff;
    --color-green: #1DB954; /* verde principal */

    /* SUBSTITUIÇÕES */
    --color-gray-bg: #ffffff;
    --color-gray-card: #ffffff;
    --color-border: #e0e0e0;
    --color-text-muted: #2e2e2e;

    /* REMOVER VERMELHO */
    --color-red: var(--color-green);

    --container-width: 1280px;
    --radius-md: 12px;
    --header-height: 80px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

/* FIX DO SCROLL INFINITO */
html, body {
    height: 100%;
    margin: 0; padding: 0;
    overflow-x: hidden;
}

body {
    font-family: var(--font-primary);
    background-color: var(--color-white);
    color: var(--color-black);
    display: flex;
    flex-direction: column; /* Organiza o site em coluna */
    min-height: 100vh; /* Ocupa 100% da tela */
}

a { text-decoration: none; color: inherit; transition: 0.3s; }
ul { list-style: none; }
img { max-width: 100%; display: block; }
button { font-family: var(--font-primary); }

/* Utilitários */
.container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 20px;
}

.section-spacing { padding: 50px 0; flex: 0 0 auto; }

.section-title {
    font-size: 1.6rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 30px;
    text-align: center;
}

.title-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}
.title-flex .section-title { margin-bottom: 0; text-align: left; }
.view-all { font-size: 0.9rem; font-weight: 600; border-bottom: 1px solid var(--color-black); }

/* =========================================
2. HEADER & MENU
   ========================================= */
.announcement-bar {
    background: var(--color-black);
    color: var(--color-white);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    height: 40px;
    display: flex; align-items: center; letter-spacing: 1px;
}
.announcement-swiper { width: 100%; text-align: center; }

#header {
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-border);
    position: sticky; top: 0; z-index: 100;
    height: var(--header-height);
}

.header-inner { display: flex; justify-content: space-between; align-items: center; height: 100%; }
.header-left, .header-right { display: flex; gap: 15px; align-items: center; }

.logo { font-size: 1.8rem; font-weight: 900; letter-spacing: -1px; text-transform: uppercase; }
.destaque { color: var(--color-red); }

.icon-btn {
    background: none; border: none; font-size: 1.4rem; cursor: pointer;
    color: var(--color-black); position: relative;
    display: flex; align-items: center; justify-content: center;
}
.whatsapp-link { color: var(--color-green); }

.cart-count {
    position: absolute; top: -5px; right: -5px;
    background: var(--color-black); color: white;
    font-size: 9px; width: 16px; height: 16px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; font-weight: bold;
}

/* Menu Mobile */
.mobile-menu-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.5); z-index: 200;
    opacity: 0; visibility: hidden; transition: 0.3s;
}
.mobile-menu-overlay.open { opacity: 1; visibility: visible; }

.mobile-menu-content {
    background: white; width: 85%; max-width: 350px; height: 100%;
    transform: translateX(-100%); transition: 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    padding: 30px; display: flex; flex-direction: column;
}
.mobile-menu-overlay.open .mobile-menu-content { transform: translateX(0); }
.mobile-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.mobile-links li { margin-bottom: 25px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px; }
.mobile-links a { font-weight: 600; font-size: 1.1rem; text-transform: uppercase; }

/* =========================================
3. HERO SLIDER
   ========================================= */
.hero-slider-section { height: 500px; width: 100%; flex: 0 0 auto; }
.hero-swiper, .hero-swiper .swiper-slide { height: 100%; }

.hero-image {
    width: 100%; height: 100%;
    background-size: cover; background-position: center;
    display: flex; align-items: center; justify-content: flex-start;
    padding-left: 10%; position: relative;
}
.hero-image::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 80%); }

.hero-text { position: relative; z-index: 2; color: white; max-width: 500px; }
.hero-text h2 { font-size: 3.5rem; font-weight: 900; line-height: 1; margin-bottom: 25px; text-transform: uppercase; font-style: italic; }

.btn-hero {
    padding: 15px 35px; background: white; color: black;
    border: none; font-weight: 800; text-transform: uppercase;
    cursor: pointer; transition: 0.3s; border-radius: 4px;
}
.btn-hero:hover { background: var(--color-red); color: white; transform: translateY(-3px); }

/* =========================================
4. NAVEGAÇÃO DE LIGAS (CENTRALIZADO)
   ========================================= */
.circle-swiper { padding: 20px 0 40px 0; width: 100%; }

/* CENTRALIZE: desktop */
.circle-swiper .swiper-wrapper { display: flex; justify-content: center; }
/* MOBILE: Alinha esquerda para permitir scroll */
@media (max-width: 768px) { .circle-swiper .swiper-wrapper { justify-content: flex-start; } }

.circle-item {
    width: 110px !important; text-align: center; cursor: pointer;
    transition: 0.3s; display: flex; flex-direction: column; align-items: center;
}
.circle-item:hover { opacity: 1; transform: translateY(-5px); }

.circle-img {
    width: 90px; height: 90px; border-radius: 50%;
    background: var(--color-gray-card);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 12px; border: 2px solid transparent; transition: 0.3s;
}
.circle-img img { width: 50px; height: auto; }
.circle-item:hover .circle-img { border-color: var(--color-black); }
.circle-item p { font-weight: 700; font-size: 0.85rem; text-transform: uppercase; }

/* =========================================
5. PRODUTOS
   ========================================= */
#grid-produtos {
    display: grid;
    gap: 40px 30px;
}

/* Desktop */
@media (min-width: 1024px) { #grid-produtos { grid-template-columns: repeat(3, 1fr); } }
/* Tablet */
@media (max-width: 1023px) { #grid-produtos { grid-template-columns: repeat(2, 1fr); } }
/* Mobile */
@media (max-width: 480px) { #grid-produtos { grid-template-columns: 1fr; } }

.product-card { background: white; cursor: pointer; transition: 0.3s; }
.product-card:hover { transform: translateY(-5px); }

.product-image-wrapper {
    position: relative; border-radius: var(--radius-md);
    overflow: hidden; background: var(--color-gray-card);
    margin-bottom: 15px; aspect-ratio: 1 / 1;
    cursor: pointer; /* Garantir que é clicável */
}

.product-img {
    width: 100%; height: 100%; object-fit: contain;
    mix-blend-mode: multiply; padding: 20px; transition: transform 0.5s ease, opacity 0.4s ease;
}
.product-card:hover .product-img { transform: scale(1.1); }

/* Hover imagem secundária */
.product-img.secondary {
    position: absolute; top: 0; left: 0; opacity: 0;
}
.product-image-wrapper:hover .product-img.secondary { opacity: 1; }
.product-image-wrapper:hover .product-img.primary { opacity: 0; }

.badge-discount {
    position: absolute; top: 10px; left: 10px;
    background: var(--color-red); color: white;
    font-size: 0.75rem; font-weight: 700; padding: 4px 8px; border-radius: 4px;
}

.product-title {
    font-size: 0.95rem; font-weight: 600; margin-bottom: 8px;
    line-height: 1.4; height: 42px; overflow: hidden;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
}

.price-box { display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px; }
.old-price { font-size: 0.85rem; text-decoration: line-through; color: #999; }
.new-price { font-size: 1.1rem; font-weight: 800; color: var(--color-black); }
.installments { font-size: 0.75rem; color: var(--color-text-muted); }

.btn-add {
    margin-top: 12px; width: 100%; padding: 10px;
    border: 1px solid var(--color-black); background: transparent;
    color: var(--color-black); font-weight: 700; text-transform: uppercase;
    font-size: 0.8rem; cursor: pointer; border-radius: 50px; transition: 0.3s;
}
.product-card:hover .btn-add { background: var(--color-black); color: white; }

/* =========================================
6. FOOTER FIXADO
   ========================================= */
.footer {
    background-color: #ffffff;
    border-top: 1px solid #e5e5e5;
    padding: 60px 0 30px;
    margin-top: auto; /* Empurra o footer para o final */
    width: 100%;
}

.footer-grid {
    display: flex; justify-content: center; gap: 100px;
    flex-wrap: wrap; text-align: left; margin-bottom: 40px;
}

.footer-col { min-width: 200px; }
.footer-col h3 { font-size: 0.9rem; font-weight: 800; margin-bottom: 25px; text-transform: uppercase; letter-spacing: 1px; }

.footer-links li { margin-bottom: 12px; }
.footer-links a { font-size: 0.9rem; color: #666; display: block; }
.footer-links a:hover { color: #000; padding-left: 5px; }

.payment-icons { display: flex; gap: 15px; font-size: 2rem; color: #333; }

.footer-bottom {
    border-top: 1px solid #f0f0f0; padding-top: 30px;
    display: flex; flex-direction: column; align-items: center;
    gap: 15px; font-size: 0.8rem; color: #888;
}

.secure-badge {
    background: #e8f5e9; color: #25D366; padding: 8px 15px;
    border-radius: 4px; font-weight: 600; display: flex; align-items: center; gap: 5px;
}

/* =========================================
7. MODAL
   ========================================= */
.modal-backdrop {
    position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(5px);
    z-index: 1000; display: flex; align-items: center; justify-content: center;
    opacity: 0; visibility: hidden; transition: 0.3s; padding: 20px;
}
.modal-backdrop.active { opacity: 1; visibility: visible; }

.modal-card {
    background: white; width: 100%; max-width: 900px; border-radius: 16px;
    overflow: hidden; position: relative; max-height: 90vh; overflow-y: auto;
}

.close-modal {
    position: absolute; top: 20px; right: 20px; background: #f1f1f1;
    border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer;
    z-index: 10; font-size: 1.2rem;
}

.modal-body { display: grid; grid-template-columns: 1.2fr 1fr; min-height: 500px; }

.modal-image { background: var(--color-gray-card); display: flex; align-items: center; justify-content: center; padding: 40px; position: relative; }
.modal-image img { max-width: 90%; mix-blend-mode: multiply; }

.modal-details { padding: 50px 40px; display: flex; flex-direction: column; justify-content: center; }
.modal-category { font-size: 0.8rem; color: #999; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; }
#modal-title { font-size: 2.2rem; line-height: 1.1; margin: 10px 0 20px; font-weight: 800; }

.modal-prices { display: flex; gap: 15px; align-items: baseline; }
#modal-price { font-size: 2.2rem; font-weight: 800; color: var(--color-red); }
.installments-text { color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 25px; }

.divider { border: 0; border-top: 1px solid #eee; margin: 25px 0; }

.sizes-options { display: flex; gap: 10px; margin-top: 10px; }
.sizes-options input { display: none; }
.sizes-options span {
    width: 45px; height: 45px; border: 1px solid #ddd;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; cursor: pointer; border-radius: 6px;
}
.sizes-options input:checked + span { background: var(--color-black); color: white; border-color: var(--color-black); }

.btn-whatsapp-buy {
    background: var(--color-green); color: white; border: none; padding: 18px; width: 100%;
    font-size: 1.1rem; font-weight: 700; border-radius: 8px; margin-top: 30px;
    cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;
}

.secure-text { font-size: 0.8rem; color: #666; text-align: center; margin-top: 15px; display: flex; align-items: center; justify-content: center; gap: 6px; }

/* Mobile */
@media (max-width: 768px) {
    .hero-slider-section { height: 450px; }
    .hero-text h2 { font-size: 2.2rem; }
    .products-grid { grid-template-columns: 1fr 1fr; gap: 20px 15px; }
    .modal-body { grid-template-columns: 1fr; }
    .footer-grid { flex-direction: column; align-items: center; text-align: center; gap: 40px; }
    .footer-col { text-align: center; }
    .payment-icons { justify-content: center; }
}

/* =========================================
TROCA DE IMAGEM NO CARD (HOVER)
   ========================================= */
/* Já incluído acima no .product-image-wrapper e .product-img */

/* =========================================
ZOOM DO PRODUTO (MODAL) - SETINHAS
   ========================================= */
.nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.6);
    color: #fff;
    border: none;
    font-size: 24px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
    z-index: 5;
}
.nav-arrow.left { left: 10px; }
.nav-arrow.right { right: 10px; }
.nav-arrow:hover { background: #000; }
