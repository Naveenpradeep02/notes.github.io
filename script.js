const notes_Container = document.querySelector('.note_Container');
const create_Btn = document.querySelector('.btn');
let notes = document.querySelectorAll('.inputBox');

function showNotes() {
    notes_Container.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notes_Container.innerHTML);
}

create_Btn.addEventListener('click', () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputBox";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notes_Container.appendChild(inputBox).appendChild(img);

    inputBox.onkeyup = updateStorage;
})

notes_Container.addEventListener('click', function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(notes => {
            notes.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault()
    }
})