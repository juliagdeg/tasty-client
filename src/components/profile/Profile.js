import { useEffect, useState } from "react";
import { getUserById } from "../../managers/UserManager";
import { getAllRecipes } from "../../managers/RecipeManager";
import { useParams } from "react-router-dom";

export const Profile = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [userRecipes, setUserRecipes] = useState([]);
    const { userId } = useParams();

    console.log("userId", userId)
  
    useEffect(() => {
        console.log("Fetch user by id:", userId);
      getUserById(userId).then((res) => setCurrentUser(res));
    }, []);
  
    useEffect(() => {
      getAllRecipes().then((data) => {
        setRecipes(data);
      });
    }, []);
  
    useEffect(() => {
      const myRecipes = recipes.filter((recipe) => recipe.author === userId);
      setUserRecipes(myRecipes);
    }, [recipes, userId]);
  
    return (
      <>
        <h2>My Profile</h2>
        <section key={`tasty-user--${userId}`} className="">
          <p>Username: {currentUser.user?.username}</p>
          <p>First Name: {currentUser.user?.first_name}</p>
          <p>Last Name: {currentUser.user?.last_name}</p>
          <p>Profile Pic: {currentUser?.profile_image_url}</p>
          <p>Date Joined: {currentUser?.created_on}</p>
          <p>Bio: {currentUser?.bio}</p>
        </section>
        <div>
          {userRecipes.map((recipe) => (
            <section key={`recipe--${recipe.id}`} className="my_recipe">
              <h3>Recipe: {recipe.name}</h3>
              <div>Posted by {recipe?.author?.user?.username}</div>
              <div>Category: {recipe?.category?.name}</div>
              <div>Posted on: {recipe.create_date}</div>
              <div>Cook Time: {recipe.cook_time}</div>
              <div>Prep Time: {recipe.prep_time}</div>
              <div>Total Time: {recipe.total_time}</div>
              <div>Ingredients: {recipe.ingredients}</div>
              <div>Preparation: {recipe.preparation}</div>
            </section>
          ))}
        </div>
      </>
    );
  };