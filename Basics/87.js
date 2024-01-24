class Animal{
    constructor(name,age){
    this.name = name;
    this.age=age;
    }

eat(){
    return `${this.name} is eating`;
}
isCute(){
    return true;
}
}
// const Animal1 =new Animal("tem",21);
// console.log(Animal1);

// class Dog{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return  `${this.name}is eating`;
//     }
// }


class Dog extends Animal{

}

const tommy = new Dog("Tim",3);
console.log(tommy);