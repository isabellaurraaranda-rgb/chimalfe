 // ==========================================
// CONFIGURACIÓN DE LA TIENDA
// ==========================================

const STORE_CONFIG = {
    whatsappNumber: '56944242756',
    storeName: 'Chimalfe',
    currency: 'CLP'
};

// ==========================================
// CATÁLOGO DE PRODUCTOS (Editable)
// ==========================================

const PRODUCTS = {
    wool: [
        {
            id: 1,
            name: 'Huso de madera nativa - 53cm',
            price: 15000,
            image: 'productos/huso.jpg',
            category: 'wool'
        },
        {
            id: 2,
            name: 'Lana de Oveja doble hebra Color Natural - 100g',
            price: 3800,
            image: 'productos/lanadobrehebracrudo.jpg',
            category: 'wool'
        },
        {
            id: 3,
            name: 'Lana de Oveja Teñido Natural Flor de Aromo - 178g',
            price: 6400,
            image: 'productos/lanafloraromo.jpg',
            category: 'wool'
        },
        {
            id: 4,
            name: 'Lana de oveja hilado artesanal  - 500g',
            price: 22000,
            image: 'productos/lanaartesanal.jpg',
            category: 'wool'
        },
        {
            id: 5,
            name: 'Lana de oveja pitio  - 500g',
            price: 25000,
            image: 'productos/lanapitio.jpg',
            category: 'wool'
        }        
        ],
    textiles: [
        {
            id: 6,
            name: 'Amukan Makuñ 150*206 cm',
            price: 420000,
            image: 'productos/amukanmakun.jpg',
            desc: "Manta tejida en telar mapuche wixal, técnica tejido llano o liso, motro o 4 orillos. Lana de oveja natural colores crudo, pitio y café",
            category: 'textiles'
        },
        {
            id: 7,
            name: 'Makuñ azul 150*206 cm',
            price: 390000,
            image: 'productos/makunazul.jpg',
            desc: "Manta tejida en telar mapuche wixal, técnica tejido llano o liso con flecos. Lana de oveja natural colores café, pitio, crudo, azul, celeste, y amarillo de flor de aromo",
            category: 'textiles'
        },
        {
            id: 8,
            name: 'Faja Tejida a Telar con ñimin de 216cm',
            price: 120000,
            image: 'productos/fajanimin.jpg',
            category: 'textiles'
        },
        {
            id: 9,
            name: 'Faja Tejida a Telar color rojo de 265cm',
            price: 95000,
            image: 'productos/fajanimin.jpg',
            category: 'textiles'
        },
        {
            id: 10,
            name: 'Bolso Artesanal',
            price: 35000,
            image: 'productos/bolsoartesanal.jpg',
            category: 'textiles'
        },
        {
            id: 11,
            name: 'Piecera 55*105 cm',
            price: 50000,
            image: 'productos/piecera.jpg',
            category: 'textiles'
        },
        {
            id: 12,
            name: 'Cinturon rojo ',
            price: 35000,
            image: 'productos/trarilonkorojo.jpg',
            category: 'textiles'
        },
        {
            id: 13,
            name: 'Cinturon azul ',
            price: 35000,
            image: 'productos/trarilonkoazul.jpg',
            category: 'textiles'
        }        
    ],
    classes: [
        {
            id: 14,
            name: 'Clase virtual CHAÑUNTUKU Sobremontura',
            price: 30000,
            image: 'productos/tallervirtualchanunruku.jpg',
            desc: '1 sesiones online - El chañuntuku o chañuntuko es un textil único, reconocido por sus flecos largos y coloridos que antiguamente acompañaban a los arrieros en la cordillera, destinado a la sobremontura del caballo. Hoy lo rescatamos como una expresión de identidad, arte y memoria.',
            category: 'classes'
        }
    ],
};

// ==========================================
// ESTADO DEL CARRITO
// ==========================================

let cart = [];

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    loadCartFromStorage();
    updateCart();
});

// ==========================================
// RENDERIZADO DE PRODUCTOS
// ==========================================

function renderProducts() {
    renderCategory('textiles', 'textilesGrid');
    renderCategory('classes', 'classesGrid');
    renderCategory('wool', 'woolGrid');
}

