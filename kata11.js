// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function(radius) {
  // Code here!
  let volume = (4 / 3) * (PI) * Math.pow(radius,3);
  return volume;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  let cVolume = (1 / 3) * PI * Math.pow(radius,2) * height;
  return cVolume;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  // Probably here too!
  let pvolume = height * width * depth;
  return pvolume;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  // Code here? Yup!
  let tVolume = 0;
  for (let solid of solids) {
    if (solid.type === 'sphere') {
      tVolume +=  sphereVolume(solid.radius);
    }
   else if (solid.type === 'cone') {
      tVolume +=  coneVolume(solid.radius,solid.height);
    }
  else if  (solid.type === 'prism') {
      tVolume +=   prismVolume(solid.height,solid.width,solid.depth);
    }
  }
  return tVolume;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
//expected output
// true
// true
// true
// true