let arr1 = ["item1","item2"];
// let arr2 = arr1.slice(0).concat(["item3"],["item4"]);

// let arr2 = [].concat(arr1,["item3","item4"]);
let onemorearray=["item3","item4"];
let arr2 = [...arr1, ...onemorearray];
console.log(arr2);
console.log(arr1===arr2);