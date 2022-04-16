// window.addEventListener("load", function () {
//   const menu = document.querySelector(".menu");
//   const menuItem = [...document.querySelectorAll(".menu-link")];

//   function createEffect() {
//     const template = `<div class="line-effect"></div>`;
//     menu.insertAdjacentHTML("beforeend", template);
//   }
//   createEffect();
//   const lineEffect = menu.querySelector(".line-effect");

//   menuItem.forEach((item) => item.addEventListener("mouseenter", hoverEffect));
//   function hoverEffect(e) {
//     const height = menu.offsetHeight;
//     const { left, width } = e.target.getBoundingClientRect();
//     lineEffect.style = `left: ${left}px; width: ${width}px; top: ${height}px`;
//   }
//   menu.addEventListener("mouseleave", removeLineEffect);
//   function removeLineEffect(e) {
//     lineEffect.style.width = 0;
//   }
// });

window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu-item ");

  function createlineEffect() {
    const lineEffect = `<div class="line-effect"></div>`;
    menu.insertAdjacentHTML("beforeend", lineEffect);
  }
  createlineEffect();

  const effect = document.querySelector(".line-effect");
  [...menuItem].forEach((item) =>
    item.addEventListener("mouseenter", function () {
      const { width, height, left } = item.getBoundingClientRect();
      effect.style = `width: ${width}px; left: ${left}px; top :${height}px`;
    })
  );

  menu.addEventListener("mouseleave", removeLineEffect);
  function removeLineEffect() {
    effect.style.width = "";
  }
});
