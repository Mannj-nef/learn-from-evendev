window.addEventListener("load", function () {
  function createImage() {
    const image = `
      <div class="card">
        <img src="https://source.unsplash.com/random" alt="" class="card-image" />
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", image);
  }
  createImage();
});
