// Handy-Menü auf- und zuklappen
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if (menuBtn) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("offen"));
}

// Tabs auf der Kartenseite (Speisen / Getränke)
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab, .tab-inhalt").forEach((el) => el.classList.remove("aktiv"));
    tab.classList.add("aktiv");
    document.getElementById(tab.dataset.ziel).classList.add("aktiv");
  });
});

// Aktuelles Jahr im Footer
const jahr = document.getElementById("jahr");
if (jahr) jahr.textContent = new Date().getFullYear();
