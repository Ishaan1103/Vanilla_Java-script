function printFullname(firstname,lastname){
    function printname(){
        console.log(firstname,lastname);
    }
    return printname;
}
const ans= printFullname("Ishaan","rana");
ans();