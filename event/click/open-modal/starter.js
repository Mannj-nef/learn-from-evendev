// window.addEventListener("load", function () {
//   const btn = document.querySelector(".button");
//   btn.addEventListener("click", openModal);
//   function openModal(e) {
//     e.stopPropagation();
//     const template = `
//     <div class="modal">
//       <div class="modal-content">
//         <i class="fa fa-times modal-close"></i>
//         <div class="modal-content_top">
//           <ion-icon name="close-circle-outline" class="modal-circle"></ion-icon>
//         </div>
//         <div class="modal-content_bott">
//           <div class="modal-content-wrap">
//             <h2 class="modal-content_title">Ooops!</h2>
//             <p class="modal-content_text">
//               Something went wrong. File was not uploaded
//             </p>
//           </div>
//           <button class="btn-control">Try Again</button>
//         </div>
//       </div>
//     </div>
//     `;
//     document.body.insertAdjacentHTML("beforeend", template);
//   }
//   document.body.addEventListener("click", closeModal);
//   function closeModal(e) {
//     const modal = document.querySelector(".modal");
//     if (
//       (modal && e.target.matches(".modal")) ||
//       e.target.matches(".modal-close")
//     ) {
//       modal.parentNode.removeChild(modal);
//     }
//   }
// });

window.addEventListener("load", function () {
  const btn = document.querySelector(".button");

  btn.addEventListener("click", cretaeModal);
  this.document.body.addEventListener("click", closeModal);

  function cretaeModal() {
    const modal = `
    <div class="modal">
          <div class="modal-content">
            <i class="fa fa-times modal-close"></i>
            <div class="modal-content_top">
              <ion-icon name="close-circle-outline" class="modal-circle"></ion-icon>
            </div>
            <div class="modal-content_bott">
              <div class="modal-content-wrap">
                <h2 class="modal-content_title">Ooops!</h2>
                <p class="modal-content_text">
                  Something went wrong. File was not uploaded
                </p>
              </div>
              <button class="btn-control">Try Again</button>
            </div>
          </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modal);
  }

  function closeModal(e) {
    const clicked = e.target;
    const modal = document.querySelector(".modal");
    if (clicked.matches(".modal") || clicked.matches(".modal-close")) {
      modal.parentNode.removeChild(modal);
    }
  }
});
