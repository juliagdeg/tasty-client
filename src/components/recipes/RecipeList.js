import { useEffect, useState } from "react";
import { getAllRecipes } from "../../managers/RecipeManager";
import { useNavigate } from "react-router-dom";
import "./Recipe.css"

export const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getAllRecipes().then(data => setRecipes(data))
  }, [])

  // TODO: interpolate username above each comment
  // TODO: add a like/unlike feature on comment

  return (
    <>
    <h2 className="homepage_header">Featured Recipes</h2>
    <button className="top-bottom_button"
        onClick={() => navigate("/recipes/create")}>
          Share a Recipe
    </button>
      <article className="recipes">
        {
            recipes.map(recipe => {
                return <section key={`recipe--${recipe.id}`} className="recipe">
                    <header className="recipe_header">Recipe: {recipe.name}</header>
                    <div className="recipe_text">Posted by {recipe?.author?.username}</div>
                    <div className="recipe_text">Rating {recipe.average_rating}</div>
                    <div className="recipe_text">Category: {recipe?.category?.name}</div>
                    <div className="recipe_text">Posted on: {recipe.create_date}</div>
                    <div className="recipe_text">Cook Time: {recipe.cook_time}</div>
                    <div className="recipe_text">Prep Time: {recipe.prep_time}</div>
                    <div className="recipe_text">Total Time: {recipe.total_time}</div>
                    <div className="recipe_text">Ingredients: {recipe.ingredients}</div>
                    <div className="recipe_text">Preparation: {recipe.preparation}</div>
                    <div className="comment_header">Comments</div>
                    <div className="comment_container">
                      {recipe.comments.map((comment) => (
                        <div key={comment.id} className="comment">
                          {comment.content}
                        </div>
                      ))}
                    </div>
                    <button className="left-right_button" type="edit__button"
                      onClick={() => {
                        navigate(`/recipes/${recipe.id}/rate-recipe`)}}>
                        Rate this Recipe
                    </button>
                    <button className="left-right_button" type="edit__button"
                      onClick={() => {
                        navigate(`/recipes/${recipe.id}/recipe-comments`)}}>
                          Comment
                    </button>
                </section>
            })
        }
    </article>
    </>
  )
};
