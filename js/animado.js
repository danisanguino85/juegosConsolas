const pacman = document.querySelector('.animacion')
const mario = document.querySelector('#mario')
const moneda = document.querySelector('.moneda img')
const boton = document.querySelector('#submit')
const sonido = document.querySelector('audio')

function coin() {
    moneda.style.transition = '5s';
    moneda.style.top = '-700px';
    sonido.play();
    setTimeout(() => {
        moneda.style.top = '0px';
    }, 4000);
}
function moverMario() {
    mario.style.transition = '5s';
    mario.style.top = '5px';
    mario.style.right = '20px';
}

function moverPacman() {
    pacman.style.transition = '60s';
    pacman.style.left = '1300px';
}
sonido.addEventListener('click', coin)
moneda.addEventListener('click', coin)
boton.addEventListener('click', coin)
window.addEventListener('load', moverMario);
window.addEventListener('load', moverPacman);

