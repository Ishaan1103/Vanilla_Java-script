const numbers=[1,2,3,4,5];

const sum=numbers.reduce((accumulator,currentVal)=>{
   return accumulator+currentVal; 
});

console.log(sum);