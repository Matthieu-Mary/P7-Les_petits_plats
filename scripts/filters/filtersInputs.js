// Functions for filters Inputs
function filterIngredientsByInput(e) {
    const inputValue = e.target.value;
    filtersLists[0].innerHTML = "";
    if (inputValue.length >= 3) {
      let ingredients = getIngredients(allRecipes)
      for (const ingredient of ingredients) {
        
      }
    } else {
      createDropdownList(allRecipes)
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
    const inputValue = e.target.value.toLowerCase();
    cardContainer.innerHTML = "";
    filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));
    if (inputValue.length >= 3) {
      filteredRecipes = allRecipes.filter(recipe => {
        let hasUstensils = false;
        recipe.ustensils.forEach(ustensil => {
          if(ustensil.toLowerCase().includes(inputValue)) {
            hasUstensils = true;
          }
        })
        return hasUstensils
      });
      createDropdownList(filteredRecipes);
    } else {
      createDropdownList(allRecipes);
    }
  }