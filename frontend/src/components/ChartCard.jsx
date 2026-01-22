import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
);

export default function ChartCard({ title }) {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Average Attention",
        data: [72, 75, 70, 78],
        borderColor: "#7a88f1ff",
        backgroundColor: "rgba(244, 244, 246, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#EAEAEA",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#9A9A9A" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#9A9A9A" },
        grid: { color: "#222" },
      },
    },
  };

  return (
    <div className="card chart-card">
      <h4>{title}</h4>
      <Line data={data} options={options} />
    </div>
  );
}
