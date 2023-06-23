import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../../managers/UserManager';
import { deleteRecipe } from '../../managers/RecipeManager';
import { Link } from 'react-router-dom';
import './Profile.css'

export const Profile = () => {
  const [profile, setMyProfile] = useState([]);

  useEffect(() => {
    getUserProfile()
      .then(data => setMyProfile(data))
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  const handleDelete = (recipeId) => {
    deleteRecipe(recipeId)
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <>
    <h2 className='profile_header'>My Recipes</h2>
    <div className='recipes'>  
      <div className='recipe'>
        {profile.map(recipe => (
          <section key={recipe.id}>
            <header className='recipe_header'>
              {recipe.name}
              {recipe.image_path && <img src={recipe.image_path} alt="Recipe" />}
            </header>
            <div className='recipe_text'>Posted by {recipe.author.username} | {recipe.create_date} | Rated: {recipe.average_rating}/5 TastyStars | {recipe.category.name}</div>
            <div className="recipe_text">{recipe.summary}</div>
            <div className="recipe_text">Cook Time: {recipe.cook_time} | Prep Time: {recipe.prep_time} </div>
            <div className='recipe_text'>Total Time: {recipe.total_time}</div>
            <div className='recipe_text'>Ingredients: {recipe.ingredients}</div>
            <div className='recipe_text'>Preparation: {recipe.preparation}</div>
            <div className='comment_header'>Comments:</div>
            <div className='comment_container'>
              {recipe.comments.map((comment) => (
                <div key={comment.id} className='comment'>
                  {comment.content}
                </div>
              ))}
            </div>
            <div className="button-container">
            <button onClick={() => handleDelete(recipe.id)} className="fill-button">
              <span class="button-text">Delete</span>
              <div class="fill"></div>
            </button>
            <Link to={`/recipes/edit/${recipe.id}`}>
              <button className="fill-button">
              <span class="button-text">Edit</span>
              <div class="fill"></div>
              </button>
            </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
    </>
  );
};