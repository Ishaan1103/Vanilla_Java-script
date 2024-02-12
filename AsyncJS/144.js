const url = "https://jsonplaceholder.typicode.com/posts";
async function getPost(){

   const response = await fetch(url);
   if(!response.ok){
    throw new Error("Something went wrong");
   }
   const data = await response.json();
   return data;
   
}
getPost()
.then((mydata)=>{
console.log(mydata);
})
.catch(error =>{
    console.log("inside catch",error)
})

// fetch(url)
//     .then(response=>{
//         return response.json();
//     })
//     .then(data=>{
//         console.log(data);
//     })