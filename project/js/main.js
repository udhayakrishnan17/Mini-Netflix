let header = document.querySelector('header');
// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// window.addEventListener('scroll',()=>{
//   header.classList.toggle('shadow',window.scrollY> 0)
// });

// menu.onClick=()=>{
//   menu.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// }
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// Swiper
// var swiper = new Swiper(".coming-container",{
//   spaceBetween: 20,
//   loop:true,
//   autoplay: {
//     delay: 55000,
//     disableOnInteraction: false,
//   },
//   centeredSlides: true,
//   breakpoints: {
//     0: {
//       slidesPreView: 2,
//     },
//     568: {
//       slidePerView: 3,
//     },
//     768: {
//       slidePerView: 4,
//     },
//     968: {
//       slidePerView: 5,
//     },
//   },
// });



