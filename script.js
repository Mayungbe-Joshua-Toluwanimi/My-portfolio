//SIDE NAV
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


//FAQ
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;

    // Close other open items (optional)
    document.querySelectorAll(".faq-item").forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
        faq.querySelector(".icon").textContent = "+";
      }
    });

    // Toggle current item
    item.classList.toggle("active");

    const icon = question.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});