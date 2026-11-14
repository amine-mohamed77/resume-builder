import "./RecentResumes.css";

function RecentResumes() {
  const resumes = [
    { id: 1, name: "Frontend Developer CV", date: "Nov 05, 2026", status: "Completed" },
    { id: 2, name: "Full Stack Developer CV", date: "Nov 03, 2026", status: "Draft" },
    { id: 3, name: "Web Designer CV", date: "Oct 29, 2026", status: "Completed" },
  ];

  return (
    <section className="recent-resumes">
      <div className="recent-heading">
        <h2>Recent Resumes</h2>
        <button>View All</button>
      </div>

      <div className="resumes-list">
        {resumes.map((resume) => (
          <div className="resume-item" key={resume.id}>
            <div>
              <h3>{resume.name}</h3>
              <p>Last updated: {resume.date}</p>
            </div>

            <span className={resume.status.toLowerCase()}>
              {resume.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentResumes;