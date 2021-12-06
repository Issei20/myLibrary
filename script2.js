

// SECTION TEST START

function Person (title, author, nbrPages, status ){
    this.title = title;
    this.author = author;
    this.nbrPages = nbrPages;
    this.status = status;
    
    
}
let statuss = "bite";
const personObject = new Person (title, author, nbrPages, statuss);
myLibrary.push(personObject);
statuss = "bite";
console.log(myLibrary)

let statusss = "salope";
const personObjecttwo = new Person (title, author, nbrPages, statusss);
myLibrary.push(personObjecttwo);

console.log(myLibrary)


