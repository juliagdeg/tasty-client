import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { RecipeList } from "../components/recipes/RecipeList"
import { RecipeForm } from "../components/recipes/RecipeForm"
import { Profile } from "../components/profile/Profile"


export const ApplicationViews = ({ token, setToken }) => {
    return <>
        <Routes>
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register setToken={setToken} />} />
            <Route element={<Authorized token={token} />}>
                {/* Add Routes here */}
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/recipes/create" element={<RecipeForm /> } />
                <Route path="/tasty-users/:userId" element={<Profile /> } />
            </Route>
        </Routes>
    </>
}
