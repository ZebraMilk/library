

# Project Specs

***

1.  If you haven’t already, set up your project with skeleton HTML/CSS and JS files.
2.  All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:
    
    ```javascript
    let myLibrary = [];
    
    function Book() {
      // the constructor...
    }
    
    function addBookToLibrary() {
      // do stuff here
    }
    ```
    
3.  Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
4.  Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
5.  Add a button on each book’s display to remove the book from the library.
    1.  You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
6.  Add a button on each book’s display to change its `read` status.
    1.  To facilitate this you will want to create the function that toggles a book’s `read` status on your `Book` prototype instance.

***

# Project Notes

do this project twice, once with a mobile focus using list and table elements
second time with a desktop focus, using cards, perhaps a carousel approach? Or using grid/flexbox to introduce the cards.

also have variation where there is a dialog box that pops up (background, everything outside the form container goes darker, blurry maybe)

BIG GOAL: have three radio buttons for three different styles for the site.
Listen to the buttons, have JS populate the DOM almost entirely, use only a basic container system and fill it depending on the radio button chosen
Start by making one, solid.
Basically checking a different button transitions to a different format, relies on enitrely different JS code (gated by a big `if` statement)

# First, do mobile
use rows added to the DOM for each book

## Project outline
### HTML/CSS page framework
header with bit of box-shadow
  Title/Logo
Main Container
  form container
    add-book button(:before)
      it pops out a form
      -OR-
      it drops down a form
      form:
        Title
        Author
        optional:
          publshing date
          pages
        Read? (checkbox)
        Submit
      (submit makes the form disappear.
      also clicking outside the form in pop-out mode closes it with no data entered)
    "library" container
      div


## Fun things to note
- need to set a default value in the Book prototype, so the user can avoid optional fields?
- need a way to set attribute ids that correspond to each element's place in the array, myLibrary

## Functions
1. User enters data into the form
  - Validate published and pages if they include it.
  - Mark the required fields with an asterisk
2. Button click
    - validate there is a Title and an Author
    - passes the form data into a function
    - clears the forms

3. take the data from the forms
    let newBook
    For each field
        store user input in a variable
        assign the variable to the corresponding newBook property
    add newBook to library

4. addBook
    if no books in Library
        library[0] is newBook
    at myLibrary[length] (?)
    or just concat
        newBook

5. make new card(takes a Book as an argument)
    - make a div with
        - 4 containers
        - auto-columns for the buttons I will add
            - delete button (removes book)
            - isRead button (red or green depending)
    - set the innerText of each column to the approrpiate property

6. remove book
    - slice/splice the array before and after the button clicked
    - remove the div containing that book
    - update the attributes on each remaining book-card/row to reflect the new size of the myLibrary array

7. clear forms
    - set the input fields back to their defaults
8. updateLibrary

    updateLibraryDisplay



    bonus: Move the cards around, reorder the list/table/cards
    


            
## Basic Functions
- accurately get all the data entered into the forms, store them in variables
    - console.table those variables to check
- 




Okay, so I have the getBookINfo working
Also addBook working


Now I need to display the contents of the Library somehow.

I can think of two ways to do this:
    1. Refresh the entire display every time a book is added(or removed later)
    2. Isolate each book object to its own self-contained card so I would just add or remove that individual card.
In my mind, the latter is more performant, but the former is easier to implement and get the project to spec.

1:
    updateDisplay
        myLibrary.forEach() (this is the way to iterate over every book in library)
        -or-
        for book in myLibrary()
            make a div that contains:
                a title label and column
                author label and column
                published label and column
                pages label and column
                isRead button
            addEventListener to the isRead button, changes color and true/false value in the Book object associated with that row/card
            set the contents of each of the new columns equal to 
                



There might be a way to make the addCard function iterate inside, doing a forEach using each element's .value?


use h3-6 for the card displays



Alright! Sort of success
I have functions that add books to the library and a function that adds that book to a div to be displayed on the page. 

***

## 3-8
Tonight:
- make the read button toggleable, link that to a function on the Book object?
- Make an attribute function that adds a class tag corresponding to the index of thelibrary
- make a delete button that removes that card *and* the book from the library



### Remove button and function
What does it do?
- removes the book pointed to by the div from `myLibrary`
- 
- removes the div containing the book with 




### `toggleIsReadBook` function
It's a part of the Book prototype, so I can call it on any of the books in `myLibrary`.

When it is called, what does it do?
  It toggles the isRead boolean value also on `this`
  Then it calls...


Do I want to remove the display div with this book first, and then remove it from the library?
-OR-
Do I want to delete the book from the Library first and then remove its div from the display?



Now... If I write an updateDisplay function that
  clears the display (but does *not* remove them from the Library)

    Could also make a function that cycles through the library and adds the books to the display
    THis way might make it easier to do something like delete a book from the middle of the library display/array....






### Card layout tweaks 
- Play with grid so the title and author appear further to the left and there's more space between pages and the buttons
- Make the form fields better-looking for mobile (maybe 2 rows)


### Bonus functions
- Validate the user input
- Move the "cards" around on the page/in the library

***

# 3-9
## Fun bugs
- when either the remove button or the read button is clicked, I get a TypeError
    - Cannot read properties of undefined (reading toggleIsReadBook)



Okay, my approach was targeting an element that actually didn't have the dataset property, I ned to target its parent element to get the data-index and then use that value




MORE BUGS
Likely the last one, when removeing books, the book.index value is not updated, so it's possible to have a collision