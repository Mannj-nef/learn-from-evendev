window.addEventListener("load", function () {
  const accordionHeader = document.querySelectorAll(".accordion-header");

  [...accordionHeader].forEach((item) =>
    item.addEventListener("click", handleAccordion)
  );

  function handleAccordion(e) {
    const clicked = e.target;
    const icon = clicked.querySelector(".icon");
    const accordionContent = clicked.nextElementSibling;
    const contentHeight = accordionContent.scrollHeight;

    icon.classList.toggle("fa-angle-up");
    icon.classList.toggle("fa-angle-down");

    accordionContent.style.height = `${contentHeight}px`;
    accordionContent.classList.toggle("is-active");

    if (!accordionContent.classList.contains("is-active")) {
      accordionContent.style.height = "0px";
    }
  }
});
