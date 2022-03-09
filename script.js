let myLibrary = [];

function Book(title, author, published, pages, isRead, index) {
  this.title = title;
  this.author = author;
  this.published = published;
  this.pages = pages;
  this.isRead = isRead;
};

Book.prototype = {
  // More specifically, toggles the isRead status of the book object
  toggleIsReadBook() {
    this.isRead === true ? this.isRead = false : this.isRead = true;
  }
};

// get the input fields to play with
const titleField = document.getElementById("title");
const authorField = document.getElementById("author");
const publishedField = document.getElementById("published");
const pagesField = document.getElementById("pages");
const isReadField = document.getElementById("isRead");

// Grab the display and add a listner to handle some clicks
const display = document.querySelector(".display");
display.addEventListener("click", (e) => handleDisplayClick(e));

// Get the submit button for listener
const submit = document.querySelector("#submit");
submit.addEventListener("click", () => validateForm() ? addBookToLibrary(getBookInfo()) : false);

// Grab the clear library button to play with
const clear = document.querySelector("#clear-library");
clear.addEventListener("click", () => clearLibrary());

// Get input fields for clear function
const formFields = document.querySelectorAll("input");


// Add the book to the end of myLibrary
function addBookToLibrary(book) {
  myLibrary.push(book);
  clearLibraryDisplay();
  displayLibrary();
  clearFields();
};

// Make a new Book object using the user input fields
function getBookInfo() {
  let newBook = new Book(titleField.value, authorField.value, publishedField.value, pagesField.value, isReadField.checked);
  return newBook;
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
  newCard.setAttribute("data-index", myLibrary.indexOf(book))
  // Finally, add the card to the display
  display.appendChild(newCard);
}

// function that gates any clicks on the display element
function handleDisplayClick(e) {
  e.stopPropagation();
  if (e.target.classList.contains("is-read-toggle")) {
    // Pass the event along to track its target and toggle that specific card
    toggleIsRead(e);
  } else if (e.target.classList.contains("remove")) {
    removeBook(e.target.parentNode.getAttribute("data-index"))
  };
};

// changes and updates the displayed isRead and the isRead property on the book
function toggleIsRead(e) {
  // First change the object property
  myLibrary[e.target.parentNode.getAttribute("data-index")].toggleIsReadBook();
  // Then toggle the class on the div
  e.target.classList.toggle("read")
  // Update the button text
  if (e.target.classList.contains("read")) {
    e.target.innerText = "Read";
    return;
  };
  e.target.innerText = "Unread";
};

// removes a book from anywhere in the array, updating the display after
function removeBook(index) {
  myLibrary.splice(index, 1);
  clearLibraryDisplay();
  displayLibrary();
};

// Verify the user data matches the types expected
function validateForm() {
  // Check Title
  if (titleField.value === "" || authorField.value === "") {
    alert("You must enter a Title and Author, at least.");
    return false;
  };
  // Published/pages are optional, but make sure they are date/digits
  if (typeof(parseInt(publishedField.value)) !== "number") {
    alert("Published date must be a valid year in which people were writing books");
    return false;
  };
  if (typeof(parseInt(pagesField.value)) !== "number") {
    alert("Page count must be a number, this isn't high-school algebra");
    return false;
  };
  return true;
};

// Update the display with divs containing all the books currently in the Library
function displayLibrary() {
  myLibrary.forEach(book => makeCard(book));
};

// Reset all user-input fields to blank, except checkbox
function clearFields() {
  formFields.forEach(function (field) {
    field.value = "";
  });
};

// remove all books from the screen and the myLibrary Array
function clearLibrary() {
  clearLibraryDisplay();
  // Also removed the book from the library Array, hidden from the user.
  myLibrary = [];
};

// Remove just the display elements of the library whie leaving the array untrouched
function clearLibraryDisplay() {
  while (display.lastElementChild) {
    display.lastElementChild.remove();
  };
};
