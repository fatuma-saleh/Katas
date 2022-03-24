const makeCase = function (input, Case) {
  // Put your solution here
  let output = "";
  switch (Case) {
    case "camel":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += input[i + 1].toUpperCase();
          i++
        } else {
          output = output + input[i];
        }
      }
      return output;
      break;
    default:
      break;
  }
};

console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));

//expected output
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING
