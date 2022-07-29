let items = ['taco bell', 'chipotle', 'AppleBees', 'Whataburger', 'Tropical Smoothie', 'Raising Canes'];

function random_item(items) {
    
    return items[Math.floor(Math.random()*items.length)];
    
}
function redButton() {
    alert(`You should go eat at ${random_item(items)}`)
}

let randomButton = document.querySelector(".random-btn")

randomButton.addEventListener("click", redButton)