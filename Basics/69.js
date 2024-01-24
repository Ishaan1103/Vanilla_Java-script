const obj={
    key:"value1",
    key2:"value2"
}
const obj2=Object.assign({},obj);
obj.key ="vale3";
console.log(obj);
console.log(obj2);
