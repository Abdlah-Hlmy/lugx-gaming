let header = document.querySelector('.header'),
    offsetTop = header.offsetTop;

function sticky() {
  if (this.scrollY > offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

sticky();

window.addEventListener("scroll", sticky);

