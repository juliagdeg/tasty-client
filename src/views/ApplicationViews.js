import { Outlet, Route, Routes } from "react-router-dom"
// import { Login } from "../components/auth/Login"
// import { Register } from "../components/auth/Register"
// import { Authorized } from "./Authorized"
import { RecipeList } from "../components/recipes/RecipeList"
import { RecipeForm } from "../components/recipes/RecipeForm"
import { Profile } from "../components/profile/Profile"


export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Outlet />
                </>
            }>
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/recipes/create" element={<RecipeForm /> } />
                <Route path="/profile" element={<Profile /> } />
            </Route>
        </Routes>
    )
}
