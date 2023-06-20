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
      body: JSON.stringify({ score: score })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to rate the recipe.");
        }
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  };

// TO-DO: Add a fetch call to get recipes by category
// TO-DO: Add a fetch call to get recipes by user