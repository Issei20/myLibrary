

let displayBooks = document.getElementById("displayBooks");
 


let userInput = "";

let title ="";
let author = "";
let nbrPages = "";
let status = "";


function Book(title, author, nbrPages, status){
    this.title = title;
    this.author = author;
    this.nbrPages = nbrPages;
    this.status = status;
    this.info = function () {
        return "\""+ title + "\" by " + author + ", " + nbrPages;
        
    }
}

 /*  test saved book 
 const dsaveBook = new Book("Harry Potter","Jk Rowling", "200 pages", "Read");
*/

let myLibrary = [];

function getTitleInput(){
    
 let titleVal = document.getElementById("titleVal").value;
  newTitle = titleVal; 
  return  newTitle;

}


function getAuthorInput(){
    
    let authorVal = document.getElementById("authorVal").value;
     newAuthor = authorVal; 
     return  newAuthor;
   }
function getNbrPagesInput(){
    
    let nbrPagesVal = document.getElementById("nbrPagesVal").value;
     newNbrPages = nbrPagesVal + " pages"; 
     return  newNbrPages;
    
   }
   let newStatus = "";
   let statusValNot = "" ;
   let statusValRead = "";
   function getStatusInputNot(){
    statusValNot = "Not read yet";
    newStatus = statusValNot;
     return  newStatus;
   
   }
   function getStatusInputRead(){
    statusValRead = "Read";
    newStatus = statusValRead;
     return  newStatus;
   
   }
  
