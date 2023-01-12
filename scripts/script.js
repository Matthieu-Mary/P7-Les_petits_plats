let filteredRecipesBySearch = [...recipes];
let filteredRecipesByTags = [...recipes];
// let filteredRecipes = [...recipes];

// FIRST RENDER
function initRecipes() {
  createCard(recipes);
  createDropdownList(recipes);
}
initRecipes();

