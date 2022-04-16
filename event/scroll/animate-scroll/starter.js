window.addEventListener("load", function () {
  const image = document.querySelectorAll(".container img");
  [...image].forEach((item) => {
    const imgtop = item.offsetTop;
    const imgHeight = item.offsetHeight;

    window.addEventListener("scroll", function () {
      const scrollTop = pageYOffset;
      if (scrollTop >= imgtop - imgHeight / 2) {
        item.classList.add("active");
      }
    });
  });
});
