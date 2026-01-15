import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState(""); // فارغة → يظهر placeholder
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) return alert("Please select a role");

    // التوجيه حسب الدور
    if (role === "lecturer") {
      navigate("/lecturer");
    } else if (role === "admin") {
      navigate("/admin");
    }
  };

  return (
    <div className="login-container">
      {/* صورة الخلفية */}
      <img
        src={process.env.PUBLIC_URL + "/images/background.png"}
        className="background-image"
        alt="AI Eye"
      />

      <div className="cards-wrapper">
        {/* كرت اليسار */}
        <div className="login-card">
          <div className={`card-content ${isSignup ? "signup-mode" : ""}`}>
            {!isSignup ? (
              <>
                <h1 className="login-title">Welcome</h1>
                <p className="login-subtitle">
                  Smart Classroom Attention Monitoring System
                </p>
              </>
            ) : (
              <>
                <h1 className="login-title">Create Account</h1>
                <p className="login-subtitle">
                  Create your account to start monitoring
                </p>
              </>
            )}
          </div>
        </div>

        {/* كرت اليمين */}
        <div className="login-card">
          <div className={`card-content ${isSignup ? "signup-mode" : ""}`}>
            {!isSignup ? (
              <>
                <h1 className="login-title">Login</h1>

                <form className="login-form" onSubmit={handleLogin}>
                  <input className="login-input" placeholder="Email" />
                  <input
                    className="login-input"
                    placeholder="Password"
                    type="password"
                  />

                  {/* dropdown الدور */}
                  <select
                    className="login-input role-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="" disabled>
                      Role
                    </option>
                    <option value="lecturer">Lecturer</option>
                    <option value="admin">Admin</option>
                  </select>

                  <button className="login-btn" type="submit">
                    Login
                  </button>
                </form>

                <p className="signup-text">
                  Don’t have an account?
                  <span onClick={() => setIsSignup(true)}> Create account</span>
                </p>
              </>
            ) : (
              <>
                <h1 className="login-title">Sign Up</h1>

                <form className="login-form">
                  <input className="login-input" placeholder="Full name" />
                  <input className="login-input" placeholder="Email" />
                  <input
                    className="login-input"
                    placeholder="Password"
                    type="password"
                  />

                  <button className="login-btn">Create Account</button>
                </form>

                <p className="signup-text">
                  Already have an account?
                  <span onClick={() => setIsSignup(false)}> Login</span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
