const num=new Set([1,2,3,3]);
num.add(5);
//can add anythin 
//and also unique.
// console.log(num);
// if(num.has(1)){
//     console.log("1 is present");
// }
let ind=0
for(let n of num){
console.log(n);
ind++;
}
console.log(ind);