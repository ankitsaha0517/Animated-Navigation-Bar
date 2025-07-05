const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

let isOpen = false;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('toggle');

  if (!isOpen) {
    navLinks.classList.remove('exit');
    navLinks.classList.add('active');
    isOpen = true;
  } else {
    navLinks.classList.remove('active');
    navLinks.classList.add('exit');
    isOpen = false;
  }
});
