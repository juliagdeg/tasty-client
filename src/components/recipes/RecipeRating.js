import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import { rateRecipe } from "../../managers/RecipeManager"

export const RatingForm = () => {
    const [score, setScore] = useState("");

    const handleScoreChange = (e) => {
        setScore(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation on the score
        const ratingData = {
            score: rating,
        };
        
        if (!score) {
            // Handle validation error
            return;
        }

        rateRecipe(recipeId, score)
            .then(() => {
                console.error(error);
        })
    };

return (
    <form onSubmit={handleSubmit}>
        <label>
            Score:
            <input type="number" value={score} onChange={handleScoreChange} />
        </label>
        <button type="submit">Rate Recipe</button>
    </form>
    );
}