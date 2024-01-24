function createuser(firstname,age){
    this.firstname=firstname;
    this.age=age;
}
createuser.prototype.about =function(){
    console.log(this.firstname,this.age);
}
const user1 = new createuser('ishaan',6);


user1.about();
