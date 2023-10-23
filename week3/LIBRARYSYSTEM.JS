class Book {
    constructor(title , author, available = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}
let library = {
    books:[],
    addBook: function(title, author) {
        const book = new Book(title, author);
        this.books.push(book);
        
    },
    checkOut: function(title){
        let found = false;
        this.books.forEach((book) => {
            if(book.title === title && book.available) {
              found  = true;
              book.available = false;
              console.log(`checked out: ${book.title}`);  
            }
        });
        if (!found) {
            console.log(`Book with title '${title}' is not available for checkout.`);
          }
    },
    getAvailableBook: function(){
        let bookList = [];
        this.books.forEach((book=>{
            if(book.available){
                bookList.push(book.title);
            }
        }));
        console.log(`There are ${bookList.length} titles on the shelf: '${bookList.join("\n")}`);
       
    }   
}
/*library.addBook("Romance of the three kingdom", "charles Dicken");
library.addBook("Romanc", "Henry");
console.log(library.books);
console.log(library.checkOut("Romanc")); // true
console.log(library.checkOut("Book4")); //false
console.log(library.getAvailableBook()); */

    const BookData = `[
        {
            "isbn":"9781593279509",
            "title":"Eloquent JavaScript, Third Edition",
            "subtitle":"A Modern Introduction to Programming",
            "author":"Marijn Haverbeke",
            "published":"2018-12-04T00:00:00.000Z",
            "publisher":"No Starch Press",
            "pages":472,
            "description":"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
            "website":"http://eloquentjavascript.net/"
        },
        {
            "isbn":"9781491943533",
            "title":"Practical Modern JavaScript",
            "subtitle":"Dive into ES6 and the Future of JavaScript",
            "author":"Nicolás Bevacqua",
            "published":"2017-07-16T00:00:00.000Z",
            "publisher":"O'Reilly Media",
            "pages":334,
            "description":"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
            "website":"https://github.com/mjavascript/practical-modern-javascript"
        },
        {
            "isbn":"9781593277574",
            "title":"Understanding ECMAScript 6",
            "subtitle":"The Definitive Guide for JavaScript Developers",
            "author":"Nicholas C. Zakas",
            "published":"2016-09-03T00:00:00.000Z",
            "publisher":"No Starch Press",
            "pages":352,
            "description":"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
            "website":"https://leanpub.com/understandinges6/read"
        }
    ]`;
function receiveBook(books){
    books.forEach((book)=>{
        library.addBook(book.title, book.author);
    })

}
const BookDataObj = JSON.parse(BookData);
receiveBook(BookDataObj);
console.log(library.books);
console.log(library.checkOut("Understanding ECMAScript 6")); // true
console.log(library.checkOut("Book4")); //false
console.log(library.getAvailableBook());
// try{
//     const BookDataObj = JSON.parse(BookData);
//     receiveBook(BookDataObj);
// }
// catch(e){
//     console.log(e);
// }
// finally{
// console.log(library.checkOut("Pro Git")); // true
// console.log(library.getAvailableBook()); 

// }
    