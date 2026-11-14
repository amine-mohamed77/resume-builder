import "./Dashboard.css";
import StatsCard from "./StatsCard";
import RecentResumes from "./RecentResumes";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-heading">
        <h2>Dashboard Overview</h2>
        <p>Track and manage your resumes.</p>
        <Link to="/create-resume" className="create-resume-btn">
        + Create New Resume
      </Link>
      </div>

     <div className="stats-container">
  <StatsCard title="Total Resumes" value="5" icon="📄" />
  <StatsCard title="Templates" value="12" icon="🎨" />
  <StatsCard title="Completed Resumes" value="3" icon="✅" />
</div>
<RecentResumes />
    </section>
  );
}

export default Dashboard;