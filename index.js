const message = document.querySelector('#message')



const addMovie = (event) => {
    event.preventDefault()
let inputField = document.querySelector('input')
let movie = document.createElement('li')
let movieTitle = document.createElement('span')
movieTitle.textContent = inputField.value
movieTitle.addEventListener('click', crossOffMovie)
movie.appendChild(movieTitle)
let deleteBtn = document.createElement('button')
deleteBtn.textContent = 'X'
deleteBtn.addEventListener('click', deleteMovie)
movie.appendChild(deleteBtn)
document.querySelector('ul').appendChild(movie)
inputField.value = ' '
}

const deleteMovie = (event) => {
event.target.parentNode.remove()
message.textContent = `${event.target.parentNode.firstChild.textContent} is deleted`
revealMessage()
}

const crossOffMovie = (event) =>{
event.target.classList.toggle('checked')
if (event.target.classList.contains('checked')){
    message.textContent = `${event.target.textContent}  watched!`
} else {
    message.textContent = `${event.target.textContent} added back`
}
revealMessage()
}

const messageFunction = () =>{
    message.classList.add('hide')
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(messageFunction, 1000)
}
const movieForm = document.querySelector('form')
movieForm.addEventListener('submit', addMovie)