window.addEventListener("load", function () {
  const change = document.querySelector(".change");
  const listClor = ["#ffa400", "#00aefd", "#ff6bcb", "#2979ff", "#e74c3c"];
  change.addEventListener("click", function () {
    const color = listClor[Math.floor(Math.random() * listClor.length)];
    document.body.style.background = color;
  });
});
