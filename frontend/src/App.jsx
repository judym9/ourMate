import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Lecturer from "./pages/Lecturer";
import AdminDashboard from "./pages/AdminDashboard"; // صفحة الادمن
import Report from "./pages/Report";
import AdminReport from "./pages/AdminReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/lecturer" element={<Lecturer />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/lecture-report" element={<Report />} />
        <Route path="/report" element={<AdminReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
