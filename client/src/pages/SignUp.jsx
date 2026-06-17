import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";
import { signup } from "../api/authApi";


function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignUp = (e) => {
  //   e.preventDefault();

  //   const userData = { email, password };
  //   sessionStorage.setItem("registeredUser", JSON.stringify(userData));

  //   alert("Account created successfully! Please sign in.");
  //   navigate("/");
  // };

 const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await signup({
        email,
        password,
      });

      alert(response.message);

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Signup Failed"
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2 className="auth-title">
          Sign Up
        </h2>

        <p className="auth-subtitle">
          Already have an account?
          <span
            className="auth-link ms-2"
            onClick={() => navigate("/")}
          >
            Sign In
          </span>
        </p>

        <form onSubmit={handleSignUp}>

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

          <div className="mb-3">
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

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              required
            />

            <label className="form-check-label">
              I accept Terms & Conditions
            </label>
          </div>

          <button className="btn btn-primary w-100">
            Register
          </button>

        </form>

      </div>
    </div>
  );
}

export default SignUp;