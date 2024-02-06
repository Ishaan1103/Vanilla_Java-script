const allbutton = document.querySelectorAll(".my-buttons button")
// console.log(allbutton);
for(let button of allbutton){
button.addEventListener("click",(e)=>{
    // console.log(e.target);
    e.target.style.backgroundColor="yellow";
});
}
