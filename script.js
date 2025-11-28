const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const dropdowns = document.querySelectorAll(".dropdown");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Mobile Dropdown Expand */
// dropdowns.forEach(drop => {
//   drop.addEventListener("click", (e) => {
//     if (window.innerWidth <= 768) {
//       e.preventDefault();
//       drop.classList.toggle("active");

//       let menu = drop.querySelector(".dropdown-menu");
//       if (menu.style.display === "block") {
//         menu.style.display = "none";
//       } else {
//         menu.style.display = "block";
//       }
//     }
//   });
// });
  // close dropdown when clicking outside
  // document.addEventListener("click", () => {
  //   dropdowns.forEach(drop => drop.classList.remove("active"));
  // });

// Mobile Dropdown Expand
dropdowns.forEach(drop => {
  drop.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();  // 🔥 prevents instant close

      drop.classList.toggle("active");

      let menu = drop.querySelector(".dropdown-menu");
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }
  });
});




// // Close dropdown when clicking outside
// document.addEventListener("click", (e) => {
//   dropdowns.forEach(drop => {
//     if (!drop.contains(e.target)) {   // 🔥 only close when clicking outside
//       drop.classList.remove("active");
//       let menu = drop.querySelector(".dropdown-menu");
//       if (menu) menu.style.display = "none";
//     }
//   });
// });


// // Mobile Dropdown Expand
// dropdowns.forEach((drop) => {
//   drop.addEventListener("click", (e) => {
//     if (window.innerWidth <= 768) {
//       e.preventDefault();
//       drop.classList.toggle("active");

//       let menu = drop.querySelector(".dropdown-menu");
//       menu.style.display = menu.style.display === "block" ? "none" : "block";
//     }
//   });
// });

// Allow clicking inside dropdown menu
document.querySelectorAll(".dropdown-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.stopPropagation();   // <-- this fixes your issue
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













  
  




