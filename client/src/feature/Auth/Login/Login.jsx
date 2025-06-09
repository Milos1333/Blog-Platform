import { Link } from "react-router-dom";
import "./login.style.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register"> Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
