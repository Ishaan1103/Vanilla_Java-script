// function myfunc(a,b,...c){
// console.log(`a is ${a}`)
// console.log(`b is ${b}`)
// console.log(`c is ${c}`)
// }
// myfunc(3,4,5,6,7,7,8);

function myfun(...nums){
    let total = 0;
    for(let num of nums){
        total+=num;
    }
    return total;
} 
console.log(myfun(1,2,3,4,5,7,6,8,9));