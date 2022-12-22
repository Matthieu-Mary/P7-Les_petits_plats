// -------------- MANAGE APPARITION OF SELECTED FILTERS IN THE DIV AND UPDATE LIST OF FILTERS AND CARD APPEARANCE---------------------
const filtersLists = document.querySelectorAll(".filter-list");

const filteredRecipesArr = [];

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
  cardContainer.innerHTML = "";
  filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));

  // Add current filter to filters array
  filteredRecipesArr.push(currentFilterText.toLowerCase());

  console.log(filteredRecipesArr);

  // Set color for filters and update filters list
  if (currentList.classList.contains("ingredients")) {
    selectedFilter.style.background = `var(--blue)`;
    selectedFiltersContainer.appendChild(selectedFilter);
    filteredRecipes = filteredRecipes.filter((recipe) => {
      let hasIngredients = false;
      recipe.ingredients.forEach((ingredient) => {
        if (
          ingredient.ingredient.toLowerCase() ===
          currentFilterText.toLowerCase()
        ) {
          hasIngredients = true;
        }
      });
      return hasIngredients;
    });
  } else if (currentList.classList.contains("appliances")) {
    selectedFilter.style.background = `var(--green)`;
    selectedFiltersContainer.appendChild(selectedFilter);
    filteredRecipes = filteredRecipes.filter(
      (recipe) =>
        recipe.appliance.toLowerCase() === currentFilterText.toLowerCase()
    );
  } else if (currentList.classList.contains("ustensils")) {
    selectedFilter.style.background = `var(--orange)`;
    selectedFiltersContainer.appendChild(selectedFilter);
    filteredRecipes = filteredRecipes.filter((recipe) => {
      let hasUstensils = false;
      recipe.ustensils.forEach((ustensil) => {
        if (ustensil.toLowerCase() === currentFilterText.toLowerCase()) {
          hasUstensils = true;
        }
      });
      return hasUstensils;
    });
  }
  createCard(filteredRecipes);
  createDropdownList(filteredRecipes, currentFilter, selectedFiltersContainer);
}


let newRecipes;

function deleteFilter(e) {
  const selectedFiltersContainer = document.querySelector(
    ".container-selected-filters"
  );
  const currentFilter = e.currentTarget.parentNode;
  const currentFilterText = currentFilter.textContent;
  selectedFiltersContainer.removeChild(currentFilter);
  cardContainer.innerHTML = "";
  filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));

  // Delete filter from filteredRecipesArr when its removed by user on DOM
  const newFilteredRecipesArr = filteredRecipesArr.indexOf(currentFilterText.toLowerCase());
  if (newFilteredRecipesArr !== -1) {
    filteredRecipesArr.splice(newFilteredRecipesArr, 1);
  }


  if(filteredRecipesArr.length > 0) {
    newRecipes = allRecipes.filter(recipe => {
      const {appliance, ingredients, ustensils} = recipe;
      return (
        appliance.toLowerCase().includes(filteredRecipesArr)
        &&
        ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(filteredRecipesArr))
        &&
        ustensils.some(ustensil => ustensil.toLowerCase().includes(filteredRecipesArr))
      )
    })
  } else {
    newRecipes = allRecipes
  }

  console.log(newRecipes)

  filteredRecipes = newRecipes;
  
  createCard(newRecipes);
  createDropdownList(newRecipes, currentFilter, selectedFiltersContainer);
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
