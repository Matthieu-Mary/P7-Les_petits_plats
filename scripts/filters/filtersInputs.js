// Functions for filters Inputs
function filterIngredientsByInput(e) {
  const inputValue = e.target.value;
  filtersLists[0].innerHTML = "";
  if (inputValue.length >= 3) {
    let ingredients = getIngredients(allRecipes);
    allIngredients.splice(0, allIngredients.length);
    for (const ingredient of ingredients) {
      if (ingredient.toLowerCase().includes(e.target.value.toLowerCase())) {
        allIngredients.push(ingredient);  
        createIngredientsDropdown(allIngredients);
      }
    }
  } else {
    createDropdownList(allRecipes);
  }
}

function filterApplianceByInput(e) {
  const inputValue = e.target.value.toLowerCase();
  filtersLists[1].innerHTML = "";
  if (inputValue.length >= 3) {
    let appliances = getAppliances(allRecipes);
    allAppliances.splice(0, allAppliances.length);
    for (const appliance of appliances) {
      if (appliance.toLowerCase().includes(e.target.value.toLowerCase())) {
        allAppliances.push(appliance);  
        createAppliancesDropdown(allAppliances);
      }
    }
  } else {
    createDropdownList(allRecipes);
  }
}

function filterUstensilsByInput(e) {
  const inputValue = e.target.value;
  filtersLists[2].innerHTML = "";
  if (inputValue.length >= 3) {
    let ustensils = getUstensils(allRecipes);
    allUstensils.splice(0, allUstensils.length);
    filtersLists[2].innerHTML = "";
    for (const ustensil of ustensils) {
      if (ustensil.toLowerCase().includes(e.target.value.toLowerCase())) {
        allUstensils.push(ustensil);  
        createUstensilsDropdown(allUstensils)
      }
    }
  } else {
    createDropdownList(allRecipes);
  }
}
