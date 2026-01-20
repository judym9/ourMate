import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css"; // 👈 نفس CSS الأدمن

const Lecturer = () => {
  const navigate = useNavigate();
  const [systemStatus, setSystemStatus] = useState("Stopped");

  const startMonitoring = () => setSystemStatus("Running");
  const stopMonitoring = () => setSystemStatus("Stopped");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="dashboard">
      {/* ================= Sidebar ================= */}
      <aside className="sidebar">
        <div className="logo">FocusMate</div>

        <ul>
          <li className="active">Dashboard</li>
          <li onClick={() => navigate("/lecture-report")}>
            Current Lecture Report
          </li>
          <li>All Reports</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </aside>

      {/* ================= Main ================= */}
      <main className="main">
        {/* ================= Topbar ================= */}
        <div className="topbar">
          <h2>Lecturer Dashboard</h2>

          <div
            className={`status-badge ${
              systemStatus === "Running" ? "running" : "stopped"
            }`}
          >
            {systemStatus}
          </div>
        </div>

        {/* ================= Cards ================= */}
        <div className="cards">
          {/* Status Card */}
          <div className="card stat-card">
            <h2>{systemStatus}</h2>
            <p>System Status</p>
          </div>

          {/* Control Card */}
          <div className="card">
            <p>Monitoring Controls</p>

            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
              <button onClick={startMonitoring} className="control-btn start">
                Start
              </button>
              <button onClick={stopMonitoring} className="control-btn stop">
                Stop
              </button>
            </div>
          </div>
        </div>

        {/* ================= Charts / Reports ================= */}
        <div className="charts">
          <div className="card">
            <h3>Current Lecture Analysis</h3>
            <div className="chart-placeholder">
              Attention data will appear here
            </div>
          </div>

          <div className="card">
            <h3>Reports</h3>
            <div className="chart-placeholder">View previous reports</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lecturer;
