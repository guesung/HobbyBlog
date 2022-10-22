const searchEl= document.querySelector('header .search')
const inputEl= document.querySelector('header input')
const materialIconEl=document.querySelector('.sub-menu .material-icons')
materialIconEl.addEventListener('click',function(){
  inputEl.focus()
});


const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
});