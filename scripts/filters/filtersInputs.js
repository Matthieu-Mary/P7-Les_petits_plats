// Functions for filters Inputs
function filterIngredientsByInput(e) {
  const inputValue = e.target.value;
  filtersLists[0].innerHTML = "";
  let ingredients = getIngredients(filteredRecipes);
  allIngredients.splice(0, allIngredients.length);
  for (const ingredient of ingredients) {
    if (ingredient.toLowerCase().includes(inputValue.toLowerCase())) {
      allIngredients.push(ingredient);
      createIngredientsDropdown(allIngredients);
    }
  }
}

function filterApplianceByInput(e) {
  const inputValue = e.target.value.toLowerCase();
  filtersLists[1].innerHTML = "";
    let appliances = getAppliances(filteredRecipes);
    allAppliances.splice(0, allAppliances.length);
    for (const appliance of appliances) {
      if (appliance.toLowerCase().includes(inputValue.toLowerCase())) {
        allAppliances.push(appliance);
        createAppliancesDropdown(allAppliances);
      }
    }
}

function filterUstensilsByInput(e) {
  const inputValue = e.target.value;
  filtersLists[2].innerHTML = "";
  let ustensils = getUstensils(filteredRecipes);
  allUstensils.splice(0, allUstensils.length);
  filtersLists[2].innerHTML = "";
  for (const ustensil of ustensils) {
    if (ustensil.toLowerCase().includes(inputValue.toLowerCase())) {
      allUstensils.push(ustensil);
      createUstensilsDropdown(allUstensils);
    }
  }
}
