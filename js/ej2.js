const form = document.querySelector('form')
const div = document.querySelector('.contenedor')
const i = document.querySelector('i')
const p = document.querySelector('p')


const lista = JSON.parse(localStorage.getItem('personaje')) || []


printAllCharacters()



function star(valoracion) {
    let stars = '';
    for (let i = 0; i < valoracion; i++) {
        stars += '<i class="fa-solid fa-star"></i>';
    }
    return stars;
}


function printCharacter(character, videojuego, valoracion, domElement) {

    domElement.innerHTML += ` <article><div class="card" style="width: 18rem;">
    <button class="button2">X</button>
    <div class="card-body" class="divArticulo">
      <h5 class="card-title">${character.toUpperCase()}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${videojuego.toUpperCase()}</h6>
      <p class="card-text">${star(valoracion)}</p></article>`
    const button2 = domElement.querySelectorAll('.button2')
    button2.forEach(button => button.addEventListener('click', deleteCharacter))
}
function printAllCharacters() {
    div.innerHTML = '';
    lista.forEach(personaje => printCharacter(personaje.nombre, personaje.juego, personaje.nivel, div))
}
function saveInLocalStorage() {
    localStorage.setItem('personaje', JSON.stringify(lista));

}

function deleteCharacter(event) {
    const article = event.target.parentElement;
    const characterName = article.querySelector('.card-title').textContent.toLowerCase();
    const posicion = lista.findIndex(personaje => personaje.nombre.toLowerCase() === characterName);
    lista.splice(posicion, 1);
    saveInLocalStorage();
    printAllCharacters()
}



function addNewCharacter(event) {
    event.preventDefault()
    const personaje = event.target.personaje.value
    const videojuego = event.target.videojuego.value
    const valoracion = event.target.valoracion.value
    const objeto = { nombre: personaje, juego: videojuego, nivel: valoracion }

    const existe = lista.some(item => item.nombre.toLowerCase() === personaje.toLowerCase())

    if (personaje === "" || videojuego === "") {
        alert('Debes introducir un personaje y un videojuego')
    }
    else if (existe) {
        alert('El personaje ya existe en la lista')
    } else {

        lista.push(objeto)
        saveInLocalStorage(lista)
        printCharacter(personaje, videojuego, valoracion, div)
        event.target.reset()
    }
}

form.addEventListener('submit', addNewCharacter)











