const BOOKS = require("./config/db.json")
let base_id = 11


module.exports = {
    getAll: (req, res) => {
        res.status(200).send(BOOKS)
    },
    createBook: (req, res) => {
        let { title, rating, imageURL } = req.body
        let new_book = {
            id: base_id,
            title,
            rating,
            imageURL
        }
        BOOKS.push(new_book)
        base_id++
        console.log(BOOKS);
        res.status(200).send(BOOKS)
    },
    deleteBook: (req, res) => {
        console.log("button clicked");
        let index = BOOKS.findIndex( book => book.id === +req.params.id)
        BOOKS.splice(index, 1)
        res.status(200).send(BOOKS)
    },
    updateBook: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = BOOKS.findIndex( book => book.id === +id)
        

        if (BOOKS[index].rating === 5 && type === "plus" || BOOKS[index].rating === 1 && type === "minus") {
            console.log("cant do that");
            res.status(405).send(BOOKS)
            return;
        }
        //a ? b : c
        type === "plus" ? BOOKS[index].rating++ : BOOKS[index].rating--

        res.status(200).send(BOOKS)
    },

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A faithful friend is a strong defense.", "Your hard work will payoff today.", "Your family is young, gifted and attractive.", "You will become more and more wealthy.",  "Your leadership qualities will be tested and proven."];

        let randomNumber = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomNumber];

        res.status(200).send(randomFortune);
    }

}