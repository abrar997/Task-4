var btn = document.getElementById("btn-top");

//control btn when scrolling down and up
window.addEventListener("scroll", function name() {
  if (window.pageYOffset >= 0) {
    btn.classList.add("show");
  }
  if (window.pageYOffset <= 0) {
    btn.classList.remove("show");
  }
});

// click btn
btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
