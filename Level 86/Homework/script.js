let book = {
    title: "GOALS!",
    author: "Bryan Trace",
    year: 2000,
    genre: "Self-improvement",
    price: 15.99
};

console.log(book);

console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);
console.log(book.price);

console.log(book["title"]);
console.log(book["author"]);
console.log(book["year"]);
console.log(book["genre"]);
console.log(book["price"]);

let info = `The book is called ${book.title} it was written by ${book.author}, it was released in ${book.year} year, the book is about ${book.genre} and it's price is ${book.price}`;