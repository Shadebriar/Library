// Empty array to hold all book entries once they've been entered.
const myLibrary = [];

// Blueprint (constructor) for each book: holds title, authro, pages, read status, and random ID
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

// Helper function to push a newly created book into the library array.
function addBookToLibrary(list, newBook) {
    list.push(newBook);
}

// Grabs the form element from the HTML file.
const myForm = document.querySelector("#book-form");
    // Listens for when the user clicks the submit button on that form.
    myForm.addEventListener("submit", (event) => {
        // Stops the page from refreshing.
        event.preventDefault();

        // Grabs the current text/values typed into each input field.
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#read").checked;

        // Uses the Book constructor to creat a brand new book object with those input values.
        const enteredBook  = new Book (title, author, pages, read);
        // Adds that new book into the library array.
        addBookToLibrary(myLibrary, enteredBook);

        renderBooks();
})
// Selects the main container on the HTML page where all the book panels will live.
const container = document.querySelector("#library-container");

    function renderBooks() {
        // Wipes the container, so there's no duplicate enteries
        container.innerHTML = "";

    // Loops through the array starting at index 0.
    for(let i = 0; i < myLibrary.length; i++) {
        // Grabs the current book object in the loop.
        const book = myLibrary[i];

        // Crerats a new div for specific book panels and adds a class name to it.
        const panel = document.createElement("div");
        panel.classList.add("book-panel");

        // Creates a heading element for the title and sets it's text to an h3.
        const titleHeading = document.createElement("h3");
        titleHeading.textContent = book.title;

        // Puts the title heading in the book panel.
        panel.append(titleHeading);

        // Creates a author name for the author and sets the text to a p.
        const authorName = document.createElement("p");
        authorName.textContent = book.author;

        // Puts the author name in the book panel.
        panel.append(authorName);

        // Creates a page number for pages and sets the text to a p.
        const pageNumber = document.createElement("p");
        pageNumber.textContent = book.pages;

        // Puts the page number in the book panel.
        panel.append(pageNumber);

        // Creates a read status for read and sets it to a p.
        const readStatus = document.createElement("p");
        // Checks if the book has been read or not and provides a text status.
            if(book.read) {
                readStatus.textContent = "Status: Read";
            } else {
                readStatus.textContent = "Status: Not Read";
            }  
        // Puts the read status in the book panel.
        panel.append(readStatus);

        // Creates a delete button and sets it to button.
        const deleteButton = document.createElement("button");
            // Adds text to button saying, "Delete"
            deleteButton.textContent = "Delete";
                // Adds an event listener so when button is clicked finds book.id
                deleteButton.addEventListener("click", (event) => {
                    const index = myLibrary.findIndex(item => item.id === book.id);
                    // Deletes the book id.
                    myLibrary.splice(index, 1);

                    renderBooks();
                });
                // Adds the delete button to the book panel.
                panel.append(deleteButton);

        // Drops the completed book panel in the main container.
        container.append(panel);
    }
}

renderBooks();