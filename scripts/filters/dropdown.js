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
        createDropdownList(currentFilter)
    } 
}

// Close filters list
function dropdownListClose() {
    const dropdownActuallyOpen = document.querySelectorAll(".dropdown-open");
    for (let i = 0; i < dropdownActuallyOpen.length; i++) {
        dropdownActuallyOpen[i].classList.remove("dropdown-open");
    }
}

function createDropdownList(currentFilter) {   
    console.log("creation")
    // Display ingredients list
    const dropdownIngredientsList = document.querySelector(".ingredients .filter-list");
    if (currentFilter.classList.contains("ingredients")) {
        const ul = document.createElement('ul');    
        allIngredients
        .filter((ingredient, index) => allIngredients.indexOf(ingredient) === index)
        .forEach(ingredient => {
            const item = document.createElement("li");
            item.textContent = ingredient;
            ul.appendChild(item);
        })
        dropdownIngredientsList.appendChild(ul);
    }

    // Display appliances list
    const dropdownAppliancesList = document.querySelector(".appliances .filter-list");
    if (currentFilter.classList.contains("appliances")) {
        const ul = document.createElement('ul');
        allAppliances
        .filter((appliance, index) => allAppliances.indexOf(appliance) === index)
        .forEach(appliance => {
            const item = document.createElement("li");
            item.textContent = appliance;
            ul.appendChild(item);
        })
        dropdownAppliancesList.appendChild(ul);
    }

    // Display ustensils list
    const dropdownUstensilsList = document.querySelector(".ustensils .filter-list");
    if (currentFilter.classList.contains("ustensils")) {
        const ul = document.createElement('ul');
        allUstensils
        .filter((ustensil, index) => allUstensils.indexOf(ustensil) === index)
        .forEach(ustensil => {
            const item = document.createElement("li");
            item.textContent = ustensil;
            ul.appendChild(item);
        })
        dropdownUstensilsList.appendChild(ul);
    } 

    dropdownIngredientsList.innerHTML= dropdownAppliancesList.innerHTML= dropdownUstensilsList.innerHTML= "";

}

// function getDropdownList() {

//     const ingredientsList = document.querySelector(".ingredients .dropdown-filters");
//     const appliancesList = document.querySelector(".appliances .dropdown-filters");
//     const ustensilsList = document.querySelector(".ustensils .dropdown-filters");
//     console.log("dans liste")
// }



