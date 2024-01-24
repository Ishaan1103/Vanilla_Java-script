// function hello(){
//     console.log("Hello world");
// }
// hello.call();


function about(hobbies){
    console.log(this.name,this.age,hobbies);
}
const user1={
    name:"ishaan",
    age:21,

}


const user2={
    name:"lausgc",
    age:20
}
about.call(user1,"sleeping");
about.apply(user1,["sleeping"]);


const func=about.bind(user1,"sleeping");
func();
