window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  const imageWrapper = document.querySelector(".image-wrapper");
  const image = document.querySelector(".image");
  const imageWrapperHeight = imageWrapper.offsetHeight;
  const imageWrapperWidth = imageWrapper.offsetWidth;

  imageCover.addEventListener("mousemove", function (evt) {
    image.style = `width: auto; height: auto; max-height: unset`;

    let pageX = evt.pageX;
    let pageY = evt.pageY;

    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;

    let spaceX = (imageWidth / 2 - imageWrapperWidth) * 2;
    let spaceY = (imageHeight / 2 - imageWrapperHeight) * 2;
    imageWidth = imageWidth + spaceX;
    imageHeight = imageHeight + spaceY;

    let ratioX = imageWidth / imageWrapperWidth / 2;
    let ratioY = imageHeight / imageWrapperHeight / 2;

    let x = (pageX - imageWrapper.offsetLeft) * ratioX;
    let y = (pageY - imageWrapper.offsetTop) * ratioY;

    image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none`;
  });

  imageCover.addEventListener("mouseleave", function (evt) {
    image.style = "";
  });
});
