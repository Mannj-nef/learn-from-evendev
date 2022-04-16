window.addEventListener("load", function () {
  const tabItem = [...document.querySelectorAll(".tab-item")];
  const tabContent = [...document.querySelectorAll(".tab-content")];

  tabItem.forEach((item) => item.addEventListener("click", activeItem));
  function activeItem() {
    const dataTab = this.dataset.tab;
    tabItem.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");

    tabContent.forEach((item) => item.classList.remove("active"));
    tabContent[dataTab - 1].classList.add("active");
  }
});
