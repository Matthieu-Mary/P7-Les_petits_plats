function dropdownListToggle(e) {
    const currentFilter = e.currentTarget.parentNode.parentNode;
    if(currentFilter.classList.contains("dropdown-open")) {
        dropdownListClose(currentFilter);
    } else {
        currentFilter.classList.add("dropdown-open")
    }
}

function dropdownListOpen(e) {
    const currentFilter = e.currentTarget;
    currentFilter.classList.add("dropdown-open");

    // Display ingredients list
    if (currentFilter.classList.contains("ingredients")) {
        const dropdownIngredientsList = document.querySelector(".ingredients .filter-list");
        const ul = document.createElement('ul');    
        allIngredients.forEach(ingredient => {
            const item = document.createElement("li");
            item.textContent = ingredient;
            ul.appendChild(item);
        })
        dropdownIngredientsList.appendChild(ul);
    }

    // Display appliances list
    if (currentFilter.classList.contains("appliances")) {
        const dropdownIngredientsList = document.querySelector(".appliances .filter-list");
        const ul = document.createElement('ul');
        allAppliances.forEach(appliance => {
            const item = document.createElement("li");
            item.textContent = appliance;
            ul.appendChild(item);
        })
        dropdownIngredientsList.appendChild(ul);
    }

    // Display ustensils list
    if (currentFilter.classList.contains("ustensils")) {
        const dropdownIngredientsList = document.querySelector(".ustensils .filter-list");
        const ul = document.createElement('ul');
        allUstensils.forEach(ustensil => {
            const item = document.createElement("li");
            item.textContent = ustensil;
            ul.appendChild(item);
        })
        dropdownIngredientsList.appendChild(ul);
    }
}

function dropdownListClose(currentFilter) {
    currentFilter.classList.remove("dropdown-open");
    const list = currentFilter.querySelector('.filter-list');
    list.innerHTML = "";
}

function createDropdownListItems() {
    console.log("Ici la liste des items")
}

function getDropdownList() {
    const ingredientsList = document.querySelector(".ingredients .dropdown-filters");
    const appliancesList = document.querySelector(".appliances .dropdown-filters");
    const ustensilsList = document.querySelector(".ustensils .dropdown-filters");
    console.log("dans liste")
}


// setTimeout(() => console.log(allUstensils), 100)


