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

var obj = {icing: "5 licks"}

expect(updateObjectWithKeyAndValue(recipe, vanilla, "1 teaspoon")).toMatch({
  vanilla: "1 teaspoon",
  icing: "5 licks"
})

expect(obj).toMatch({
  vanilla: "1 teaspoon",
  icing: "5 licks"
})

function deleteFromObjectByKey(recipe, "icing")
