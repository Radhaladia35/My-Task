const inputBox = document.querySelector('#inputBox');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');

const addToDo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("you must write somthing in your to do");
        return false;
    }

const li = document.createElement("li");
const p = document.createElement("p");
p.classList.add("para");
p.innerHTML = inputText;
li.appendChild(p);

const button =document.createElement("button");
button.innerText ="delete";
button.classList.add("button");
li.appendChild(button);
button.addEventListener('click',function(){
    console.log("hi");
li.firstChild.style.textDecoration='line-through';
    })

todoList.appendChild(li);
inputBox.value = "";
}


// const uptoDo=(e)=>{
//     // console.log(e.target.innerHTML);
// if (e.target.innerHTML==="delete"){

// }
// }
addBtn.addEventListener('click', addToDo);


