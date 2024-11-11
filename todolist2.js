const inputBox = document.querySelector('#inputBox');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');
const addToDo =()=> {
    const inputText = inputBox.value.trim();
    if(inputText.length<=0){
        alert("you must write somthing in your to do")
 return false;
    }
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML=inputText;
    li.appendChild(p);
    
    
    // creating delete button
    const deleteBtn =document.createElement("button");
    deleteBtn.innerText ="delete";
    deleteBtn.classList.add("btn")
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click',function(){
 DeleteText()
    });
    const DeleteText =()=>
        function () 
        {
        todoList.style.textDecoration = 
        "line-through"; 
       }
    todoList.appendChild(li);
    inputBox.value="";
}
addBtn.addEventListener('click', addToDo);

