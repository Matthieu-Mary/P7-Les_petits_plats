let filteredRecipes = [...recipes];
let filteredRecipesBySearch;
let filteredRecipesByTags;


// Bind searchbar with the filters list
function updatedRecipesBySearch(filteredRecipesBySearch) {
  filteredRecipesByTags = filteredRecipesBySearch;
  filteredRecipes = filteredRecipesByTags
}

function updatedRecipesByTags(filteredRecipesByTags) {
  filteredRecipesBySearch = filteredRecipesByTags;
  filteredRecipes = filteredRecipesBySearch;
}


// FIRST RENDER
function initRecipes() {
  createCard(recipes);
  createDropdownList(recipes);
}
initRecipes();

