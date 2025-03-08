

document.addEventListener("DOMContentLoaded", function() {
    let username = localStorage.getItem("username") || "Guest";
    document.getElementById("welcomeMessage").textContent += username;
});