function searchWithArrMethods(searchedRecipe, searchResult) {
    searchResult = filteredRecipes.filter(
        (recipe) =>
          recipe.name.toLowerCase().trim().includes(searchedRecipe) ||
          recipe.description.toLowerCase().trim().includes(searchedRecipe) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().trim().includes(searchedRecipe)
          )
      );
      // Display message if no recipes founded
    if (searchResult.length === 0) {
      const failMessage = document.createElement("h3");
      cardContainer.style.display = "flex";
      failMessage.classList.add("fail-message");
      failMessage.textContent = `Aucune recette ne correspond à votre critère… vous pouvez
        chercher "tarte aux pommes",  "poisson", etc`;
      cardContainer.appendChild(failMessage);
    }
    createCard(searchResult);
    createDropdownList(searchResult);
    updatedRecipes(searchResult)
}