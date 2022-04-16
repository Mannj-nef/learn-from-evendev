window.addEventListener("load", function () {
  const active = document.querySelector(".active");
  const tabList = document.querySelector(".tab-list");
  const tabItem = document.querySelectorAll(".tab-item");
  [...tabItem].forEach((item) =>
    item.addEventListener("click", function (e) {
      const heightActive = 2;
      const left = item.offsetLeft;
      const { height, width } = item.getBoundingClientRect();
      active.style = `width: ${width}px; left: ${left}px; top: ${
        height - heightActive
      }px; height: ${heightActive}px`;

      tabList.scroll(left / 2, 0);
    })
  );
});
