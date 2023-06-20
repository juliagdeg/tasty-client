export const getAllRecipes = () => {
    return fetch("http://localhost:8000/recipes", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const getRecipeById = (id) => {
    return fetch(`http://localhost:8000/recipes/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const createRecipe = (recipe) => {
    return fetch("http://localhost:8000/recipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        } ,
        body: JSON.stringify(recipe)
    })
        .then(res => res.json())
}

export const deleteRecipe = (id) => {
    return fetch(`http://localhost:8000/recipes/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
      },
    });
  };

export const editRecipe = (recipe, id) => {
    return fetch(`http://localhost:8000/recipes/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(recipe)
    })
}

export const rateRecipe = (recipeId, score) => {
    return fetch(`http://localhost:8000/recipes/${recipeId}/rate-recipe`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
      },
      body: JSON.stringify({score: score.score})
  })
};

// TODO: Make a fetch call for recipe comments
export const createRecipeComment = (recipeId, comment) => {
    return fetch(`http://localhost:8000/recipes/${recipeId}/recipe-comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(comment)
    })
}

// TO-DO: Add a fetch call to get recipes by category
// TO-DO: Add a fetch call to get recipes by user