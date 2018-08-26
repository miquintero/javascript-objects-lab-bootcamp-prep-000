var recipe = {
  flour: "1 cup",
  corn: "1 husk",
  saltL: "2 tablespoons",
  sugar: "half a cup",
}

function updateObjectWithKeyAndValue(recipe, ingredient, quantity){
  recipe = [ingredient]: quantity
  return Object.assign({}, ingredient, quantity)
}

const recipe = {vanilla: "1 teaspoon"}

expect(updateObjectWithKeyAndValue(recipe, vanilla, "1 teaspoon"))
