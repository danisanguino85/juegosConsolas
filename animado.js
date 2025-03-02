const pacman = document.querySelector('#pacman')
const mario = document.querySelector('#mario')

function moverMario() {
    mario.style.transition = '10s';
    mario.style.top = '10px';
    mario.style.right = '30px';
}


function moverPacman() {
    pacman.style.transition = '40s';
    pacman.style.bottom = '20px';
    pacman.style.left = '1200px';
}

window.addEventListener('load', moverMario);
window.addEventListener('load', moverPacman);