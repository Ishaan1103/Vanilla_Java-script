console.log("script start!!");
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);
allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let num=0;
        for(let i=0;i<=100000000;i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent, num);
    });
})
let out=0;
for(let i=0;i<=10000000;i++){
out+=i;
}
console.log("Value of outerow",out);
console.log("script end!!");