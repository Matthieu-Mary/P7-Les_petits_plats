// -------------- MANAGE APPARITION OF SELECTED FILTERS IN THE DIV AND UPDATE LIST OF FILTERS AND CARD APPEARANCE---------------------
const filtersLists = document.querySelectorAll(".filter-list");

const filteredIngredients = [];
const filteredAppliances = [];
const filteredUstensils = [];

// Updated recipes by click on add/delete filter is stored in this variable.
function updateRecipes(e) {
  // Add filter to div
  const selectedFiltersContainer = document.querySelector(
    ".container-selected-filters"
  );
  const currentFilter = e.currentTarget;
  const currentFilterText = currentFilter.textContent;
  const currentList = currentFilter.parentNode.parentNode.parentNode;
  const selectedFilter = document.createElement("span");
  selectedFilter.textContent = currentFilterText;
  const deleteFilterButton = document.createElement("img");
  deleteFilterButton.setAttribute("src", "../assets/images/closeBtn.svg");
  deleteFilterButton.setAttribute("onclick", "updateRecipes(event)");
  selectedFilter.appendChild(deleteFilterButton);
  cardContainer.innerHTML = "";
  filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));

  // Add or remove filter based on whether it already exists
  if (selectedFiltersContainer.contains(currentFilter)) {
    selectedFiltersContainer.removeChild(currentFilter.parentNode);
    
    // Delete filter from filtered ingredients, ustensils or appliances Arr, when its removed by user on DOM
    // INGREDIENTS ARR
    const ingredientIndex = filteredIngredients.indexOf(
      currentFilter.parentNode.textContent.toLowerCase()
    );
    if (ingredientIndex !== -1) {
      filteredIngredients.splice(ingredientIndex, 1);
    }
    console.log(filteredIngredients)
    // APPLIANCES ARR
    const applianceIndex = filteredAppliances.indexOf(
      currentFilter.parentNode.textContent.toLowerCase()
    );
    if (applianceIndex !== -1) {
      filteredAppliances.splice(applianceIndex, 1);
    }
    // USTENSILS ARR
    const ustensilIndex = filteredUstensils.indexOf(
      currentFilter.parentNode.textContent.toLowerCase()
    );
    if (ustensilIndex !== -1) {
      filteredUstensils.splice(ustensilIndex, 1);
    }
  } else {
    if (currentList.classList.contains("ingredients")) {
      // Set color for filters and update filters list
      selectedFilter.style.background = `var(--blue)`;
      selectedFiltersContainer.appendChild(selectedFilter);
      filteredIngredients.push(currentFilterText.toLowerCase());
      const filteredRecipesByIngredients = allRecipes.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          filteredIngredients.includes(ingredient.ingredient.toLowerCase())
        )
      );
      console.log("Ingredients :");
      console.log(filteredRecipesByIngredients);
      allRecipes = filteredRecipesByIngredients;
    } else if (currentList.classList.contains("appliances")) {
      selectedFilter.style.background = `var(--green)`;
      selectedFiltersContainer.appendChild(selectedFilter);
      filteredAppliances.push(currentFilterText.toLowerCase());
      const filteredRecipesByAppliances = allRecipes.filter((recipe) =>
        filteredAppliances.includes(recipe.appliance.toLowerCase())
      );
      console.log("Appliances :");
      console.log(filteredRecipesByAppliances);
      allRecipes = filteredRecipesByAppliances;
    } else if (currentList.classList.contains("ustensils")) {
      selectedFilter.style.background = `var(--orange)`;
      selectedFiltersContainer.appendChild(selectedFilter);
      filteredUstensils.push(currentFilterText.toLowerCase());
      const filteredRecipesByUstensils = allRecipes.filter((recipe) =>
        recipe.ustensils.some((ustensil) =>
          filteredUstensils.includes(ustensil.toLowerCase())
        )
      );
      console.log("Ustensils :");
      console.log(filteredRecipesByUstensils);
      allRecipes = filteredRecipesByUstensils;
    }
  }

  console.log("Tous les filtres réunis :");
  console.log(allRecipes);

  createCard(allRecipes);
  createDropdownList(allRecipes, currentFilter, selectedFiltersContainer);
}

// FUNCTIONS TO DISPLAY FILTERS LIST
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
