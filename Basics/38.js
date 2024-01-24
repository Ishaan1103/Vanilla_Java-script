const person = {
    "name":"Ishaan",
    "age":21,
    "person hobbies":["guitar","sleeping","listening"]
};

// for in loop
// obj .keys

// for(let key in person){
// console.log(`${key} : ${person[key]}`);
// console.log(key ,":", person[key]);
// }



// console.log(typeof (Object.keys(person)));
// console.log(Array.isArray(Object.keys(person)));


for(let key of Object.keys(person)){
console.log(person[key]);
}