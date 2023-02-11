// -------------- MANAGE APPARITION OF SELECTED FILTERS IN THE DIV AND UPDATE LIST OF FILTERS AND CARD APPEARANCE---------------------
const filtersLists = document.querySelectorAll(".filter-list");
// Container of selected filters
const selectedFiltersContainer = document.querySelector(
  ".container-selected-filters"
);

// Array by filters Tags
let filteredIngredientsByTag = [];
let filteredAppliancesByTag = [];
let filteredUstensilsByTag = [];

// Updated recipes by click on add/delete filter is stored in this variable.
function updateRecipes(e) {
  // Add filter to div
  const currentFilter = e.currentTarget;
  const currentFilterText = currentFilter.textContent;
  const currentList = currentFilter.parentNode.parentNode.parentNode;
  const selectedFilter = document.createElement("span");
  selectedFilter.textContent = currentFilterText;
  const deleteFilterButton = document.createElement("img");
  deleteFilterButton.setAttribute("alt", "delete button");
  deleteFilterButton.setAttribute("src", "/assets/images/closeBtn.svg");
  deleteFilterButton.setAttribute("onclick", "updateRecipes(event)");
  selectedFilter.appendChild(deleteFilterButton);
  cardContainer.innerHTML = "";
  filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));

  // Add or remove filter based on whether it already exists
  if (selectedFiltersContainer.contains(currentFilter)) {
    selectedFiltersContainer.removeChild(currentFilter.parentNode);

    if (selectedFiltersContainer.childElementCount === 0) {
      // Reset tags arrays

      filteredIngredientsByTag = [];
      filteredAppliancesByTag = [];
      filteredUstensilsByTag = [];

      filteredRecipesByTags = [...recipes];

      if (search.value.length === 0) {
        filteredRecipesBySearch = [...recipes];
        createCard(filteredRecipesBySearch);
        createDropdownList(filteredRecipesBySearch);
      }
      recipesTagFilter();
    } else {
      // Delete filter from filtered ingredients, ustensils or appliances Arr, when its removed by user on DOM
      // INGREDIENTS ARR
      const ingredientIndex = filteredIngredientsByTag.indexOf(
        currentFilter.parentNode.textContent.toLowerCase()
      );
      if (ingredientIndex !== -1) {
        filteredIngredientsByTag.splice(ingredientIndex, 1);
      }
      // APPLIANCES ARR
      const applianceIndex = filteredAppliancesByTag.indexOf(
        currentFilter.parentNode.textContent.toLowerCase()
      );
      if (applianceIndex !== -1) {
        filteredAppliancesByTag.splice(applianceIndex, 1);
      }
      // USTENSILS ARR
      const ustensilIndex = filteredUstensilsByTag.indexOf(
        currentFilter.parentNode.textContent.toLowerCase()
      );
      if (ustensilIndex !== -1) {
        filteredUstensilsByTag.splice(ustensilIndex, 1);
      }
      recipesTagFilter();
    }
  } else {
    if (currentList.classList.contains("ingredients")) {
      // Set color for filters and update filters list
      selectedFilter.style.background = `var(--blue)`;
      selectedFiltersContainer.appendChild(selectedFilter);
      filteredIngredientsByTag.push(currentFilterText.toLowerCase());
    } else if (currentList.classList.contains("appliances")) {
      selectedFilter.style.background = `var(--green)`;
      selectedFiltersContainer.appendChild(selectedFilter);
      filteredAppliancesByTag.push(currentFilterText.toLowerCase());
    } else if (currentList.classList.contains("ustensils")) {
      selectedFilter.style.background = `var(--orange)`;
      selectedFiltersContainer.appendChild(selectedFilter);
      filteredUstensilsByTag.push(currentFilterText.toLowerCase());
    }
    recipesTagFilter();
  }
}

// This function sort the recipes list by ingredients, appliances and ustensils filters tags
function recipesTagFilter() {
  cardContainer.innerHTML = "";
  filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));

  // Filter cards
  itemsFiltered = [];
  itemsFiltered = filteredRecipesBySearch.filter(
    (items) =>
      [...filteredIngredientsByTag].every((ingredientSelected) =>
        items.ingredients.some(
          (item) => item.ingredient.toLowerCase() === ingredientSelected
        )
      ) &&
      [...filteredUstensilsByTag].every((ustensilSelected) =>
        items.ustensils.some((item) => item.toLowerCase() === ustensilSelected)
      ) &&
      [...filteredAppliancesByTag].every(
        (applianceSelected) =>
          items.appliance.toLowerCase() === applianceSelected
      )
  );

  filteredRecipesByTags = [...itemsFiltered];
  createCard(itemsFiltered);
  if (inputFilters[0].value !== "") {
    createIngredientsDropdown(allIngredientsByInput);
    const appliances = getAppliances(itemsFiltered);
    createAppliancesDropdown(appliances);
    const ustensils = getUstensils(itemsFiltered);
    createUstensilsDropdown(ustensils);
  } else if (inputFilters[1].value !== "") {
    const ingredients = getIngredients(itemsFiltered);
    createIngredientsDropdown(ingredients);
    createAppliancesDropdown(allAppliancesByInput);
    const ustensils = getUstensils(itemsFiltered);
    createUstensilsDropdown(ustensils);
  } else if (inputFilters[2].value !== "") {
    const ingredients = getIngredients(itemsFiltered);
    createIngredientsDropdown(ingredients);
    const appliances = getAppliances(itemsFiltered);
    createAppliancesDropdown(appliances);
    createUstensilsDropdown(allUstensilsByInput);
  } else {
    createDropdownList(itemsFiltered);
  }
}
