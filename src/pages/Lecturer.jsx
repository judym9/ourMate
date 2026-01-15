import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/lecturer.css";

const Lecturer = () => {
  const navigate = useNavigate();
  const [systemStatus, setSystemStatus] = useState("Stopped");

  const startMonitoring = () => setSystemStatus("Running");
  const stopMonitoring = () => setSystemStatus("Stopped");

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <div className="lecturer-container">
      {/* Header */}
      <header className="welcome-header">
        <div className="header-left">
          <h1>Welcome, Dr. Smith</h1>
          <p>Smart Classroom Attention Monitoring System</p>
        </div>

        <div className="header-right">
          <div
            className={`status-badge ${
              systemStatus === "Running" ? "running" : "stopped"
            }`}
          >
            {systemStatus}
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {/* أزرار التحكم */}
      <div className="control-buttons">
        <button onClick={startMonitoring} className="control-btn start">
          Start Monitoring
        </button>
        <button onClick={stopMonitoring} className="control-btn stop">
          Stop Monitoring
        </button>
        <button
          className="control-btn header-theme"
          onClick={() => navigate("/lecture-report")}
        >
          View Current Lecture Report
        </button>

        <button className="control-btn header-theme">View All Reports</button>
      </div>
    </div>
  );
};

export default Lecturer;
