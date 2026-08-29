const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

if (menu) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });
}

document.querySelectorAll('.nav nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();
