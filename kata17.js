const urlDecode = function (text) {
  // Put your solution here
  const text_with_space = text.replaceAll("%20", "  ");
  let key_value_pair = text_with_space.split("=");
  let another_key_pair;
  let new_Obj = {};

  another_key_pair = key_value_pair[1].split("&");
  new_Obj[key_value_pair[0]] = another_key_pair[0];
  new_Obj[another_key_pair[1]] = key_value_pair[2];
  //console.log("**",another_key_pair)
  if (new_Obj[another_key_pair[1]] === undefined) {
    delete new_Obj[another_key_pair[1]];
  }
  return new_Obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));

//Expected output
// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
