//spread operator

// const array1=[1,2,3];
// const array2=[4,5,6];

//  const newArray=[...array1,...array2];

// const newArray=[..."abc"];
// console.log(newArray);



const obj1={
key1:"value1",
key2:"value2",
};

const obj2={
key3: "value3",
key4:"value4",
};
const newobj={...obj1,...obj2,key69:"value69"};

console.log(newobj);