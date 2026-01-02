const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebarToggle");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
mobileMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents the click from immediately closing the sidebar
  sidebar.classList.toggle("mobile-open");
});
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768 && !sidebar.contains(e.target)) {
    sidebar.classList.remove("mobile-open");
  }
});
