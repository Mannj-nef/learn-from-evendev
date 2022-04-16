window.addEventListener("load", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("fa-times");
    this.classList.toggle("fa-bars");

    menu.classList.toggle("is-show");
  });

  this.document.addEventListener("click", function (e) {
    if (!e.target.matches(".menu-toggle")) {
      menuToggle.classList.remove("fa-times");
      menuToggle.classList.add("fa-bars");

      menu.classList.remove("is-show");
    }
  });
});
