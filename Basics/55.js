function myfunc(){
    function hello(){
        console.log("my fun");
    }
    return hello;
}
const ans = myfunc();
ans();