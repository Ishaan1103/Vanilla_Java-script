// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);

// // xhr.onreadystatechange = function(){
// //     if(xhr.readyState === 4){
// //         const response = xhr.response;
// //         const data = JSON.parse(response);
// //         console.log(data);
// //     }
// // }
// xhr.onload = function () {
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }
// xhr.send();


const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";

xhr.open("GET",url);
xhr.onload= function(){
    const response =xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}
xhr.send();