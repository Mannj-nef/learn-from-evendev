window.addEventListener("load", function () {
  const inputCtrol = document.querySelector(".input-wrapper .input");

  let value = "";
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  inputCtrol.addEventListener("input", () => handleInput("input"));
  inputCtrol.addEventListener("blur", () => handleInput("blur"));
  inputCtrol.addEventListener("focus", () => handleInput("focus"));

  function handleInput(par) {
    if (par === "input") {
      value = inputCtrol.value;
      if (value.length === 0) {
        inputCtrol.classList.remove("border-valid");
        inputCtrol.classList.remove("border-invalid");
        inputCtrol.classList.remove("valid");
        inputCtrol.classList.remove("invalid");
        return;
      }
      handleValid(inputCtrol, "border-valid", "border-invalid");
    }

    if (par === "blur") {
      handleValid(inputCtrol, "valid", "invalid");
    }

    if (par === "focus") {
      inputCtrol.classList.remove("valid");
      inputCtrol.classList.remove("invalid");
    }
  }

  function handleValid(item, classVa, classInva) {
    if (!regexEmail.test(value)) {
      item.classList.remove(classVa);
      item.classList.add(classInva);
    } else {
      item.classList.remove(classInva);
      item.classList.add(classVa);
    }
  }
});
