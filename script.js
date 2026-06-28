// ==========================================
// 1. CONFIGURACIÓN
// ==========================================
const STORE_CONFIG = {
    whatsappNumber: '56944242756',
    storeName: 'Chimalfe'
};

// ==========================================
// 2. CATÁLOGO CON INFORMACIÓN DETALLADA
// ==========================================
const PRODUCTS = {
    wool: [
        {
            id: 1,
            name: 'Huso de madera nativa',
            shortDesc: 'Herramienta artesanal para hilar',
            price: 15000,
            image: 'huso.jpg',
            images: ['huso.jpg'],
            category: 'Lanas & Herramientas',
            description: 'Huso de madera nativa tallado a mano, herramienta tradicional para el hilado artesanal de lanas. Cada pieza es única y elaborada con maderas locales seleccionadas.',
            details: {
                'Largo': '53 cm',
                'Material': 'Madera nativa',
                'Elaboración': 'Tallado a mano',
                'Origen': 'Chile'
            }
        },
        {
            id: 2,
            name: 'Vellón de lana de oveja 1 kilo',
            shortDesc: 'Vellón de lana, Crudo natural',
            price: 20000,
            image: 'vellon5k.jpg',
            images: ['vellon5k.jpg'],
            category: 'Lanas',
            description: 'Lana de oveja en su color natural crudo, sin tintes químicos. Suave y resistente, perfecta para proyectos artesanales.',
            details: {
                'Peso': '1000 g',
                'Tipo': 'Vellón de lana',
                'Color': 'Crudo natural',
                'Tratamiento': 'Sin tintes'
            }
        },
        {
            id: 3,
            name: 'Vellón de lana de oveja crudo 100 gramos',
            shortDesc: 'Vellón de lana, Crudo natural',
            price: 2250,
            image: 'vellon100gr.jpg',
            images: ['vellon100gr.jpg'],
            category: 'Lanas',
            description: 'Lana teñida naturalmente con flores de aromo, árbol nativo de Chile. El proceso de teñido natural produce tonos cálidos y únicos que varían levemente entre madejas. Ideal para proyectos que buscan armonía con la naturaleza.',
            details: {
                'Peso': '100 g',
                'Tinte': 'Vellón de lana',
                'Tono': 'Crudo',
                'Origen': 'Chile'
            }
        },
        {
            id: 4,
            name: 'Lana hilado artesanal 1 hebra delgada',
            shortDesc: 'Hilado a mano en huso tradicional',
            price: 4990,
            image: 'lanachelita100.jpg',
            images: ['lanachelita100.jpg'],
            category: 'Lanas',
            description: 'Lana hilada completamente a mano utilizando huso tradicional. Cada madeja es única, con variaciones naturales de grosor que aportan textura y carácter a las piezas tejidas. Proceso artesanal que honra el conocimiento ancestral.',
            details: {
                'Peso': '100 g',
                'Hilado': 'A mano – huso tradicional',
                'Textura': 'Irregular artesanal',
                'Ideal para': 'Telar y tejido a mano'
            }
        },
        {
            id: 5,
            name: 'TEÑIDO NATURAL HUALLE 100 gramos',
            shortDesc: 'Lana de oveja teñida con hualle',
            price: 6490,
            image: 'hualle100.jpg',
            images: ['hualle100.jpg'],
            category: 'Lanas',
            description: 'Lana de oveja teñido natural con hoja del arbol del roble o hualle (Nothofagus obliqua), arbol nativo del sur de Chile. El hualle produce tonos amarrillos y marrones cálidos',
            details: {
                'Peso': '100 g',
                'Hilado': 'industrial 3 hebras',
                'Textura': 'suave y resistente',
                'Origen': 'Sur de Chile'
            }
        },
        {
            id: 6,
            name: 'TEÑIDO NATURAL MAQUI 100 gramos',
            shortDesc: 'Lana de oveja teñida con maqui',
            price: 6690,
            image: 'maqui100.jpg',
            images: ['maqui100.jpg'],
            category: 'Lanas',
            description: 'Lana de oveja teñido natural con el fruto del maqui (Aristotelia chilensis), arbol nativo del sur de Chile. El maqui produce tonos morados y grises profundos.',
            details: {
                'Peso': '100 g',
                'Hilado': 'industrial 3 hebras',
                'Textura': 'suave y resistente',
                'Origen': 'Sur de Chile'
            }
        },
        {
            id: 7,
            name: 'TEÑIDO NATURAL RADAL 100 gramos',
            shortDesc: 'Lana de oveja teñida con radal',
            price: 6690,
            image: 'radal100.jpg',
            images: ['radal100.jpg'],
            category: 'Lanas',
            description: 'Lana de oveja teñido natural con las hojas del radal (Lomatia hirsuta), arbol nativo del sur de Chile. El radal produce tonos marrones y cafes.',
            details: {
                'Peso': '100 g',
                'Hilado': 'industrial 3 hebras',
                'Textura': 'suave y resistente',
                'Origen': 'Sur de Chile'
            }
        }
    ],
    textiles: [
        {
            id: 8,
            name: 'Amukan Makuñ',
            shortDesc: 'Manta tradicional mapuche',
            price: 420000,
            image: 'amukanmakun.jpg',
            images: ['amukanmakun.jpg'],
            category: 'Tejidos',
            description: 'Makuñ tejido en telar vertical mapuche con técnica ancestral. El Amukan es un tejido de gran formato elaborado con lana de oveja hilada artesanalmente y teñida con plantas nativas. Cada pieza requiere semanas de trabajo y es una obra única e irrepetible.',
            details: {
                'Dimensiones': '150 × 206 cm',
                'Técnica': 'Telar vertical mapuche',
                'Material': 'Lana oveja artesanal',
                'Tiempo elaboración': '4-6 semanas'
            }
        },
        {
            id: 9,
            name: 'Bolso Artesanal',
            shortDesc: 'Tejido a telar, uso diario',
            price: 35000,
            image: 'bolsoartesanal.jpg',
            images: ['bolsoartesanal.jpg'],
            category: 'Tejidos',
            description: 'Bolso tejido a telar con lana natural, diseñado para uso diario. Resistente y funcional, con diseños geométricos inspirados en la textilería mapuche. Cada bolso es único debido al proceso artesanal de elaboración.',
            details: {
                'Dimensiones': '26 × 30 cm',
                'Material': 'Lana artesanal',
                'Técnica': 'Telar manual',
                'Uso': 'Diario'
            }
        },
        {
            id: 10,
            name: 'Chañuntuku',
            shortDesc: 'sobremontura de equino',
            price: 250000,
            image: 'chanuntuku.jpg',
            images: ['chanuntuku.jpg'],
            category: 'Tejidos',
            description: 'Soremontura de lana de oveja natural. Pieza ideal para decorar el pie de la cama aportando calidez y la estética de los tejidos ancestrales mapuche. Se puede usar también como tapiz o alfombra pequeña.',
            details: {
                'Dimensiones': '80 × 70 cm',
                'Material': 'Lana de oveja',
                'Técnica': 'Telar manual',
                'Uso': 'sobremontura / tapiz'
            }
        },
        {
            id: 11,
            name: 'Pelero ojo de guanaco',
            shortDesc: 'Pelero de ñe luam u ojo de guanaco',
            price: 75000,
            image: 'peleroojo.jpg',
            images: ['peleroojo.jpg'],
            category: 'Tejidos',
            description: 'Este pelero mapuche, conocido como Ojo de Guanaco, es mucho más que un tejido; es una pieza de arte textil cargada de simbolismo y tradición ancestral. El diseño geométrico que le da nombre evoca la mirada profunda y vigilante del guanaco, un animal sagrado para el pueblo mapuche que representa la conexión con la naturaleza y la libertad de la Patagonia. Elaborado bajo la técnica ancestral del Ñe luam (tejido en urdimbre), cada pieza es única y requiere de un meticuloso trabajo que ha sido transmitido por generaciones. La combinación de colores azul, café y el tono natural de la lana crea un contraste armónico y cálido, perfecto para realzar cualquier espacio o atuendo.',
            details: {
                'Largo': '96 cm * 66 cm',
                'Técnica': 'Ñe luam',
                'Color': 'azul, cafe y natural',
                'Nombre mapuche': 'ñe luam'
            }
        },
        {
            id: 12,
            name: 'Kutama o alforja Teñida con maqui',
            shortDesc: 'Kutama teñida con el fruto de maqui',
            price: 90000,
            image: 'kutamamaqui.jpg',
            images: ['kutamamaqui.jpg'],
            category: 'Tejidos',
            description: 'Este Kutama (alforja) es mucho más que un accesorio; es una pieza viva de la cultura mapuche. Teñido artesanalmente con el fruto del maqui, un árbol nativo de nuestros bosques, sus fibras absorben los pigmentos púrpuras y azulados que solo la naturaleza sabe regalar.',
            details: {
                'Largo': '100 cm * 31 cm',
                'Técnica': 'Ñe luam',
                'Color': 'maqui, verde y natural',
                'Nombre mapuche': 'Kutama'
            }
        }
    ],
    classes: [
        {
            id: 13,
            name: 'Clase Virtual Makuñ',
            shortDesc: 'Aprende el tejido de manta mapuche',
            price: 120000,
            image: 'virtualmakun.jpg',
            images: ['virtualmakun.jpg'],
            category: 'Clases Virtuales',
            description: 'Te invito a aprender el proceso completo de creación de un makuñ, desde la urdimbre hasta el tejido final. Son 4 clases de 2 horas cada una, pensadas para quienes quieren profundizar en el textil mapuche, respetando sus tiempos, técnicas y sentido.',
            details: {
                'Modalidad': 'Virtual (grabada)',
                'Duración': '8 horas',
                'Nivel': 'Medio-Avanzado',
                'Incluye': 'Material digital, clases paso a paso, Bibliografia y acompañamiento personalizado'
            }
        },
        {
            id: 14,
            name: 'Clase Virtual Ñimin',
            shortDesc: 'Aprende sobre la simbologia e iconografia de los dibujos del pueblo mapuche',
            price: 4000,
            image: 'tallervirtualnimin.jpg',
            images: ['tallervirtualnimin.jpg'],
            category: 'Clases Virtuales',
            description: 'El ñimin son las historias que habitan en los tejidos. En esta clase virtual aprenderás a crear tus propios dibujos para el telar o witral, comprendiendo la lógica y la estructura del patrón para que puedas diseñar con libertad. Aprenderas a : Diseñar tus propios ñimin; Comprender la estructura del patrón; Usar el diagrama para aplicarlo en el telar.',
            details: {
                'Modalidad': 'Virtual (grabada)',
                'Duración': '3 horas',
                'Nivel': 'Principiante',
                'Incluye': 'Material digital, clases paso a paso, Bibliografia y acompañamiento personalizado'
            }
        },
        {
            id: 15,
            name: 'Clase Virtual CHAÑUNTUKU',
            shortDesc: 'Aprende el tejido de fleco o mecha mapuche',
            price: 30000,
            image: 'tallervirtual.jpg',
            images: ['tallervirtual.jpg'],
            category: 'Clases Virtuales',
            description: 'Aprende la técnica del Chañuntuku, tejido de chiñai (fleco o mecha) de la tradición mapuche. En esta clase virtual aprenderás los fundamentos de esta técnica ancestral, materiales necesarios, montaje y terminaciones. Incluye material de apoyo digital y acceso a grabación.',
            details: {
                'Modalidad': 'Virtual (grabada)',
                'Duración': '2-3 horas',
                'Nivel': 'Principiante',
                'Incluye': 'Material digital, clases paso a paso, bibliografia y acompañamiento personalizado'
            }
        }
    ]
};

