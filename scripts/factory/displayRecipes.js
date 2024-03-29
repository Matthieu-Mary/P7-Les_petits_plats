const cardContainer = document.querySelector(".recipes");

function createCard(recipes) {

    recipes.forEach((recipe) => {
      const {
        name,
        ingredients,
        time,
        description,
      } = recipe;

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
      cardTimeImage.setAttribute("src", "assets/images/horloge.svg");
      cardTimeImage.setAttribute("alt", "watch");
      const cardTime = document.createElement("span");
      cardTime.textContent = `${time} min`;
      const containerListAndDesc = document.createElement("div");
      containerListAndDesc.classList.add("container-list-desc");
      const ingredientsList = document.createElement("ul");
      ingredientsList.classList.add("ingredients-list");
  
      ingredients.forEach((ingredient) => {

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



