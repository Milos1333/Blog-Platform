import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.style.css";
import { useToast } from "../../../components/Toast/Toast";

const Login = ({ setIsLoggedIn, setUsername, setUserImage }) => {
  const navigate = useNavigate();
  const { show } = useToast();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email.trim()) {
      setError("Email is required.");
      return;
    } else if (!isValidEmail(formData.email)) {
      setError("Email format is invalid.");
      return;
    }

    if (!formData.password.trim()) {
      setError("Password is required.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData
      );

      setIsLoggedIn(true);

      const baseUrl = "http://localhost:5000";

      const fullImageUrl = response.data.user.image
        ? baseUrl + response.data.user.image
        : null;

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("username", response.data.user.username);
      localStorage.setItem("userImage", fullImageUrl);
      setUserImage(fullImageUrl);
      setUsername(response.data.user.username);

      show("success", "Success", response.data.message);

      navigate("/");
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          {["email", "password"].map((field) => (
            <div className="form-group-login-register">
              <label>
                {field.charAt(0).toLocaleUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "password"}
                name={field}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="login-error">
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
