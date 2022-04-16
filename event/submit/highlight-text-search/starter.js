window.addEventListener("load", function () {
  const inputControl = document.querySelector(".input-search");
  const dropdownItem = document.querySelectorAll(".dropdown-item");

  inputControl.addEventListener("input", function (e) {
    const value = this.value.toLowerCase();

    [...dropdownItem].forEach((item) => {
      const itemContent = item.textContent;
      const index = itemContent.toLowerCase().indexOf(value);
      if (index >= 0 && itemContent.toLowerCase()) {
        item.innerHTML = `
        ${itemContent.slice(0, index)}<span class="primary">${itemContent.slice(
          index,
          index + value.length
        )}</span>${itemContent.slice(index + value.length)}
        `;
      } else {
        item.innerHTML = itemContent;
        return;
      }
    });
  });
});
