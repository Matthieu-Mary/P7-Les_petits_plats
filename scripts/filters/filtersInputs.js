// Get all input filters
const inputFilters = document.querySelectorAll(".filter input");

let allIngredientsByInput = getIngredients(recipes);
let allAppliancesByInput = getAppliances(recipes);
let allUstensilsByInput = getUstensils(recipes);

// Functions for filters Inputs
function filterIngredientsByInput(e) {
  const inputValue = e.target.value;
  if (inputValue.length !== 0) {
    filtersLists[0].innerHTML = "";
    let ingredients = getIngredients(filteredRecipesBySearch);
    allIngredientsByInput.splice(0, allIngredientsByInput.length);
    for (const ingredient of ingredients) {
      if (ingredient.toLowerCase().includes(inputValue.toLowerCase())) {
        allIngredientsByInput.push(ingredient);
        createIngredientsDropdown(allIngredientsByInput);
      }
    }
  } else {
    allIngredientsByInput = getIngredients(filteredRecipesBySearch);
    console.log(allIngredientsByInput)
    createIngredientsDropdown(allIngredientsByInput);
  }
}

function filterApplianceByInput(e) {
  const inputValue = e.target.value.toLowerCase();
  filtersLists[1].innerHTML = "";
  let appliances = getAppliances(filteredRecipesBySearch);
  allAppliancesByInput.splice(0, allAppliancesByInput.length);
  for (const appliance of appliances) {
    if (appliance.toLowerCase().includes(inputValue.toLowerCase())) {
      allAppliancesByInput.push(appliance);
      createAppliancesDropdown(allAppliancesByInput);
    }
  }
}

function filterUstensilsByInput(e) {
  const inputValue = e.target.value;
  filtersLists[2].innerHTML = "";
  let ustensils = getUstensils(filteredRecipesBySearch);
  allUstensilsByInput.splice(0, allUstensilsByInput.length);
  filtersLists[2].innerHTML = "";
  for (const ustensil of ustensils) {
    if (ustensil.toLowerCase().includes(inputValue.toLowerCase())) {
      allUstensilsByInput.push(ustensil);
      createUstensilsDropdown(allUstensilsByInput);
    }
  }
}
