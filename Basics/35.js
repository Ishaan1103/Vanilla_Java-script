const myArray =["Value1","Value2","Value3","Value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log(myvar1);
// console.log(myvar2);

let [myvar1, myvar2,...MynewArray] = myArray;
// let MynewArray = myArray.slice(2);

console.log(myvar1);
console.log(myvar2);

console.log(MynewArray);