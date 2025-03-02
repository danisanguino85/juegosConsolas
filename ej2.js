const form = document.querySelector('form')
const div = document.querySelector('.contenedor')

const article = document.querySelector('article')



const lista = JSON.parse(localStorage.getItem('personaje')) || []

lista.forEach(personaje => printCharacter(personaje.nombre, personaje.juego, personaje.nivel, div))


function printCharacter(character, videojuego, characterDescription, domElement) {
    console.log(character, videojuego, characterDescription, domElement)
    domElement.innerHTML += ` <div class="card" style="width: 18rem;">
    <button class="button2">X</button>
    <div class="card-body" class="divArticulo">
      <h5 class="card-title">${character.toUpperCase()}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${videojuego.toUpperCase()}</h6>
      <p class="card-text">${characterDescription}</p>`
    const button2 = domElement.querySelectorAll('.button2')
    button2.forEach(button => button.addEventListener('click', deleteCharacter))


}

function deleteCharacter(event) {
    const article = event.target.parentElement
    article.remove()

}
//buscar el nombre el personaje coger la posicion y eliminarlo de la lista
function guardarlocalstorage() {
    localStorage.setItem('personaje', JSON.stringify(lista));
}

function getCharacter(event) {
    event.preventDefault()
    const personaje = event.target.personaje.value
    const videojuego = event.target.videojuego.value
    const characterDescription = event.target.description.value
    const objeto = { nombre: personaje, juego: videojuego, nivel: characterDescription }

    const existe = lista.some(item => item.nombre.toLowerCase() === personaje.toLowerCase())


    if (personaje === "" || videojuego === "") {
        alert('Debes introducir un personaje y un videojuego')

    }
    else if (existe) {
        alert('El personaje ya existe en la lista')

    } else {

        lista.push(objeto)

        guardarlocalstorage(lista)



        printCharacter(personaje, videojuego, characterDescription, div)

        event.target.reset()

    }
    console.log(lista)

}






form.addEventListener('submit', getCharacter)






