// <----- FILTER RECIPES WITH SEARCH INPUT ----->
const search = document.querySelector("#search input");
search.addEventListener("input", filterRecipesBySearchInput);
const dropdownLists = document.querySelectorAll(".filter-list");

function filterRecipesBySearchInput(e) {
  //Reset DOM cards and filters before initialisation with new data
  cardContainer.innerHTML = "";
  dropdownLists.forEach((dropdown) => (dropdown.innerHTML = ""));
  const searchedRecipe = e.target.value.toLowerCase().trim();

  let searchResult = [...allRecipes];

  if (e.target.value.length >= 3) {
    searchWithArrMethods(searchedRecipe, searchResult)
  } else {
    cardContainer.style.display = "grid";
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
  
