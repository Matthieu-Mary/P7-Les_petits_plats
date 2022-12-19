// <----- FILTER RECIPES WITH SEARCH INPUT ----->
const search = document.querySelector("#search input");
search.addEventListener("input", filterRecipesBySearchInput);
const dropdownLists = document.querySelectorAll(".filter-list");

function filterRecipesBySearchInput(e) {
  //Reset DOM cards and filters before initialisation with new data
  cardContainer.innerHTML = "";
  dropdownLists.forEach((dropdown) => (dropdown.innerHTML = ""));
  const searchedRecipe = e.target.value.toLowerCase().trim();

  let searchResult = allRecipes;
  // Start filtering by name, description and ingredients, only if value.length >= 3
  if (e.target.value.length >= 3) {
    searchResult = allRecipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().trim().includes(searchedRecipe) ||
        recipe.description.toLowerCase().trim().includes(searchedRecipe) ||
        recipe.ingredients.forEach((ingredient) =>
          ingredient.ingredient.toLowerCase().trim().includes(searchedRecipe)
        )
    );
    // Display message if no recipes founded
    if (searchResult.length === 0) {
      const failMessage = document.createElement("h3");
      failMessage.classList.add("fail-message");
      failMessage.textContent = `Aucune recette ne correspond à votre critère… vous pouvez
        chercher "tarte aux pommes",  "poisson", etc`;
      cardContainer.appendChild(failMessage);
    }
    createCard(searchResult);
    createDropdownList(searchResult);
    updatedRecipes(searchResult)
  } else {
    createCard(searchResult);
    createDropdownList(searchResult);
    updatedRecipes(searchResult)
  }
}

// Bind searchbar with the filters list
function updatedRecipes(searchResult) {
  filteredRecipes = searchResult;
  return filteredRecipes
  }
  
