document.addEventListener("DOMContentLoaded", () => {
    const menuTitle = document.querySelector(".menu-title");
    const rightNav = document.querySelector(".right-nav");

    // Alterna a classe 'show' no menu ao clicar
    menuTitle.addEventListener("click", () => {
        rightNav.classList.toggle("show");
    });
});