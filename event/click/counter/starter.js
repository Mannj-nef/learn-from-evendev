// window.addEventListener("load", function () {
//   const counterNumber = document.querySelector(".counter-number");
//   let number = counterNumber.textContent;
//   const plus = document.querySelector(".counter-increase");
//   const minus = document.querySelector(".counter-descrease");

//   plus.addEventListener("click", function (e) {
//     number++;
//     counterNumber.textContent = number;
//   });

//   minus.addEventListener("click", function () {
//     if (number <= 0) return 0;
//     number--;
//     counterNumber.textContent = number;
//   });
// });

window.addEventListener("load", function () {
  const counterNumber = document.querySelector(".counter-number");
  const minus = document.querySelector(".counter-descrease");
  const plus = document.querySelector(".counter-increase");

  let number = counterNumber.textContent;

  minus.addEventListener("click", () => handelCount(0));
  plus.addEventListener("click", () => handelCount(1));

  function handelCount(dri) {
    if (dri === 1) {
      number++;
    }
    if (dri === 0) {
      if (number <= 0) return;
      number--;
    }

    counterNumber.textContent = `${number < 10 ? "0" + number : number}`;
  }
});
