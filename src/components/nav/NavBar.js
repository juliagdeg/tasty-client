import { Link, useNavigate } from "react-router-dom"
import tasty_trails from "./tasty_trails.png"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <img className="menu_logo" src={ tasty_trails } alt="logo" />
            <div className="nav_link_container">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/recipes">Homepage</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/profile">My Profile</Link>
                </li>
                {
                    (localStorage.getItem("auth_token") !== null) ?
                        <li className="nav__item">
                            <Link className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("auth_token")
                                    navigate('/login')
                                }}>Logout</Link>
                        </li> :
                    <>
                        <li className="navbar__item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }
            </div>        
        </ul>
    )
}