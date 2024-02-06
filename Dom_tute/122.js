const fbutton = document.querySelectorAll(".my-buttons button");
// console.log(fbutton);
// for(let button of fbutton){
// button.addEventListener("click",function (){
//     console.log(this.textContent);
// });
// }
// for(let i=0;i<fbutton.length;i++){
// fbutton[i].addEventListener("click",function(){
//     console.log(this.textContent);
// });
// }
fbutton.forEach(function(button) {
    button.addEventListener("click",function(){
        console.log(this);
    });
});
