// DISPLAY LIST OF FILTERS OR NOT
function dropdownListToggle(e) {
  const currentFilter = e.currentTarget.parentNode.parentNode;
  if (!currentFilter.classList.contains("dropdown-open")) {
    currentFilter.classList.add("dropdown-open");
  } else {
    dropdownListClose();
  }
}

function dropdownListOpen(e) {
  const currentFilter = e.currentTarget;
  if (!currentFilter.classList.contains("dropdown-open")) {
    dropdownListClose();
    currentFilter.classList.add("dropdown-open");
  }
}

function dropdownListClose() {
  const dropdownActuallyOpen = document.querySelectorAll(".dropdown-open");
  for (let i = 0; i < dropdownActuallyOpen.length; i++) {
    dropdownActuallyOpen[i].classList.remove("dropdown-open");
  }
}

// CREATE LIST OF FILTERS
function createDropdownList(recipes, currentFilter, selectedFiltersContainer) {
  // GET LISTS
  let allIngredients = getIngredients(recipes);
  let allAppliances = getAppliances(recipes);
  let allUstensils = getUstensils(recipes);
  
  // Display ingredients list
  const dropdownIngredientsList = document.querySelector(
    ".ingredients .filter-list"
  );
  const ulIngredients = document.createElement("ul");
  allIngredients
    .filter((ingredient, index) => allIngredients.indexOf(ingredient) === index)
    .forEach((ingredient) => {
      const item = document.createElement("li");
      item.setAttribute("onclick", "updateRecipes(event)");
      item.textContent = ingredient;
      ulIngredients.appendChild(item);
      // If a filter is selected, this filter is removed from the list
      if(currentFilter) {
        let hasFilter = false;
        selectedFiltersContainer.querySelectorAll("span").forEach(element => {
          if ( element.textContent.toLowerCase() === item.textContent.toLowerCase() )
          {
            hasFilter = true
            if(hasFilter) {
              ulIngredients.removeChild(item);
            }
          } 
        }) 
      }
    });
  dropdownIngredientsList.appendChild(ulIngredients);
  // Display message if no more filters disponible
  if(ulIngredients.childElementCount === 0) {
    const ingredientsFail = document.createElement("p");
    ingredientsFail.classList.add("no-more-filter");
    ingredientsFail.textContent = "Plus aucun filtre appareils disponible ..."
    dropdownIngredientsList.removeChild(ulIngredients)
    dropdownIngredientsList.appendChild(ingredientsFail)
  }
  

  // Display appliances list
  const dropdownAppliancesList = document.querySelector(
    ".appliances .filter-list"
  );
  const ulAppliances = document.createElement("ul");
  allAppliances
    .filter((appliance, index) => allAppliances.indexOf(appliance) === index)
    .forEach((appliance) => {
      const item = document.createElement("li");
      item.setAttribute("onclick", "updateRecipes(event)");
      item.textContent = appliance;
      ulAppliances.appendChild(item);
      // If a filter is selected, this filter is removed from the list
      if(currentFilter) {
        let hasFilter = false;
        selectedFiltersContainer.querySelectorAll("span").forEach(element => {
          if ( element.textContent.toLowerCase() === item.textContent.toLowerCase() )
          {
            hasFilter = true
            if(hasFilter) {
              ulAppliances.removeChild(item);
            }
          } 
        }) 
      }
    });
  dropdownAppliancesList.appendChild(ulAppliances);
    // Display message if no more filters disponible
    if(ulAppliances.childElementCount === 0) {
      const applianceFail = document.createElement("p");
      applianceFail.classList.add("no-more-filter");
      applianceFail.textContent = "Plus aucun filtre appareils disponible ..."
      dropdownAppliancesList.removeChild(ulAppliances)
      dropdownAppliancesList.appendChild(applianceFail)
    }

  // Display ustensils list
  const dropdownUstensilsList = document.querySelector(
    ".ustensils .filter-list"
  );
  const ulUstensils = document.createElement("ul");
  allUstensils
    .filter((ustensil, index) => allUstensils.indexOf(ustensil) === index)
    .forEach((ustensil) => {
      const item = document.createElement("li");
      item.setAttribute("onclick", "updateRecipes(event)");
      item.textContent = ustensil;
      ulUstensils.appendChild(item);
      // If a filter is selected, this filter is removed from the list
      if(currentFilter) {
        let hasFilter = false;
        selectedFiltersContainer.querySelectorAll("span").forEach(element => {
          if ( element.textContent.toLowerCase() === item.textContent.toLowerCase() )
          {
            hasFilter = true
            if(hasFilter) {
              ulUstensils.removeChild(item);
            }
          } 
        }) 
      }
    });
  dropdownUstensilsList.appendChild(ulUstensils);
  // Display message if no more filters disponible
  if(ulUstensils.childElementCount === 0) {
    const ustensilFail = document.createElement("p");
    ustensilFail.classList.add("no-more-filter");
    ustensilFail.textContent = "Plus aucun filtre ustensils disponible ..."
    dropdownUstensilsList.removeChild(ulUstensils)
    dropdownUstensilsList.appendChild(ustensilFail)
  }
}

// FUNCTIONS TO DISPLAY FILTERS LIST ---------------------------------------------------
function getIngredients(recipes) {
  let ingredientsArr = [];
  recipes.forEach((recipe) =>
    recipe.ingredients.forEach((ingredient) =>
      ingredientsArr.push(ingredient.ingredient)
    )
  );
  return ingredientsArr;
}

function getAppliances(recipes) {
  let appliancesArr = [];
  recipes.forEach((recipe) => appliancesArr.push(recipe.appliance));
  return appliancesArr;
}

function getUstensils(recipes) {
  let ustensilsArr = [];
  recipes.forEach((recipe) =>
    recipe.ustensils.forEach((ustensil) => ustensilsArr.push(ustensil))
  );
  return ustensilsArr;
}
// ---------------------------------------------------------------------------------------


