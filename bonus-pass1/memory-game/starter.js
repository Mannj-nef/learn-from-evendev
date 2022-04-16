window.addEventListener("load", function () {
  const cardsArray = [
    {
      name: "fire",
      img: "img/fire.png",
    },
    {
      name: "youtube",
      img: "img/youtube.png",
    },
    {
      name: "flash",
      img: "img/flash.png",
    },
    {
      name: "gift",
      img: "img/gift.png",
    },
    {
      name: "tron",
      img: "img/tron.png",
    },
    {
      name: "ufo",
      img: "img/ufo.png",
    },
    {
      name: "plant",
      img: "img/plant.png",
    },
    {
      name: "burger",
      img: "img/burger.png",
    },
  ];

  let count = 0;
  let previous;
  let firstGuess;
  let lastGuess;
  const delay = 1000;

  const grid = document.querySelector(".grid");

  function createMemoryGame() {
    grid.innerHTML = "";
    const newCardsArray = cardsArray
      .concat(cardsArray)
      .sort(() => 0.5 - Math.random() * cardsArray.length);
    [...newCardsArray].forEach((item) => {
      const template = `
        <div class="card" data-name="${item.name}">
            <div class="front"></div>
            <div class="back" style="background-image: url(${item.img})"></div>
        </div>
      `;

      grid.insertAdjacentHTML("beforeend", template);
    });
  }

  function matchedGame() {
    const selectedAll = document.querySelectorAll(".selected");
    [...selectedAll].forEach((item) => item.classList.add("matched"));
  }
  function resestGame() {
    count = 0;
    previous;
    firstGuess;
    lastGuess;

    const selectedAll = document.querySelectorAll(".selected");
    const matched = document.querySelectorAll(".matched");
    const card = document.querySelectorAll(".card");

    if (matched.length === card.length) {
      createMemoryGame();
      [...matched].forEach((item) => item.classList.remove("matched"));
    }
    [...selectedAll].forEach((item) => item.classList.remove("selected"));
  }

  grid.addEventListener("click", function (e) {
    const clicked = e.target;
    const card = clicked.parentNode;
    if (!clicked.matches(".grid")) {
      if (previous === clicked) {
        return;
      }

      if (count < 2) {
        count++;
        card.classList.add("selected");

        if (count === 1) {
          firstGuess = card.dataset.name;
        } else {
          lastGuess = card.dataset.name;
          if (firstGuess === lastGuess) {
            setTimeout(matchedGame, delay);
            setTimeout(resestGame, delay);
          } else {
            setTimeout(resestGame, delay);
          }
        }
      }
    }

    previous = clicked;
  });
  createMemoryGame();
});
