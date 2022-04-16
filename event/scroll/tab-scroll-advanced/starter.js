window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const active = document.querySelector(".active");
  const tablist = document.querySelector(".tab-list");
  const tabNext = document.querySelector(".tab-next");
  const tabPrev = document.querySelector(".tab-prev");

  let scroll = 0;
  const distance = 100;
  const tabListWidth = tablist.scrollWidth - tablist.clientWidth;

  [...tabItems].forEach((item) =>
    item.addEventListener("click", function (e) {
      const heightActive = 2;
      const left = item.offsetLeft;
      const { width, height } = item.getBoundingClientRect();
      active.style = `width: ${width}px; left: ${left}px; top: ${
        height - heightActive
      }px; height: ${heightActive}px`;

      scroll = left - width;
      scrollTablist(scroll);
    })
  );

  tablist.addEventListener("wheel", function (e) {
    e.preventDefault();
    const y = e.deltaY;
    if (y > 0) {
      scroll += distance;
      if (scroll >= tabListWidth) {
        tabPrev.classList.remove("disabled");
        tabNext.classList.add("disabled");
      }

      if (scroll > 0) {
        tabPrev.classList.remove("disabled");
      }
      scrollTablist(scroll);
    } else {
      scroll -= distance;
      if (scroll > tabListWidth - scroll) {
        tabNext.classList.remove("disabled");
      }

      if (scroll <= 0) {
        tabPrev.classList.add("disabled");
      } else {
        tabPrev.classList.remove("disabled");
      }
      scrollTablist(scroll);
      return;
    }
  });

  tabNext.addEventListener("click", function () {
    if (scroll < 0) {
      scroll = 0;
    }
    scroll += distance * 3;
    tabPrev.classList.remove("disabled");

    if (scroll > tabListWidth) {
      this.classList.add("disabled");
      scrollTablist(scroll);
      return;
    }

    scrollTablist(scroll);
  });
  tabPrev.addEventListener("click", function () {
    if (scroll > tabListWidth) {
      scroll = tabListWidth;
    }

    scroll -= distance * 3;
    if (scroll < 0) {
      scroll = 0;
    }
    if (scroll === 0) {
      this.classList.add("disabled");
    }

    if (scroll > tabListWidth - scroll) {
      tabNext.classList.remove("disabled");
    }
    scrollTablist(scroll);
  });

  function scrollTablist() {
    tablist.scroll(scroll, 0);
  }
});
