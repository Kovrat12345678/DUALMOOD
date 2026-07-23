// ============================================
// DUALMOOD — Main JavaScript (Premium Long Version)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Product Data ---
  const products = {
    'angrymood-polo': {
      name: 'ANGRYMOOD TEE',
      price: '12 990 Ft',
      priceNum: 12990,
      images: ['fehér ruha háttér/image5 (1).jpeg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Az ANGRYMOOD TEE a DUALMOOD első kollekciójának zászlóshajója. Oversized szabás, galléros dizájn, a márka ikonikus angry face logójával az elején.',
      details: [
        '240g/m² prémium pamut',
        'Oversized fit',
        'Galléros polo dizájn',
        'Hímzett logó',
        'Limitált szériás kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ'
    },
    'angrymood-tee': {
      name: 'ANGRYMOOD TEE',
      price: '12 990 Ft',
      priceNum: 12990,
      images: ['fehér ruha háttér/image4 (1).jpeg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Az ANGRYMOOD oversized szabású póló 3D puff print logóval. A sötét hangulat megtestesítője — mert néha dühösnek lenni is jó.',
      details: [
        '240g/m² prémium pamut',
        'Oversized fit',
        'Crew neck',
        '3D puff print logó',
        'Limitált szériás kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ'
    },
    'happymood-tee': {
      name: 'HAPPYMOOD TEE',
      price: '12 990 Ft',
      priceNum: 12990,
      images: ['fehér ruha háttér/image3 (1).jpeg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A HAPPYMOOD a kettősség másik oldala. Ugyanaz a prémium minőség, de a boldogabb éned számára. Oversized szabás, nagyméretű logó.',
      details: [
        '240g/m² prémium pamut',
        'Oversized fit',
        'Crew neck',
        'Nagyméretű logó a mellrészen',
        'Limitált szériás kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ'
    },
    'dualmood-trackset': {
      name: 'DUALMOOD TRACKSET',
      price: '17 990 Ft',
      priceNum: 17990,
      images: ['fehér ruha háttér/image0 (5).jpeg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'DUALMOOD kollekció prémium fekete válogatott szett: oversized póló és melegítő shorts fehér hímzett kontúr logóval.',
      details: [
        '240g/m² prémium válogatott pamut',
        'Oversized fit póló & shorts szett',
        'Fehér kontúr logó hímzés',
        'Gumírozott, kötős derékrész',
        'Limitált szériás drop kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ DROP'
    },
    'happymood-bronze': {
      name: 'HAPPYMOOD BRONZE TEE',
      price: '12 990 Ft',
      priceNum: 12990,
      images: ['fehér ruha háttér/image1 (2).jpeg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Fekete oversized streetwear póló 3D dombornyomott bronz logóval az előlapon.',
      details: [
        '240g/m² prémium pamut',
        'Oversized fit szabás',
        'Crew neck nyakkivágás',
        '3D bronz effektusú logó',
        'Limitált szériás kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ DROP'
    },
    'dualmood-bronze': {
      name: 'HAPPYMOOD BRONZE TEE',
      price: '12 990 Ft',
      priceNum: 12990,
      images: ['fehér ruha háttér/image1 (2).jpeg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Fekete oversized streetwear póló 3D dombornyomott bronz logóval az előlapon.',
      details: [
        '240g/m² prémium pamut',
        'Oversized fit szabás',
        'Crew neck nyakkivágás',
        '3D bronz effektusú logó',
        'Limitált szériás kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ DROP'
    },
    'dualmood-shorts': {
      name: 'DUALMOOD SHORTS',
      price: '10 990 Ft',
      priceNum: 10990,
      images: ['fehér ruha háttér/image2 (3).jpeg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Prémium minőségű fekete melegítő shorts fehér hímzett logóval a bal szárán.',
      details: [
        '300g/m² nehézsúlyú pamut',
        'Kényelmes utcai szabás',
        'Gumírozott derék húzózsinórral',
        'Hímzett DUALMOOD logó',
        'Limitált szériás kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ DROP'
    },
    'happymood-toxic-yellow': {
      name: 'HAPPYMOOD TOXIC YELLOW',
      price: '12 990 Ft',
      priceNum: 12990,
      images: ['dropp/image0 (12).png'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Fekete oversized pamut póló HAPPYMOOD 3D puff print sárga kontúr logóval.',
      details: [
        '240g/m² prémium válogatott pamut',
        'Oversized fit szabás',
        'Crew neck nyakkivágás',
        'Sárga kontúr logó print',
        'Limitált szériás drop kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ DROP'
    },
    'happymood-eletric-pink': {
      name: 'HAPPYMOOD ELETRIC PINK',
      price: '12 990 Ft',
      priceNum: 12990,
      images: ['dropp/image1 (3).png'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Fekete oversized pamut póló HAPPYMOOD 3D puff print rózsaszín kontúr logóval.',
      details: [
        '240g/m² prémium válogatott pamut',
        'Oversized fit szabás',
        'Crew neck nyakkivágás',
        'Rózsaszín kontúr logó print',
        'Limitált szériás drop kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ DROP'
    },
    'dualmood-pink-tee': {
      name: 'DUALMOOD PINK TEE',
      price: '12 990 Ft',
      priceNum: 12990,
      images: ['dropp/image2 (2).png'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Fekete oversized pamut póló DUALMOOD 3D puff print rózsaszín felirattal és kontúr logóval.',
      details: [
        '240g/m² prémium pamut',
        'Oversized fit szabás',
        'Crew neck nyakkivágás',
        'Limitált szériás drop kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ DROP'
    },
    'dualmood-white-tee': {
      name: 'DUALMOOD WHITE TEE',
      price: '12 990 Ft',
      priceNum: 12990,
      images: ['dropp/image3 (1).png'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Fekete oversized pamut póló DUALMOOD 3D puff print fehér/szürke felirattal és kontúr logóval.',
      details: [
        '240g/m² prémium pamut',
        'Oversized fit szabás',
        'Crew neck nyakkivágás',
        'Limitált szériás drop kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ DROP'
    },
    'dualmood-pink-shorts': {
      name: 'DUALMOOD PINK SHORTS',
      price: '10 990 Ft',
      priceNum: 10990,
      images: ['dropp/image4.png'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Prémium minőségű fekete melegítő shorts pink hímzett logóval és DUALMOOD felirattal.',
      details: [
        '300g/m² nehézsúlyú pamut',
        'Kényelmes, lezser szabás',
        'Gumírozott, kötős derékrész',
        'Limitált szériás drop kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ DROP'
    },
    'dualmood-striped-shorts': {
      name: 'DUALMOOD STRIPED SHORTS',
      price: '11 990 Ft',
      priceNum: 11990,
      images: ['dropp/image5.png'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Prémium minőségű fekete melegítő shorts oldalsó pink csíkokkal és hímzett DUALMOOD logóval.',
      details: [
        '300g/m² nehézsúlyú pamut',
        'Kényelmes, lezser szabás',
        'Gumírozott, kötős derékrész',
        'Limitált szériás drop kiadás',
        'Mosógépben mosható 30°C-on'
      ],
      badge: 'ÚJ DROP'
    }
  };

  // --- State ---
  let cartItems = [];
  let currentPage = 'home';
  let previousPage = 'home';

  // --- DOM References ---
  const loadingScreen = document.getElementById('loadingScreen');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const cartCount = document.getElementById('cartCount');
  const toast = document.getElementById('toast');
  const backToTop = document.getElementById('backToTop');
  const cursorGlow = document.getElementById('cursorGlow');
  const header = document.getElementById('header');
  const newsletterForm = document.getElementById('newsletterForm');
  const productDetail = document.getElementById('productDetail');

  // --- Loading Screen ---
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => loadingScreen.remove(), 500);
      }
    }, 800);
  });

  // --- Cursor Glow (desktop only) ---
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      requestAnimationFrame(() => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
      });
    });
  }

  // --- Mobile Menu ---
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // --- Search Overlay ---
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchPopular = document.getElementById('searchPopular');
  const searchBtn = document.getElementById('searchBtn');
  const searchClose = document.getElementById('searchClose');

  function openSearch() {
    if (searchOverlay) {
      searchOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInput.focus(), 300);
    }
  }

  function closeSearch() {
    if (searchOverlay) {
      searchOverlay.classList.remove('active');
      document.body.style.overflow = '';
      searchInput.value = '';
      resetSearchResults();
    }
  }

  function resetSearchResults() {
    if (searchPopular) searchPopular.style.display = '';
    const liveResults = searchResults.querySelector('.search-overlay__live-results');
    if (liveResults) liveResults.remove();
  }

  function performSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      resetSearchResults();
      return;
    }

    if (searchPopular) searchPopular.style.display = 'none';

    const oldResults = searchResults.querySelector('.search-overlay__live-results');
    if (oldResults) oldResults.remove();

    const results = Object.entries(products).filter(([id, product]) => {
      return product.name.toLowerCase().includes(q) ||
             product.description.toLowerCase().includes(q) ||
             product.details.some(d => d.toLowerCase().includes(q)) ||
             id.toLowerCase().includes(q);
    });

    const container = document.createElement('div');
    container.className = 'search-overlay__live-results';

    if (results.length > 0) {
      container.innerHTML = `
        <p class="search-overlay__results-title">${results.length} találat</p>
        ${results.map(([id, product]) => `
          <div class="search-overlay__result-item" data-product-id="${id}">
            <img src="${product.images[0]}" alt="${product.name}" class="search-overlay__result-image">
            <div class="search-overlay__result-info">
              <p class="search-overlay__result-name">${product.name}</p>
              <p class="search-overlay__result-price">${product.price}</p>
            </div>
            <span class="search-overlay__result-arrow">→</span>
          </div>
        `).join('')}
      `;

      container.querySelectorAll('.search-overlay__result-item').forEach(item => {
        item.addEventListener('click', () => {
          const productId = item.dataset.productId;
          closeSearch();
          navigateTo('product', productId);
        });
      });
    } else {
      container.innerHTML = `
        <div class="search-overlay__no-results">
          <p>Nincs találat a(z) „<strong>${query}</strong>" keresésre.</p>
          <p style="margin-top: 0.5rem; font-size: 0.8rem;">Próbálj más kulcsszót használni.</p>
        </div>
      `;
    }
    searchResults.appendChild(container);
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', () => performSearch(searchInput.value));
  }
  document.querySelectorAll('.search-overlay__tag').forEach(tag => {
    tag.addEventListener('click', () => {
      searchInput.value = tag.dataset.query;
      performSearch(tag.dataset.query);
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
      closeSearch();
    }
  });

  // --- Page Navigation ---
  function navigateTo(page, productId = null) {
    if (page !== 'product') {
      previousPage = page;
    }

    if (menuToggle && mobileMenu) {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.header__nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.page === page);
    });

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    if (page === 'product' && productId) {
      renderProductDetail(productId);
      const prodPage = document.getElementById('page-product');
      if (prodPage) prodPage.classList.add('active');
    } else {
      const targetPage = document.getElementById(`page-${page}`);
      if (targetPage) {
        targetPage.classList.add('active');
      }
    }

    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(initRevealAnimations, 100);
  }

  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });

  const logoLink = document.getElementById('logoLink');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('home');
    });
  }

  // Global Event Delegation for ALL product cards across any page/tab
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (card) {
      if (card.classList.contains('product-card--locked')) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      const productId = card.dataset.product;
      if (productId && products[productId]) {
        navigateTo('product', productId);
      }
    }
  });

  // --- Shop Filter Handler ---
  document.querySelectorAll('.shop__filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.shop__filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      document.querySelectorAll('#page-shop .product-card').forEach(card => {
        const cat = card.dataset.category || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Show/Hide section titles depending on filter
      document.querySelectorAll('.shop__section').forEach(sec => {
        const visibleCards = sec.querySelectorAll('.product-card[style*="display: block"], .product-card:not([style*="display: none"])');
        if (filter !== 'all' && visibleCards.length === 0) {
          sec.style.display = 'none';
        } else {
          sec.style.display = 'block';
        }
      });
    });
  });

  // --- Product Detail Renderer ---
  function renderProductDetail(productId) {
    const product = products[productId];
    if (!product || !productDetail) return;

    productDetail.innerHTML = `
      <div class="product-detail__top-bar">
        <button class="product-detail__back-btn" id="productBackBtn" aria-label="Vissza a termékekhez">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>VISSZA A TERMÉKEKHEZ</span>
        </button>
      </div>
      <div class="product-detail__gallery">
        <img src="${product.images[0]}" alt="${product.name}" class="product-detail__main-image">
      </div>
      <div class="product-detail__info">
        <h1 class="product-detail__name">${product.name}</h1>
        <div class="product-detail__price-container">
          <span class="product-detail__price">${product.price}</span>
        </div>
        
        <div class="product-detail__size-section">
          <p class="product-detail__size-label">Méret</p>
          <div class="product-detail__sizes">
            ${product.sizes.map((size, i) => `
              <button class="product-detail__size-btn ${i === 0 ? 'active' : ''}" data-size="${size}">${size}</button>
            `).join('')}
          </div>
        </div>

        <button class="product-detail__add-to-cart" id="addToCartBtn" data-product="${productId}">
          Kosárba — ${product.price}
        </button>

        <div class="product-detail__description">
          <h3 class="product-detail__desc-title">Leírás</h3>
          <p class="product-detail__desc-text">${product.description}</p>
          <div class="product-detail__desc-text" style="margin-top: 1rem;">
            <ul>
              ${product.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;

    const backBtn = document.getElementById('productBackBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        navigateTo(previousPage || 'shop');
      });
    }

    productDetail.querySelectorAll('.product-detail__size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        productDetail.querySelectorAll('.product-detail__size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', () => {
        const selectedSize = productDetail.querySelector('.product-detail__size-btn.active');
        const size = selectedSize ? selectedSize.dataset.size : 'M';
        
        cartItems.push({
          id: productId,
          name: product.name,
          price: product.priceNum,
          size: size
        });

        updateCart();
        showToast(`${product.name} (${size}) hozzáadva a kosárhoz!`);
        
        addToCartBtn.textContent = '✓ HOZZÁADVA';
        addToCartBtn.style.background = '#22c55e';
        addToCartBtn.style.color = '#fff';
        setTimeout(() => {
          addToCartBtn.textContent = `Kosárba — ${product.price}`;
          addToCartBtn.style.background = '';
          addToCartBtn.style.color = '';
        }, 1500);
      });
    }
  }

  // --- Cart ---
  function updateCart() {
    if (cartCount) {
      cartCount.textContent = cartItems.length;
      cartCount.style.transform = 'scale(1.3)';
      setTimeout(() => cartCount.style.transition = 'transform 0.2s', 10);
      setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
    }
    renderCartItems();
  }

  // DOM References for Cart Drawer
  const cartBtn = document.getElementById('cartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartClose = document.getElementById('cartClose');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartTotalVal = document.getElementById('cartTotalVal');
  const checkoutTotalVal = document.getElementById('checkoutTotalVal');
  const proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
  const backToItemsBtn = document.getElementById('backToItemsBtn');
  const cartStepItems = document.getElementById('cartStepItems');
  const cartStepCheckout = document.getElementById('cartStepCheckout');
  const cartStepSuccess = document.getElementById('cartStepSuccess');
  const checkoutForm = document.getElementById('checkoutForm');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');

  // Toggle Cart Drawer
  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cartDrawer) {
        cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
        switchCartStep('items');
        renderCartItems();
      }
    });
  }

  if (cartClose) {
    cartClose.addEventListener('click', closeCartDrawer);
  }
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', closeCartDrawer);
  }
  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', closeCartDrawer);
  }

  function closeCartDrawer() {
    if (cartDrawer) {
      cartDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function switchCartStep(step) {
    if (cartStepItems) cartStepItems.classList.toggle('active', step === 'items');
    if (cartStepCheckout) cartStepCheckout.classList.toggle('active', step === 'checkout');
    if (cartStepSuccess) cartStepSuccess.classList.toggle('active', step === 'success');
  }

  if (proceedToCheckoutBtn) {
    proceedToCheckoutBtn.addEventListener('click', () => {
      if (cartItems.length > 0) {
        switchCartStep('checkout');
      }
    });
  }

  if (backToItemsBtn) {
    backToItemsBtn.addEventListener('click', () => {
      switchCartStep('items');
    });
  }

  // Submit checkout form
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submitOrderBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'KÜLDÉS...';
      }

      const totalValue = calculateTotal();

      const orderData = {
        customer_name: document.getElementById('checkoutName').value,
        customer_email: document.getElementById('checkoutEmail').value,
        customer_phone: document.getElementById('checkoutPhone').value,
        customer_zip: document.getElementById('checkoutZip').value,
        customer_city: document.getElementById('checkoutCity').value,
        customer_address: document.getElementById('checkoutAddress').value,
        cart_items: cartItems.map(item => ({
          name: item.name,
          size: item.size,
          price: item.price
        })),
        total_price: totalValue
      };

      fetch('order.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      })
      .then(res => {
        if (!res.ok) throw new Error("PHP backend not available");
        return res.json();
      })
      .then(res => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'RENDELÉS ELKÜLDÉSE';
        }
        
        switchCartStep('success');
        cartItems = [];
        updateCart();
        checkoutForm.reset();
      })
      .catch(err => {
        console.warn("PHP backend failed or not available, using direct FormSubmit API...", err);
        
        const emailPayload = {
          "Name": orderData.customer_name,
          "Email": orderData.customer_email,
          "Phone": orderData.customer_phone,
          "Address": `${orderData.customer_zip} ${orderData.customer_city}, ${orderData.customer_address}`,
          "Products": orderData.cart_items.map(i => `${i.name} (Méret: ${i.size})`).join(', '),
          "Total Value": `${orderData.total_price.toLocaleString('hu-HU')} Ft`,
          "_subject": "Új DUALMOOD Rendelés (GitHub Pages) - " + orderData.customer_name
        };

        fetch('https://formsubmit.co/ajax/byekovrat@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'RENDELÉS ELKÜLDÉSE';
          }
          switchCartStep('success');
          cartItems = [];
          updateCart();
          checkoutForm.reset();
        });
      });
    });
  }

  function calculateTotal() {
    return cartItems.reduce((sum, item) => {
      const product = products[item.id];
      return sum + (product ? product.priceNum : 12990);
    }, 0);
  }

  // Update Cart details in Drawer
  function renderCartItems() {
    if (!cartItemsList) return;
    
    if (cartItems.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-drawer__empty">
          <p class="cart-drawer__empty-title">A kosarad üres</p>
          <p>Tégy bele ruhákat a vásárláshoz.</p>
        </div>
      `;
      if (proceedToCheckoutBtn) proceedToCheckoutBtn.disabled = true;
      if (cartTotalVal) cartTotalVal.textContent = '0 Ft';
      if (checkoutTotalVal) checkoutTotalVal.textContent = '0 Ft';
      return;
    }

    if (proceedToCheckoutBtn) proceedToCheckoutBtn.disabled = false;

    let html = '';
    let total = 0;

    cartItems.forEach((item, index) => {
      const prodKey = item.id;
      const product = products[prodKey];
      const imgPath = product ? product.images[0] : 'fehér ruha háttér/image3 (1).jpeg';
      
      html += `
        <div class="cart-item">
          <img src="${imgPath}" alt="${item.name}" class="cart-item__img">
          <div class="cart-item__details">
            <div class="cart-item__title-row">
              <h4 class="cart-item__name">${item.name}</h4>
              <button class="cart-item__remove" onclick="removeCartItem(${index})">Törlés</button>
            </div>
            <div class="cart-item__meta">Méret: ${item.size}</div>
            <div class="cart-item__price">${product ? product.price : '12 990 Ft'}</div>
          </div>
        </div>
      `;
      total += product ? product.priceNum : 12990;
    });

    cartItemsList.innerHTML = html;
    const formattedTotal = total.toLocaleString('hu-HU') + ' Ft';
    if (cartTotalVal) cartTotalVal.textContent = formattedTotal;
    if (checkoutTotalVal) checkoutTotalVal.textContent = formattedTotal;
  }

  // Make removeCartItem globally accessible
  window.removeCartItem = function(index) {
    cartItems.splice(index, 1);
    updateCart();
  };

  // --- Products Unlock logic ---
  let productsUnlocked = false;
  function unlockProducts() {
    if (productsUnlocked) return;
    productsUnlocked = true;
    
    document.querySelectorAll('.product-card--locked').forEach(card => {
      // Remove locked layout classes
      card.classList.remove('product-card--locked');
      
      // Remove lock overlay
      const overlay = card.querySelector('.product-card__lock-overlay');
      if (overlay) overlay.remove();
      
      // Replace lock badge with normal badge
      const badge = card.querySelector('.product-card__badge--locked');
      if (badge) {
        badge.classList.remove('product-card__badge--locked');
        badge.textContent = 'ÚJ DROP';
      }
      
      // Reveal actual price
      const productId = card.dataset.product;
      if (productId && products[productId]) {
        const priceEl = card.querySelector('.product-card__price');
        if (priceEl) priceEl.textContent = products[productId].price;
      }
      
      // Append details hover overlay so card acts like standard cards
      const wrapper = card.querySelector('.product-card__image-wrapper');
      if (wrapper) {
        const hoverOverlay = document.createElement('div');
        hoverOverlay.className = 'product-card__overlay';
        hoverOverlay.innerHTML = '<button class="product-card__quick-view">RÉSZLETEK</button>';
        wrapper.appendChild(hoverOverlay);
      }
    });
  }

  // --- Countdown Timer ---
  function initCountdown() {
    const targetDate = new Date('2026-07-25T18:00:00').getTime();
    
    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance <= 0) {
        unlockProducts();
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      const daysEl = document.getElementById('cdDays');
      const hoursEl = document.getElementById('cdHours');
      const minutesEl = document.getElementById('cdMinutes');
      const secondsEl = document.getElementById('cdSeconds');
      
      if (daysEl) daysEl.textContent = String(Math.max(0, days)).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(Math.max(0, hours)).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(Math.max(0, minutes)).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(Math.max(0, seconds)).padStart(2, '0');
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
  }
  initCountdown();

  // --- Toast ---
  function showToast(message) {
    if (toast) {
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    }
  }

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      
      document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --- Newsletter ---
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      if (email) {
        showToast('Sikeres feliratkozás! 🎉');
        document.getElementById('newsletterEmail').value = '';
      }
    });
  }

  // --- Contact Form ---
  const contactBtn = document.getElementById('contactSubmitBtn');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;
      
      if (name && email && message) {
        showToast('Üzenet elküldve! Hamarosan válaszolunk. ✉️');
        document.getElementById('contactName').value = '';
        document.getElementById('contactEmail').value = '';
        document.getElementById('contactMessage').value = '';
      } else {
        showToast('Kérlek töltsd ki az összes mezőt!');
      }
    });
  }

  // --- Scroll Reveal ---
  function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => {
      if (!el.classList.contains('visible')) {
        observer.observe(el);
      }
    });
  }

  initRevealAnimations();

  // --- Back to Top ---
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Header scroll effect ---
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (header) {
      if (currentScroll > 100) {
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      } else {
        header.style.borderBottomColor = 'transparent';
      }
    }
    lastScroll = currentScroll;
  });

  // --- Smooth anchor handling ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Size buttons on product cards ---
  document.querySelectorAll('.product-card__size').forEach(sizeBtn => {
    sizeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = sizeBtn.closest('.product-card');
      card.querySelectorAll('.product-card__size').forEach(s => s.style.borderColor = '');
      sizeBtn.style.borderColor = '#fff';
      sizeBtn.style.color = '#fff';
    });
  });

  // --- Parallax effect on hero ---
  const hero = document.getElementById('hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const bgImage = hero.querySelector('.hero__bg-image');
      if (bgImage && scrolled < window.innerHeight) {
        bgImage.style.transform = `scale(${1 + scrolled * 0.0003}) translateY(${scrolled * 0.3}px)`;
      }
    });
  }

  // --- Newsletter Promo Modal ---
  const promoModal = document.getElementById('promoModal');
  const promoClose = document.getElementById('promoClose');
  const promoBackdrop = document.getElementById('promoBackdrop');
  const promoForm = document.getElementById('promoForm');
  const promoSuccessMsg = document.getElementById('promoSuccessMsg');

  // Trigger modal after 1.5 seconds if they haven't seen/filled it in this session
  if (promoModal && !localStorage.getItem('promo_seen')) {
    setTimeout(() => {
      promoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }, 1500);
  }

  function closePromoModal() {
    if (promoModal) {
      promoModal.classList.remove('active');
      document.body.style.overflow = '';
      localStorage.setItem('promo_seen', 'true');
    }
  }

  if (promoClose) promoClose.addEventListener('click', closePromoModal);
  if (promoBackdrop) promoBackdrop.addEventListener('click', closePromoModal);

  if (promoForm) {
    promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('promoEmail');
      if (emailInput && emailInput.value) {
        // Hide form fields
        promoForm.style.display = 'none';
        // Show success message with promo code
        if (promoSuccessMsg) {
          promoSuccessMsg.classList.add('active');
        }
        // Save in localStorage so it doesn't pop up again
        localStorage.setItem('promo_seen', 'true');
        showToast('Kuponkód sikeresen generálva! 🎉');
      }
    });
  }
});
