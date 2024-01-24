const user1={
    name:"ishaan",
    age:8,
    about : function(){
        console.log(this.name,this.age);
    }
}


const myfunc = user1.about.bind(user1);

myfunc();