const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "six";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "seven";
//                             heading7.style.color = "brown";
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000);
function changeText(element, text, color, time, onsuccess) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onsuccess) {
                onsuccess();
            }
        }
        else {
            console.log("it does not exist");
        }
    }, time)
}
changeText(heading1, "one", "violet", 2000,()=>{
    changeText(heading2, "two", "green", 1000);
});