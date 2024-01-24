const myVar="value1";
function mpApp(){
    function myFunc(){
        const myVar ="value59";
        console.log("Inside myFunc",myVar);
    }
    const myfunc2 = function() {}
    const myfunc3 = () => {}
    console.log(myVar);
    myFunc();
}

mpApp();