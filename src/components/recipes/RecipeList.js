import { useEffect, useState } from "react";
import { getAllRecipes } from "../../managers/RecipeManager";
import { useNavigate } from "react-router-dom";

export const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getAllRecipes().then(data => setRecipes(data))
  }, [])

  return (
    <>
    <article className="recipes">
        {
            recipes.map(recipe => {
                return <section key={`recipe--${recipe.id}`} className="recipe">
                    <h3>Recipe: {recipe.name}</h3>
                    <div>Posted by {recipe?.author?.username}</div>
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
    <button className="actions__create"
        onClick={() => navigate("/recipes/create")}>Share a Recipe</button>
    </>
  )
};
