const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            console.log("went wrong");
        }
    })
    .then(data => {
        console.log(data); // You can do something with the data here
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
