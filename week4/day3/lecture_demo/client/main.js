const form = document.querySelector("form");
const URL = 'http://localhost:4000'

const getPokemon = evt => {
    evt.preventDefault()
    const input = document.querySelector("input");
    console.log(input.value);
    let pokemon = input.value;

    axios.get(`${URL}/pokemon/${pokemon}`)
    .then(response => {

    })
    .catch(err => console.log(err))
}




form.addEventListener("submit", getPokemon);