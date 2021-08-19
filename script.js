let myLibrary = [];
const addBookBtn = document.getElementById("newBookBtn");
const refreshTableBtn = document.getElementById("refreshTableBtn");
const body = document.getElementsByTagName("body")[0];
const tableFields = 5;

//elements
const radRead = document.getElementById("bookReadTrue");
const radNotRead = document.getElementById("bookReadFalse");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet.`)
    }

}

function removeBook(book) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (book === myLibrary[i]) {
            myLibrary.splice(i,1);
        }
    }
    showLibrary(myLibrary);
}


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function showLibrary(library) {
    const prevTable = document.getElementById("libraryTable")

    //create a <table> element and a <tableBody> element
    if (prevTable !== null) {
        prevTable.parentElement.removeChild(prevTable);
    }

    const table = document.createElement("table");
    const tableBody = document.createElement("tableBody");
    table.id = "libraryTable";
    let cellText = undefined;

    //Create Header Row
    const headerRow = document.createElement("tr");
    
    for (let i = 0; i < tableFields; i++) {
        const headerCell = document.createElement('td')
        const fieldArr = ["Title", "Author", "Pages", "Read", "Delete"]
        cellText = document.createTextNode(fieldArr[i]);
        headerCell.appendChild(cellText);
        headerRow.appendChild(headerCell);
        headerRow.style.backgroundColor = "lightgrey"
    }
    tableBody.appendChild(headerRow);

    //create all cells
    library.forEach(book => {
        const currentBook = book.title;
        const row = document.createElement('tr');



        for (let i = 0; i < tableFields; i++) {
            
        const cell = document.createElement("td");

        switch (i) {
            case 0:
                cellText = document.createTextNode(`${book.title}`);
                break;
        
            case 1:
                cellText = document.createTextNode(`${book.author}`);
                break;

            case 2:
                cellText = document.createTextNode(`${book.pages}`);
                break;

            case 3:
                cellText = document.createTextNode(`${book.read}`);
                break;

            case 4:
                //Create a delete button
                cellText = document.createElement("button");
                cellText.innerHTML = "Delete";
                cellText.addEventListener("click", function (){
                    removeBook(book)    
                });
                break;
            default:
                break;
        }
        cell.appendChild(cellText);
        row.appendChild(cell);      
        }
        

        //add a row to the end of the table body
        tableBody.appendChild(row);

    });

    // put the <tableBody> in the <table>
    table.appendChild(tableBody);
    //appends <table> into <body>
    body.appendChild(table);
    //sets the border attribute of the table to 2;
    table.setAttribute("border", "1");
}

function addBookFunction() {
    const bookName = document.getElementById("bookTitle");
    const bookAuthor = document.getElementById("bookAuthor");
    const bookPages = document.getElementById("bookPages");

    let bookRead = false;

    if (radRead.checked) {
        bookRead = true;
    }
    else{
        bookRead = false;
    }

    const newBook = new Book(bookName.value, bookAuthor.value, bookPages.value, bookRead);
    addBookToLibrary(newBook);
    console.log(`${newBook.info()} has been added to the library`);

    //Clear all fields
    bookName.value = null;
    bookAuthor.value = null;
    bookPages.value = null;
    radRead.checked = false;
    radNotRead.checked =false;
    showLibrary(myLibrary);
}

addBookBtn.addEventListener("click", addBookFunction);
addBookBtn.addEventListener("click", addBookFunction);
refreshTableBtn.addEventListener("click", function () {showLibrary(myLibrary);} )
radRead.addEventListener('click', () => radNotRead.checked = false);
radNotRead.addEventListener('click', () => radRead.checked = false);




const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "not read");
const theHobbit1 = new Book("The Hobbit1", "J.R.R Tolkien", "295", "not read");
const theHobbit2 = new Book("The Hobbit2", "J.R.R Tolkien", "295", "not read");
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit1);
addBookToLibrary(theHobbit2);
showLibrary(myLibrary);



