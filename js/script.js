function switchTab(id, btn) {
  document
    .querySelectorAll(".tab-content")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("tab-" + id).classList.add("active");
  btn.classList.add("active");
}

const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

const currentPath = window.location.pathname;

mobileNavItems.forEach((item) => {
  const href = item.getAttribute("href");

  if (href === currentPath || (href !== "/" && currentPath.includes(href))) {
    item.classList.add("active");
  }
});
