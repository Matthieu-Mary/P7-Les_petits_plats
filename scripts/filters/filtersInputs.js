// Get all input filters
const inputFilters = document.querySelectorAll(".filter input");

let allIngredientsByInput = getIngredients(recipes);
let allAppliancesByInput = getAppliances(recipes);
let allUstensilsByInput = getUstensils(recipes);

// Functions for filters Inputs
function filterIngredientsByInput(e) {
  const inputValue = e.target.value;
  let ingredients;
  if (inputValue.length !== 0) {
    filtersLists[0].innerHTML = "";
    if (
      search.value.length > 2 &&
      selectedFiltersContainer.childElementCount === 0
    ) {
      ingredients = getIngredients(filteredRecipesBySearch);
    } else if (selectedFiltersContainer.childElementCount !== 0) {
      ingredients = getIngredients(filteredRecipesByTags);
    } else {
      ingredients = getIngredients(recipes);
    }
    allIngredientsByInput.splice(0, allIngredientsByInput.length);
    for (const ingredient of ingredients) {
      if (ingredient.toLowerCase().includes(inputValue.toLowerCase())) {
        allIngredientsByInput.push(ingredient);
        createIngredientsDropdown(allIngredientsByInput);
      }
    }
  } else {
    allIngredientsByInput = getIngredients(filteredRecipesBySearch);
    createIngredientsDropdown(allIngredientsByInput);
  }
}

function filterApplianceByInput(e) {
  const inputValue = e.target.value;
  let appliances;
  if (inputValue.length !== 0) {
    filtersLists[1].innerHTML = "";
    if (search.value.length > 2) {
      appliances = getAppliances(filteredRecipesBySearch);
    } else if (selectedFiltersContainer.childElementCount !== 0) {
      appliances = getAppliances(filteredRecipesByTags);
    } else {
      appliances = getAppliances(recipes);
    }
    allAppliancesByInput.splice(0, allAppliancesByInput.length);
    for (const appliance of appliances) {
      if (appliance.toLowerCase().includes(inputValue.toLowerCase())) {
        allAppliancesByInput.push(appliance);
        createAppliancesDropdown(allAppliancesByInput);
      }
    }
  } else {
    allAppliancesByInput = getAppliances(filteredRecipesBySearch);
    createAppliancesDropdown(allAppliancesByInput);
  }
}

function filterUstensilsByInput(e) {
  const inputValue = e.target.value;
  let ustensils;
  if (inputValue.length !== 0) {
    filtersLists[2].innerHTML = "";
    if (search.value.length > 2) {
      ustensils = getUstensils(filteredRecipesBySearch);
    } else if (selectedFiltersContainer.childElementCount !== 0) {
      ustensils = getUstensils(filteredRecipesByTags);
    } else {
      ustensils = getUstensils(recipes);
    }
    allUstensilsByInput.splice(0, allUstensilsByInput.length);
    filtersLists[2].innerHTML = "";
    for (const ustensil of ustensils) {
      if (ustensil.toLowerCase().includes(inputValue.toLowerCase())) {
        allUstensilsByInput.push(ustensil);
        createUstensilsDropdown(allUstensilsByInput);
      }
    }
  } else {
    allUstensilsByInput = getUstensils(filteredRecipesBySearch);
    createUstensilsDropdown(allUstensilsByInput);
  }
}
