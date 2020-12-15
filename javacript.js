let sliders = document.querySelectorAll('img');
const button = document.querySelector('.btnRigth')
let i = 0;
button.addEventListener('click', function () {
i++;
if ( i >= sliders.length) {
    sliders[i-1].classList.remove('showSliders');
    i = 0;
    sliders[i].classList.add('showSliders');
} else {
sliders[i-1].classList.remove('showSliders');  
sliders[i].classList.add('showSliders'); 
}
})