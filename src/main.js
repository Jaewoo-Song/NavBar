const toggleBtn = document.querySelector('.toggleBtn');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarIcons = document.querySelector('.navbar-icons');

toggleBtn.addEventListener('click', () => {
  console.log('wf');
  navbarMenu.classList.toggle('active');
  navbarIcons.classList.toggle('active');
});
