function createUser(firstName,lastName,email,age,address){
const user={};
user.firstname =firstName;
user.lastName = lastName;
user.email = email;
user.age = age;
user.address = address;
user.about = function(){
    return `${this.firstName} is ${this.age} year old.`;
};
user.is18 = function(){
    return this.age >=18;
}
return user;
}

const user1 = createUser('ishaan','rana','ishaanrana@gmail.com','18','NIT Faridabad');
console.log(user1);
const is18 = user1.is18();
console.log(is18);
