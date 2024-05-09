document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", function() {
        navbar.classList.toggle("button");
    });
});
