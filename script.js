const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-btn");
let notes = document.querySelectorAll(".notes-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();



function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

const clearAll = document.querySelector(".clear-all");   // clearing all.
clearAll.addEventListener("click", () => {
    notesContainer.innerHTML = "";
    updateStorage();
})

createBtn.addEventListener("click", () => {
    let notesBox = document.createElement("p");
    let image = document.createElement("img");

    notesBox.className = "notes-box";
    notesBox.setAttribute("contenteditable", "true");
    
    image.src = "./images/delete.png";

    image.setAttribute("contentuneditable", "true");
    
    notesContainer.prepend(notesBox)        // to add child in begining to list-of-child
    notesBox.append(image);                // this to append image. prepend & append can't be use in same line.
})


notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P") {
        let notes = document.querySelectorAll(".notes-box");

        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();

    }

})