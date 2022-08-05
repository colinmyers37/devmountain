const { getCompliment, getFortune, getAll, createBook, deleteBook, updateBook } = require('../controller')



module.exports = (app) => {
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/books", getAll);
app.post("/api/books", createBook);
app.delete("/api/books/:id", deleteBook);
 app.put("/api/books/:id", updateBook)
}