const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const img =document.getElementById('image')
const logo = document.getElementById('logo')
const options = document.getElementById('options')
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        //body.style.transition = '2s';
        img.src = "reasources/light-bat.jpg"
        img.style.width = "50%"
        logo.src='reasources/6.png'
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        //body.style.transition = '2s';
        img.src = "reasources/dark.jpg"
        logo.src='reasources/5.png'
    }
});