function renderCategory(category, gridId) {
    const grid = document.getElementById(gridId);
    const products = PRODUCTS[category];
    
    if (!grid || !products) return;
    
    grid.innerHTML = products.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const isClass = product.category === 'classes';
    const buttonText = isClass ? 'Inscribirse' : 'Agregar al carrito';
    
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                ${product.desc ? `<p class="product-desc">${product.desc}</p>` : ''}
                <p class="product-price">$${formatPrice(product.price)}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    ${buttonText}
                </button>
            </div>
        </div>
    `;
}

// ==========================================
// NAVEGACIÓN
// ==========================================

function showSection(sectionName) {
    const sections = ['home', 'textiles', 'classes', 'wool'];
    
    sections.forEach(section => {
        const element = document.getElementById(`${section}Section`);
        if (element) {
            element.classList.toggle('hidden', section !== sectionName);
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// MENÚ MÓVIL
// ==========================================

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// ==========================================
// CARRITO - TOGGLE
// ==========================================

function toggleCart() {
    const overlay = document.getElementById('cartOverlay');
    const sidebar = document.getElementById('cartSidebar');
    
    if (overlay && sidebar) {
        overlay.classList.toggle('active');
        sidebar.classList.toggle('active');
    }
}

// ==========================================
// CARRITO - AGREGAR PRODUCTO
// ==========================================

function addToCart(productId) {
    const product = findProductById(productId);
    
    if (!product) {
        console.error('Producto no encontrado:', productId);
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    saveCartToStorage();
    toggleCart();
}

// ==========================================
// CARRITO - ACTUALIZAR CANTIDAD
// ==========================================

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCart();
        saveCartToStorage();
    }
}

// ==========================================
// CARRITO - REMOVER PRODUCTO
// ==========================================

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCartToStorage();
}

// ==========================================
// CARRITO - ACTUALIZAR UI
// ==========================================

function updateCart() {
    updateCartBadge();
    updateCartItems();
    updateCartFooter();
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = getTotalItems();
    
    if (badge) {
        badge.textContent = totalItems;
        badge.classList.toggle('hidden', totalItems === 0);
    }
}

function updateCartItems() {
    const container = document.getElementById('cartItems');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
    } else {
        container.innerHTML = cart.map(item => createCartItemHTML(item)).join('');
    }
}

function createCartItemHTML(item) {
    return `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="cart-item-info">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">$${formatPrice(item.price)}</p>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Disminuir cantidad">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Aumentar cantidad">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Eliminar producto">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function updateCartFooter() {
    const footer = document.getElementById('cartFooter');
    const totalElement = document.getElementById('cartTotal');
    
    if (!footer || !totalElement) return;
    
    if (cart.length === 0) {
        footer.classList.add('hidden');
    } else {
        footer.classList.remove('hidden');
        totalElement.textContent = '$' + formatPrice(getTotalPrice());
    }
}

// ==========================================
// WHATSAPP - ENVIAR PEDIDO
// ==========================================

function sendToWhatsApp() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
}

function generateWhatsAppMessage() {
    let message = `¡Hola! Me gustaría hacer el siguiente pedido en ${STORE_CONFIG.storeName}:\n\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Cantidad: ${item.quantity}\n`;
        message += `   Precio unitario: $${formatPrice(item.price)}\n`;
        message += `   Subtotal: $${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `*TOTAL: $${formatPrice(getTotalPrice())}*\n\n`;
    message += `Gracias!`;
    
    return message;
}

// ==========================================
// UTILIDADES
// ==========================================

function findProductById(id) {
    const allProducts = [
        ...PRODUCTS.textiles,
        ...PRODUCTS.classes,
        ...PRODUCTS.wool
    ];
    return allProducts.find(p => p.id === id);
}

function getTotalItems() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getTotalPrice() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function formatPrice(price) {
    return price.toLocaleString('es-CL');
}

// ==========================================
// LOCAL STORAGE
// ==========================================

function saveCartToStorage() {
    try {
        localStorage.setItem('chimalfe_cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error al guardar el carrito:', error);
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('chimalfe_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (error) {
        console.error('Error al cargar el carrito:', error);
        cart = [];
    }
}

// ==========================================
// EXPORT PARA USO GLOBAL
// ==========================================

window.showSection = showSection;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleCart = toggleCart;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

window.sendToWhatsApp = sendToWhatsApp;
