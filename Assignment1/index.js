const readline = require("readline");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

let books = ["Book1", "Book2", "Book3", "Book4"];

function showBooks() {
  console.log(books);
  return;
}

const r1 = readline.createInterface({
  input: process.stdin, 
  output: process.stdout, 
});



function interactWithUser() {
  r1.question(
    "Plese Press 1, 2 or 3  \n",
    (selectedOption) => {
      eventEmitter.on("show books pressed", showBooks);
      if (selectedOption === "1") {
        eventEmitter.emit("show books pressed");
        interactWithUser();
      } else if (selectedOption === "2") {
        r1.question("Add book name to list", (bookName) => {
          books.push(bookName);
          eventEmitter.emit("show books");
          interactWithUser();
        });
      } else if (selectedOption === "3") { 
        r1.close();
      } else {
        console.log("Please type corrcet input");
        interactWithUser();
      }
    }
  );
}

interactWithUser();

r1.on("close", () => {
   
  console.log("Bye Bye");
  process.exit(0);
   
});
