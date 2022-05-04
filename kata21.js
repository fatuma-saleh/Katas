//implement a function biggestFollower() which returns the name of the individual who follows the most people.

const biggestFollower = function (data) {
  let max = 0,
    temp = "";
  for (const persons in data) {
    // for(const p in data[persons]){
    //console.log(data[persons].name)
    if (data[persons].follows.length > max) {
      max = data[persons].follows.length;
      temp = data[persons].name;
    }
    //}
  }

  return temp;
};

//Implement mostPopular() which returns the name of the most popular (most followed) individual.

const mostPopular = function (data) {
  let countObj = {},
    max = 0,
    famous = "";
  for (const persons in data) {
    let p = data[persons];
    for (let follow of p.follows) {
      if (countObj[follow]) {
        countObj[follow]++;
      } else {
        countObj[follow] = 1;
      }
    }
  }
  for (let mostPop in countObj) {
    if (countObj[mostPop] > max) {
      max = countObj[mostPop];
      famous = mostPop;
    }
  }

  return famous;
};

//Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.
const printAll = function (data) {
  let individualDetails = []
  for (const persons in data) {
    individualDetails.push(data[persons].name)
    individualDetails.push(data[persons].follows)
    
    
  }
  return individualDetails
};

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};

console.log(biggestFollower(data));
console.log(mostPopular(data));
console.log(printAll(data))
