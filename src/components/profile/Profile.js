import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../../managers/UserManager';
import { deleteRecipe } from '../../managers/RecipeManager';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>My Tasty Recipes</h1>
      <div>
        {profile.map(recipe => (
          <li key={recipe.id}>
            <h3>Recipe: {recipe.name}</h3>
            <div>Posted by {recipe.author.username}</div>
            <div>Rating: {recipe.average_rating}</div>
            <div>Category: {recipe.category.name}</div>
            <div>Posted on: {recipe.create_date}</div>
            <div>Cook Time: {recipe.cook_time}</div>
            <div>Prep Time: {recipe.prep_time}</div>
            <div>Total Time: {recipe.total_time}</div>
            <div>Ingredients: {recipe.ingredients}</div>
            <div>Preparation: {recipe.preparation}</div>
            <div>Comments:</div>
            <ul>
              {recipe.comments.map((comment) => (
                <li key={comment.id}>
                  {comment.content}
                </li>
              ))}
            </ul>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
            <Link to={`/recipes/edit/${recipe.id}`}>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};
