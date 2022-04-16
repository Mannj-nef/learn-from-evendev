window.addEventListener("load", function () {
  const progress = document.querySelector(".progress");
  window.addEventListener("scroll", function () {
    const scrollTop = pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrollHeight = documentHeight - clientHeight;
    const width = (scrollTop / scrollHeight) * 100;

    progress.style.width = `${width}%`;
  });
});
