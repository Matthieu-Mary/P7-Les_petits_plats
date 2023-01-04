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
}