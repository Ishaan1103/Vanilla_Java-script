// const numbers=[5,9,1200,410,3000];
// numbers.sort((a,b)=>{
//     return a-b;
// });
// console.log(numbers);




const pro=[
{pro_ID:1, productname:"p1",price:1},    
{pro_ID:2, productname:"p2",price:33},    
{pro_ID:3, productname:"p3",price:11},    
{pro_ID:4, productname:"p4",price:6}    
];

const sorted =pro.slice(0).sort((a,b)=>{
return a.price-b.price;
});
console.log(sorted);

