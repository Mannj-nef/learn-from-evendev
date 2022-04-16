window.addEventListener("load", function () {
  function Slider() {
    console.log(this);
    this.sliderMain = document.querySelector(".slider-main");
    this.sliderItem = document.querySelectorAll(".slider-item");
    this.next = document.querySelector(".slider-next");
    this.prev = document.querySelector(".slider-prev");
    this.sliderDoteItem = document.querySelectorAll(".slider-dot-item");

    this.index = 0;
    this.position = 0;
    this.sliderItemWidth = this.sliderItem[0].offsetWidth;

    this.next.addEventListener("click", () => {
      this.handleSlider(1);
    });
    this.prev.addEventListener("click", () => {
      this.handleSlider(0);
    });
    [...this.sliderDoteItem].forEach((item) =>
      item.addEventListener("click", (e) => this.handleDotItem(e))
    );
  }
  new Slider();

  Slider.prototype.handleSlider = function (prev) {
    if (prev === 1) {
      if (this.index >= [...this.sliderItem].length - 1) return;
      this.index++;
      this.position = this.position + this.sliderItemWidth;
      this.setslider();
    }

    if (prev === 0) {
      if (this.index <= 0) return;
      this.index--;
      this.position = this.position - this.sliderItemWidth;
      this.setslider();
    }
  };

  Slider.prototype.setslider = function () {
    this.sliderMain.style.transform = `translateX(${-this.position}px)`;

    [...this.sliderDoteItem].forEach((item) => {
      item.classList.remove("active");
    });
    [...this.sliderDoteItem][this.index].classList.add("active");
  };

  Slider.prototype.handleDotItem = function (e) {
    const clicked = e.target;
    const dataIndex = clicked.dataset.index;
    this.index = dataIndex;
    this.position = this.sliderItemWidth * dataIndex;

    this.setslider();
  };
});
