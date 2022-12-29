// Functions for filters Inputs
function filterIngredientsByInput(e) {
    const inputValue = e.target.value.toLowerCase();
    cardContainer.innerHTML = "";
    filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));
    if (inputValue.length >= 3) {
      filteredRecipes = allRecipes.filter(recipe => {
        let hasIngredients = false;
        recipe.ingredients.forEach(ingredient => {
          if(ingredient.ingredient.toLowerCase().includes(inputValue)) {
            hasIngredients = true;
          }
        })
        return hasIngredients
      });
      console.log(filteredRecipes)
      createCard(filteredRecipes);
      createDropdownList(filteredRecipes);
    } else {
      filteredRecipes = [...allRecipes];
      createCard(filteredRecipes);
      createDropdownList(filteredRecipes);
    }
  }
  
  function filterApplianceByInput(e) {
    const inputValue = e.target.value.toLowerCase();
    cardContainer.innerHTML = "";
    filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));
    if (inputValue.length >= 3) {
      filteredRecipes = allRecipes.filter((recipe) =>
        recipe.appliance.toLowerCase().includes(inputValue)
      );
      createCard(filteredRecipes);
      createDropdownList(filteredRecipes);
    } else {
      filteredRecipes = [...allRecipes];
      createCard(filteredRecipes);
      createDropdownList(filteredRecipes);
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
      console.log(filteredRecipes)
      createCard(filteredRecipes);
      createDropdownList(filteredRecipes);
    } else {
      filteredRecipes = [...allRecipes];
      createCard(filteredRecipes);
      createDropdownList(filteredRecipes);
    }
  }