const form = document.querySelector('form')
const ul = document.querySelector('ul')

function printCharacter(character, domElement) {
    const li = document.createElement('li')
    li.textContent = character
    domElement.appendChild(li)

}
const lista = []
function getCharacter(event, character, domElement) {
    event.preventDefault()
    const personaje = event.target.personaje.value
    const videojuego = event.target.videojuego.value
    const elemento = { nombre: personaje, juego: videojuego }
    lista.push(elemento)

    console.log(lista)
    printCharacter(personaje, ul)
    event.target.reset()

}


form.addEventListener('submit', getCharacter)






