import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipeById, editRecipe } from "../../managers/RecipeManager";
import { getCategories } from "../../managers/CategoryManager";

export const RecipeEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [recipe, setRecipe] = useState({
    name: "",
    category: "",
    image_path: "",
    summary: "",
    cook_time: "",
    prep_time: "",
    total_time: "",
    ingredients: "",
    preparation: "",
    create_date: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchRecipeAndCategories();
  }, []);

  const fetchRecipeAndCategories = async () => {
    try {
      const [recipeData, categoriesData] = await Promise.all([
        getRecipeById(id),
        getCategories(),
      ]);

      setRecipe(recipeData);
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching recipe and categories:", error);
    }
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    editRecipe(recipe, id)
      .then(() => navigate("/profile"))
      .catch((error) => {
        console.error("Error editing recipe:", error);
      });
  };

  return (
    <div>
    <h3>Edit Recipe</h3>
    <form className="recipe_form" onSubmit={handleSubmit}>
      <fieldset>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Please enter the name of the recipe..."
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            value={recipe.category}
            className="form-control"
            name="category"
            onChange={handleInputChange}
          >
            <option value="">Choose</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="image_path">Image URL:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Paste your image URL here..."
            name="image_path"
            value={recipe.image_path}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="summary">Summary of Recipe:</label>
          <textarea
            required
            autoFocus
            className="form-control"
            placeholder="Provide a fun blurb about your recipe!"
            name="summary"
            value={recipe.summary}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="cook_time">Cook Time:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Please enter the cook time..."
            name="cook_time"
            value={recipe.cook_time}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="prep_time">Prep Time:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Please enter the prep time..."
            name="prep_time"
            value={recipe.prep_time}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="total_time">Total Time:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Please enter the total time..."
            name="total_time"
            value={recipe.total_time}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="ingredients">Ingredients and Measurements:</label>
          <textarea
            required
            autoFocus
            className="form-control"
            placeholder="Please enter the required ingredients and measurements..."
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="preparation">Preparation:</label>
          <textarea
            required
            autoFocus
            className="form-control"
            placeholder="Please enter step-by-step instructions!"
            name="preparation"
            value={recipe.preparation}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="create_date">Post Date:</label>
          <input
            required
            autoFocus
            type="date"
            className="form-control"
            name="create_date"
            value={recipe.create_date}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Save Recipe
      </button>
    </form>
    </div>
  );  
};
