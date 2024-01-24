// function myapp(a){
//     console.log(a);
//     console.log("hello");
// }
// myapp(2);
function myfun2(){
    console.log("inside my fun2");
}
function myfun(callback){
callback();
}
myfun(myfun2);