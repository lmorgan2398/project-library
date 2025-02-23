const myLibrary = new Array(36).fill(null);

function Book(title, author, pages, status, color) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.color = color;
};

function addBookToLibrary(title, author, pages, status, color, index) {
    let newBook = new Book(title, author, pages, status, color);
    myLibrary[`${index}`] = newBook;
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '310', 'read', 'red', 17);
addBookToLibrary('The Lord of the Rings: The Fellowship of the Ring', 'J.R.R. Tolkien', '479', 'read', 'green', 18)
addBookToLibrary('The Lord of the Rings: The Two Towers', 'J.R.R. Tolkien', '415', 'read', 'yellow', 19)
addBookToLibrary('The Lord of the Rings: The Return of the King', 'J.R.R. Tolkien', '347', 'read', 'blue', 20)

console.log(myLibrary);


let addBookDialog = document.querySelector('.add-book');
let displayBookDialog = document.querySelector('.book-information');

document.addEventListener('DOMContentLoaded', () => {
    addBookDialog.close();
})

let currentBookIndex;


function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
    (function (currentIndex) {
        let currentBookObj = myLibrary[currentIndex];
        let currentBookEle = document.querySelector(`[data-index-number="${currentIndex}"]`);
        if(currentBookObj === null) {
            currentBookEle.addEventListener('click', () => {
                // code to be inserted representing the 'add new book' dialog
                addBookDialog.showModal();
                let colorInput = document.querySelector('#color');
                let addBookDialogContainer = document.querySelector('.add-book form');
                colorInput.addEventListener('input', () => {
                    addBookDialogContainer.style.backgroundColor = colorInput.value.toLowerCase();
                })
                console.log(currentIndex);
            })
            currentBookEle.classList.add(`empty`);
        } else {
            currentBookEle.addEventListener('click', () => {
                // code to be inserted representing a current book obj dialog
                displayBookDialog.showModal();
                let bookTitle = document.querySelector('.book-title');
                let bookAuthor = document.querySelector('.book-author');
                let bookPages = document.querySelector('.book-pages');
                bookTitle.textContent = currentBookObj.title;
                bookAuthor.textContent = currentBookObj.author;
                bookPages.textContent = currentBookObj.pages + ' ' + 'pages';
                let displayBookDialogContainer = document.querySelector('.book-information-container');
                displayBookDialogContainer.style.backgroundColor = currentBookObj.color;
                // will display information from library array objects
                // will give options to delete the object and update display
            })
            // set class to display book color and title and grow book when hovered
            currentBookEle.style.backgroundColor = currentBookObj.color;
            let titlePara = document.createElement('p');
            currentBookEle.appendChild(titlePara);
            titlePara.textContent = currentBookObj.title.toUpperCase();
        }
    })(i);
    }
};


displayLibrary();