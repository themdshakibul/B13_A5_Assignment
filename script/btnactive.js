function setActive(clickedBtn) {
  // all btn
  const buttons = clickedBtn.parentElement.querySelectorAll("button");

  buttons.forEach((btn) => {
    // inactive btn
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
  });

  // Active btn
  clickedBtn.classList.remove("btn-outline");
  clickedBtn.classList.add("btn-primary");
}
