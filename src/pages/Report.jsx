import "../styles/report.css";

const LectureReport = () => {
  return (
    <div className="report-container">
      <h1 className="report-title">Current Lecture Report</h1>

      <div className="report-grid">
        <ReportItem label="Doctor Name" value="Dr. Smith" />
        <ReportItem label="Course Name" value="Artificial Intelligence" />
        <ReportItem label="Lecture Date" value="2026-01-16" />
        <ReportItem label="Lecture Duration" value="1h 30m" />

        <ReportItem label="Average Attention" value="78%" highlight />
        <ReportItem label="Highly Focused Students" value="22" />
        <ReportItem label="Fluctuating Attention Students" value="10" />
        <ReportItem label="Distracted Students" value="6" />

        <ReportItem label="Peak Attention Time" value="00:25 – 00:45" />
        <ReportItem label="Peak Distraction Time" value="01:10 – 01:25" />
      </div>
    </div>
  );
};

const ReportItem = ({ label, value, highlight }) => {
  return (
    <div className={`report-card ${highlight ? "highlight" : ""}`}>
      <span className="report-label">{label}</span>
      <span className="report-value">{value}</span>
    </div>
  );
};

export default LectureReport;
