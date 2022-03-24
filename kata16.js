const makeCase = function(input, Case) {
  // Put your solution here
  let output = "";
  if (!Array.isArray(Case)) {
    switch (Case) {
    case "camel":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += input[i + 1].toUpperCase();
          i++;
        } else {
          output = output + input[i];
        }
      }
      return output;
      

    case "pascal":
      output = input[0].toUpperCase();
      for (let i = 1; i < input.length; i++) {
        if (input[i] === " ") {
          output += input[i + 1].toUpperCase();
          i++;
        } else {
          output = output + input[i];
        }
      }
      return output;
      
    case "snake":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += "_";
        } else {
          output = output + input[i];
        }
      }
      return output;
      
    case "kebab":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += "-";
        } else {
          output = output + input[i];
        }
      }
      return output;
      
    case "title":
      output = input[0].toUpperCase();
      for (let i = 1; i < input.length; i++) {
        if (input[i] === " ") {
          output = output + " " + input[i + 1].toUpperCase();
          i++;
        } else {
          output = output + input[i];
        }
      }
      return output;
      

    case "vowel":
      for (let i = 0; i < input.length; i++) {
        if (
          input[i] === "a" ||
          input[i] === "e" ||
          input[i] === "i" ||
          input[i] === "o" ||
          input[i] === "u"
        ) {
          output += input[i].toUpperCase();
        } else {
          output = output + input[i];
        }
      }
      return output;
     

    case "consonant":
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== "a" && input[i] !== "e" &&
          input[i] !== "i" &&
          input[i] !== "o" &&
          input[i] !== "u") {
          output += input[i].toUpperCase();
        } else {
          output = output + input[i];
        }
      }
      return output;
     
    default:
      break;
    }
  } else if (Case[0] === "upper" && Case[1] === "snake") {
    output += input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (input[i] === " ") {
        output = output + "_" + input[i + 1].toUpperCase();
        i++;
      } else {
        output = output + input[i];
      }
    }
    return output;
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

//expected output
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING
