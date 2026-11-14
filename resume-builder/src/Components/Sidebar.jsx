import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">
        Resume<span>AI</span>
      </h2>

      <nav>
        <ul>
          <li><a href="#" className="active">Dashboard</a></li>
          <li><a href="#">My Resumes</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>

      <button className="sidebar-logout">Logout</button>
    </aside>
  );
}

export default Sidebar;