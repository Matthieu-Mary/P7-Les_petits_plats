// Get all input filters
const inputFilters = document.querySelectorAll(".filter input");

let allIngredientsByInput = [];
let allAppliancesByInput = [];
let allUstensilsByInput = [];

// Functions for filters Inputs
function filterIngredientsByInput(e) {
  const inputValue = e.target.value;
  filtersLists[0].innerHTML = "";
  let ingredients = getIngredients(filteredRecipesByTags);
  recipes.splice(0, recipes.length);
  for (const ingredient of ingredients) {
    if (ingredient.toLowerCase().includes(inputValue.toLowerCase())) {
      recipes.push(ingredient);
      allIngredientsByInput = [...recipes];
      createIngredientsDropdown(recipes);
    }
  }
}

function filterApplianceByInput(e) {
  const inputValue = e.target.value.toLowerCase();
  filtersLists[1].innerHTML = "";
    let appliances = getAppliances(filteredRecipesByTags);
    recipes.splice(0, recipes.length);
    for (const appliance of appliances) {
      if (appliance.toLowerCase().includes(inputValue.toLowerCase())) {
        recipes.push(appliance);
        allAppliancesByInput = [...recipes];
        createAppliancesDropdown(recipes);
      }
    }
}

function filterUstensilsByInput(e) {
  const inputValue = e.target.value;
  filtersLists[2].innerHTML = "";
  let ustensils = getUstensils(filteredRecipesByTags);
  recipes.splice(0, recipes.length);
  filtersLists[2].innerHTML = "";
  for (const ustensil of ustensils) {
    if (ustensil.toLowerCase().includes(inputValue.toLowerCase())) {
      recipes.push(ustensil);
      allUstensilsByInput = [...recipes];
      createUstensilsDropdown(recipes);
    }
  }
}
