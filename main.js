'use strict';

// home - slideshow
let gnbListLink = document.querySelectorAll('.gnb-list-link');
let gnbLevel2 = document.querySelectorAll('.gnb-level2');
let gnb = document.querySelector('.gnb');
let gnbListItem = document.querySelectorAll('.gnb-list-item')

for (let i = 0; i < gnbListLink.length; i++) {
  gnbListLink[i].addEventListener('mouseenter', function () {
    gnbLevel2[i].classList.add('active');
  });

  gnbListItem[i].addEventListener('mouseleave', function () {
    gnbLevel2[i].classList.remove('active');
  });
}

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("myProjects");
//   let bars = document.getElementsByClassName("bar");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < bars.length; i++) {
//     bars[i].className = bars[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   bars[slideIndex-1].className += " active";
// }

let slideIndexA = 0;
showSlidesA();

function showSlidesA() {
  let p;
  let slidesp = document.getElementsByClassName("myProjects");
  let barsp = document.getElementsByClassName("bar");

  for (p = 0; p < slidesp.length; p++) {
    slidesp[p].style.display = "none";
  }
  for (p = 0; p < barsp.length; p++) {
    barsp[p].className = barsp[p].className.replace(" active", "");
  }
  slideIndexA++;
  if (slideIndexA > slidesp.length) {slideIndexA = 1}
  slidesp[slideIndexA-1].style.display = "block";
  barsp[slideIndexA-1].className += " active";
  setTimeout(showSlidesA, 3000); // Change image every 5 seconds
}

// 일정 시간마다 반복 실행 => window.setInterval(함수, 시간)
// 일정 시간이후 한번 실행 => window.setTimeout(함수, 시간)
// 시간 : millisecond = 1/1000 second

let mainSloganItem = document.querySelectorAll('.main-slogan-item');

let current = 0;
let next = 1;
let prev = 2;

window.setInterval(function () {
  
  if(next >= mainSloganItem.length){
    next = 0;
  }

  mainSloganItem[current].classList.remove('current','next','prev');
  mainSloganItem[next].classList.remove('current','next','prev');
  mainSloganItem[prev].classList.remove('current','next','prev');

  mainSloganItem[current].classList.add('current');
  mainSloganItem[next].classList.add('next');
  mainSloganItem[prev].classList.add('prev');

  prev = current;
  current = next;
  next = next + 1;

}, 3000);

// scroll button
let mybtn = document.getElementById("myBtn"); 
window.onscroll = function () {
 scrollFunction();
}; 

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybtn.style.display = "block";
 } else {
  mybtn.style.display = "none";
 }
} 

function topFunction() {
 document.body.scrollTop = 0; 
 document.documentElement.scrollTop = 0; 
}


