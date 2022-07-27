let message = document.querySelector("#message")




function addMovie(event) {
    event.preventDefault()

    let inputField = document.querySelector("input")

    let movie = document.createElement("li")
    
    let movieTitle = document.createElement("span")
    
    movieTitle.textContent = inputField.value
    
    movie.appendChild(movieTitle)
    
    movieTitle.addEventListener("click",crossOffMovie)
    
    let deleteButton = document.createElement("button")
    
    deleteButton.textContent = "X"
    
    deleteButton.addEventListener( "click", deleteMovie)
    
    movie.appendChild(deleteButton)
    

    document.querySelector("ul").appendChild(movie)
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.querySelector("span").textContent} Deleted!`
revealMessage()
}

function crossOffMovie(event) {
event.target.classList.toggle("checked")
if(event.target.classList.contains("checked")) {
    message.textContent = `${event.target.textContent} watched!`
} else {
    message.textContent = `${event.target.textContent} added back!`
}
revealMessage()
}

function revealMessage() {
message.classList.remove("hide")
setTimeout(() => {
    message.classList.add("hide")
}, 1000)
}


document.querySelector("form").addEventListener( "submit", addMovie)
