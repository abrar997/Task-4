var btn = document.getElementById("btn-top");

// to control btn when scroll down and up
window.addEventListener("scroll", function name() {
  if (window.pageYOffset <= 0) {
    btn.classList.remove("show");
  } else {
    btn.classList.add("show");
  }
});

// when click on btn
btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
