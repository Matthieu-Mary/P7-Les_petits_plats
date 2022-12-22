// -------------- MANAGE APPARITION OF SELECTED FILTERS IN THE DIV AND UPDATE LIST OF FILTERS AND CARD APPEARANCE --------------------
const filtersLists = document.querySelectorAll(".filter-list");

// All filters selected are stored in this array
let selectedFiltersArr = [];

// Updated recipes by click on filter is stored in this variable.
function addFilterAndUpdate(e) {
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
  deleteFilterButton.setAttribute("onclick", "deleteFilter(event)");
  selectedFilter.appendChild(deleteFilterButton);
  selectedFiltersContainer.appendChild(selectedFilter);
  cardContainer.innerHTML = "";
  filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));
  selectedFiltersArr.push(currentFilterText.toLowerCase());

  // Set color for filters and update filters list
  if (currentList.classList.contains("ingredients")) {
    selectedFilter.style.background = `var(--blue)`;
    console.log(selectedFiltersArr);
    filteredRecipes = filteredRecipes.filter((recipe) => {
      recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(selectedFiltersArr));
    });
    console.log(filteredRecipes)
  } else if (currentList.classList.contains("appliances")) {
    selectedFilter.style.background = `var(--green)`;
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe.appliance.toLowerCase().includes(selectedFiltersArr)
    );
  } else if (currentList.classList.contains("ustensils")) {
    selectedFilter.style.background = `var(--orange)`;
    filteredRecipes = filteredRecipes.filter((recipe) => {
      recipe.ustensils.includes(selectedFiltersArr)
    });
  }
  createDropdownList(filteredRecipes, currentFilter, selectedFiltersContainer);
  createCard(filteredRecipes);
}

function deleteFilter(e) {
  const selectedFiltersContainer = document.querySelector(
    ".container-selected-filters"
  );
  const currentFilter = e.currentTarget.parentNode;
  const currentFilterText = currentFilter.textContent;
  selectedFiltersContainer.removeChild(currentFilter);

  if (currentFilter.style.background === "var(--blue)") {
    cardContainer.innerHTML = "";
    filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));
    filteredRecipes = allRecipes.filter((recipe) => {
      let hasIngredients = false;
      recipe.ingredients.forEach((ingredient) => {
        if (ingredient.ingredient.toLowerCase().includes(selectedFilters)) {
          hasIngredients = true;
        }
      });
      return hasIngredients;
    });
  }
  if (currentFilter.style.background === "var(--green)") {
    cardContainer.innerHTML = "";
    filtersList.forEach((filtersList) => (filtersList.innerHTML = ""));
    filteredRecipes = allRecipes.filter(
      (recipe) =>
        recipe.appliance.toLowerCase() !== currentFilterText.toLowerCase()
    );
  }
  if (currentFilter.style.background === "var(--orange)") {
    cardContainer.innerHTML = "";
    filtersList.forEach((filtersList) => (filtersList.innerHTML = ""));
    filteredRecipes = allRecipes.filter((recipe) => {
      let hasUstensils = false;
      recipe.ustensils.forEach((ustensil) => {
        if (ustensil.toLowerCase() !== currentFilterText.toLowerCase()) {
          hasUstensils = true;
        }
      });
      return hasUstensils;
    });
  }
  createCard(filteredRecipes);
  createDropdownList(filteredRecipes, currentFilter, selectedFiltersContainer);
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
