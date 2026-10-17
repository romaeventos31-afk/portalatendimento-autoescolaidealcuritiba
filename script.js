document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const btnMobile = document.getElementById('btn-mobile');
    const navMenu = document.getElementById('menu');

    btnMobile.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        btnMobile.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('#menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            btnMobile.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links (handled by CSS scroll-behavior, but adding offset for fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header shadow on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Simple form submission alert (placeholder)
    const contactForm = document.querySelector('.contato-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }

    // Add active class to nav links on scroll (optional enhancement)
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('#menu a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active-link');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active-link');
            }
        });
    });
});
