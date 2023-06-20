// RatingForm.js
import { useState } from "react";
import { rateRecipe } from "../../managers/RecipeManager";
import { useNavigate, useParams } from "react-router-dom";

export const RatingForm = () => {
    const navigate = useNavigate();
    const { id } = useParams()

    const [newScore, setNewScore] = useState({
        score: 0
    });

    return (
        <form className="rating_form">
            <label>
                Score: 
            </label>
            <input 
                required autoFocus
                type="number"
                placeholder="Rate 1-5"
                value={newScore.score} 
                onChange={(evt) => {
                const copy = { ...newScore };
                copy.score = parseInt(evt.target.value);
                setNewScore(copy);
                }}
            />
            <button
                onClick={(evt) => {
                evt.preventDefault();
                rateRecipe(id, newScore)
                    .then(() => navigate("/recipes"))
                    .catch((error) => console.error(error));
                }}
            className="btn btn-primary">
                Rate Recipe
            </button>
        </form>
    );
};


//   const handleScoreChange = (e) => {
//     setScore(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!score) {
//       console.error("Score is required");
//       return;
//     }

//     rateRecipe(id, score)
//       .then((data) => {
//         console.log("Recipe rated successfully", data);
//         window.location.href = "/recipes";
//       })
//       .catch((error) => {
//         console.error("Failed to rate the recipe.", error);
//       });
//   };