// window.addEventListener("load", function () {
//   const dropdownSelect = document.querySelector(".dropdown__select");
//   const dropdownSelected = document.querySelector(".dropdown__selected");
//   const dropdownList = document.querySelector(".dropdown__list");
//   const icon = document.querySelector(".dropdown__caret");
//   dropdownSelect.addEventListener("click", showDropdownList);
//   function showDropdownList(e) {
//     e.stopPropagation();
//     dropdownList.classList.toggle("show");
//     icon.classList.toggle("fa-caret-up");
//   }

//   dropdownList.addEventListener("click", converDropdownSelected);
//   function converDropdownSelected(e) {
//     if (e.target.matches(".dropdown__item")) {
//       const textItem = e.target.firstElementChild.textContent;
//       dropdownSelected.textContent = textItem;
//     }
//   }

//   document.addEventListener("click", hidendropList);
//   function hidendropList(e) {
//     icon.classList.remove("fa-caret-up");
//     dropdownList.classList.remove("show");
//   }
// });

window.addEventListener("load", function () {
  const dropdownSelect = document.querySelector(".dropdown__select");
  const selected = dropdownSelect.querySelector(".dropdown__selected");
  console.log(selected);
  const dropdownList = document.querySelector(".dropdown__list");
  const dropdownCaret = document.querySelector(".dropdown__caret");

  document.addEventListener("click", removeDropdown);
  dropdownList.addEventListener("click", setvalueDrowSelect);
  dropdownSelect.addEventListener("click", function (e) {
    const clicked = e.target;

    dropdownCaret.classList.toggle("fa-caret-up");
    dropdownList.classList.toggle("show");
  });

  function removeDropdown(e) {
    const clicked = e.target;
    if (!clicked.matches(".dropdown__select")) {
      dropdownCaret.classList.remove("fa-caret-up");
      dropdownList.classList.remove("show");
    }
  }

  function setvalueDrowSelect(e) {
    const clicked = e.target;
    const selectedContent = clicked.firstElementChild.textContent;

    selected.textContent = selectedContent;
  }
});