// ==========================================
// 3. ESTADO DEL CARRITO
// ==========================================
let cart = [];

// ==========================================
// 4. RENDERIZADO DE PRODUCTOS
// ==========================================
function renderProducts() {
    const sections = ['wool', 'textiles', 'classes'];
    sections.forEach(cat => {
        const grid = document.getElementById(`${cat}Grid`);
        if (!grid) {
            console.warn(`No se encontró el contenedor #${cat}Grid`);
            return;
        }
        const products = PRODUCTS[cat];
        if (!products || !Array.isArray(products) || products.length === 0) {
            grid.innerHTML = '<p class="empty-message">No hay productos disponibles en esta categoría.</p>';
            return;
        }
        grid.innerHTML = products.map(p => `
            <div class="product-card" onclick="openModal(${p.id})">
                <div class="product-image">
                    <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='placeholder.jpg'">
                    <div class="product-image-overlay">
                        <span class="product-view-btn">Ver detalles</span>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${p.name}</h3>
                    ${p.shortDesc ? `<p class="product-short-desc">${p.shortDesc}</p>` : ''}
                    <p class="product-price">$${p.price.toLocaleString('es-CL')}</p>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">Agregar</button>
                        <button class="details-btn" onclick="event.stopPropagation(); openModal(${p.id})" title="Ver detalles">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    });
}

// ==========================================
// 5. MODAL DE PRODUCTO
// ==========================================
function openModal(id) {
    const all = [...PRODUCTS.wool, ...PRODUCTS.textiles, ...PRODUCTS.classes];
    const product = all.find(p => p.id === id);
    if (!product) {
        console.warn('Producto no encontrado con ID:', id);
        return;
    }

    // Elementos del modal
    const modalOverlay = document.getElementById('modalOverlay');
    const productModal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    const modalThumbnails = document.getElementById('modalThumbnails');
    const modalAddBtn = document.getElementById('modalAddBtn');
    const modalConsultLink = document.getElementById('modalConsultLink');

    if (!modalOverlay || !productModal) {
        console.error('Elementos del modal no encontrados en el DOM');
        return;
    }

    // Rellenar datos
    if (modalCategory) modalCategory.textContent = product.category || '';
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalPrice) modalPrice.textContent = `$${product.price.toLocaleString('es-CL')}`;
    if (modalDescription) modalDescription.textContent = product.description || '';
    if (modalImage) {
        modalImage.src = product.image || 'placeholder.jpg';
        modalImage.alt = product.name;
    }

    // Miniaturas
    if (modalThumbnails) {
        if (product.images && product.images.length > 1) {
            modalThumbnails.innerHTML = product.images.map((img, i) => `
                <img class="modal-thumb ${i === 0 ? 'active' : ''}" src="${img}" alt="${product.name}" onclick="switchModalImage(this, '${img}')">
            `).join('');
            modalThumbnails.style.display = 'flex';
        } else {
            modalThumbnails.innerHTML = '';
            modalThumbnails.style.display = 'none';
        }
    }

    // Detalles
    if (modalDetails) {
        if (product.details && Object.keys(product.details).length > 0) {
            modalDetails.innerHTML = Object.entries(product.details).map(([k, v]) => `
                <div class="modal-detail-item">
                    <span class="modal-detail-label">${k}</span>
                    <span class="modal-detail-value">${v}</span>
                </div>
            `).join('');
        } else {
            modalDetails.innerHTML = '';
        }
    }

    // Botón agregar
    if (modalAddBtn) {
        modalAddBtn.onclick = () => {
            addToCart(id);
            closeModal();
        };
    }

    // Link consulta WhatsApp
    if (modalConsultLink) {
        const msg = encodeURIComponent(`Hola, me interesa este producto:\n*${product.name}*\n$${product.price.toLocaleString('es-CL')}\n¿Está disponible?`);
        modalConsultLink.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${msg}`;
    }

    // Mostrar modal
    modalOverlay.classList.add('active');
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function switchModalImage(thumb, src) {
    const mainImage = document.getElementById('modalImage');
    if (mainImage) mainImage.src = src;
    document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
    if (thumb) thumb.classList.add('active');
}

function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const productModal = document.getElementById('productModal');
    if (modalOverlay) modalOverlay.classList.remove('active');
    if (productModal) productModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Cerrar modal con Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

// ==========================================
// 6. NAVEGACIÓN
// ==========================================
function showSection(sectionId) {
    const sectionMap = {
        home: 'homeSection',
        wool: 'woolSection',
        textiles: 'textilesSection',
        classes: 'classesSection',
        nosotros: 'nosotrosSection'
    };
    const targetId = sectionMap[sectionId];
    if (!targetId) return;

    // Ocultar todas las secciones principales
    document.querySelectorAll('main > section').forEach(s => {
        s.classList.add('hidden');
    });

    // Mostrar la sección objetivo
    const target = document.getElementById(targetId);
    if (target) {
        target.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        console.warn(`Sección no encontrada: ${targetId}`);
    }
}

// ==========================================
// 7. CARRITO
// ==========================================
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    if (!sidebar || !overlay) return;

    const isActive = sidebar.classList.contains('active');
    if (isActive) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function addToCart(id) {
    const all = [...PRODUCTS.wool, ...PRODUCTS.textiles, ...PRODUCTS.classes];
    const product = all.find(p => p.id === id);
    if (!product) {
        console.warn('Producto no encontrado para agregar al carrito:', id);
        return;
    }

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    toggleCart(); // Abre el carrito al agregar
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        updateCartUI();
    }
}

function changeQty(index, delta) {
    if (index < 0 || index >= cart.length) return;
    const newQty = cart[index].quantity + delta;
    if (newQty <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = newQty;
    }
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const badge = document.getElementById('cartBadge');

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
    } else {
        container.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">
                <div class="cart-item-body">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">$${item.price.toLocaleString('es-CL')}</p>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})" title="Eliminar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
        `).join('');
    }

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

    if (totalEl) totalEl.textContent = `$${total.toLocaleString('es-CL')}`;
    if (badge) {
        badge.textContent = totalQty;
        badge.classList.toggle('hidden', totalQty === 0);
    }
}

// ==========================================
// 8. ENVÍO A WHATSAPP
// ==========================================
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    let message = `*Nuevo Pedido – ${STORE_CONFIG.storeName}*\n`;
    message += `────────────────────\n`;

    cart.forEach(item => {
        message += `• ${item.name} (×${item.quantity}) – $${(item.price * item.quantity).toLocaleString('es-CL')}\n`;
    });

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    message += `────────────────────\n`;
    message += `*TOTAL: $${total.toLocaleString('es-CL')}*\n\n`;
    message += `Hola, me gustaría coordinar el pago y envío. ¡Gracias!`;

    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ==========================================
// 9. MENÚ MÓVIL
// ==========================================
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// ==========================================
// 10. INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Verificar que los elementos críticos existen
    const requiredElements = ['woolGrid', 'textilesGrid', 'classesGrid'];
    requiredElements.forEach(id => {
        if (!document.getElementById(id)) {
            console.warn(`Elemento #${id} no encontrado en el DOM.`);
        }
    });

    renderProducts();
    showSection('home');
    updateCartUI();

    // Inicializar catálogo si existe
    if (typeof initCatalogo === 'function') {
        initCatalogo();
    } else {
        console.warn('initCatalogo no está definido. Asegúrate de incluir el código del catálogo.');
    }
});

