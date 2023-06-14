import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createRecipe } from "../../managers/RecipeManager"

export const RecipeForm = () => {
    const navigate = useNavigate()

    const [currentRecipe, setCurrentRecipe] = useState({
        name: "",
        categoryId: 0,
        image_path: "",
        summary: "",
        cook_time: "",
        prep_time: "",
        total_time: "",
        ingredients: "",
        preparation: "",
        create_date: new Date().toISOString().slice(0,10)
    })

}