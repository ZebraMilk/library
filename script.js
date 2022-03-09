let myLibrary = [];

function Book(title, author, published, pages, isRead, index) {
  this.title = title;
  this.author = author;
  this.published = published;
  this.pages = pages;
  this.isRead = isRead;
  this.index = index;
};

Book.prototype = {
  toggleIsReadBook() {
    this.isread === true ? (this.isRead = false) : (this.isRead = true);
    // return this.isRead;
  }
};

// get the input fields to play with
const titleField = document.getElementById("title");
const authorField = document.getElementById("author");
const publishedField = document.getElementById("published");
const pagesField = document.getElementById("pages");
const isReadField = document.getElementById("isRead");


const display = document.querySelector(".display");
display.addEventListener("click", (e) => handleDisplayClick(e));

// Get the submit button for listener
const submit = document.querySelector("#submit");

// Grab the clear library button to play with
const clear = document.querySelector("#clear-library");
clear.addEventListener("click", () => clearLibrary());

// Get input fields for clear function
const formFields = document.querySelectorAll("input");
submit.addEventListener("click", () => addBookToLibrary(getBookInfo()));

// Make a new Book object using the user input fields
function getBookInfo() {
  // validateForm()
  let newBook = new Book(titleField.value, authorField.value, publishedField.value, pagesField.value, isReadField.checked, myLibrary.length);
  return newBook;
};

// Add the book to the end of myLibrary
function addBookToLibrary(book) {
  myLibrary.push(book);
  // makeCard(book);
  clearLibraryDisplay();
  displayLibrary();
  clearFields();
};

// Construct and populates a new "card" containing the information about the book
function makeCard(book) {

  const newTitle = document.createElement("h3");
  newTitle.innerText = book.title;

  const newAuthor = document.createElement("h4");
  newAuthor.innerText = book.author;

  const newPublished = document.createElement("h5");
  newPublished.innerText = book.published;

  const newPages = document.createElement("h6");
  newPages.innerText = book.pages;

  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerText = "X";

  const newIsRead = document.createElement("button");
  newIsRead.classList.add("is-read-toggle");
  // Convert isRead boolean to natural language
  newIsRead.innerText = (book.isRead === true ? "Read" : "Unread");

  const newCard = document.createElement("div");
  newCard.classList.add("library-book");
  // Add them allllll to the card
  newCard.appendChild(newTitle);
  newCard.appendChild(newAuthor);
  newCard.appendChild(newPublished);
  newCard.appendChild(newPages);
  newCard.appendChild(remove)
  newCard.appendChild(newIsRead);
  // Give the card an index 
  newCard.setAttribute("data-index", book.index)

  display.appendChild(newCard);
}




// function that gates any clicks on the display element
function handleDisplayClick(e) {
  e.stopPropagation();
  if (e.target.classList.contains("is-read-toggle")) {
    toggleIsRead(e);
  } else if (e.target.classList.contains("remove")) {
    removeBook(myLibrary[e.target.dataset.index])
  };
};



// removes a book from anywhere in the array
function removeBook(book) {
  myLibrary.splice(book.index, 1);
  console.table(myLibrary);
};


function toggleIsRead(e) {
  e.target.classList.toggle("read")
  myLibrary[e.target.dataset.index].toggleIsReadBook();
  if (e.target.classList.contains("read")) {
    e.target.innerText = "Read";
    return;
  };
  e.target.innerText = "Unread";
};



// Update the display with divs containing all the books currently in the Library
function displayLibrary() {
  myLibrary.forEach(book => makeCard(book));
};

// function validateForm()

// Reset all user-input fields to blank, except checkbox
function clearFields() {
  formFields.forEach(function (field) {
    field.value = " ";
  });
};

// remove all books from the screen and the myLibrary Array
function clearLibrary() {
  while (display.lastElementChild) {
    display.lastElementChild.remove();
    // Also removed the book from the library Array, hidden from the user.
    myLibrary.pop();
  };
};

// Remove just the display elements of the library whie leaving the array untrouched
function clearLibraryDisplay() {
  while (display.lastElementChild) {
    display.lastElementChild.remove();
  };
};
