import "../styles/Landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">

      <img
        src={process.env.PUBLIC_URL + "/images/robot-eye.png"}
        className="background-image"
        alt="AI Eye"
      />

      <div className="welcome-card">

        <h1 className="system-title">FocusMate</h1>
        <p className="system-subtitle">
          Smart Classroom Attention Monitoring System
        </p>

        <button
          className="start-btn"
          onClick={() => navigate("/auth")}
        >
          Get Started
        </button>

        <div className="footer-text">
          AI-Powered platform for monitoring student attention during lectures.
        </div>

      </div>
    </div>
  );
};

export default Landing;
