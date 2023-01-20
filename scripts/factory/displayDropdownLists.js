// GET LISTS
let allIngredientsByTags = [];
let allAppliancesByTags = [];
let allUstensilsByTags = [];

// <---------- FUNCTIONS TO DISPLAY FILTERS LIST ---------->
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

// CREATE LIST OF FILTERS
function createDropdownList(currentRecipes) {
  allIngredientsByTags = getIngredients(currentRecipes);
  allAppliancesByTags = getAppliances(currentRecipes);
  allUstensilsByTags = getUstensils(currentRecipes);

  // Display ingredients list
  createIngredientsDropdown(allIngredientsByTags);
  // Display appliances list
  createAppliancesDropdown(allAppliancesByTags);
  // Display ustensils list
  createUstensilsDropdown(allUstensilsByTags);
}

// CREATE DROPDOWN BY FILTER TYPE (INGREDIENT/APPLIANCES/USTENSILS)

// ----- INGREDIENTS -----
function createIngredientsDropdown(ingredients) {
  const allIngredients = getIngredients(recipes);
  const dropdownIngredientsList = document.querySelector(
    ".ingredients .filter-list"
  );
  const ulIngredients = document.createElement("ul");
  filtersLists[0].innerHTML = "";
  ingredients
    .filter((ingredient, index) => ingredients.indexOf(ingredient) === index)
    .forEach((ingredient) => {
      const item = document.createElement("li");
      item.setAttribute("onclick", "updateRecipes(event)");
      item.textContent = ingredient;
      ulIngredients.appendChild(item);
      // If a filter is selected, this filter is removed from the list
      if (ingredients.length !== allIngredients.length) {
        let hasFilter = false;
        selectedFiltersContainer.querySelectorAll("span").forEach((element) => {
          if (
            element.textContent.toLowerCase() === item.textContent.toLowerCase()
          ) {
            hasFilter = true;
            if (hasFilter) {
              ulIngredients.removeChild(item);
            }
          }
        });
      }
    });
  dropdownIngredientsList.appendChild(ulIngredients);
  // Display message if no more filters disponible
  if (ulIngredients.childElementCount === 0) {
    const ingredientsFail = document.createElement("p");
    ingredientsFail.classList.add("no-more-filter");
    ingredientsFail.textContent = "Plus aucun filtre ingredients disponible ...";
    dropdownIngredientsList.removeChild(ulIngredients);
    dropdownIngredientsList.appendChild(ingredientsFail);
  }
}

//----- APPLIANCES -----
function createAppliancesDropdown(appliances) {
  const allAppliance = getAppliances(recipes);
  const dropdownAppliancesList = document.querySelector(
    ".appliances .filter-list"
  );
  const ulAppliances = document.createElement("ul");
  filtersLists[1].innerHTML = "";
  appliances
    .filter((appliance, index) => appliances.indexOf(appliance) === index)
    .forEach((appliance) => {
      const item = document.createElement("li");
      item.setAttribute("onclick", "updateRecipes(event)");
      item.textContent = appliance;
      ulAppliances.appendChild(item);
      // If a filter is selected, this filter is removed from the list
      if (appliance.length !== allAppliance.length) {
        let hasFilter = false;
        selectedFiltersContainer.querySelectorAll("span").forEach((element) => {
          if (
            element.textContent.toLowerCase() === item.textContent.toLowerCase()
          ) {
            hasFilter = true;
            if (hasFilter) {
              ulAppliances.removeChild(item);
            }
          }
        });
      }
    });
  dropdownAppliancesList.appendChild(ulAppliances);
  // Display message if no more filters disponible
  if (ulAppliances.childElementCount === 0) {
    const applianceFail = document.createElement("p");
    applianceFail.classList.add("no-more-filter");
    applianceFail.textContent = "Plus aucun filtre appareils disponible ...";
    dropdownAppliancesList.removeChild(ulAppliances);
    dropdownAppliancesList.appendChild(applianceFail);
  }
}

//----- USTENSILS -----
function createUstensilsDropdown(ustensils) {
  const allUstensils = getUstensils(recipes);
  const dropdownUstensilsList = document.querySelector(
    ".ustensils .filter-list"
  );
  const ulUstensils = document.createElement("ul");
  filtersLists[2].innerHTML = "";
  ustensils
    .filter((ustensil, index) => ustensils.indexOf(ustensil) === index)
    .forEach((ustensil) => {
      const item = document.createElement("li");
      item.setAttribute("onclick", "updateRecipes(event)");
      item.textContent = ustensil;
      ulUstensils.appendChild(item);
      // If a filter is selected, this filter is removed from the list
      if (ustensils.length !== allUstensils.length) {
        let hasFilter = false;
        selectedFiltersContainer.querySelectorAll("span").forEach((element) => {
          if (
            element.textContent.toLowerCase() === item.textContent.toLowerCase()
          ) {
            hasFilter = true;
            if (hasFilter) {
              ulUstensils.removeChild(item);
            }
          }
        });
      }
    });
  dropdownUstensilsList.appendChild(ulUstensils);
  // Display message if no more filters disponible
  if (ulUstensils.childElementCount === 0) {
    const ustensilFail = document.createElement("p");
    ustensilFail.classList.add("no-more-filter");
    ustensilFail.textContent = "Plus aucun filtre ustensils disponible ...";
    dropdownUstensilsList.removeChild(ulUstensils);
    dropdownUstensilsList.appendChild(ustensilFail);
  }
}
