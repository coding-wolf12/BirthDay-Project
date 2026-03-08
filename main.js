const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime=3000;
let slideInterval;

const nextSlide = ()=> {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for next slide
    if(current.nextElementSibling){
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    }else{
        //Add current to the start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'))
}

const prevSlide = ()=> {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for next slide
    if(current.previousElementSibling){
        //Add current to previous sibling
        current.previousElementSibling.classList.add('current');
    }else{
        //Add current to the last
        slides[slides.length-1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'))
}

//Button events
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
        
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime); 
    }
});
//Auto slide
if(auto){
    slideInterval = setInterval(nextSlide, intervalTime);
}


const container = document.getElementById('container')
const openThis = document.getElementById('openThis')
const openNow = document.getElementById('openNow')

openThis.addEventListener('click', ()=>
container.classList.add('right-panel-active'))

openNow.addEventListener('click', ()=>
container.classList.remove('right-panel-active')) 





