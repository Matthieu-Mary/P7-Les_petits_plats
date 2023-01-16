let allRecipes = [...recipes]
let filteredRecipesBySearch = [...recipes];
let filteredRecipesByTags = [...recipes];

// FIRST RENDER
function initRecipes() {
  createCard(recipes);
  createDropdownList(recipes);
}
initRecipes();

