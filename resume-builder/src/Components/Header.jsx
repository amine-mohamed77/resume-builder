import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-welcome">
        <h1>Welcome back!</h1>
        <p>Manage your resumes and create new ones.</p>
      </div>

      <div className="header-actions">
        <input type="text" placeholder="Search resumes..." />

        <button className="notification-btn">
          🔔
        </button>

        <div className="user-avatar">
          A
        </div>
      </div>
    </header>
  );
}

export default Header;