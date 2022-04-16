const endpoint = "https://api.github.com/users";
const userEL = document.querySelector(".name");

async function displayUser(userName) {
  try {
    userEL.textContent = "loading...";
    const promise = await fetch(`${endpoint}/${userName}`);
    const data = await promise.json();

    userEL.textContent = `${data.name}`;
  } catch {
    console.log("not found");
    userEL.textContent = "data no found";
  }
}

displayUser("evondevs");
