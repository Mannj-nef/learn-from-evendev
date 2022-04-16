window.addEventListener("load", function () {
  const inputCtrol = document.querySelector(".input-wrapper .input");
  const iconPassword = document.querySelector(".input-icons");
  const checkLengthInput = document.querySelector(".check-length");
  const checkupperInput = document.querySelector(".check-upper");
  const checknumberInput = document.querySelector(".check-number");
  const checkspecialInput = document.querySelector(".check-special");
  const checkItem = document.querySelectorAll(".check-item");

  iconPassword.addEventListener("mouseenter", () => showHidePassword("show"));
  iconPassword.addEventListener("mouseleave", () => showHidePassword("hide"));
  inputCtrol.addEventListener("input", () => handlePassword());

  function showHidePassword(pra) {
    if (pra === "show") {
      inputCtrol.type = "text";
    }
    if (pra === "hide") {
      inputCtrol.type = "password";
    }
  }

  function handlePassword() {
    const value = inputCtrol.value;

    if (!value) {
      [...checkItem].forEach((item) => {
        item.classList.remove("unactive");
        item.classList.remove("active");
      });
    }

    handleCheckItem(value.length > 8, checkLengthInput);
    handleCheckItem(/[A-Z]/.test(value), checkupperInput);
    handleCheckItem(/[0-9]/.test(value), checknumberInput);
    handleCheckItem(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value),
      checkspecialInput
    );
  }

  function handleCheckItem(condition, item) {
    if (condition) {
      item.classList.add("active");
      item.classList.remove("unactive");
    } else {
      item.classList.add("unactive");
      item.classList.remove("active");
    }
  }
});
