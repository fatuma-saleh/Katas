const camelCase = function(input) {
  let temp = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      temp = temp + input[i + 1].toUpperCase();
      i++;
    } else {
      temp = temp + input[i];
    }
  }
  return temp;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious