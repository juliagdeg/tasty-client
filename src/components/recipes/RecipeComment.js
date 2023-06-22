import { useState } from "react";
import { createRecipeComment } from "../../managers/RecipeManager";
import { useNavigate, useParams } from "react-router-dom";
import "./Comment.css"

// define the id in useParam
export const Comment = () => {
    const navigate = useNavigate();
    const { id } = useParams()

    const [newComment, setNewComment] = useState({
        content: "",
        postdate: new Date().toISOString().slice(0,10)
    });

    return (
        <div className="omnipotent-container">
        <form className="form-style form-addons">
            <div>
            <label>
                Make a Comment
            </label>
            <input
                required autoFocus
                type="textarea"
                className="form-control"
                placeholder="Got a spicy take?"
                value={newComment.content}
                onChange={(evt) => {
                    const copy = {...newComment};
                    copy.content = evt.target.value;
                    setNewComment(copy)
                }}
            />
            </div>
            <div>
            <label htmlFor="date">Comment Date: </label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="date here"
                        value={newComment.postdate}
                        onChange={
                            (evt) => {
                                const copy = {...newComment}
                                copy.postdate = evt.target.value
                                setNewComment(copy)
                            }
                        } />
            </div>
            <button
                onClick={(evt) => {
                    evt.preventDefault();
                    createRecipeComment(id, newComment)
                        .then(() => navigate("/recipes"))
                        .catch((error) => console.error(error));
                }}
                className="form_button">
                    Post Comment
            </button>
        </form>
        </div>
    )
}