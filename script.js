const menuIcon = document.getElementById("menu-icon");
const navLink = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
    navLink.classList.toggle("show");
});