// ==========================================
// 11. EXPOSICIÓN GLOBAL
// ==========================================
window.showSection = showSection;
window.addToCart = addToCart;
window.toggleCart = toggleCart;
window.removeFromCart = removeFromCart;
window.changeQty = changeQty;
window.sendToWhatsApp = sendToWhatsApp;
window.openModal = openModal;
window.closeModal = closeModal;
window.switchModalImage = switchModalImage;
window.toggleMobileMenu = toggleMobileMenu;

// ============================================================
// CATÁLOGO VISOR v3 — pegar al FINAL (se mantiene igual)
// ============================================================
function initCatalogo() {
    const TOTAL = 14;
    let cur = 0;

    const track      = document.getElementById('catTrack');
    const dots       = [...document.querySelectorAll('.cat-dot')];
    const thumbs     = [...document.querySelectorAll('.cat-thumb')];
    const curPageEl  = document.getElementById('catCurPage');
    const titleEl    = document.getElementById('catPageTitle');
    const prevBtn    = document.getElementById('catPrevBtn');
    const nextBtn    = document.getElementById('catNextBtn');
    const footerPrev = document.getElementById('catFooterPrev');
    const footerNext = document.getElementById('catFooterNext');

    if (!track) {
        console.warn('Catálogo: no se encontró #catTrack');
        return;
    }

    const PAGE_TITLES = [
        'Portada', 'Acerca de', 'Nuestros Productos', 'Hilanderas',
        'Teñido Hualle', 'Teñido Maqui (fruto)', 'Teñido Maqui (hoja)',
        'Teñido Radal & Eucalipto', 'Teñido Yerba Mate',
        'Vellón', 'Vellones Teñidos', 'Contáctanos',
        'El Territorio', 'Catálogo de Lanas'
    ];

    function goTo(n) {
        cur = Math.max(0, Math.min(n, TOTAL - 1));
        track.style.transform = `translateX(-${cur * 100}%)`;
        dots.forEach((d, i)  => d.classList.toggle('active', i === cur));
        thumbs.forEach((t, i) => t.classList.toggle('active', i === cur));
        if (curPageEl) curPageEl.textContent = cur + 1;
        if (titleEl)   titleEl.textContent   = PAGE_TITLES[cur];
        if (prevBtn)    prevBtn.disabled    = cur === 0;
        if (nextBtn)    nextBtn.disabled    = cur === TOTAL - 1;
        if (footerPrev) footerPrev.disabled = cur === 0;
        if (footerNext) footerNext.disabled = cur === TOTAL - 1;
        if (thumbs[cur]) thumbs[cur].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    prevBtn?.addEventListener('click',    () => goTo(cur - 1));
    nextBtn?.addEventListener('click',    () => goTo(cur + 1));
    footerPrev?.addEventListener('click', () => goTo(cur - 1));
    footerNext?.addEventListener('click', () => goTo(cur + 1));
    dots.forEach((d, i)   => d.addEventListener('click', () => goTo(i)));
    thumbs.forEach((t, i) => t.addEventListener('click', () => goTo(i)));

    // Swipe táctil
    let touchStartX = 0;
    const stage = document.getElementById('catStage');
    stage?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    stage?.addEventListener('touchend',   e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(diff > 0 ? cur + 1 : cur - 1);
    });

    // Teclado (solo cuando la sección está visible)
    document.addEventListener('keydown', e => {
        if (document.getElementById('nosotrosSection')?.classList.contains('hidden')) return;
        if (e.key === 'ArrowLeft')  goTo(cur - 1);
        if (e.key === 'ArrowRight') goTo(cur + 1);
    });

    // Iniciar en la primera página
    goTo(0);
}
