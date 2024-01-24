const numbers=[1,3,2,6,4,8];
// const isEven=function (number){
//     return number%2===0;
// }
const even_num =numbers.filter((number)=>{
    return number%2===0;
});
console.log(even_num);

