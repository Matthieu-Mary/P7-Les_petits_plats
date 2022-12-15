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
function createDropdownList(recipes) {
  
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
      item.setAttribute("onclick", "addFilterAndUpdate(event)");
      item.textContent = ingredient;
      ulIngredients.appendChild(item);
    });
  dropdownIngredientsList.appendChild(ulIngredients);

  // Display appliances list
  const dropdownAppliancesList = document.querySelector(
    ".appliances .filter-list"
  );
  const ulAppliances = document.createElement("ul");
  allAppliances
    .filter((appliance, index) => allAppliances.indexOf(appliance) === index)
    .forEach((appliance) => {
      const item = document.createElement("li");
      item.setAttribute("onclick", "addFilterAndUpdate(event)");
      item.textContent = appliance;
      ulAppliances.appendChild(item);
    });
  dropdownAppliancesList.appendChild(ulAppliances);

  // Display ustensils list
  const dropdownUstensilsList = document.querySelector(
    ".ustensils .filter-list"
  );
  const ulUstensils = document.createElement("ul");
  allUstensils
    .filter((ustensil, index) => allUstensils.indexOf(ustensil) === index)
    .forEach((ustensil) => {
      const item = document.createElement("li");
      item.setAttribute("onclick", "addFilterAndUpdate(event)");
      item.textContent = ustensil;
      ulUstensils.appendChild(item);
    });
  dropdownUstensilsList.appendChild(ulUstensils);
}

// -------------- MANAGE APPARITION OF SELECTED FILTERS IN THE DIV AND UPDATE LIST OF FILTERS AND CARD APPEARANCE---------------------
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

  // Set color for filters
  if (currentList.classList.contains("ingredients")) {
    selectedFilter.style.background = `var(--blue)`;
  } else if (currentList.classList.contains("appliances")) {
    selectedFilter.style.background = `var(--green)`;
    selectedFiltersContainer.appendChild(selectedFilter);
    const newArr = allRecipes.filter(recipe => recipe.appliance.toLowerCase() === currentFilterText.toLowerCase())
    createCard(newArr)
} else {
    selectedFilter.style.background = `var(--orange)`;
}
}

function deleteFilter(e) {
  const selectedFiltersContainer = document.querySelector(
    ".container-selected-filters"
  );
  const currentFilter = e.currentTarget.parentNode;
  selectedFiltersContainer.removeChild(currentFilter);
}
// ---------------------------------------------------------------------------------------
