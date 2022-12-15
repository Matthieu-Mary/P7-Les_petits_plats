
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
  

    const filtersLIst = document.querySelectorAll(".filter-list");
    // Set color for filters and update filters list
    if (currentList.classList.contains("ingredients")) {
      selectedFilter.style.background = `var(--blue)`;
      selectedFiltersContainer.appendChild(selectedFilter);
    } else if (currentList.classList.contains("appliances")) {
      selectedFilter.style.background = `var(--green)`;
      selectedFiltersContainer.appendChild(selectedFilter);
      cardContainer.innerHTML = "";
      filtersLIst.forEach(filtersList => filtersList.innerHTML = "")
      const newRecipes = allRecipes.filter(recipe => recipe.appliance.toLowerCase() === currentFilterText.toLowerCase());
      createCard(newRecipes);
      createDropdownList(newRecipes);
  } else {
      selectedFilter.style.background = `var(--orange)`;
      selectedFiltersContainer.appendChild(selectedFilter);
  }
  }
  
  function deleteFilter(e) {
    const selectedFiltersContainer = document.querySelector(
      ".container-selected-filters"
    );
    const currentFilter = e.currentTarget.parentNode;
    selectedFiltersContainer.removeChild(currentFilter);
  }

  // FUNCTIONS TO DISPLAY FILTERS LIST
  function getIngredients(recipes) {
    let ingredientsArr = [];
    recipes.forEach(recipe => recipe.ingredients.forEach(ingredient => ingredientsArr.push(ingredient.ingredient)))
    return ingredientsArr;
  }
  
  function getAppliances(recipes) {
    let appliancesArr = [];
    recipes.forEach(recipe => appliancesArr.push(recipe.appliance))
    return appliancesArr
  }

  function getUstensils(recipes) {
    let ustensilsArr = [];
    recipes.forEach(recipe => recipe.ustensils.forEach(ustensil => ustensilsArr.push(ustensil)))
    return ustensilsArr
  }
  // ---------------------------------------------------------------------------------------