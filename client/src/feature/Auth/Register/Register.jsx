import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./register.style.css";
import { useToast } from "../../../components/Toast/Toast";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { show } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setErrors((prev) => ({ ...prev, image: "", general: "" }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    const newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!isValidEmail(email)) newErrors.email = "Email format is invalid.";
    if (!password.trim()) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!image) newErrors.image = "Profile image is required.";

    if (Object.keys(newErrors).length) return setErrors(newErrors);

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("image", image);

      const response = await axios.post(
        "http://localhost:5000/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      show("success", "Success", response.data.message);

      navigate("/login");
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong.";
      setErrors({ general: msg });
    }
  };

  const getFirstError = () => Object.values(errors).find((e) => e) || null;

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Create Account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          {["username", "email", "password"].map((field) => (
            <div className="form-group-login-register" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === "password" ? "password" : "text"}
                placeholder={`Enter your ${field}`}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          ))}

          <div className="form-group-login-register">
            <label>Profile Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          <div className="register-error">
            {getFirstError() && (
              <p style={{ color: "red" }}>{getFirstError()}</p>
            )}
          </div>

          <button type="submit" className="register-button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
