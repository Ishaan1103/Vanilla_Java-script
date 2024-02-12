const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET",url);
xhr.onload=()=>{
    if(xhr.status >= 200 && xhr.status <300 ){
    const data = JSON.parse(xhr.response);
    const id = data[3].id;
    const xhr2 = new XMLHttpRequest();
    const url2 = `${url}/${id}`;
    xhr2.open("GET",url2);
    xhr2.onload = ()=>{
       const data2 =  JSON.parse(xhr2.response);
       console.log(data2);
    }
    xhr2.send();
    }
    else{
        console.log("wrong address");
    }
}

xhr.onerror =()=>{
    console.log("Net on kar");
}

xhr.send();