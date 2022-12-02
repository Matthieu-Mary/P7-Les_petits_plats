async function getRecipes() {
    const response = await fetch("../data/recipes.json")
    .then(res => res.json())
    .then(data => {
        const recipes = data.recipes;
        return recipes
    })
    .catch(err => console.log(err))

    return response
}

