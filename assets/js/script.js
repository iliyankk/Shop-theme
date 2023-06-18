function login() {
    const login = document.getElementById("log-in")

    login.style.display = "flex";
}

function closelogin() {
    const login = document.getElementById("log-in")
    login.style.display = "none";
}


//show and hide header nav menu

let scrollpos = window.scrollY

const header = document.getElementById("hdrnav")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("hidden")
const remove_class_on_scroll = () => header.classList.remove("hidden")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})

let slideIndex = 0;
let timer;

showSlides();

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
  timer = setTimeout(showSlides, 5000); // Change slide every 5 seconds
}


function scrollright() {
  const element = document.getElementById("shpsctinalgn");
  element.scrollLeft += 1900;
}

function scrollleft() {
  const element = document.getElementById("shpsctinalgn");
  element.scrollLeft -= 1900;
}

//scroll to top functions

let mybutton = document.getElementById("scroll-top-btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}