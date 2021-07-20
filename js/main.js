/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const toggleBtn = document.querySelector('.navbar-togglebtn');
const menu = document.querySelector('.navbar-menu');
const icons = document.querySelector('.navbar-icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
