module.exports = {
    getPokemon: (request, response) => {
        let { pokemon } = request.params
        console.log(pokemon)
    }
}