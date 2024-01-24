const app=()=>{
    const hello=()=>{
    console.log("hello ");
    }
    const addtwo=(num1,num2)=>{
        return num1+num2;
    }
    console.log("inside app");
    hello();
    console.log(addtwo(2,3));
}
app();