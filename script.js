const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const dropdowns = document.querySelectorAll(".dropdown");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Mobile Dropdown Expand */
dropdowns.forEach(drop => {
  drop.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      drop.classList.toggle("active");

      let menu = drop.querySelector(".dropdown-menu");
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    }
  });
});
