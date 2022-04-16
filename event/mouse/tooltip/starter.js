// window.addEventListener("load", function () {
//   const tooltip = document.querySelector(".tooltip");
//   const text = document.querySelector(".text");

//   function createTooltip() {
//     const template = `<div class="tooltip-text"></div>`;
//     tooltip.insertAdjacentHTML("beforeend", template);
//   }

//   text.addEventListener("mouseenter", function (e) {
//     const data = e.target.dataset.tooltip;
//     const { left, top, width, height } = e.target.getBoundingClientRect();

//     createTooltip();
//     const tooltipText = tooltip.querySelector(".tooltip-text");

//     const heightTooltip = tooltipText.offsetHeight;
//     tooltipText.textContent = data;
//     tooltipText.style = `top: ${top - (height + heightTooltip)}px; left: ${
//       left - width / 2
//     }px`;
//   });

//   text.addEventListener("mouseleave", function (e) {
//     const tooltipText = tooltip.querySelector(".tooltip-text");
//     tooltipText.parentNode.removeChild(tooltipText);
//   });
// });

window.addEventListener("load", function () {
  const tooltipWrap = document.querySelector(".tooltip");
  const text = document.querySelector(".text");

  function createTooltipText(value) {
    const tooltip = `<div class="tooltip-text">${value}</div>`;
    tooltipWrap.insertAdjacentHTML("beforeend", tooltip);
  }
  text.addEventListener("mouseenter", function () {
    const data = this.dataset.tooltip;
    const { left, width, height, top } = this.getBoundingClientRect();
    createTooltipText(data);
    const tooltip = document.querySelector(".tooltip-text");
    const tooltipHeight = tooltip.offsetHeight;
    tooltip.style = `left: ${left - width / 2}px; top: ${
      top - height - tooltipHeight
    }px`;
  });

  text.addEventListener("mouseleave", function () {
    const tooltip = document.querySelector(".tooltip-text");
    tooltip.parentNode.removeChild(tooltip);
  });
});
