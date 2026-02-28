// 1. CONFIGURACIÓN Y CATÁLOGO
const STORE_CONFIG = {
    whatsappNumber: '56944242756',
    storeName: 'Chimalfe'
};

const PRODUCTS = {
    wool: [
        { id: 1, name: 'Vellón de lana de oveja 5 kilos', price: 40000, image: 'vellon.jpg', soldOut: false },
        { id: 2, name: 'Huso de madera nativa - 53cm', price: 15000, image: 'huso.jpg', soldOut: false },
        { id: 3, name: 'Lana TEÑIDO NATURAL DE HOJA DE MAQUI - 500g', price: 30000, image: 'hojademaqui.jpg', soldOut: false },
        { id: 4, name: 'Lana TEÑIDO NATURAL DE FRUTO DE MAQUI- 500g', price: 30000, image: 'maqui.jpg', soldOut: false },
        { id: 5, name: 'Lana Oveja Natural - 100g', price: 3800, image: 'lanadobrehebracrudo.jpg', soldOut: false },
        { id: 6, name: 'Lana TEÑIDO NATURAL DE FLOR DE AROMO - 178g', price: 6400, image: 'lanafloraromo.jpg', soldOut: false },
        { id: 7, name: 'Lana hilado artesanal - 500g', price: 22000, image: 'lanaartesanal.jpg', soldOut: false },
        { id: 8, name: 'Lana de oveja pitio - 500g', price: 25000, image: 'lanapitio.jpg', soldOut: false }
    ],
    textiles: [
        { id: 9, name: 'Amukan Makuñ 150*206cm', price: 420000, image: 'amukanmakun.jpg', soldOut: false },
        { id: 10, name: 'Makuñ azul 145*168cm', price: 390000, image: 'makunazul.jpg', soldOut: false },
        { id: 11, name: 'Faja Roja - largo 265cm', price: 95000, image: 'fajaroja.jpg', soldOut: false },
        { id: 12, name: 'Bolso Artesanal 26*30cm', price: 35000, image: 'bolsoartesanal.jpg', soldOut: false },
        { id: 13, name: 'Cinturon de 180cm Técnica Pampa Rojo', price: 35000, image: 'trarilonkorojo.jpg', soldOut: false },
        { id: 14, name: 'Chañuntuku 80 x 70 cm aprox. Sobemontrura ecuestre', price: 220000, image: 'chanuntuku.jpg', soldOut: false },
        { id: 15, name: 'Faja Tejida con ñimin - 216cm Peso 497gr', price: 120000, image: 'fajanimin.jpg', soldOut: true },
        { id: 16, name: 'Piecera tejida a telar 55*105cm', price: 50000, image: 'piecera.jpg', soldOut: true },
        { id: 17, name: 'Cinturon de 180cm Técnica Pampa Azul', price: 35000, image: 'trarilonkoazul.jpg', soldOut: true },
        
    ],
    classes: [
        { id: 18, name: 'Clase CHAÑUNTUKU', price: 30000, image: 'tallervirtualchanuntuku.jpg', soldOut: false },
        { id: 19, name: 'Clase MAKUÑ', price: 120000, image: 'virtualmakun.jpg', soldOut: false },
        { id: 20, name: 'Clase TALEGA Bolso Andino', price: 40000, image: 'talega.jpg', soldOut: false },
        { id: 21, name: 'Taller virtual de Metodologías sociales para proyectos artísticos y culturales', price: 40000, image: 'msac.jpg', soldOut: false }
    ]
};

let cart = [];

// 2. RENDERIZADO DE PRODUCTOS
function renderProducts() {
    const sections = ['wool', 'textiles', 'classes'];
    sections.forEach(cat => {
        const grid = document.getElementById(`${cat}Grid`);
        if (!grid) return;
        grid.innerHTML = PRODUCTS[cat].map(p => `
            <div class="product-card ${p.soldOut ? 'sold-out' : ''}">
                <div class="product-image">
                    <img src="${p.image}" alt="${p.name}">
                    ${p.soldOut ? '<div class="sold-out-badge">AGOTADO</div>' : ''}
                </div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p class="product-price">$${p.price.toLocaleString('es-CL')}</p>
                    ${p.soldOut 
                        ? '<button class="add-to-cart-btn disabled" disabled>Agotado</button>'
                        : `<button class="add-to-cart-btn" onclick="addToCart(${p.id})">Agregar</button>`
                    }
                </div>
            </div>
        `).join('');
    });
}

// 3. NAVEGACIÓN
function showSection(sectionId) {
    const sections = ['homeSection', 'woolSection', 'textilesSection', 'classesSection'];
    sections.forEach(s => {
        const el = document.getElementById(s);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(`${sectionId}Section`);
    if (target) target.classList.remove('hidden');
    window.scrollTo(0,0);
}

// 4. LÓGICA DEL CARRITO
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

function addToCart(id) {
    const all = [...PRODUCTS.wool, ...PRODUCTS.textiles, ...PRODUCTS.classes];
    const product = all.find(p => p.id === id);
    
    // Verificar si el producto está agotado
    if (product && product.soldOut) {
        alert('Lo sentimos, este producto está agotado');
        return;
    }
    
    if (product) {
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
        toggleCart(); // Abre el carrito automáticamente
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const badge = document.getElementById('cartBadge');

    if (container) {
        if (cart.length === 0) {
            container.innerHTML = '<p style="padding:20px; text-align:center; color:#666">Tu carrito está vacío</p>';
        } else {
            container.innerHTML = cart.map((item, index) => `
                <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; padding:10px; border-bottom:1px solid #eee">
                    <div>
                        <p style="margin:0; font-weight:bold; font-size:0.9rem">${item.name}</p>
                        <p style="margin:0; font-size:0.8rem; color:#666">${item.quantity} x $${item.price.toLocaleString('es-CL')}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; font-size:1.2rem; cursor:pointer">✕</button>
                </div>
            `).join('');
        }
    }

    // Calcular total y cantidad
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

    if (totalEl) totalEl.textContent = `$${total.toLocaleString('es-CL')}`;
    
    if (badge) {
        badge.textContent = totalQty;
        badge.classList.toggle('hidden', totalQty === 0);
    }
}

// 5. ENVÍO A WHATSAPP
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let message = `*Nuevo Pedido - ${STORE_CONFIG.storeName}*\n`;
    message += `------------------------------\n`;
    
    cart.forEach(item => {
        message += `• ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString('es-CL')}\n`;
    });

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    message += `------------------------------\n`;
    message += `*TOTAL A PAGAR: $${total.toLocaleString('es-CL')}*\n\n`;
    message += `Hola, me gustaría coordinar el pago y envío de estos productos.`;

    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    showSection('home');
    updateCartUI();
});

// EXPOSICIÓN GLOBAL PARA BOTONES HTML
window.showSection = showSection;
window.addToCart = addToCart;
window.toggleCart = toggleCart;
window.removeFromCart = removeFromCart;
window.sendToWhatsApp = sendToWhatsApp;
window.toggleMobileMenu = () => document.getElementById('mobileMenu').classList.toggle('active');





