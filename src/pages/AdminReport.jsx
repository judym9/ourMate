import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/AdminReport.css";
import { Line } from "react-chartjs-2";

export default function AdminReport() {
  const [selectedCourse, setSelectedCourse] = useState("Math 101");

  // بيانات تجريبية للChart
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Average Attention %",
        data: [75, 78, 80, 77],
        fill: true,
        backgroundColor: "rgba(0, 230, 255, 0.2)",
        borderColor: "#00E5FF",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />

        {/* Course Selection */}
        <div className="report-header">
          <label>Select Course:</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="Math 101">Math 101</option>
            <option value="Physics 201">Physics 201</option>
            <option value="CS 301">CS 301</option>
          </select>
        </div>

        {/* Info Cards */}
        <div className="cards">
          <div className="card">
            <h3>Number of Students</h3>
            <p>38</p>
          </div>
          <div className="card">
            <h3>Session Duration</h3>
            <p>90 min</p>
          </div>
          <div className="card">
            <h3>Total Sessions</h3>
            <p>12</p>
          </div>
          <div className="card">
            <h3>Average Attention</h3>
            <p>78%</p>
          </div>
        </div>

        {/* Chart */}
        <div className="chart-card">
          <h3>Weekly Attention Trend</h3>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}
