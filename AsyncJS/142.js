const url = "https://jsonplaceholder.typicode.com/posts";
function sendRequest(method, url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(new Error("Something went wrong"));
            }
        }
        xhr.onerror = function() {
            reject(new Error("Something went wrong"));
        }
        xhr.send();
    });
}

sendRequest("GET", url)
    .then(response => {
        const data = JSON.parse(response);
        return data;
    })
    .then(data=>{
        console.log(data);
    })
