// Hamburger menu toggle
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    const menuBtn = document.getElementById('menu-btn');
    const mainMenu = document.getElementById('main-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    function closeMenuOnResize() {
        if (window.innerWidth >= 640) {
            mainMenu.classList.add('opacity-100', 'visible', 'pointer-events-auto');
            mainMenu.classList.remove('opacity-0', 'pointer-events-none');
            if (closeMenuBtn) closeMenuBtn.classList.add('hidden');
        } else {
            mainMenu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
            mainMenu.classList.add('opacity-0', 'pointer-events-none');
            if (closeMenuBtn) closeMenuBtn.classList.add('hidden');
        }
    }
    if (menuBtn && mainMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mainMenu.classList.contains('opacity-100');
            const hero = document.getElementById('main-hero');
            if (isOpen) {
                mainMenu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
                mainMenu.classList.add('opacity-0', 'pointer-events-none');
                if (closeMenuBtn) closeMenuBtn.classList.add('hidden');
                if (hero) hero.classList.remove('opacity-0', 'pointer-events-none');
                const offer = document.getElementById('main-offer');
                if (offer) offer.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                mainMenu.classList.add('opacity-100', 'visible', 'pointer-events-auto');
                mainMenu.classList.remove('opacity-0', 'pointer-events-none');
                if (closeMenuBtn) closeMenuBtn.classList.remove('hidden');
                if (hero) hero.classList.add('opacity-0', 'pointer-events-none');
                const offer = document.getElementById('main-offer');
                if (offer) offer.classList.add('opacity-0', 'pointer-events-none');
            }
        });
        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', () => {
                mainMenu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
                mainMenu.classList.add('opacity-0', 'pointer-events-none');
                closeMenuBtn.classList.add('hidden');
                const hero = document.getElementById('main-hero');
                if (hero) hero.classList.remove('opacity-0', 'pointer-events-none');
                const offer = document.getElementById('main-offer');
                if (offer) offer.classList.remove('opacity-0', 'pointer-events-none');
            });
        }
        // Закрытие меню по клику вне меню
        document.addEventListener('click', function (e) {
            if (window.innerWidth < 640 && mainMenu.classList.contains('opacity-100')) {
                if (!mainMenu.contains(e.target) && e.target !== menuBtn) {
                    mainMenu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
                    mainMenu.classList.add('opacity-0', 'pointer-events-none');
                    if (closeMenuBtn) closeMenuBtn.classList.add('hidden');
                    const hero = document.getElementById('main-hero');
                    if (hero) hero.classList.remove('opacity-0', 'pointer-events-none');
                    const offer = document.getElementById('main-offer');
                    if (offer) offer.classList.remove('opacity-0', 'pointer-events-none');
                }
            }
        });
        // Закрытие меню по клику на ссылку
        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 640) {
                    mainMenu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
                    mainMenu.classList.add('opacity-0', 'pointer-events-none');
                    if (closeMenuBtn) closeMenuBtn.classList.add('hidden');
                    const hero = document.getElementById('main-hero');
                    if (hero) hero.classList.remove('opacity-0', 'pointer-events-none');
                    const offer = document.getElementById('main-offer');
                    if (offer) offer.classList.remove('opacity-0', 'pointer-events-none');
                }
            });
        });
        window.addEventListener('resize', closeMenuOnResize);
        closeMenuOnResize();
    }
    // Disable horizontal scroll on html
    document.documentElement.style.overflowX = 'hidden';
};