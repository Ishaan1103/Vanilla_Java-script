//promise

const bucket = ['vegetable', 'rice'];
const fried = new Promise((resolve, reject) => {
    if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice");
    }
    else {
        reject("Could'nt do it");
    }
})


//produce


//consume
//how to consume

fried.then((data) => {
    console.log("let eat", data);
}, (error) => { console.log(error) });