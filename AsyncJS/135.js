function fried(){
const bucket = ['vegetable', 'rice'];
return new Promise((resolve, reject) => {
    if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice");
    }
    else {
        reject("Could'nt do it");
    }
})
}

fried().then((data) => {
    console.log("let eat", data);
}, (error) => { console.log(error) });
