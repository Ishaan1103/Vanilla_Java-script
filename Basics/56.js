const numbers=[4,2,5,8];

// function myfunc(number,index){
// console.log(`index is ${index} number is ${number}`);

// }


// numbers.forEach(myfunc);
numbers.forEach(function(number,index){
    console.log(`The Index is ${index} and number is ${number*2}`);
})