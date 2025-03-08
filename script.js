function validateLogin() {
    alert("validateLogin called!");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return false;
    }

    // Store the username in localStorage to use on the dashboard
    localStorage.setItem("username", username);

    window.location.href = "home.html";
    return false;
}

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

document.addEventListener('DOMContentLoaded', function() {
    setupDarkMode(); // Initialize dark mode on page load
});
