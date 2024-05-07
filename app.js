const wrapper  = document.getElementById("wrapper")

const title = document.getElementsByClassName("title")

let head = document.getElementsByTagName("header")
console.log(head)

const bookList = document.querySelector('#book-list')  //# is for id
console.log(bookList)

const bookListLi = document.querySelectorAll('#book-list ul li .name') //gets all d li
//dis is a nodelist so array functions cn b performed on it
bookListLi.forEach((book) =>{
    book.textContent += " added this words"
})

console.log(bookListLi)

const addBook = document.getElementById("add-book")
console.log(addBook)

const addButton = document.querySelector('#add-book button')
console.log(addButton.textContent)