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
