// menu icon
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('show-menu');
  menuIcon.classList.toggle('change');
});

// close menu if clicking outside
document.addEventListener('click', (event) => {
  if (!menuIcon.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.remove('show-menu');
    menuIcon.classList.remove('change'); 
  }
});