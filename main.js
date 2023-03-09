'use strict';

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndexA = 0;
showSlidesA();

function showSlidesA() {
  let p;
  let slidesp = document.getElementsByClassName("mySlides");
  let dotsp = document.getElementsByClassName("dot");

  for (p = 0; p < slidesp.length; p++) {
    slidesp[p].style.display = "none";
  }
  for (p = 0; p < dotsp.length; p++) {
    dotsp[p].className = dotsp[p].className.replace(" active", "");
  }
  slideIndexA++;
  if (slideIndexA > slidesp.length) {slideIndexA = 1}
  slidesp[slideIndexA-1].style.display = "block";
  dotsp[slideIndexA-1].className += " active";
  setTimeout(showSlidesA, 5000); // Change image every 5 seconds
}

