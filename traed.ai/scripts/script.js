const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

if(window.innerWidth <= 540){
  document.querySelector(".main-section .secondary-button").innerHTML = "Learn more";
}


//accordian
const accordion = document.querySelectorAll('.accordion-section .accordion .container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    
    //collapse others
    for(i=0;i<accordion.length;i++){
      if(accordion[i] != this){
        accordion[i].classList.remove('active');
      }
    }
  })
}