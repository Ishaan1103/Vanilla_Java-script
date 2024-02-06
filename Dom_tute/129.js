const todoform=document.querySelector(".form-todo");
const input=document.querySelector(".form-todo input[type='text']");
const todolist = document.querySelector(".todo-list");
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodotext = input.value;
    const newli =document.createElement("li");
    const newliinnerHTML=   `
    <span class="text">${newtodotext}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
  `;
  newli.innerHTML=newliinnerHTML;
  todolist.append(newli);
  input.value="";

});
todolist.addEventListener("click",(e)=>{
if(e.target.classList.contains("remove")){
    const targetedLi=e.target.parentNode.parentNode;
    targetedLi.remove();
}
if(e.target.classList.contains("done")){

    const lispan=e.target.parentNode.previousElementSibling;
    lispan.style.textDecoration="line-through";
}
});