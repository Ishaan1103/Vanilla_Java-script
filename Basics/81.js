function hello(){
    console.log("Hello World");
}

console.log(hello.prototype);
//proto is present in it funstion


// const hello = {Key : "value1"};
// if(hello.prototype){
//     console.log("Prototype is present");
// }
// else{
//     console.log("Prototype is not present");
// }




hello.prototype.abc ="abc";

console.log(hello.prototype);