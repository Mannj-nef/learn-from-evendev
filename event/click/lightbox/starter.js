// window.addEventListener("load", function () {
//   const images = [...document.querySelectorAll(".image")];

//   function createLightBoxImage(image) {
//     const temple = `
//     <div class="lightbox">
//             <div class="lightbox-content">
//               <i class="fa fa-angle-left lightbox-prev"></i>
//               <img
//                 src="${image}"
//                 alt=""
//                 class="lightbox-image"
//               />
//               <i class="fa fa-angle-right lightbox-next"></i>
//             </div>
//           </div>
//   `;
//     document.body.insertAdjacentHTML("beforeend", temple);
//   }

//   images.forEach((item) => item.addEventListener("click", handleLightBox));
//   function handleLightBox(e) {
//     e.stopPropagation();
//     const image = this.getAttribute("src");
//     createLightBoxImage(image);

//     const lightboxImage = document.querySelector(".lightbox-image");
//     const next = document.querySelector(".lightbox-next");
//     const prev = document.querySelector(".lightbox-prev");

//     let index = images.findIndex((item) => item.getAttribute("src") === image);

//     next.addEventListener("click", function (e) {
//       index++;
//       if (index === images.length) {
//         index = 0;
//       }
//       converImage(index);
//     });

//     prev.addEventListener("click", function (e) {
//       index--;
//       if (index < 0) {
//         index = images.length - 1;
//       }
//       converImage(index);
//     });

//     function converImage(index) {
//       const newSrc = images[index].getAttribute("src");
//       lightboxImage.setAttribute("src", newSrc);
//     }
//   }

//   document.addEventListener("click", closeLightBox);
//   function closeLightBox(e) {
//     const lightbox = document.querySelector(".lightbox");
//     if (lightbox && e.target.matches(".lightbox")) {
//       lightbox.parentNode.removeChild(lightbox);
//     }
//   }
// });

window.addEventListener("load", function () {
  const listImage = document.querySelectorAll(".image");
  let index = 0;

  listenEven();

  function listenEven() {
    [...listImage].forEach((item) =>
      item.addEventListener("click", hendaleLightbox)
    );
    this.document.body.addEventListener("click", closeLightBox);
  }

  function hendaleLightbox(e) {
    const image = this.getAttribute("src");
    const lightBox = `
        <div class="lightbox">
                <div class="lightbox-content">
                  <i class="fa fa-angle-left lightbox-prev"></i>
                  <img
                    src="${image}"
                    alt=""
                    class="lightbox-image"
                  />
                  <i class="fa fa-angle-right lightbox-next"></i>
                </div>
              </div>
      `;
    document.body.insertAdjacentHTML("beforeend", lightBox);
    const next = document.querySelector(".lightbox-next");
    const prev = document.querySelector(".lightbox-prev");
    const lightboxImage = document.querySelector(".lightbox-image");

    next.addEventListener("click", function () {
      index++;
      if (index >= [...listImage].length) {
        index = 0;
      }
      setImage();
    });
    prev.addEventListener("click", function () {
      index--;
      if (index < 0) {
        index = [...listImage].length - 1;
      }
      setImage();
    });

    function setImage() {
      const newImageSrc = [...listImage][index].getAttribute("src");
      lightboxImage.setAttribute("src", newImageSrc);
    }
  }

  function closeLightBox(e) {
    const clicked = e.target;
    if (clicked.matches(".lightbox")) {
      clicked.parentNode.removeChild(clicked);
    }
  }
});
