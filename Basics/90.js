class person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
    set fullname(fullname){
        const [firstname, lastname]= fullname.split(" ");
        this.firstname=firstname;
        this.lastname=lastname;

    }
}
    
    const perosn1=new person("ishaan","rana",5);
    // console.log(perosn1);
    // console.log(perosn1.fullname());
    // console.log(perosn1.fullname);


perosn1.fullname="Mohit Vashist";
console.log(perosn1.fullname);