function NewBookAdd() {
    
    getTitleInput() ;
  
      getAuthorInput();
    
        getNbrPagesInput();
   
        const dNewBook = new Book(newTitle,newAuthor, newNbrPages, newStatus);

    
        myLibrary.push(dNewBook);   
    
        loopNewBookDisplay();
        function loopNewBookDisplay(){
        
            let containerInfo = document.createElement("div");
            containerInfo.className = "containerInfo";
            containerInfo.style.border = "1px solid grey"
            containerInfo.style.display = "flex";
            containerInfo.style.alignItems = "center";
            containerInfo.style.justifyContent = "space-between";
            containerInfo.style.backgroundColor = "rgb(59, 59, 59)";
            containerInfo.style.marginTop = "2px"
            displayBooks.appendChild(containerInfo);
            let newDivTwo = document.createElement("p");
            newDivTwo.className = "newDivTwo";
            containerInfo.appendChild(newDivTwo);
            newDivTwo.style.color = "white";
            newDivTwo.textContent = dNewBook.info();
            newDivTwo.style.marginLeft = "10px";
          //  newDivTwo.style.fontWeight = "bold";
            let newContainerButt = document.createElement("div");
            newContainerButt.className = "newContainerButt";
            newContainerButt.style.display ="flex";
            newContainerButt.style.alignItems = "center";
            newContainerButt.style.gap = "5px";
            newContainerButt.style.padding = "5px";
            containerInfo.appendChild(newContainerButt);
                  let newbuttonThree = document.createElement("button");
                newbuttonThree.className = "newbuttonThree";
                newbuttonThree.style.height = "40px";
                newbuttonThree.style.width = "40px";
                newbuttonThree.style.backgroundColor = "white";
                newbuttonThree.style.borderRadius = "0px";
                newbuttonThree.style.cursor = "pointer";
                newbuttonThree.style.borderStyle ="none";
                newContainerButt.appendChild(newbuttonThree);
                let newReadButton = document.createElement("p")
                newReadButton.className = "newReadButton";
                newReadButton.textContent = dNewBook.status;
                newReadButton.style.marginRight = "15px";
                newContainerButt.appendChild(newReadButton);
                if (dNewBook.status === "Read") {
                    newbuttonThree.style.backgroundColor = "rgb(46, 177, 86)";
                } else if (dNewBook.status === "Not read yet"){
                    newbuttonThree.style.backgroundColor = "white";
                }
                newbuttonThree.onclick= function(){
                if (dNewBook.status === "Not read yet") {
                
                    dNewBook.status = "Read";
                    newReadButton.textContent = dNewBook.status;
                    newbuttonThree.style.backgroundColor = "rgb(46, 177, 86)";
                    console.log(myLibrary);
            
                } else if (dNewBook.status === "Read") {
                
                    dNewBook.status = "Not read yet";
                    newReadButton.textContent = dNewBook.status;
                    newbuttonThree.style.backgroundColor = "white";
                    console.log(myLibrary);
                  
                }
                }
                newbuttonThree.addEventListener('mouseover', function() {
                  if (newbuttonThree.style.backgroundColor === "rgb(46, 177, 86)"){
                    newbuttonThree.style.backgroundColor = "white";
                  } else if (newbuttonThree.style.backgroundColor === "white"){
                    newbuttonThree.style.backgroundColor = "rgb(46, 177, 86)";
                  }
                });
                newbuttonThree.addEventListener('mouseout', function(){
                  newbuttonThree.style.border = "none";
                  if(dNewBook.status === "Not read yet"){
                  newbuttonThree.style.backgroundColor = "white";
                  } else if (dNewBook.status === "Read"){
                    newbuttonThree.style.backgroundColor = "rgb(46, 177, 86)";
                  }
                })
                
                
                
                
            let newDivButtonTwo = document.createElement("button");
            newDivButtonTwo.className = "newDivButton";
            newDivButtonTwo.textContent = "	\u274c";
            newDivButtonTwo.style.height = "40px";
            newDivButtonTwo.style.width = "40px";
            newDivButtonTwo.style.fontSize = "20px"
            newDivButtonTwo.style.cursor = "pointer";
            newDivButtonTwo.style.color = "white";
            newDivButtonTwo.style.backgroundColor = "rgb(202, 40, 40)";
            newDivButtonTwo.style.borderStyle ="none";
            newDivButtonTwo.style.marginRight = "2px";
            newContainerButt.appendChild(newDivButtonTwo);
            newDivButtonTwo.onclick= function(){
                containerInfo.remove();
              let indexDiv =  myLibrary.indexOf(dNewBook)
               myLibrary.splice(indexDiv, 1);
            } 
           newDivButtonTwo.addEventListener('mouseover', function() {
            newDivButtonTwo.style.backgroundColor = "rgb(153, 31, 31)";
            
          
          })
          newDivButtonTwo.addEventListener('mouseout', function() {
            newDivButtonTwo.style.backgroundColor = "rgb(202, 40, 40)";
            

          })
                
        
        }
        x.style.display = "none";
        y.style.display = "block";
      
}

  

 
 

 
function formDisplay(){
    document.getElementById("theform").style.display = "none";
}

 
  loopSavedBookDisplay(); 


