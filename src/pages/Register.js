import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Register() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const { register } =
    useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError(
        "Please fill all fields."
      );

      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );

      return;
    }

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );

      return;
    }

    register(
      name,
      email,
      password
    );

    navigate("/");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            🛍️
          </div>

          <h1>Create Account</h1>

          <p>
            Join ShopZone today.
          </p>
        </div>

        {error && (
          <div className="form-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <label>Email Address</label>

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Repeat password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
          />

          <button type="submit">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Register;