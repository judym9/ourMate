import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState(""); // بدون دور افتراضي
  const navigate = useNavigate();

  // بيانات الأدمن الثابتة
  const ADMIN_EMAIL = "mariaalabed6@gmail.com";
  const ADMIN_PASSWORD = "4444";

  /* ===================== Login ===================== */
  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role");
      return;
    }

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (role === "admin") {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem("role", "admin");
        navigate("/admin");
      } else {
        alert("Invalid admin credentials");
      }
    } else if (role === "Lecturer") {
      localStorage.setItem("role", "Lecturer");
      navigate("/Lecturer");
    }
  };

  /* ===================== Signup ===================== */
  const handleSignup = (e) => {
    e.preventDefault();
    alert("Lecturer account created successfully (demo)");
    setIsSignup(false);
  };

  return (
    <div className="login-container">
      <img
        src={process.env.PUBLIC_URL + "/images/background.png"}
        className="background-image"
        alt="AI Eye"
      />

      <div className={`cards-wrapper ${isSignup ? "signup-mode" : ""}`}>
        {/* ===== الكرت اليسار ===== */}
        <div className="login-card">
          <div className="card-content">
            {!isSignup ? (
              <>
                <h1 className="login-title">Welcome</h1>
                <p className="login-subtitle">
                  Smart Classroom Attention Monitoring System
                </p>
              </>
            ) : (
              <>
                <h1 className="login-title">Create Lecturer Account</h1>
                <p className="login-subtitle">
                  Sign up as a Lecturer to start monitoring
                </p>
              </>
            )}
          </div>
        </div>

        {/* ===== الكرت اليمين ===== */}
        <div className="login-card">
          <div className="card-content">
            {!isSignup ? (
              <>
                <h1 className="login-title">Login</h1>

                <form className="login-form" onSubmit={handleLogin}>
                  {/* Email */}
                  <input
                    name="email"
                    className="login-input"
                    placeholder="Email"
                    required
                  />

                  {/* Password */}
                  <input
                    name="password"
                    type="password"
                    className="login-input"
                    placeholder="Password"
                    required
                  />

                  {/* Role */}
                  <select
                    className="login-input"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="Lecturer">Lecturer</option>
                    <option value="admin">Admin</option>
                  </select>

                  <button className="login-btn">Login</button>
                </form>

                <p className="signup-text">
                  Don’t have an account?
                  <span onClick={() => setIsSignup(true)}>
                    {" "}
                    Create Lecturer account
                  </span>
                </p>
              </>
            ) : (
              <>
                <h1 className="login-title">Sign Up</h1>

                <form className="login-form" onSubmit={handleSignup}>
                  <input
                    className="login-input"
                    placeholder="Full name"
                    required
                  />

                  <input
                    name="email"
                    className="login-input"
                    placeholder="Email"
                    required
                  />

                  <input
                    type="password"
                    className="login-input"
                    placeholder="Password"
                    required
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
