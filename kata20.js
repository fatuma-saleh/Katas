let prompt = require("prompt-sync");
let count  = 1;
let answer
// code below (replace this example)
let  theRandomNumber = Math.floor(Math.random() * 20) + 1;
console.log(theRandomNumber)
while(count <= 3)
  {
  answer = prompt("Guess a number: ");
  if(answer < theRandomNumber){
    console.log("Too Low")
    count+=1;
  }else if(answer > theRandomNumber){
    console.log("Too High")
    count+=1;
}
}
  

if(theRandomNumber ===answer){
  console.log(`You are right!!: You took ${count} attempts`);

}