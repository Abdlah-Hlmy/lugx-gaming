let header = document.querySelector('.header'),
    offsetTop = header.offsetTop;

window.addEventListener("scroll", function (e) {
  if (this.scrollY > offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
})
