//hamburger menu script
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

//hide menu on item click
const navItems = document.querySelectorAll(".nav-menu .nav-link");
function navLocate(){
  navItems.forEach(element => {
    if(window.innerWidth <= 924){
      element.addEventListener("click",mobileMenu);
    }else{
      element.removeEventListener('click',mobileMenu);
    }
  });
}

navLocate();
window.addEventListener("resize",navLocate);

//accordian script
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

//script to change text of button on small screens
function secButtonText(){
  if(window.innerWidth <= 576){
    document.querySelector(".landing-section .secondary-button").innerHTML = "Learn more";
  }else{
    document.querySelector(".landing-section .secondary-button").innerHTML = "No credit card necessary. Its free!!";
  }
}

secButtonText();
window.addEventListener('resize',secButtonText);
