import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../managers/AuthManager";
import "./Auth.css";
import Lottie from "react-lottie";
import animationData from "./food_animation.json";

export const Login = () => {
  const username = useRef();
  const password = useRef();
  const invalidDialog = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      password: password.current.value,
    };
    loginUser(user).then((res) => {
      if ("valid" in res && res.valid && "token" in res) {
        localStorage.setItem("auth_token", res.token);
        navigate("/");
      } else {
        invalidDialog.current.showModal();
      }
    });
  };

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button
          className="button--close"
          onClick={(e) => invalidDialog.current.close()}
        >
          Close
        </button>
      </dialog>
      <section className="login_container">
        <form className="form--login" onSubmit={handleLogin}>
        <Lottie
        options={{
          animationData: animationData,
          loop: true,
          autoplay: true,
        }}
        height={300} // Set the desired height of the animation
        width={300} // Set the desired width of the animation
      />
          <h2 className="login__header">Please sign in!</h2>
          <fieldset>
            <label htmlFor="inputUsername">Username </label>
            <input
              ref={username}
              type="username"
              id="username"
              className="form-control"
              placeholder="Username address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword">Password </label>
            <input
              ref={password}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset style={{ textAlign: "center" }}>
            <button className="fill-button" type="submit">
              <span className="button-text">Sign In</span>
              <div className="fill"></div>
            </button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link to="/register">
          <button className="form_button">
            Not a member yet? Your tasty journey starts here.
          </button>
        </Link>
      </section>
    </main>
  );
};
