// MOBILE MENU
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// MOBILE DROPDOWN
document.querySelectorAll(".dropdown-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    let parent = btn.parentElement;
    parent.classList.toggle("open");
  });
});
