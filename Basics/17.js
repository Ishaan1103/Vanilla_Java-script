let winning_num=19;
let Userguess = +prompt("Guess a number");
// console.log(Userguess);
// console.log(typeof Userguess,Userguess);
if(Userguess === winning_num){
console.log("Your guess is right");
}
else{
    if(Userguess<winning_num){
        console.log("Too Low!!!");
    }
    else{
        console.log("Too High!!");
    }
}