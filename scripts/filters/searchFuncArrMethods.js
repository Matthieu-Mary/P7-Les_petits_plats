function searchWithArrMethods(searchedRecipe, searchResult) {
    searchResult = filteredRecipes.filter(
        (recipe) =>
          recipe.name.toLowerCase().trim().includes(searchedRecipe) ||
          recipe.description.toLowerCase().trim().includes(searchedRecipe) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().trim().includes(searchedRecipe)
          )
      );
    return searchResult
}