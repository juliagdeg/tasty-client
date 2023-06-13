export const getAllRecipes = () => {
    return fetch("http://localhost:8000/recipes", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

// export const getRecipeById = (id) => {
//     return fetch(`http://localhost:8000/recipes/${id}`, {
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("auth_token")}`
//         }
//     })
//         .then(res => res.json())
// }

// TO-DO: Add a fetch call to get recipes by category
// TO-DO: Add a fetch call to get recipes by user