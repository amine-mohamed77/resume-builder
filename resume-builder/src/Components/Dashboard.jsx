import { Link } from "react-router-dom";
import RecentResumes from "./RecentResumes";
import StatsCard from "./StatsCard";
import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-heading">
        <div>
          <span className="eyebrow">YOUR WORKSPACE</span>
          <h2>Dashboard</h2>
          <p>A clear view of your career story, all in one place.</p>
        </div>
        <Link to="/create-resume" className="create-resume-btn">
          <span aria-hidden="true">＋</span> Create new resume
        </Link>
      </div>

      <div className="stats-container" aria-label="Resume statistics">
        <StatsCard title="Total resumes" value="05" icon="01" note="Across your workspace" />
        <StatsCard title="Available templates" value="12" icon="02" note="Find your next starting point" />
        <StatsCard title="Completed resumes" value="03" icon="03" note="Ready to share" />
      </div>

      <RecentResumes />
    </section>
  );
}

export default Dashboard;
