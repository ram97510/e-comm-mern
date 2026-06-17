import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";
import { signin } from "../api/authApi";


function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const login = (e) => {
  //   e.preventDefault();

  //   const storedUser = JSON.parse(sessionStorage.getItem("registeredUser"));

  //   if (storedUser && storedUser.email === email && storedUser.password === password) {
  //     navigate("/otp");
  //   } else {
  //     alert("Invalid email or password. Did you sign up?");
  //   }
  // };

 const login = async (e) => {
  e.preventDefault();

  try {
    const data = await signin({
      email,
      password,
    });

    localStorage.setItem(
      "token",
      data.token
    );

    navigate("/otp");
  } catch (error) {
    alert("Invalid Credentials");
  }
};

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2 className="auth-title">Sign In</h2>

        <p className="auth-subtitle">
          Need an account?
          <span
            className="auth-link ms-2"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>

        <form onSubmit={login}>

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100">
            Sign In
          </button>

        </form>

      </div>
    </div>
  );
}

export default SignIn;