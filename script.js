const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

function addBookToLibrary(title, author, pages, status) {
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
}

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++);
    let newBook = myLibrary[i];
    
}