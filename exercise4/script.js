const { I } = require("systemjs");

// part one
const books = [
    {title: 1984, author: "George Orwell"},
    {title: "In Search of Lost Time", author: "Marcel Proust"},
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "Moby Dick", author: "Herman Melville"}
   ]

const result = books.filter(checkAdult);

function checkAdult(book) {
  return book.author != "George Orwell" && book.author != "Herman Melville";
}
console.log(result)


// part two
object.onclick = function(){myScript};
object.addEventListener("click", myScript);

function myFunction() {
    item = document.getElementById("content");
    if (item.style.color == "red") {
        item.style.color = "blue";
    } else {
        item.style.color = "red";
    }
}

function updateContent() {
    item = document.getElementById("content");
    console.log(item.innerHTML)
    if (item.innerHTML == "Hello World") {
        item.style.color = "blue";
        item.innerHTML = "Bye-Bye World";
    } else {
        item.style.color = "red";
        item.innerHTML = "Hello World";
    }
}