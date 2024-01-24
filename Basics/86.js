class CreateUser{
    constructor(firstName,LastName,email,age,address){
        console.log("constructor called");
        this.firstName = firstName;
        this.LastName = LastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }


    about(){
        return `${this.firstName} is ${this.age} years old`;
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return "la la la";
    }
}



const user1 = new CreateUser('ishaan','rana','ishaanrana@gmail.com',21,'NIT Faridabad');


