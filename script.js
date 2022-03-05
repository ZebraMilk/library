let myLibrary = [];
let arrayIndex = 0;

const display = document.querySelector(".display");
const submit = document.querySelector("#submit");
const form = document.querySelector(".form-fields");

submit.addEventListener("click", getBookInfo());






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



function getBookInfo() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let published = document.getElementById("published").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("isRead").value;
  
  // let bookTitle = toCamelCase(title);
  let newBook = new Book(title, author, published, pages, isRead)
  console.table(newBook);
  addBookToLibrary(newBook);
  console.table(myLibrary);
}

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