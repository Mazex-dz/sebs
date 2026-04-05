const menuItems = [
    {
        name: "Classic Smash",
        description: "Juicy beef patty, cheddar, pickles, house sauce.",
        image: "assets/hero_burger.png",
        category: "burger"
    },
    {
        name: "Choco-Berry Crêpe",
        description: "Nutella, fresh strawberries, powdered sugar.",
        image: "assets/crepe.png",
        category: "crepe"
    },
    {
        name: "Spicy Tacos Trio",
        description: "Seasoned beef, cilantro, onion, spicy salsa.",
        image: "assets/tacos.png",
        category: "tacos"
    },
    {
        name: "Seb's Special Pizza",
        description: "Pepperoni, extra cheese, secret tomato sauce.",
        image: "assets/pizza.png",
        category: "pizza"
    },
    {
        name: "Mega Zinger Sandwich",
        description: "Crispy chicken, lettuce, mayo, toasted bun.",
        image: "assets/zinger.png",
        category: "sandwich"
    },
    {
        name: "Loaded Poutine",
        description: "Fries, cheese curds, rich gravy, bacon bits.",
        image: "assets/poutine.png",
        category: "poutine"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);

    // Populate Menu
    const menuGrid = document.querySelector('.menu-grid');
    if (menuGrid) {
        menuItems.forEach((item, index) => {
            const card = document.createElement('div');
            card.classList.add('menu-card');
            card.innerHTML = `
                <div class="card-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <div class="card-tag">${item.category}</div>
                </div>
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="order-btn">Order Now</div>
                </div>
            `;
            menuGrid.appendChild(card);
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealOnScroll.observe(el));

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 8%';
            navbar.style.background = 'rgba(11, 12, 16, 0.95)';
        } else {
            navbar.style.padding = '20px 8%';
            navbar.style.background = 'rgba(11, 12, 16, 0.8)';
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navLinks.classList.contains('mobile-active')) {
                    navLinks.classList.remove('mobile-active');
                    hamburger.classList.remove('toggle');
                }
            }
        });
    });
});
