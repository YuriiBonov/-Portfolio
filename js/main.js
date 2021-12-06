const prev = document.getElementById("btn-prev"),
      next = document.getElementById("btn-next"),
      slides = document.querySelectorAll(".slider-img");
let index = 0;

const activeSlide = n =>{
    for(slide of slides) {
        slide.classList.remove("active");
    }
    slides[n].classList.add("active");
}

const nextSlide = () => {
    if(index == slides.length -1) {
        index = 0;
        activeSlide(index);
    }else{
        index++;
        activeSlide(index);
    }
}
const prevSlide = () => {
    if(index == 0) {
        index = slides.length -1;
        activeSlide(index);
    }else{
        index--;
        activeSlide(index);
    }
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide); 



const btnPrew = document.getElementById("btn-prev"),
      btnNext = document.getElementById("btn-next"),
      sliders = document.querySelectorAll(".slide");
let indexSlide = 0;

const activeSliders = n =>{
    for(slide of sliders) {
        slide.classList.remove("active");
    }
    sliders[n].classList.add("active");
}

const nextSliders = () => {
    if(indexSlide == sliders.length -1) {
        indexSlide = 0;
        activeSliders(indexSlide);
    }else{
        indexSlide++;
        activeSliders(indexSlide);
    }
}
const prevSliders = () => {
    if(indexSlide == 0) {
        indexSlide = sliders.length -1;
        activeSliders(indexSlide);
    }else{
        indexSlide--;
        activeSliders(indexSlide);
    }
}
next.addEventListener("click", nextSliders);
prev.addEventListener("click", prevSliders);
setInterval( nextSliders, 5000 );




