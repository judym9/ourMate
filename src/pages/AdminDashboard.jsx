import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import "../styles/dashboard.css";
export default function AdminDashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="cards">
          <StatCard title="Average Attention" value="78%" />
          <StatCard title="Total Sessions" value="124" />
          <StatCard title="Alerts Sent" value="32" />
        </div>

        <div className="charts">
          <ChartCard title="Attention Trend" />
          <ChartCard title="System Statistics" />
        </div>
      </div>
    </div>
  );
}
