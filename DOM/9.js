function hello(x){
    const a = "Var1";
    const b = "Var2";
    return function(){
        console.log(a,b,x);
    }
}
const ans = hello("args");
ans();