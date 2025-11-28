// const menuIcon = document.querySelector(".menu-icon");
// const navLinks = document.querySelector(".nav-links");
// const dropdowns = document.querySelectorAll(".dropdown");


// menuIcon.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// Mobile Dropdown Expand
// dropdowns.forEach(drop => {
//   drop.addEventListener("click", (e) => {
//     if (window.innerWidth <= 768) {
//       e.preventDefault();
//       e.stopPropagation();  // 🔥 prevents instant close

//       drop.classList.toggle("active");

//       let menu = drop.querySelector(".dropdown-menu");
//       menu.style.display = (menu.style.display === "block") ? "none" : "block";
//     }
//   });
// });

// Allow clicking inside dropdown menu
// document.querySelectorAll(".dropdown-menu a").forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.stopPropagation();   // <-- this fixes your issue
//   });
// });

// Close dropdown when clicking outside
// document.addEventListener("click", (e) => {
//   dropdowns.forEach((drop) => {
//     if (!drop.contains(e.target)) {
//       drop.classList.remove("active");
//       let menu = drop.querySelector(".dropdown-menu");
//       if (menu) menu.style.display = "none";
//     }
//   });
// });

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const dropdowns = document.querySelectorAll(".dropdown");


menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Mobile Dropdown Expand
dropdowns.forEach(drop => {
  drop.addEventListener("click", (e) => {

    // ✅ NEW FIX — if user clicked the main link, allow navigation
    if (e.target.tagName === "A" && !e.target.classList.contains("arrow")) {
      return; // allow normal link click
    }

    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();

      drop.classList.toggle("active");

      let menu = drop.querySelector(".dropdown-menu");
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }
  });
});

// Allow clicking inside dropdown menu
document.querySelectorAll(".dropdown-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  dropdowns.forEach((drop) => {
    if (!drop.contains(e.target)) {
      drop.classList.remove("active");
      let menu = drop.querySelector(".dropdown-menu");
      if (menu) menu.style.display = "none";
    }
  });
});













  
  




