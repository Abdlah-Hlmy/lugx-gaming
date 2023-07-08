let header = document.querySelector('.header');

window.addEventListener("scroll", function (e) {
  if (this.scrollY > 35) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
})
