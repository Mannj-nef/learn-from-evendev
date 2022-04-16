window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;
  this.window.addEventListener("scroll", function () {
    if (this.pageYOffset >= headerHeight) {
      this.document.body.style.marginTop = `${headerHeight}px`;
      header.classList.add("is-fixed");
    }
  });
});
