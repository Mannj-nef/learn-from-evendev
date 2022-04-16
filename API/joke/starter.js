// https://icanhazdadjoke.com/

window.addEventListener("load", function () {
  const enpoind = "https://icanhazdadjoke.com/";
  const jokeHeading = document.querySelector(".joke-heading");
  const jokeButton = document.querySelector(".joke-button");

  async function getJoke() {
    try {
      const response = await fetch(enpoind, {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      return data.joke;
    } catch (err) {
      jokeHeading.textContent = "No fould: 404";
    }
  }

  jokeButton.addEventListener("click", async function () {
    jokeButton.classList.add("is-loading");
    const dataJoke = await getJoke();
    jokeButton.classList.remove("is-loading");
    if (jokeHeading.textContent === "No fould: 404") return;
    jokeHeading.textContent = dataJoke;
  });
});
