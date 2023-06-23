import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import "./Auth.css"

export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const bio = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "bio": bio.current.value,
                "email": email.current.value,
                "password": password.current.value
            }

            registerUser(newUser)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("auth_token", res.token)
                        navigate("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputUsername">Username</label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email </label>
                    <input ref={email} type="email" name="password" className="form-control" placeholder="Email" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password  </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password  </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Give us a blurb! </label>
                    <textarea ref={bio} name="bio" className="form-control" placeholder="Give us a taste of what you're about..." />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="form_button" type="submit">Register</button>
                </fieldset>
            </form>
            {/* <section className="link--register">
            Already registered? 
                <button className="form_button-register">
                    <Link to="/login">Login</Link>
                </button>
            </section> */}
        </main>
    )
}