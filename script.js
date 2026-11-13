const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(list, newBook) {
    list.push(newBook);
}

const book1 = new Book("Dungeon Crawler Carl", "Matt Dinniman", 481, "read");
addBookToLibrary(myLibrary, book1);

const book2 = new Book ("Hunger Games", "Suzanne Collins", 374, "not read")
addBookToLibrary(myLibrary, book2)

const myForm = document.querySelector("#book-form");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#read").checked;

        const enteredBook  = new Book (title, author, pages, read);
        addBookToLibrary(myLibrary, enteredBook);
})
