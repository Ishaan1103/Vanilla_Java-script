// function myfunction(power){
   
// return function(number){
//     return number ** power;
//     }
// }

// const square= myfunction(2);
// const ans = square(4);
// console.log(ans);

const myfunction= power => number => number**power


const square= myfunction(2);
const ans1 = square(4);
console.log(ans1);

const cube= myfunction(3);
const ans2 = cube(3);
console.log(ans2);