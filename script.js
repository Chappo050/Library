let myLibrary = [];
const addBookBtn = document.getElementById("newBookBtn");
const container = document.getElementsByClassName("container");
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet.`)
    }
}


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function showLibrary(library) {
    library.forEach(element => {
        //create a <table> element and a <tableBody> elemetn
        const table = document.createElement("table");
        const tableBody = document.createElement("tableBody");

        //create all cells
        for (let i = 0; i < myLibrary.length; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < myLibrary.length; j++) {

                const cell = document.createElement("td");
                const cellText = document.createElement("Cell in row" + i + "column" + j)
                
            }

            
        }
        console.table(element.info());
    });
}

function addBookFunction() {
    const bookName = prompt("Enter the name of the book.");
    const bookAuthor = prompt("Enter the Author of the book.");
    const bookPages = prompt("Enter the amount of pages.");
    const bookRead = prompt("Has the book been read? (Read/Not Read)");

   const newBook = new Book(bookName, bookAuthor, bookPages, bookRead);
   addBookToLibrary(newBook);
   console.log(`${newBook.info()} has been added to the library`);
}

addBookBtn.addEventListener("click", addBookFunction);






const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "not read");
const theHobbit1 = new Book("The Hobbit1", "J.R.R Tolkien", "295", "not read");
const theHobbit2 = new Book("The Hobbit2", "J.R.R Tolkien", "295", "not read");
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit1);
addBookToLibrary(theHobbit2);
showLibrary(myLibrary);



