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
      item.setAttribute("onclick", "addFilterAndUpdate(event)");
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
}


