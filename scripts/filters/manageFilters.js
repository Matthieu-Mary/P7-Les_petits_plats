// -------------- MANAGE APPARITION OF SELECTED FILTERS IN THE DIV AND UPDATE LIST OF FILTERS AND CARD APPEARANCE---------------------
const filtersLists = document.querySelectorAll(".filter-list");

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
    
    // Set color for filters and update filters list
    if (currentList.classList.contains("ingredients")) {
      selectedFilter.style.background = `var(--blue)`;
      selectedFiltersContainer.appendChild(selectedFilter);
      cardContainer.innerHTML = "";
      filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));
      filteredRecipes = filteredRecipes.filter(recipe => {
        let hasIngredients = false;
        recipe.ingredients.forEach(ingredient => {
          if(ingredient.ingredient.toLowerCase() === currentFilterText.toLowerCase()) {
            hasIngredients = true;
          }
        })
        return hasIngredients
      });
    } else if (currentList.classList.contains("appliances")) {
      selectedFilter.style.background = `var(--green)`;
      selectedFiltersContainer.appendChild(selectedFilter);
      cardContainer.innerHTML = "";
      filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));
      filteredRecipes = filteredRecipes.filter(
        (recipe) =>
        recipe.appliance.toLowerCase() === currentFilterText.toLowerCase()
        );
      } else if (currentList.classList.contains("ustensils")) {
        selectedFilter.style.background = `var(--orange)`;
        selectedFiltersContainer.appendChild(selectedFilter);
        cardContainer.innerHTML = "";
        filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));
        filteredRecipes = filteredRecipes.filter(recipe => {
          let hasUstensils = false;
          recipe.ustensils.forEach(ustensil => {
            if(ustensil.toLowerCase() === currentFilterText.toLowerCase()) {
              hasUstensils = true;
            }
          })
          return hasUstensils
        });
      }
      createCard(filteredRecipes);
      createDropdownList(filteredRecipes, currentFilter, selectedFiltersContainer);
    }
    
function deleteFilter(e) {
  console.log(allRecipes)
  console.log(filteredRecipes)
  const selectedFiltersContainer = document.querySelector(
    ".container-selected-filters"
  );
  const currentFilter = e.currentTarget.parentNode;
  const currentFilterText = currentFilter.textContent;
  selectedFiltersContainer.removeChild(currentFilter);

  if(currentFilter.style.background == 'var(--blue)') {
    cardContainer.innerHTML = "";
    filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));
      filteredRecipes = allRecipes.filter(recipe => {
        let hasIngredients = false;
        recipe.ingredients.forEach(ingredient => {
          if(ingredient.ingredient.toLowerCase() !== currentFilterText.toLowerCase()) {
            hasIngredients = true;
          }
        })
        return hasIngredients
      });
  }
  if(currentFilter.style.background == 'var(--green)') {
    cardContainer.innerHTML = "";
      filtersList.forEach((filtersList) => (filtersList.innerHTML = ""));
      filteredRecipes = allRecipes.filter(
        (recipe) =>
        recipe.appliance.toLowerCase() !== currentFilterText.toLowerCase()
        );
  }
  if(currentFilter.style.background == 'var(--orange)') {
    cardContainer.innerHTML = "";
      filtersList.forEach((filtersList) => (filtersList.innerHTML = ""));
      filteredRecipes = allRecipes.filter(recipe => {
        let hasUstensils = false;
        recipe.ustensils.forEach(ustensil => {
          if(ustensil.toLowerCase() !== currentFilterText.toLowerCase()) {
            hasUstensils = true;
          }
        })
        return hasUstensils
      });
  }
  createDropdownList(filteredRecipes)
  createCard(filteredRecipes)
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