function loopSavedBookDisplay(){
        for (i = 0; i < myLibrary.length; i++){
            let containerInfo = document.createElement("div");
            containerInfo.className = "containerInfo";
            containerInfo.style.border = "1px solid grey"
            containerInfo.style.display = "flex";
            containerInfo.style.alignItems = "center";
            containerInfo.style.justifyContent = "space-between";
            containerInfo.style.backgroundColor = "rgb(59, 59, 59)";
            containerInfo.style.marginTop = "2px"
            displayBooks.appendChild(containerInfo);
            let newDivTwo = document.createElement("p");
            newDivTwo.className = "newDivTwo";
            containerInfo.appendChild(newDivTwo);
            newDivTwo.style.color = "white";
            newDivTwo.textContent = "\"" + myLibrary[i].title + "\"" + " by " + myLibrary[i].author + ", " +  myLibrary[i].nbrPages;
            newDivTwo.style.marginLeft = "10px";
          //  newDivTwo.style.fontWeight = "bold";
            let newContainerButt = document.createElement("div");
            newContainerButt.className = "newContainerButt";
            newContainerButt.style.display ="flex";
            newContainerButt.style.alignItems = "center";
            newContainerButt.style.gap = "5px";
            newContainerButt.style.padding = "5px";
            containerInfo.appendChild(newContainerButt);
                  let newbuttonThree = document.createElement("button");
                newbuttonThree.className = "newbuttonThree";
                newbuttonThree.style.height = "40px";
                newbuttonThree.style.width = "40px";
                newbuttonThree.style.backgroundColor = "white";
                newbuttonThree.style.borderRadius = "0px";
                newbuttonThree.style.cursor = "pointer";
                newbuttonThree.style.borderStyle ="none";
                newContainerButt.appendChild(newbuttonThree);
                let newReadButton = document.createElement("p")
                newReadButton.className = "newReadButton";
                newReadButton.textContent = dsaveBook.status;
                newReadButton.style.marginRight = "15px";
                newContainerButt.appendChild(newReadButton);
                if (dsaveBook.status === "Read") {
                    newbuttonThree.style.backgroundColor = "rgb(46, 177, 86)";
                } else if (dsaveBook.status === "Not read yet"){
                    newbuttonThree.style.backgroundColor = "white";
                }
                newbuttonThree.onclick= function(){
                if (dsaveBook.status === "Not read yet") {
                
                  dsaveBook.status = "Read";
                    newReadButton.textContent = dsaveBook.status;
                    newbuttonThree.style.backgroundColor = "rgb(46, 177, 86)";
                    console.log(myLibrary);
            
                } else if (dsaveBook.status === "Read") {
                
                  dsaveBook.status = "Not read yet";
                    newReadButton.textContent = dsaveBook.status;
                    newbuttonThree.style.backgroundColor = "white";
                    console.log(myLibrary);
                  
                }
                }
                newbuttonThree.addEventListener('mouseover', function() {
                  if (newbuttonThree.style.backgroundColor === "rgb(46, 177, 86)"){
                    newbuttonThree.style.backgroundColor = "white";
                  } else if (newbuttonThree.style.backgroundColor === "white"){
                    newbuttonThree.style.backgroundColor = "rgb(46, 177, 86)";
                  }
                });
                newbuttonThree.addEventListener('mouseout', function(){
                  newbuttonThree.style.border = "none";
                  if(dsaveBook.status === "Not read yet"){
                  newbuttonThree.style.backgroundColor = "white";
                  } else if (dsaveBook.status === "Read"){
                    newbuttonThree.style.backgroundColor = "rgb(46, 177, 86)";
                  }
                })
                
                
                
                
            let newDivButtonTwo = document.createElement("button");
            newDivButtonTwo.className = "newDivButton";
            newDivButtonTwo.textContent = "	\u274c";
            newDivButtonTwo.style.height = "40px";
            newDivButtonTwo.style.width = "40px";
            newDivButtonTwo.style.fontSize = "20px"
            newDivButtonTwo.style.cursor = "pointer";
            newDivButtonTwo.style.color = "white";
            newDivButtonTwo.style.backgroundColor = "rgb(202, 40, 40)";
            newDivButtonTwo.style.borderStyle ="none";
            newDivButtonTwo.style.marginRight = "2px";
            newContainerButt.appendChild(newDivButtonTwo);
            newDivButtonTwo.onclick= function(){
                containerInfo.remove();
              let indexDiv =  myLibrary.indexOf(dsaveBook)
               myLibrary.splice(indexDiv, 1);
            } 
           newDivButtonTwo.addEventListener('mouseover', function() {
            newDivButtonTwo.style.backgroundColor = "rgb(153, 31, 31)";
            
          
          })
          newDivButtonTwo.addEventListener('mouseout', function() {
            newDivButtonTwo.style.backgroundColor = "rgb(202, 40, 40)";
            
          
          })
        }}