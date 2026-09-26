const sideNav = document.getElementById('side-nav');
const showNavBtn = document.getElementById('btn-show-nav');
const hideNavBtn = document.getElementById('btn-hide-nav');
function showSideNav() {
  sideNav.classList.remove('hide-nav')
  sideNav.classList.add('show-nav')
}
function hideSideNav() {
  sideNav.classList.remove('show-nav')
  sideNav.classList.add('hide-nav')
}
showNavBtn.addEventListener('click', showSideNav);
hideNavBtn.addEventListener('click', hideSideNav);
