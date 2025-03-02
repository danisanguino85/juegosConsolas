const pacman = document.querySelector('#pacman')
const mario = document.querySelector('#mario')

function moverMario() {
    mario.style.transition = '1s';
    mario.style.top = '10px';
    mario.style.right = '30px';

}

function moverPacman() {

    pacman.style.transition = '40s';
    pacman.style.left = '1200px';
}

window.addEventListener('load', moverMario);
window.addEventListener('load', moverPacman);

//la idea era poder reutilizar la función pasando los segundos y px por parámetro pero en uno uso top y right y en otro  left 