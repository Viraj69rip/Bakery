
    const PH = '919657174007';
    const BN = 'Aishwarya Bakery';

    const MENU = {
      cakes: [
        { name: 'Special Cakes', price: 850, badge: 'Signature', desc: 'Our prized special cakes — premium ingredients for birthdays, anniversaries and every celebration.', image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=700&q=85' },
        { name: 'Chocolate Cakes', price: 650, badge: 'Popular', desc: 'Rich dark chocolate layers with silky ganache frosting — a chocolate lover dream.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=85' },
        { name: 'Regular Flavoured Cakes', price: 450, badge: '', desc: 'Classic flavours — vanilla, butterscotch, pineapple and more — perfect for every occasion.', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=700&q=85' }
      ],
      pastries: [
        { name: 'Cheese Pastries', price: 65, badge: 'Bestseller', desc: 'Flaky golden pastry filled with creamy savoury cheese. Light, crispy and satisfying.', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=85' },
        { name: 'Chocolate Pastries', price: 70, badge: '', desc: 'Buttery puff pastry loaded with rich chocolate filling — a perfect afternoon indulgence.', image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=700&q=85' },
        { name: 'Flavoured Pastries', price: 60, badge: '', desc: 'Seasonal flavours — strawberry, mango and vanilla — fresh, light and sweet.', image: 'https://images.unsplash.com/photo-1501963422762-3d89bd989e69?w=700&q=85' }
      ],
      breads: [
        { name: 'Milk Bread', price: 45, badge: 'Fresh Daily', desc: 'Soft, pillowy milk bread with subtle sweetness — baked every morning for perfect toast.', image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=700&q=85' },
        { name: 'Brown Bread', price: 50, badge: 'Healthy', desc: 'Wholesome whole-grain brown bread with hearty texture, nutty flavour and fibre.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=85' },
        { name: 'White Bread', price: 40, badge: '', desc: 'Classic soft white bread with a golden crust — great for sandwiches and toast.', image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=700&q=85' }
      ],
      cookies: [
        { name: 'Sugar Cookies', price: 30, badge: '', desc: 'Crispy, buttery sugar cookies with delicate sweetness — perfect with chai.', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&q=85' },
        { name: 'Chocolate Chip Cookies', price: 35, badge: 'Popular', desc: 'Golden cookies packed with real chocolate chips — crispy outside, chewy inside.', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&q=85' },
        { name: 'Oatmeal Cookies', price: 35, badge: 'Healthy', desc: 'Hearty oatmeal cookies with a nutty crunch — wholesome and naturally sweet.', image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=700&q=85' }
      ],
      khari: [
        { name: 'Butter Khari', price: 10, badge: 'Bestseller', desc: 'Flaky, buttery khari that crumbles perfectly — the ultimate chai-time companion.', image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=700&q=85' },
        { name: 'Toast', price: 15, badge: '', desc: 'Crisp golden toast varieties — plain, masala and butter — baked fresh every morning.', image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=700&q=85' },
        { name: 'Khari Varieties', price: 10, badge: '', desc: 'Assorted khari in plain, jeera and pepper flavours — light, airy and perfect anytime.', image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=700&q=85' }
      ]
    };

    const STORES = [
      { name: 'Main Store — Pencil Chowk', area: 'R/1, Pencil Chowk, Baramati – 413102', hours: '7:00 AM – 9:00 PM', tags: ['Custom Cakes', 'Full Menu', 'Parking'] },
      { name: 'Station Road Branch', area: 'Near Railway Station, Baramati', hours: '6:30 AM – 8:30 PM', tags: ['Express Service', 'Fresh Breads', 'Tea & Coffee'] },
      { name: 'College Road Outlet', area: 'Near Vidya Pratishthan, Baramati', hours: '7:00 AM – 8:00 PM', tags: ['Student Specials', 'Quick Bites', 'Fresh Snacks'] },
      { name: 'Market Yard Store', area: 'Wholesale Market, Baramati', hours: '6:00 AM – 7:00 PM', tags: ['Bulk Orders', 'Fresh Daily', 'Early Opening'] },
      { name: 'Bhigwan Road Branch', area: 'Near Bus Stand, Baramati', hours: '7:00 AM – 8:00 PM', tags: ['Travel Snacks', 'Fresh Khari', 'Quick Service'] },
      { name: 'Morgaon Highway Outlet', area: 'Highway Junction, Baramati', hours: '6:30 AM – 9:00 PM', tags: ['Highway Stop', 'Traveler Friendly', 'Fresh Breads'] },
      { name: 'Residential Area Store', area: 'Shivaji Nagar, Baramati', hours: '7:30 AM – 8:00 PM', tags: ['Home Delivery', 'Family Packs', 'Neighbourhood Favourite'] },
      { name: 'Industrial Area Branch', area: 'MIDC Area, Baramati', hours: '6:00 AM – 6:00 PM', tags: ['Office Catering', 'Bulk Snacks', 'Corporate Orders'] }
    ];

    const fallbackImage = 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=70';
    const liked = new Set(JSON.parse(localStorage.getItem('aishwaryaLiked') || '[]'));

    document.getElementById('year').textContent = new Date().getFullYear();

    window.addEventListener('load', () => {
      setTimeout(() => document.getElementById('loader').classList.add('hide'), 1700);
    });

    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;

    window.addEventListener('mousemove', event => {
      dot.style.left = event.clientX + 'px';
      dot.style.top = event.clientY + 'px';
      ringX = event.clientX;
      ringY = event.clientY;
    });

    function animateCursor() {
      const currentX = parseFloat(ring.style.left || window.innerWidth / 2);
      const currentY = parseFloat(ring.style.top || window.innerHeight / 2);
      ring.style.left = currentX + (ringX - currentX) * .16 + 'px';
      ring.style.top = currentY + (ringY - currentY) * .16 + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('a, button, .product-card, .review-card, .location-card, .feature-card').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });

    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', event => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * .18}px, ${y * .22}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });

    const nav = document.getElementById('nav');
    const whatsapp = document.getElementById('whatsappFloat');
    const progress = document.getElementById('scrollProgress');
    const heroMedia = document.getElementById('heroMedia');

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 40);
      whatsapp.classList.toggle('show', y > 450);
      progress.style.width = `${Math.min((y / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`;
      if (heroMedia) heroMedia.style.transform = `translate3d(0, ${y * .12}px, 0) scale(1.08)`;
    }, { passive: true });

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.classList.toggle('menu-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .5 });

    counters.forEach(counter => counterObserver.observe(counter));

    function animateCounter(el) {
      const target = Number(el.dataset.count || 0);
      const decimals = Number(el.dataset.decimals || 0);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1500;
      const start = performance.now();

      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const value = target * eased;
        el.textContent = prefix + value.toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('header[id], main section[id]');

    const activeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => activeObserver.observe(section));

    function renderMenu(category) {
      const grid = document.getElementById('productGrid');
      const fragment = document.createDocumentFragment();
      grid.innerHTML = '';

      MENU[category].forEach((item, index) => {
        const key = `${category}:${item.name}`;
        const msg = encodeURIComponent(`Hello! I would like to order ${item.name} (₹${item.price}) from ${BN}.`);
        const card = document.createElement('article');
        card.className = 'product-card reveal';
        card.style.setProperty('--delay', `${index * 80}ms`);
        card.innerHTML = `
          <div class='product-media'>
            <img src='${item.image}' alt='${item.name}' loading='lazy'>
            ${item.badge ? `<span class='badge'>${item.badge}</span>` : ''}
            <button class='favorite${liked.has(key) ? ' liked' : ''}' type='button' aria-label='Save ${item.name}'>
              <i class='${liked.has(key) ? 'fas' : 'far'} fa-heart'></i>
            </button>
          </div>
          <div class='product-body'>
            <h3 class='product-title'>${item.name}</h3>
            <p class='product-desc'>${item.desc}</p>
            <div class='product-bottom'>
              <div class='price'>₹${item.price}<small> / pc</small></div>
              <a class='order-btn' href='https://wa.me/${PH}?text=${msg}' target='_blank' rel='noopener'>
                <i class='fab fa-whatsapp'></i> Order
              </a>
            </div>
          </div>
        `;

        const img = card.querySelector('img');
        img.onerror = () => { img.src = fallbackImage; };

        card.querySelector('.favorite').addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          const btn = event.currentTarget;
          btn.classList.toggle('liked');
          const icon = btn.querySelector('i');
          icon.className = btn.classList.contains('liked') ? 'fas fa-heart' : 'far fa-heart';
          liked.has(key) ? liked.delete(key) : liked.add(key);
          localStorage.setItem('aishwaryaLiked', JSON.stringify([...liked]));
        });

        fragment.appendChild(card);
      });

      grid.appendChild(fragment);
      document.querySelectorAll('.product-card').forEach(el => observer.observe(el));
    }

    renderMenu('cakes');

    document.querySelectorAll('.cat-pill').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const grid = document.getElementById('productGrid');
        grid.classList.add('switching');
        setTimeout(() => {
          renderMenu(button.dataset.target);
          grid.classList.remove('switching');
        }, 160);
      });
    });

    const locationGrid = document.getElementById('locationGrid');
    const storeFragment = document.createDocumentFragment();

    STORES.forEach((store, index) => {
      const msg = encodeURIComponent(`Hello! I want to know more about ${store.name} at Aishwarya Bakery.`);
      const card = document.createElement('article');
      card.className = 'location-card reveal';
      card.style.setProperty('--delay', `${index * 70}ms`);
      card.innerHTML = `
        <div class='location-head'>
          <div>
            <span>Store ${String(index + 1).padStart(2, '0')}</span>
            <h3>${store.name}</h3>
          </div>
          <i class='location-icon fas fa-store'></i>
        </div>
        <div class='location-body'>
          <p><strong>Hours:</strong> ${store.hours}</p>
          <p><strong>Address:</strong> ${store.area}</p>
          <p><strong>Phone:</strong> <a href='tel:+919657174007'>+91 96571 74007</a></p>
          <div class='location-tags'>${store.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          <a href='https://wa.me/${PH}?text=${msg}' target='_blank' rel='noopener'>
            <i class='fab fa-whatsapp'></i> WhatsApp this store
          </a>
        </div>
      `;
      storeFragment.appendChild(card);
    });

    locationGrid.appendChild(storeFragment);
    document.querySelectorAll('.location-card').forEach(el => observer.observe(el));

    document.querySelectorAll('.product-card, .review-card, .location-card, .feature-card, .photo-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-8px)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('img');

    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightbox.classList.add('open');
      });
    });

    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) lightbox.classList.remove('open');
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') lightbox.classList.remove('open');
    });

    if ('serviceWorker' in navigator) {
      const sw = `
        const CACHE = 'aishwarya-bakery-premium-v1';
        self.addEventListener('install', event => {
          event.waitUntil(caches.open(CACHE).then(cache => cache.addAll([location.href]).catch(() => {})));
        });
        self.addEventListener('fetch', event => {
          event.respondWith(caches.match(event.request).then(response => response || fetch(event.request).catch(() => new Response('Offline', { status: 503 }))));
        });
      `;
      navigator.serviceWorker.register(URL.createObjectURL(new Blob([sw], { type: 'application/javascript' }))).catch(() => {});
    }
  