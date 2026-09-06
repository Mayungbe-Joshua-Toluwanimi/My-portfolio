const sideNav = document.getElementById('side-nav');
const showNavBtn = document.getElementById('btn-show-nav');
const hideNavBtn = document.getElementById('btn-hide-nav');
function toggleSideNav() {
  sideNav.classList.toggle('visible')
}
showNavBtn.addEventListener('click', toggleSideNav);
hideNavBtn.addEventListener('click',toggleSideNav);
