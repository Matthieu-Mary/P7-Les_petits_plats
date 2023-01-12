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
  } else if (e.target.value.length === 0) {
    if(selectedFiltersContainer.childElementCount === 0) {
      filteredRecipesByTags = [...recipes];
      createCard(recipes);
      createDropdownList(recipes);
    } else {
      filteredRecipesBySearch = [...recipes];
      createCard(filteredRecipesByTags);
      createDropdownList(filteredRecipesByTags);
    }
  } else { //input value length egual to 1 or 2
    cardContainer.style.display = "grid";
    createCard(filteredRecipesByTags);
    createDropdownList(filteredRecipesByTags);
  }
}
