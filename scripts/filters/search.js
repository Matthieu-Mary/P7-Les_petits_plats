// <----- FILTER RECIPES WITH SEARCH INPUT ----->
const search = document.querySelector("#search input");
search.addEventListener("input", filterRecipesBySearchInput);
const dropdownLists = document.querySelectorAll(".filter-list");

function filterRecipesBySearchInput(e) {
  //Reset DOM cards and filters before initialisation with new data
  cardContainer.innerHTML = "";
  dropdownLists.forEach((dropdown) => (dropdown.innerHTML = ""));
  const searchedRecipe = e.target.value.toLowerCase().trim();

  // Verifiy if a tag is selected before starting search !
  if(filteredRecipesByTags.length !== recipes.length) {
    filteredRecipesBySearch = filteredRecipesByTags;
  }
  
  if (e.target.value.length >= 3) {
    searchWithArrMethods(searchedRecipe);
  } else if (e.target.value.length === 0 && selectedFiltersContainer.childElementCount === 0) {
      createCard(recipes);
      createDropdownList(recipes);
  } else {
    cardContainer.style.display = "grid";
    createCard(filteredRecipesBySearch);
    createDropdownList(filteredRecipesBySearch);
  }
}
