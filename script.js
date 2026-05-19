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
            image: 'makun.jpg',
            images: ['makun.jpg'],
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
            description: 'Soremontura telar manual con lana de oveja natural. Pieza ideal para decorar el pie de la cama aportando calidez y la estética de los tejidos ancestrales mapuche. Se puede usar también como tapiz o alfombra pequeña.',
            details: {
                'Dimensiones': '80 × 70 cm',
                'Material': 'Lana de oveja',
                'Técnica': 'Telar manual',
                'Uso': 'sobremontura / tapiz'
            }
        },
        {
            id: 11,
            name: 'Cinturón Técnica Pampa Rojo',
            shortDesc: 'Tramado con diseño pampa',
            price: 45000,
            image: 'trarilonkorojo.jpg',
            images: ['trarilonkorojo.jpg'],
            category: 'Tejidos',
            description: 'Trarilonko o cinturón tejido con la técnica pampa, caracterizada por su tramado denso y patrones geométricos. Elaborado en lana teñida en tono rojo. El trarilonko tiene uso tanto decorativo como ceremonial en la cultura mapuche.',
            details: {
                'Largo': '180 cm',
                'Técnica': 'Pampa mapuche',
                'Color': 'Rojo natural',
                'Nombre mapuche': 'Trarilonko'
            }
        }
    ],
    classes: [
        {
            id: 12,
            name: 'Clase Virtual CHAÑUNTUKU',
            shortDesc: 'Aprende el tejido anudado mapuche',
            price: 30000,
            image: 'tallervirtual.jpg',
            images: ['tallervirtual.jpg'],
            category: 'Clases Virtuales',
            description: 'Aprende la técnica del Chañuntuku, tejido anudado de la tradición mapuche. En esta clase virtual aprenderás los fundamentos de esta técnica ancestral, materiales necesarios, montaje y terminaciones. Incluye material de apoyo digital y acceso a grabación.',
            details: {
                'Modalidad': 'Virtual (grabada)',
                'Duración': '2-3 horas',
                'Nivel': 'Principiante',
                'Incluye': 'Material digital'
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
        if (!grid) return;
        grid.innerHTML = PRODUCTS[cat].map(p => `
            <div class="product-card" onclick="openModal(${p.id})">
                <div class="product-image">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
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
    if (!product) return;

    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = `$${product.price.toLocaleString('es-CL')}`;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;

    // Thumbnails
    const thumbsEl = document.getElementById('modalThumbnails');
    if (product.images && product.images.length > 1) {
        thumbsEl.innerHTML = product.images.map((img, i) => `
            <img class="modal-thumb ${i === 0 ? 'active' : ''}" src="${img}" alt="${product.name}" onclick="switchModalImage(this, '${img}')">
        `).join('');
        thumbsEl.style.display = 'flex';
    } else {
        thumbsEl.style.display = 'none';
    }

    // Details
    const detailsEl = document.getElementById('modalDetails');
    if (product.details) {
        detailsEl.innerHTML = Object.entries(product.details).map(([k, v]) => `
            <div class="modal-detail-item">
                <span class="modal-detail-label">${k}</span>
                <span class="modal-detail-value">${v}</span>
            </div>
        `).join('');
    }

    // Botón agregar
    document.getElementById('modalAddBtn').onclick = () => {
        addToCart(id);
        closeModal();
    };

    // Link consulta WhatsApp
    const msg = encodeURIComponent(`Hola, me interesa este producto:\n*${product.name}*\n$${product.price.toLocaleString('es-CL')}\n¿Está disponible?`);
    document.getElementById('modalConsultLink').href = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${msg}`;

    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function switchModalImage(thumb, src) {
    document.getElementById('modalImage').src = src;
    document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.getElementById('productModal').classList.remove('active');
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
    const sections = ['homeSection', 'woolSection', 'textilesSection', 'classesSection'];
    sections.forEach(s => {
        const el = document.getElementById(s);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(`${sectionId}Section`);
    if (target) target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 7. CARRITO
// ==========================================
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
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
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    toggleCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const badge = document.getElementById('cartBadge');

    if (container) {
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
// 9. INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    showSection('home');
    updateCartUI();
});

// ==========================================
// 10. EXPOSICIÓN GLOBAL
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
window.toggleMobileMenu = () => document.getElementById('mobileMenu').classList.toggle('active');
