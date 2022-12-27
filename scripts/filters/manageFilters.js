// -------------- MANAGE APPARITION OF SELECTED FILTERS IN THE DIV AND UPDATE LIST OF FILTERS AND CARD APPEARANCE---------------------
const filtersLists = document.querySelectorAll(".filter-list");

let filteredIngredientsByTag = [];
let filteredAppliancesByTag = [];
let filteredUstensilsByTag = [];

// This function sort the recipes list by ingredients, appliances and ustensils filters tags
function recipesTagFilter(
  filteredRecipes,
  currentFilter,
  selectedFiltersContainer
) {

  cardContainer.innerHTML = "";
  filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""))

  // Filtre cartes
  let itemsFiltered = [];
  itemsFiltered = filteredRecipes.filter(
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

  console.log("Ingredients :")
  console.log(filteredIngredientsByTag)
  console.log("Appareils :")
  console.log(filteredAppliancesByTag)
  console.log("Ustensiles :")
  console.log(filteredUstensilsByTag)

  console.log("Recettes filtrées :")
  console.log(itemsFiltered);
  
  createCard(itemsFiltered);
  createDropdownList(itemsFiltered, currentFilter, selectedFiltersContainer);
}

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
    filteredRecipes = [...allRecipes];

    if (selectedFiltersContainer.childElementCount === 0) {
      filteredIngredientsByTag = [];
      filteredAppliancesByTag = [];
      filteredUstensilsByTag = [];
      createCard(filteredRecipes);
      createDropdownList(
        filteredRecipes,
        currentFilter,
        selectedFiltersContainer
      );
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
      recipesTagFilter(
        filteredRecipes,
        currentFilter,
        selectedFiltersContainer
      );
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

    recipesTagFilter(filteredRecipes, currentFilter, selectedFiltersContainer);

  }
}



