async function displayRecipes() {
    const recipes = await getRecipes();
    recipes.forEach(recipe => {
        createCard(recipe);
    })
}
displayRecipes();

function createCard(recipe) {
    const cardContainer = document.querySelector(".recipes");
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = recipe;

    const card = document.createElement("article");
    card.classList.add("card");

    const fakeImage = document.createElement("div");
    fakeImage.classList.add("fake-image");

    const cardInfos = document.createElement("div");
    cardInfos.classList.add("card-infos")


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
    // >>> A REVOIR <<<
    ingredientsList.textContent = ingredients[0].ingredient;
    const cardDescription = document.createElement("p")
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
}


