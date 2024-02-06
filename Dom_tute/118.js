//static list vs live list


//static
// const listItem = document.querySelectorAll(".todo-list li");

//live
const ul = document.querySelector(".todo-list");
const listItem =ul.getElementsByTagName("li");

const sixthli = document.createElement("li");
sixthli.textContent="item 6";
// const ul=document.querySelector(".todo-list");
ul.append(sixthli);
console.log(listItem);
