const generateBoard = function (queenA, queenB) {
  let bigbox = [];
  let smallbox = [];

  for (let i = 0; i < 8; i++) {
    smallbox = [];
    for (let j = 0; j < 8; j++) {
      if (
        (queenA[0] === i && queenA[1] === j) ||
        (queenB[0] === i && queenB[1] === j)
      ) {
        smallbox.push(1);
      } else {
        smallbox.push(0);
      }
    }
    bigbox.push(smallbox);
  }
  return bigbox;
};




let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);


//output
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];
// true;
