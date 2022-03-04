const  repeatNumbers = function(data) {
  const arr = [];
  let temp = "";
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      temp = temp + data[i][0];
    }
    arr.push(temp);
    temp = ""
  }
  
  return arr.join(",");
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));