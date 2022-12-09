function dropdownListToggle(e) {
    const currentFilter = e.currentTarget.parentNode.parentNode;
    if(!currentFilter.classList.contains("dropdown-open")) {
        currentFilter.classList.add("dropdown-open");
    } else {
        dropdownListClose();
     }
}

function dropdownListOpen(e) {
    const currentFilter = e.currentTarget;
    if(!currentFilter.classList.contains("dropdown-open")) {
        dropdownListClose();
        currentFilter.classList.add("dropdown-open");
    }
}

// Close filters list
function dropdownListClose() {
    const dropdownActuallyOpen = document.querySelectorAll(".dropdown-open");
    for (let i = 0; i < dropdownActuallyOpen.length; i++) {
        dropdownActuallyOpen[i].classList.remove("dropdown-open");
    }
}

function createDropdownList() {   

    // Display ingredients list
    const dropdownIngredientsList = document.querySelector(".ingredients .filter-list");
        const ulIngredients = document.createElement('ul');    
        allIngredients
        .filter((ingredient, index) => allIngredients.indexOf(ingredient) === index)
        .forEach(ingredient => {
            const item = document.createElement("li");
            item.textContent = ingredient;
            ulIngredients.appendChild(item);
        })
        dropdownIngredientsList.appendChild(ulIngredients);

    // Display appliances list
    const dropdownAppliancesList = document.querySelector(".appliances .filter-list");
        const ulAppliances = document.createElement('ul');
        allAppliances
        .filter((appliance, index) => allAppliances.indexOf(appliance) === index)
        .forEach(appliance => {
            const item = document.createElement("li");
            item.textContent = appliance;
            ulAppliances.appendChild(item);
        })
        dropdownAppliancesList.appendChild(ulAppliances);

    // Display ustensils list
    const dropdownUstensilsList = document.querySelector(".ustensils .filter-list");
        const ulUstensils = document.createElement('ul');
        allUstensils
        .filter((ustensil, index) => allUstensils.indexOf(ustensil) === index)
        .forEach(ustensil => {
            const item = document.createElement("li");
            item.textContent = ustensil;
            ulUstensils.appendChild(item);
        })
        dropdownUstensilsList.appendChild(ulUstensils);
}

function updateDropdownLists() {
    console.log("dropdown updated")
}



