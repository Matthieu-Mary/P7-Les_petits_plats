function searchWithNativeLoops(searchedRecipe, searchResult) {
  for (let i = 0; i < allRecipes.length; i++) {
      const recipe = allRecipes[i];
      let includeRecipe = false;
  
      if (recipe.name.toLowerCase().trim().includes(searchedRecipe)) {
        includeRecipe = true;
      } else if (recipe.description.toLowerCase().trim().includes(searchedRecipe)) {
        includeRecipe = true;
      } else {
        for (let j = 0; j < recipe.ingredients.length; j++) {
          const ingredient = recipe.ingredients[j];
          if (ingredient.ingredient.toLowerCase().trim().includes(searchedRecipe)) {
            includeRecipe = true;
            break;
          }
        }
      }
      if (includeRecipe) {
        searchResult.push(recipe);
      }
    }     
    // Display message if no recipes founded
    if (searchResult.length === 0) {
    const failMessage = document.createElement("h3");
    cardContainer.style.display = "flex";
    failMessage.classList.add("fail-message");
    failMessage.textContent = `Aucune recette ne correspond à votre critère… vous pouvez
      chercher "tarte aux pommes",  "poisson", etc`;
    cardContainer.appendChild(failMessage);
  } else {
    cardContainer.style.display = "grid";
  }
  createCard(searchResult);
  createDropdownList(searchResult);
}