const myLibrary = [];
let arrayLength = 0;

function Book(title, author, published, pages, isRead) {
  this.title = title;
  this.author = author;
  this.published = published;
  this.pages = pages;
  this.isRead = isRead;
};

Book.prototype = {
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, published in ${this.published}, ${this.isRead ? "read" : "not read yet"}.`
  }
};


const display = document.querySelector(".display");
const submit = document.querySelector("#submit");
const form = document.querySelector(".form-fields");

submit.addEventListener("click", addBook());


// 1. User enters data into the form
//   - Validate published and pages if they include it.
//   - Mark the required fields with an asterisk



// 2. Button click
//     - validate there is a Title and an Author
//     - passes the form data into a function
//     - clears the forms

// 3. take the data from the forms
//     let newBook
//     For each field
//         store user input in a variable
//         assign the variable to the corresponding newBook property
//     add newBook to library
function getBookInfo() {
  let title1 = document.getElementById("title").value;
  let author1 = document.getElementById("author").value;
  let published1 = document.getElementById("published").value;
  let pages1 = document.getElementById("pages").value;
  let isRead1 = document.getElementById("isRead").value;
  
  // let bookTitle = toCamelCase(title);
  let newBook = new Book(`${title1}`, `${author1}`, `${published1}`, `${pages1}`, `${isRead1}`);
  console.table(newBook);
  return newBook;
}

// 4. addBook
function addBook() {
  addBookToLibrary(getBookInfo());
  console.table(myLibrary);
}
//     if no books in Library
//         library[0] is newBook
//     at myLibrary[length] (?)
//     or just concat
//         newBook

// 5. make new card(takes a Book as an argument)
//     - make a div with
//         - 4 containers
//         - auto-columns for the buttons I will add
//             - delete button (removes book)
//             - isRead button (red or green depending)
//     - set the innerText of each column to the approrpiate property

// 6. remove book
//     - slice/splice the array before and after the button clicked
//     - remove the div containing that book
//     - update the attributes on each remaining book-card/row to reflect the new size of the myLibrary array

// 7. clear forms
//     - set the input fields back to their defaults
// 8. updateLibrary

//     updateLibraryDisplay



//     bonus: Move the cards around, reorder the list/table/cards




const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 1937, 295, true);
const ulysses = new Book("Ulysses", "James Joyce", 1922, 730, true);
const bloodBonesButter = new Book("Blood, Bones & Butter", "Gabrielle Hamilton", 2012, 320, false);

// addBookToLibrary(theHobbit, 0);
// addBookToLibrary(ulysses, 1);
// addBookToLibrary(bloodBonesButter, 2);

// console.table(myLibrary);

// myLibrary.forEach(book => {
//   console.log(book.info());
// });



function addBookToLibrary(book) {
  if(!myLibrary[0]) {
    myLibrary[0] = book;
  } else {
    myLibrary.push(book);
  };
};

  function toCamelCase(str)  {
    return str
       .replace(/[^a-z0-9]/gi, ' ')
       .toLowerCase()
       .split(' ')
       .map((el, ind) => ind === 0 ? el : el[0].toUpperCase() + el.substring(1, el.length))
       .join('');
  };