import { Link } from "react-router-dom";
import "./register.style.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Create Account</h2>

        <form className="register-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
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
