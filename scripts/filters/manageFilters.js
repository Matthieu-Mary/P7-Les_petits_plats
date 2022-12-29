// -------------- MANAGE APPARITION OF SELECTED FILTERS IN THE DIV AND UPDATE LIST OF FILTERS AND CARD APPEARANCE---------------------
const filtersLists = document.querySelectorAll(".filter-list");

// Array by filters Tags
let filteredIngredientsByTag = [];
let filteredAppliancesByTag = [];
let filteredUstensilsByTag = [];

// Array by filters Search
let filteredIngredientsBySearch = [];
let filteredAppliancesBySearch = [];
let filteredUstensilsBySearch = [];

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

// This function sort the recipes list by ingredients, appliances and ustensils filters tags
function recipesTagFilter(
  filteredRecipes,
  currentFilter,
  selectedFiltersContainer
) {
  cardContainer.innerHTML = "";
  filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));

  // Filter cards
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

  // Filtered elements by tags are egual to filtered elements by search
  filteredIngredientsBySearch = filteredIngredientsByTag;
  filteredAppliancesBySearch = filteredAppliancesByTag;
  filteredUstensilsBySearch = filteredUstensilsByTag;

  console.log(filteredIngredientsByTag);

  createCard(itemsFiltered);
  createDropdownList(itemsFiltered, currentFilter, selectedFiltersContainer);
}

// SEARCH INPUTS ON DROPDOWN LISTS
// function dropdownFiltersInputs(e) {
//   const currentInputParent = e.target.parentNode;
//   const inputs = document.querySelectorAll(".filter input");

//   cardContainer.innerHTML = "";
//   filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));

//   [...inputs].map( input => {
//     inputValue = input.value.toLowerCase();

//     if(currentInputParent.classList.contains("ingredients") && inputValue.length >=3) {

//     } else if (currentInputParent.classList.contains("appliances")) {
//       console.log("appareils")
//     } else if (currentInputParent.classList.contains("ustensils")){
//       console.log("ustensiles")
//     }
//   } )
//   createCard(filteredRecipes)
//   createDropdownList(filteredRecipes);
// }

function filterIngredientsByInput(e) {
  const inputValue = e.target.value.toLowerCase();
  cardContainer.innerHTML = "";
  filtersLists.forEach((filtersList) => (filtersList.innerHTML = ""));
  if (inputValue.length >= 3) {
    filteredRecipes = allRecipes.filter((recipe) =>
     console.log("aie")
    );
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
