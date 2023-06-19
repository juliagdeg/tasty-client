// import { useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
// import { Login } from "./components/auth/Login"
// import { Register } from "./components/auth/Register"
// import { Authorized } from "./views/Authorized"
// import { Route, Routes } from "react-router-dom"
// import { RecipeList } from "./components/recipes/RecipeList"
import "./Tasty.css"


export const TastyTrails = () => {
  return <>
    <NavBar />
    <ApplicationViews />
  </>
}