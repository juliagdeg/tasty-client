// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getRecipeById } from "../../managers/RecipeManager";

// export const Recipe = () => {
//     const [recipe, setRecipe] = useState({})
//     const { recipeId } = useParams()

//     const fetchRecipe = () => {
//         getRecipeById(recipeId)
//             .then((res) => setRecipe(res))
//     }

//     useEffect(
//         () => {
//             fetchRecipe()
//     },
//     [recipeId]
//     )

//     return <>
//     <section className="recipe">
        // <h3>Recipe: {recipe.name}</h3>
        // <div>Posted by {recipe?.author?.full_name}</div>
        // <div>Category: {recipe?.category?.name}</div>\
        // <div>Posted on: {recipe.create_date}</div>
        // <div>Cook Time: {recipe.cook_time}</div>
        // <div>Prep Time: {recipe.prep_time}</div>
        // <div>Total Time: {recipe.total_time}</div>
        // <div>Ingredients: {recipe.ingredients}</div>
        // <div>Preparation: {recipe.preparation}</div>
//     </section>
//     </>
// }
//   const { recipeId } = useParams();
//   const [recipeObj, setRecipeObj] = useState({});

//   useEffect(() => {
//     const fetchRecipe = () => {
//       getRecipeById(recipeId).then((res) => {
//         setRecipeObj(res); // Update the recipe object using the fetched data
//       });
//     };
//     fetchRecipe();
//   }, [recipeId]);

//   return (
//     <>
//       <section className="recipe">
//         <h3 className="recipe_name">{recipeObj.name}</h3>
//         <div className="recipe_author">{recipeObj.author}</div>
//         <div className="recipe_date">Posted on: {recipeObj.create_date}</div>
//         <div className="recipe_category">Category: {recipeObj.category}</div>
//         <div className="recipe_time">
//           Cook Time: {recipeObj.cook_time}, Prep Time: {recipeObj.prep_time}, Total Time: {recipeObj.total_time}
//         </div>
//         <div className="recipe_ingredients">
//           Ingredients: {recipeObj.ingredients}
//         </div>
//         <div className="recipe_preparation">Preparation: {recipeObj.preparation}</div>
//       </section>
//     </>
//   );
// };
