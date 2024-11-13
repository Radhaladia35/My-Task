const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")
addBtn.addEventListener( 'click',function(){
    addNote() 
});
 const addNote =()=> {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
    <div class="toolbar">
     <i class="edit far fa-edit"></i>
        <i class="trash fa-solid fa-trash"></i>
      </div>
      <textarea></textarea>`;
     note.querySelector(".trash").addEventListener('click',function(){
        note.remove()
      })

      note.querySelector(".edit").addEventListener('click', function () {
       if(note.lastChild.disabled){
         note.lastChild.disabled=false;
         note.lastChild.focus();
}
else{
   note.lastChild.disabled=true;
}
      })
      main.appendChild(note);
   }
   
