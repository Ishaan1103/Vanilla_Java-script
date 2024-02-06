// const firstbutton = document.querySelector("#one");
// firstbutton.addEventListener("click",function(e){
//     console.log(e);
// });


const allbutton = document.querySelectorAll(".my-buttons button");

for(let button of allbutton){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    });
}