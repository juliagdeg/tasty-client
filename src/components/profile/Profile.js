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
          <li key={recipe.id}>
            <header className='recipe_header'>Recipe: {recipe.name}</header>
            <div className='recipe_text'>Posted by {recipe.author.username}</div>
            <div className='recipe_text'>Rating: {recipe.average_rating}</div>
            <div className='recipe_text'>Category: {recipe.category.name}</div>
            <div className='recipe_text'>Posted on: {recipe.create_date}</div>
            <div className='recipe_text'>Cook Time: {recipe.cook_time}</div>
            <div className='recipe_text'>Prep Time: {recipe.prep_time}</div>
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
          </li>
        ))}
      </div>
    </div>
    </>
  );
};