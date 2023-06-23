import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { RecipeList } from "../components/recipes/RecipeList"
import { RecipeForm } from "../components/recipes/RecipeForm"
import { RecipeEdit } from "../components/recipes/RecipeEdit"
import { Profile } from "../components/profile/Profile"
// import { RatingForm } from "../components/recipes/RecipeRating"
import { Comment } from "../components/recipes/RecipeComment"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                {/* Add Routes here */}
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/recipes/create" element={<RecipeForm /> } />
                <Route path="/recipes/edit/:id" element={<RecipeEdit /> } />
                {/* <Route path="/recipes/:id/rate-recipe" element={<RatingForm />} /> */}
                <Route path="/recipes/:id/recipe-comments" element={<Comment />} />
                <Route path="/profile" element={<Profile /> } />
            </Route>
        </Routes>
    </>
}
