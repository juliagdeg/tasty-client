// import { useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Authorized } from "./views/Authorized"
import { Route, Routes } from "react-router-dom"
import { RecipeList } from "./components/recipes/RecipeList"
import "./Tasty.css"


export const TastyTrails = () => {

  const setToken = (auth_token) => {
		let token = {
			"token": auth_token
		}
		localStorage.setItem('tasty_user', JSON.stringify(token))
	}

      return <>
        <Routes>
            <Route path="/" element={<RecipeList /> } />
            <Route path="/login" element={<Login setToken={setToken} />} />
              <Route path="/register" element={<Register setToken={setToken} />} />
              
            <Route path="*" element={
              <Authorized>
                <>
                  <NavBar />
                  <ApplicationViews />
                </>
              </Authorized>
          
            } />

        </Routes>
    </>
}
