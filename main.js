// TOGGLE MENU
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});

// MOBILE DROPDOWN CLICK
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
});



