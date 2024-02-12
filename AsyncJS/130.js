//sync js with single thread
// console.log("script started");
// for(let i=0;i<1000;i++){
// console.log("inside loop");
// }
// console.log("script ended");



//async

// console.log("script started");
// function hello(){
//     console.log("Hello world");
// }
// setTimeout(()=>{

// },1000);
// console.log("end");




console.log("script started");
const id=setTimeout(()=>{
    console.log("Hello world");
},0);
for(let i=0;i<100;i++){
console.log("...");
}
console.log(id);
clearTimeout(id);
console.log("end");