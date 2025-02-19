const myLibrary = new Array(36).fill(null);
console.log(myLibrary);

function Book(title, author, pages, status, color) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.color = color;
};

function addBookToLibrary(title, author, pages, status, color) {
    let newBook = new Book(title, author, pages, status, color);
    myLibrary.push(newBook);
}

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
    (function (currentIndex) {
        let currentBookObj = myLibrary[currentIndex];
        let currentBookEle = document.querySelector(`.book${currentIndex}`);
        if(currentBookObj === null) {
            currentBookEle.addEventListener('click', {
                // code to be inserted representing the 'add new book' dialog
                // will change currentBookObj to the value of the inputs
                // then update display to match input values
            })
            currentBookEle.classList.add(`empty`);
        } else {
            currentBookEle.addEventListener('click', {
                // code to be inserted representing a current book obj dialog
                // will display information from library array objects
                // will give options to delete the object and update display
            })
            // set class to display book color and title and grow book when hovered
        }
    })(i);
    }
};


displayLibrary();