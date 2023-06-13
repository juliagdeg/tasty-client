import { useEffect, useState } from "react";
import { getAllRecipes } from "../../managers/RecipeManager";

export const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes().then(data => setRecipes(data))
  }, [])

  return (
    <article className="recipes">
        {
            recipes.map(recipe => {
                return <section key={`recipe--${recipe.id}`} className="recipe">
                    <h3>Recipe: {recipe.name}</h3>
                    <div>Posted by {recipe?.author?.full_name}</div>
                    <div>Category: {recipe?.category?.name}</div>\
                    <div>Posted on: {recipe.create_date}</div>
                    <div>Cook Time: {recipe.cook_time}</div>
                    <div>Prep Time: {recipe.prep_time}</div>
                    <div>Total Time: {recipe.total_time}</div>
                    <div>Ingredients: {recipe.ingredients}</div>
                    <div>Preparation: {recipe.preparation}</div>
                </section>
            })
        }
    </article>
  )
};
