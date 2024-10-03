const barElem = document.querySelector(".bar");
const nav = document.getElementById("nav");
// const headerElem = document.querySelector(".header");
const cross = document.querySelector(".cross-bar");
const navBar = document.querySelector(".nav-bar");
const container = document.querySelector(".container");
const navSec = document.querySelector(".nav-sec");



const ToggleEvent=()=>{
    nav.classList.toggle('active');

}
barElem.addEventListener("click", ToggleEvent);
// barElem.addEventListener("click",(ToggleEvent)=>{
//   navBar.style.display = "none";
//   cross.style.display = "block";
// });


const scrollBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll" ,()=>{
    if(scrollY > 25){
        scrollBtn.style.display = "block";

    }else{
        scrollBtn.style.display = "none";
        document.querySelector("body").style.scrollBehavior = "smooth";
    }
})

const box = document.querySelector(".box-1");
const btnOne = document.querySelector(".box-btn1");


box.addEventListener("mouseover" , ()=>{
    btnOne.classList.toggle("hide");
    
})

box.addEventListener("mouseout" , ()=>{
    btnOne.display.style = "none";
    btnOne.visibility.style = "hidden"; 

})

const swiper = new Swiper('.swiper', {
    speed: 1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.right-arrow',
      prevEl: '.left-arrow',
    },
  });

  const swiperElem = new Swiper('.swiper', {
    speed: 1000,

    autoplay: {
        delay: 2000,    
        disableOnInteraction: true,
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-pagination',
      prevEl: '.swiper-pagination',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
       
        
      },
    

     
  });




	
