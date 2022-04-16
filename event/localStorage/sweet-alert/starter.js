window.addEventListener("load", function () {
  const btn = document.querySelector(".button");

  btn.addEventListener("click", createSweetalert);

  function createSweetalert() {
    const alert = `<div class="sweet-alert">
            <i class="fa fa-check sweet-icon"></i>
            <p class="sweet-text">Congratulations on learning JS</p>
            </div>`;
    document.body.insertAdjacentHTML("beforeend", alert);

    setTimeout(function () {
      const sweetAlert = [...document.querySelectorAll(".sweet-alert")];
      sweetAlert.forEach((item) => {
        console.log(item);
        item.parentNode.removeChild(item);
      });
    }, 5000);
  }
});
