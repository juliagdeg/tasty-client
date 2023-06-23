import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createRecipe } from "../../managers/RecipeManager"
import { getCategories } from "../../managers/CategoryManager"
import "./RecipeForm.css"

export const RecipeForm = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    useEffect(
        () => {
            getCategories()
            .then((res) => setCategories(res))
    }, []) // trying this before implementing old logic

    const [newRecipe, setNewRecipe] = useState({
        name: "",
        category: 0,
        image_path: "",
        summary: "",
        cook_time: "",
        prep_time: "",
        total_time: "",
        ingredients: "",
        preparation: "",
        family_style: false,
        create_date: new Date().toISOString().slice(0,10)
    })

    return (
        <div className="omnipotent-container">
        <form className="form-style">
            <h2 className="form_header">Share a tasty dish!</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Please enter the name of the recipe..."
                        value={newRecipe.name}
                        onChange={
                            (evt) => {
                                const copy = {...newRecipe}
                                copy.name = evt.target.value
                                setNewRecipe(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label className="dropdown_label" htmlFor="category">How would you categorize this tasty food? </label>
                    <select 
                        value={newRecipe.category} 
                        className="form-control"
                        onChange={(event) => {
                        const copy = {...newRecipe}
                        copy.category = event.target.value
                        setNewRecipe(copy)
                    }
                }>
                    <option value="">Choose</option>
                    {
                        categories.map(
                            (category) => {
                                return <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            }
                        )
                    }
                </select>
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label className="image_path_label" htmlFor="image_path">Please provide an image url:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Paste your url here..."
                        value={newRecipe.image_path}
                        onChange={
                            (event) => {
                                const copy = {...newRecipe}
                                copy.image_path = event.target.value
                                setNewRecipe(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="summary">Summary of Recipe: </label>
                    <textarea
                        type="textarea"
                        className="text_description"
                        placeholder="Provide a fun blurb about your recipe!"
                        value={newRecipe.summary}
                        onChange={
                            (evt) => {
                                const copy = {...newRecipe}
                                copy.summary = evt.target.value
                                setNewRecipe(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="cook_time">Cook Time: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter COOK TIME..."
                        value={newRecipe.cook_time}
                        onChange={
                            (evt) => {
                                const copy = {...newRecipe}
                                copy.cook_time = evt.target.value
                                setNewRecipe(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="prep_time">Prep Time: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter PREP TIME..."
                        value={newRecipe.prep_time}
                        onChange={
                            (evt) => {
                                const copy = {...newRecipe}
                                copy.prep_time = evt.target.value
                                setNewRecipe(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="total_time">Total Time: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter TOTAL TIME..."
                        value={newRecipe.total_time}
                        onChange={
                            (evt) => {
                                const copy = {...newRecipe}
                                copy.total_time = evt.target.value
                                setNewRecipe(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients and Measurements: </label>
                    <textarea
                        type="textarea"
                        className="text_description"
                        placeholder="Please enter your required ingredients"
                        value={newRecipe.ingredients}
                        onChange={
                            (evt) => {
                                const copy = {...newRecipe}
                                copy.ingredients = evt.target.value
                                setNewRecipe(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="preparation">Preparation: </label>
                    <textarea
                        type="textarea"
                        className="text_description"
                        placeholder="Please enter step by step instructions!"
                        value={newRecipe.preparation}
                        onChange={
                            (evt) => {
                                const copy = {...newRecipe}
                                copy.preparation = evt.target.value
                                setNewRecipe(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Post Date: </label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Please enter the post date for your recipe"
                        value={newRecipe.date}
                        onChange={
                            (evt) => {
                                const copy = {...newRecipe}
                                copy.create_date = evt.target.value
                                setNewRecipe(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={(evt) => {
                evt.preventDefault()
                createRecipe(newRecipe)
                .then(() => navigate("/recipes"))
            }} className="form_button">
                Share Your Recipe!
            </button>
        </form>
        </div>
    )
}