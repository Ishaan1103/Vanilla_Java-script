// const obj={
//     name:"mokb",
//     about: function(){
//         console.log(`the obj name is ${this.name}`);
//     }
// }
// console.log(obj.about()); 
function personInfo(){
    console.log(`person name is ${this.name} and age is ${this.age}`);
}
const person1={
    name:"ishaan",
    age:21,
    about:personInfo
}
person1.about();