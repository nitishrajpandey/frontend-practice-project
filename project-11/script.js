let mobileMenu = document.querySelector('[data-mobile-menu]');
        let hamburger = document.querySelector('[data-hamburger]>i');
        function Menu(e) {
            e.name === 'menu' ? (e.name = 'close',
                mobileMenu.classList.add('opacity-100')
            )
                :
                (e.name = 'menu',
                    mobileMenu.classList.remove('opacity-100')
                );

        }
