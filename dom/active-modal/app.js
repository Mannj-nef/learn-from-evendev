window.addEventListener("load", function () {
  function createModal() {
    const modal = `
      <div class="modal">
        <div class="modal-content">
          <div class="fa fa-times modal-close"></div>
          <div class="modal-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti neque voluptas quam expedita doloribus veritatis, error, et quisquam iste vero excepturi quasi unde ipsam at suscipit itaque laudantium culpa. Vitae!</div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modal);
  }

  function showModal() {
    const modal = document.querySelector(".modal");
    modal.classList.add("is-show");
  }
  this.setTimeout(showModal, 3000);

  createModal();
});
