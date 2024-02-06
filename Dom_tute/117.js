const ul = document.querySelector(".todo-list");

const li = document.createElement("li");
li.textContent = "new todo";

// // Check if append method is available
// if (ul.append) {
//   ul.append(li);
// } else {
//   // Fallback for browsers that do not support append
  

const referenceNode = document.querySelector(".first-todo");
ul.replaceChild(li,referenceNode);

//   ul.insertBefore(li, referenceNode);
// }
