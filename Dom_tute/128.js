const grandparent=document.querySelector(".grandparent");



grandparent.addEventListener("click",(e)=>{
    console.log(e.target.textContent);
})






// const parent=document.querySelector(".parent");
// const child=document.querySelector(".child");
// child.addEventListener("click",()=>{
// console.log("Captured child");
// },true);
// parent.addEventListener("click",()=>{
// console.log("Captured parent");
// },true);
// grandparent.addEventListener("click",()=>{
// console.log("Captured grandparent");
// },true);
// document.body.addEventListener("click",()=>{
// console.log("Captured body");
// },true);


// child.addEventListener("click",()=>{
// console.log("You clicked child");
// });
// parent.addEventListener("click",()=>{
// console.log("You clicked parent");
// });
// grandparent.addEventListener("click",()=>{
// console.log("You clicked grandparent");
// });
// document.body.addEventListener("click",()=>{
// console.log("You clicked body");
// });