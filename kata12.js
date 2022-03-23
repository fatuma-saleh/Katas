const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  for(let i = 0;i < recipes.length;i++ ){
      let  recipe = recipes[i].ingredients;
      function ingredientsCheck(bakery,recipe){
      for(let j = 0;j < bakery.length; j++){
          if(recipe.includes(bakery[j])){
              return true;
             }
          }
      }
      if(ingredientsCheck(bakeryA,recipe) && ingredientsCheck(bakeryB,recipe)){
          return(recipes[i].name);
           }
      }
  };
  

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

//Expected output

// Persian Cheesecake
// Nima's Famous Dijon Raisins