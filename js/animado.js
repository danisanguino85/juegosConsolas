const pacman = document.querySelector('.animacion')
const mario = document.querySelector('#mario')

function moverMario() {
    mario.style.transition = '5s';
    mario.style.top = '5px';
    mario.style.right = '20px';

}

function moverPacman() {
    pacman.style.transition = '60s';
    pacman.style.left = '1300px';
}

window.addEventListener('load', moverMario);
window.addEventListener('load', moverPacman);

//la idea era poder reutilizar la función pasando los segundos y px por parámetro pero en uno uso top y right y en otro  left 