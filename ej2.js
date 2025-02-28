const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button2 = document.querySelector('button')
const li = document.querySelector('li')

const lista = []

function printCharacter(character, domElement) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.textContent = character
    li.style.display = 'flex'
    li.style.justifyContent = 'space-between'
    li.style.width = '200px'
    const button = document.createElement('button')
    const button2 = document.createElement('button')
    button2.textContent = 'Delete'
    button2.style.marginLeft = '10px'
    button2.classList.add('button2')
    button2.addEventListener('click', deleteCharacter)
    li.append(span, button2)

    domElement.appendChild(li)
}

function deleteCharacter(event) {
    const li = event.target.parentElement
    li.remove()

}
function getCharacter(event) {
    event.preventDefault()
    const personaje = event.target.personaje.value
    const videojuego = event.target.videojuego.value
    const objeto = { nombre: personaje, juego: videojuego }
    // Check if the character already exists in the list (Method 1)
    const existe = lista.some(item => item.nombre.toLowerCase() === personaje.toLowerCase())
    if (existe) {
        alert('El personaje ya existe en la lista')
        return
    }
    lista.push(objeto)

    //localStorage.setItem('personaje', JSON.stringify(lista))
    console.log(lista)
    const comprobacion = (personaje === "" || videojuego === "") ? alert('Debes introducir un personaje y un videojuego') : printCharacter(personaje, ul)
    event.target.reset()
}





form.addEventListener('submit', getCharacter)






