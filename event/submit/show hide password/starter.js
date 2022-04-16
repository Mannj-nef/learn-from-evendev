window.addEventListener("load", function () {
  const inputCtrol = document.querySelector(".form input");
  const eyeToggle = document.querySelector(".toggle");

  eyeToggle.addEventListener("mouseenter", () => handlePassword(0));
  eyeToggle.addEventListener("mouseleave", () => handlePassword(1));

  function handlePassword(par) {
    if (par === 0) {
      inputCtrol.type = "text";
    }
    if (par === 1) {
      inputCtrol.type = "password";
    }
  }
});
