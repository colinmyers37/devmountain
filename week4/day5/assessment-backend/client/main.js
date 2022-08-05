const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data);
    });
};

const booksContainer = document.querySelector('#books-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/books/`

const booksCallback = ({ data: books }) => displayBooks(books)
const errCallback = err => console.log(err.response.data)

const getAllBooks = () => axios.get(baseURL).then(booksCallback).catch(errCallback)
const createBook = body => axios.post(baseURL, body).then(booksCallback).catch(errCallback)
const deleteBook = id => axios.delete(`${baseURL}/${id}`).then(booksCallback).catch(errCallback)
const updateBook = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(booksCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()
    
    let title = document.querySelector('#title')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')
    
    let bodyObj = {
        title: title.value,
        rating: rating.value, 
        imageURL: imageURL.value
    }
    
    createBook(bodyObj)
    
    title.value = ''
    rating.checked = false
    imageURL.value = ''
}

function createBookCard(book) {
    const bookCard = document.createElement('div')
    bookCard.classList.add('book-card')
    
    bookCard.innerHTML = `<img alt='${book.title}' src=${book.imageURL} class="book-cover"/>
    <p class="book-title">${book.title}</p>
    <div class="btns-container">
    <button onclick="updateBook(${book.id}, 'minus')">-</button>
    <p class="book-rating">${book.rating} stars</p>
    <button onclick="updateBook(${book.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteBook(${book.id})">delete</button>
    `
    
    
    
    booksContainer.appendChild(bookCard)
}

function displayBooks(arr) {
    booksContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createBookCard(arr[i])
    }
}

fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
form.addEventListener('submit', submitHandler)

getAllBooks()


