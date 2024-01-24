// function singhappy(){
//     console.log("Happy birthday");
// }
// function sumtonumber(number1,number2){
//    return number1+number2;
// }
// const returnvalue =sumtonumber(3,4);
// console.log(returnvalue);


// function isEven(num){
// if(num%2===0){
// return true;
// }
// return false;
// }

// console.log(isEven(5));

function findtarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const array=[1,3,5,9,11]
const target = +prompt();
const ans =findtarget(array,target);
console.log(ans);