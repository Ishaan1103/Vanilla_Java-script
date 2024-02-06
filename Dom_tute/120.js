//intro to event
//2)
const btn=document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick=function(){
//     console.log("clicked");
// }
//3)
// function clickme(){
// console.log("u clicked me");
// }
// btn.addEventListener("click",function(){
//     console.log("clicked");
// });
btn.addEventListener("click",()=>{
    console.log("clicked");
});