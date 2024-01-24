const person = {
    "name":"Ishaan",
    "age":21,
    "hobbies":["guitar","sleeping","listening"]
};
console.log(person);
//access
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);



person["gender"] = "male";
// console.log(person);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["gender"]);