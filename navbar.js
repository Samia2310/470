function toggleMenu() {
    const hiddenMenu = document.getElementById('hiddenMenu');
    hiddenMenu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    function setupDarkMode() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
            });
        }

        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
        }
    }

    setupDarkMode();
});


document.addEventListener('DOMContentLoaded', function() {
    const navbarObject = document.getElementById('navbar-container').contentDocument;
    const profileLink = navbarObject.getElementById('profileLink');
    const profileSubmenu = navbarObject.getElementById('profileSubmenu');
    const darkModeToggle = navbarObject.getElementById('darkModeToggle');

    if (profileLink && profileSubmenu) {
        profileLink.addEventListener('click', function(event) {
            event.preventDefault();
            profileSubmenu.style.display = profileSubmenu.style.display === 'none' ? 'block' : 'none';
        });
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
        });
    }

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});