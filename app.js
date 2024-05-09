// const wrapper  = document.getElementById("wrapper")
//
// const title = document.getElementsByClassName("title")
//
// let head = document.getElementsByTagName("header")
// console.log(head)
//
// const bookList = document.querySelector('#book-list')  //# is for id
// console.log(bookList)
//
// const bookListLi = document.querySelectorAll('#book-list ul li .name') //gets all d li
// //dis is a nodelist so array functions cn b performed on it
// bookListLi.forEach((book) =>{
//     book.textContent += " added this words"
// })
//
// console.log(bookListLi)
//
// const addBook = document.getElementById("add-book")
// console.log(addBook)
//
// const addButton = document.querySelector('#add-book button')
// console.log(addButton.textContent)
//
//
//
//this is to make the delete button remove it
const bookList = document.querySelector('#book-list ul')

bookList.addEventListener('click', (event)=>{
    let className = event.target.className
    if (Object.is(className, "delete")){
        let li = event.target.parentElement
        bookList.removeChild(li)
    }
})


//this is to make the search button works
const searchBook = document.forms["search-books"]
const listOfBooks = document.querySelectorAll('#book-list li .name')

searchBook.addEventListener('keyup', function (e){
    let inputText = e.target.value.toLowerCase()

    listOfBooks.forEach((book)=>{
        let title = book.textContent.toLowerCase()
        let parentNode = book.parentNode

        if (title.includes(inputText)){
            parentNode.style.display = "block"
        } else {
            parentNode.style.display = "none"
        }
    })

})

//this is to add books to the site
const addBook = document.forms["add-book"]
addBook.addEventListener('submit', (e)=>{
    e.preventDefault()
    const inputValue = addBook.querySelector('input').value;

    const liTag = document.createElement("li");
    const firstSpan = document.createElement("span");
    const secondSpan = document.createElement("span")

    firstSpan.className = 'name';
    secondSpan.className = 'delete';

    liTag.appendChild(firstSpan);
    liTag.appendChild(secondSpan);

    firstSpan.textContent = inputValue;
    secondSpan.textContent = "delete";

    bookList.appendChild(liTag) //use.prepend to add to d beginning of d list
})