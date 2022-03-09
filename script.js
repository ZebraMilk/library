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
    info() {
      return `${this.title} by ${this.author}, ${this.pages} pages, published in ${this.published}, ${this.isRead ? "read" : "not read yet"}.`
    }
};

// get the input fields to play with
const titleField = document.getElementById("title");
const authorField = document.getElementById("author");
const publishedField = document.getElementById("published");
const pagesField = document.getElementById("pages");
const isReadField = document.getElementById("isRead");


const display = document.querySelector(".display");
display.addEventListener("click", (e) => toggleIsRead(e));

// Get the submit button for listener
const submit = document.querySelector("#submit");

// Grab the clear library button to play with
const clear = document.querySelector("#clear-library");
clear.addEventListener("click", () => clearLibrary());

// Get input fields for clear function
const formFields = document.querySelectorAll("input");

submit.addEventListener("click", () => addBook(getBookInfo()));

// Make a new Book object using the user input fields
function getBookInfo() {
  // validateForm()
  let newBook = new Book(titleField.value, authorField.value, publishedField.value, pagesField.value, isReadField.checked, myLibrary.length);
  return newBook;
};

// Add the book to the end of myLibrary
function addBook(book) {
  myLibrary.push(book);
  makeCard(book);
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












function toggleIsRead(e) {
  e.stopPropagation();
  if (e.target.classList.contains("is-read-toggle")) {
    e.target.classList.toggle("read")

    if(e.target.classList.contains("read")) {
      e.target.innerText = "Read";
      return;
    };
    e.target.innerText = "Unread";
  };
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
  }
}

// function toCamelCase(str) {
//   return str
//     .replace(/[^a-z0-9]/gi, ' ')
//     .toLowerCase()
//     .split(' ')
//     .map((el, ind) => ind === 0 ? el : el[0].toUpperCase() + el.substring(1, el.length))
//     .join('');
// };