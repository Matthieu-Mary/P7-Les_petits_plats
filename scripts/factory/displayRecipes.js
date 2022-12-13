const cardContainer = document.querySelector(".recipes");
let allRecipes;

// GET ALL ARRAYS DISPLAYED BY FLTERS BUTTON AND SORT THEM TO REMOVE DUBBLES
// Ingredients
const allIngredients = [];
// Appliances
const allAppliances = [];
// Ustensils
const allUstensils = [];

async function initRecipes() {
  const recipes = await getRecipes();
  allRecipes = [...recipes];
  createCard(allRecipes);
  createDropdownList();
}
initRecipes();

function createCard(recipes) {

    recipes.forEach((recipe) => {
      const {
        name,
        ingredients,
        time,
        description,
        appliance,
        ustensils,
      } = recipe;
  
  
      // PUSH TO APPLIANCES ARR
      allAppliances.push(appliance);
      // PUSH TO USTENSILS ARR
      ustensils.forEach(ustensil => allUstensils.push(ustensil))
      
  
      const card = document.createElement("article");
      card.classList.add("card");
  
      const fakeImage = document.createElement("div");
      fakeImage.classList.add("fake-image");
  
      const cardInfos = document.createElement("div");
      cardInfos.classList.add("card-infos");
  
      const containerTitleAndTime = document.createElement("div");
      containerTitleAndTime.classList.add("container-title-time");
      const cardTitle = document.createElement("h2");
      cardTitle.textContent = name;
      const cardTimeContainer = document.createElement("div");
      cardTimeContainer.classList.add("card-time-container");
      const cardTimeImage = document.createElement("img");
      cardTimeImage.setAttribute("src", "../assets/images/horloge.svg");
      const cardTime = document.createElement("span");
      cardTime.textContent = `${time} min`;
      const containerListAndDesc = document.createElement("div");
      containerListAndDesc.classList.add("container-list-desc");
      const ingredientsList = document.createElement("ul");
      ingredientsList.classList.add("ingredients-list");
  
      ingredients.forEach((ingredient) => {
        // ------ PUSH TO INGREDIENTS ARR ------
        allIngredients.push(ingredient.ingredient)
        // -----------------------------
        const recipeIngredient = document.createElement("li");
        const ingredientName = document.createElement("span");
        ingredientName.classList.add("ingredient-name");
        ingredientName.textContent = `${ingredient.ingredient} : `;
        recipeIngredient.appendChild(ingredientName);
        ingredientsList.appendChild(recipeIngredient);
        const ingredientValue = document.createElement("span");
        ingredientValue.classList.add("ingredient-value");
        const ingredientQuantity = ingredient.quantity ? ingredient.quantity : "";
        const ingredientUnit = ingredient.unit ? ingredient.unit : "";
        ingredientValue.textContent = `${ingredientQuantity} ${ingredientUnit}`;
        recipeIngredient.appendChild(ingredientValue);
      });
  
      const cardDescription = document.createElement("p");
      cardDescription.classList.add("description");
      cardDescription.textContent = description;
  
      cardTimeContainer.appendChild(cardTimeImage);
      cardTimeContainer.appendChild(cardTime);
      containerTitleAndTime.appendChild(cardTitle);
      containerTitleAndTime.appendChild(cardTimeContainer);
      containerListAndDesc.appendChild(ingredientsList);
      containerListAndDesc.appendChild(cardDescription);
      cardInfos.appendChild(containerTitleAndTime);
      cardInfos.append(containerListAndDesc);
      card.appendChild(fakeImage);
      card.appendChild(cardInfos);
      cardContainer.appendChild(card);
    });
}


// <----- FILTER RECIPES WITH SEARCH INPUT ----->
const search = document.querySelector("#search input");
search.addEventListener("input", filterRecipesBySearchInput);

function filterRecipesBySearchInput(e) {
  cardContainer.innerHTML = "";

  const searchedRecipe = e.target.value.toLowerCase().trim();

  // Filter by name, description and ingredients
  const filteredRecipes = allRecipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().trim().includes(searchedRecipe) ||
      recipe.description.toLowerCase().trim().includes(searchedRecipe) ||
      recipe.ingredients.forEach(ingredient => ingredient.ingredient.toLowerCase().trim().includes(searchedRecipe))
  );

  // Display message if no recipes found
  if (filteredRecipes.length === 0) {
    const failMessage = document.createElement("h3");
    failMessage.textContent = "Aucune recette ...";
    cardContainer.appendChild(failMessage)
  }

  createCard(filteredRecipes);
}

