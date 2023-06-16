import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../../managers/UserManager';

export const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {profileData ? (
        <div>
          <p>Username: {profileData?.author?.username}</p>
          <p>First Name: {profileData?.author?.first_name}</p>
          <p>Last Name: {profileData?.author?.last_name}</p>

          <h2>Recipes</h2>
          {profileData.recipes && profileData.recipes.length > 0 ? (
            <ul>
              {profileData.recipes.map((recipe) => (
                <li key={recipe.id}>
                  <h3>{recipe.name}</h3>
                  <p>Category: {recipe.category}</p>
                  {/* Render other recipe fields */}
                </li>
              ))}
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
