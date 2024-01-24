// // const person={
// //     name:"ishaan",
// //     age:21
// // }

// const person = new Map();
// person.set('firstname','ishaan');
// person.set('age',21);
// person.set(1,'one');
// console.log(person);
// for(let keys of person.keys()){
//     console.log(keys);
// }

// for(let [key, value] of person){
// // console.log(Array.isArray(key));
// console.log(key, value);
// }
// const person=new Map([["Name","ishaan"],["age","21"]]);
// console.log(person);

const person1={
    id:1,
    name:"ishaan"
}
const userinfo = new Map();
userinfo.set(person1,{age:8,gender:"male"});
// console.log(userinfo);
console.log(person1.id);
console.log(userinfo.get(person1).gender);