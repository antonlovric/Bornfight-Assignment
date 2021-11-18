var swiper = new Swiper(".swiper", {
  breakpoints:{
    300:{
      allowTouchMove: true,
      slidesPerView: 1.2,
      spaceBetween: 10,

    },
    600:{
      allowTouchMove: true,
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    800:{
      allowTouchMove: true,
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
    1200:{
      allowTouchMove: false,
      slidesPerView: 4,

    },
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 0,
    setWrapperSize: true,
    allowSwipeToNext: false, allowSwipeToPrev: false, allowTouchMove: false
  });



  var highlightSwiper = new Swiper(".highlightSwiper", {
    navigation: {
      nextEl: ".navButtonRight",
      prevEl: ".navButtonLeft",
    },
    loop:true,
    slidesPerView: 3,
      spaceBetween: 10,

    })
  console.log(highlightSwiper.slides);





window.addEventListener("resize", updateSwiper);
function updateSwiper()
{
  if (window.innerWidth > 600){
     swiper.allowTouchMove = true;
  }

}

const items = document.querySelectorAll(".carouselItem");


items.forEach((item) => {
  item.addEventListener("mouseenter", function(){
    toggleCategory(item)
  });
  item.addEventListener("mouseleave", function(){
    toggleCategory(item)
  });
  if (window.innerWidth < 500){
    item.addEventListener("click", function(){
      toggleCategory(item)
    });
  }

})

function toggleCategory(item){
  item.classList.toggle("showCategory")
  item.classList.toggle("hideCategory")
  const hiddenTextContainer = item.querySelector(".hiddenTextContainer");
  hiddenTextContainer.classList.toggle("showHiddenText")
  hiddenTextContainer.classList.toggle("hideHiddenText")

}