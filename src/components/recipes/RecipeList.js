import { useEffect, useState } from "react";
import { getAllRecipes } from "../../managers/RecipeManager";
import { useNavigate } from "react-router-dom";
import Modal from "./RecipeRating";
import "./Recipe.css";

export const RecipeList = ({ initialModalOpen }) => {
  const [recipes, setRecipes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(initialModalOpen);
  const navigate = useNavigate();

  useEffect(() => {
    getAllRecipes().then((data) => setRecipes(data));
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="header-container">
        <h2 className="homepage_header">Featured Recipes</h2>
        <button
          className="form_button"
          onClick={() => navigate("/recipes/create")}
        >
          Share a Recipe
        </button>
      </div>
      <article className="recipes">
        {recipes.map((recipe) => (
          <section key={`recipe--${recipe.id}`} className="recipe">
            <header className="recipe_header">{recipe.name}</header>
            <div className="recipe_text">Posted by {recipe?.author?.username} | {recipe.create_date} | Rated: {recipe.average_rating}/5 TastyStars</div>
            <div className="recipe_text">Category: {recipe?.category?.name}</div>
            <div className="recipe_text">Cook Time: {recipe.cook_time} | Prep Time: {recipe.prep_time} </div>
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
            <div className="button-container">
              <button onClick={openModal} className="fill-button">
                <span class="button-text">Rate Recipe</span>
                <div class="fill"></div>
              </button>
                {isModalOpen && (
                  <Modal isOpen={isModalOpen} onClose={closeModal} />
                )}
              <button className="fill-button" type="edit__button"
                onClick={() => {
                navigate(`/recipes/${recipe.id}/recipe-comments`);
                }}
              >
                <span class="button-text">Comment</span>
                <div class="fill"></div>
              </button>
            </div>
          </section>
        ))}
      </article>
    </>
  );
};
