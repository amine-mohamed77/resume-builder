import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">
        Resume<span>AI</span>
      </h2>

      <nav aria-label="Main navigation">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-resumes" className={({ isActive }) => isActive ? "active" : undefined}>
              My Resumes
            </NavLink>
          </li>
          <li>
            <NavLink to="/templates" className={({ isActive }) => isActive ? "active" : undefined}>
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : undefined}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="sidebar-logout">Logout</button>
    </aside>
  );
}

export default Sidebar;
