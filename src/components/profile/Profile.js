import React, { useState, useEffect } from 'react';
import { getUserProfile} from '../../managers/UserManager';
import { deleteRecipe } from '../../managers/RecipeManager';
import { Link } from 'react-router-dom';


export const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  // const navigate = useNavigate()
  // const { recipeId }= useParams()

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await getUserProfile();
      setProfileData(response);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleDelete = (recipeId) => {
    deleteRecipe(recipeId)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error);
      });
  };

  return (
    <div>
      <h1>User Profile</h1>
      {profileData ? (
        <div>
          <p>Username: {profileData.author.username}</p>
          <p>First Name: {profileData.author.first_name}</p>
          <p>Last Name: {profileData.author.last_name}</p>

          <h2>Recipes</h2>
          {profileData.recipe ? (
            <ul>
              <li key={profileData.recipe.id}>
                <h3>{profileData.recipe.name}</h3>
                <p>Posted on {profileData.recipe.create_date}</p>
                <p>{profileData.recipe.image_path}</p>
                <p>Category: {profileData.recipe.category.name}</p>
                <p>Cook Time: {profileData.recipe.cook_time}</p>
                <p>Prep Time: {profileData.recipe.prep_time}</p>
                <p>Total Time: {profileData.recipe.total_time}</p>
                <p>Summary: {profileData.recipe.summary}</p>
                <p>Ingredients: {profileData.recipe.ingredients}</p>
                <p>Preparation: {profileData.recipe.preparation}</p>
                <button onClick={() => handleDelete(profileData.recipe.id)}>
                  Delete
                </button>
                <Link to={`/recipes/edit/${profileData.recipe.id}`}>
                  <button>
                    Edit
                  </button>
                </Link>
              </li>
            </ul>
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};
