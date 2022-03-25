const squareCode = function(message) {
  // Put your solution here
 
  const  newString  = message.split(" ").join("")
  const stringLength =newString.length
 const count =  (Math.ceil(Math.sqrt(stringLength)))
 let result ="";
//  console.log("*",newString)
//  console.log("*",count)
 for(let i = 0;i<count;i++){
   for(let j=i;j<stringLength;j+=count){
     result  = result + newString[j] 
   }
   result=result + " "
 }
 return result
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

//Expected output
// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau