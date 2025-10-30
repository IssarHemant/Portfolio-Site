// Wait until the whole HTML page is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to key elements
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const crossIcon = document.getElementById("cross-icon");
  const linksContainer = document.getElementById("links-container");
  const body = document.body;
  const navLinks = document.querySelectorAll(".nav-link");

  // Function to open the menu
  function openMenu() {
    linksContainer.classList.add("active"); // Show navigation links
    crossIcon.classList.add("open"); // Show cross icon
    body.classList.add("menu-open"); // Prevent scrolling, if styled that way
  }

  // Function to close the menu
  function closeMenu() {
    linksContainer.classList.remove("active");
    crossIcon.classList.remove("open");
    body.classList.remove("menu-open");
  }

  // When hamburger icon is clicked, open the menu
  hamburgerIcon.addEventListener("click", openMenu);

  // When cross icon is clicked, close the menu
  crossIcon.addEventListener("click", closeMenu);

  // When any navigation link is clicked, close the menu
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

let sections=document.querySelectorAll('section');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        //if want to use repeating animation on scroll, use this
        else{
            sec.classList.remove('show-animate');
        }
    })
}