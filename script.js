// ===============================
// INITIALISATION
// ===============================

document.addEventListener('DOMContentLoaded', () => {
    // ===============================
    // LUCIDE ICONS
    // ===============================

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ===============================
    // EFFET MACHINE À ÉCRIRE
    // ===============================

    const typing = document.getElementById('typing');

    if (typing) {
        const text = 'Joyeux Anniversaire Estève Zannou';

        let index = 0;

        function write() {
            if (index < text.length) {
                typing.textContent += text.charAt(index);

                index++;

                setTimeout(write, 80);
            }
        }

        write();
    }

    // ===============================
    // MENU MOBILE
    // ===============================

    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');

    function openMenu() {
        if (!mobileMenu || !overlay) return;

        mobileMenu.style.right = '0';
        overlay.classList.remove('hidden');
    }

    function closeMenu() {
        if (!mobileMenu || !overlay) return;

        mobileMenu.style.right = '-100%';
        overlay.classList.add('hidden');
    }

    menuBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    // ===============================
    // HEADER AU SCROLL
    // ===============================

    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add(
                'backdrop-blur-xl',
                'bg-slate-900/70',
                'border-b',
                'border-slate-800'
            );
        } else {
            header.classList.remove(
                'backdrop-blur-xl',
                'bg-slate-900/70',
                'border-b',
                'border-slate-800'
            );
        }
    });

    // ===============================
    // INTERSECTION OBSERVER
    // ===============================

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                // Animation des sections

                if (entry.target.classList.contains('reveal')) {
                    entry.target.classList.add('active');
                }

                // Barres de progression

                if (entry.target.classList.contains('progress-bar')) {
                    entry.target.style.width = entry.target.dataset.width + '%';
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    document
        .querySelectorAll('.reveal,.progress-bar')
        .forEach((el) => observer.observe(el));

    // ===============================
    // FORMULAIRE WHATSAPP
    // ===============================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const phone = '22992445008';

            const text = `Bonjour Estève 👋

Nom : ${name}

Email : ${email}

Message :

${message}`;

            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

            window.open(url, '_blank');
        });
    }
});
