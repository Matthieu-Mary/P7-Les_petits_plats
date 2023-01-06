let filtersInputsUsed = false;
// Functions for filters Inputs
function filterIngredientsByInput(e) {
  filtersInputsUsed = true;
  const inputValue = e.target.value;
  filtersLists[0].innerHTML = "";
  if (inputValue.length >= 3) {
    let ingredients = getIngredients(allRecipes);
    allIngredients.splice(0, allIngredients.length);
    filtersLists[0].innerHTML = "";
    for (const ingredient of ingredients) {
      if (ingredient.toLowerCase().includes(e.target.value.toLowerCase())) {
        allIngredients.push(ingredient);  
        createIngredientsDropdown(allIngredients)
      }
    }
  } else {
    filtersInputsUsed = false;
    createDropdownList(allRecipes);
  }
}

function filterApplianceByInput(e) {
  const inputValue = e.target.value.toLowerCase();
  filtersLists[1].innerHTML = "";
  if (inputValue.length >= 3) {
    filteredRecipes = allRecipes.filter((recipe) =>
      recipe.appliance.toLowerCase().includes(inputValue)
    );
    createDropdownList(filteredRecipes);
  } else {
    createDropdownList(allRecipes);
  }
}

function filterUstensilsByInput(e) {
  filtersInputsUsed = true;
  const inputValue = e.target.value;
  filtersLists[0].innerHTML = "";
  console.log(filtersInputsUsed);
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
    filtersInputsUsed = false;
    createDropdownList(allRecipes);
  }
}
