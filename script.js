const header = document.getElementById('siteHeader');
const toggle = document.getElementById('menuToggle');
const panel = document.getElementById('mobilePanel');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

toggle.addEventListener('click', () => {
  panel.classList.toggle('open');
});


document.getElementById("year").textContent = new Date().getFullYear();