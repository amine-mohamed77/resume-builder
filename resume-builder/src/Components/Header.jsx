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

        <button className="notification-btn" type="button" aria-label="Notifications">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
          </svg>
        </button>

        <div className="user-avatar">
          A
        </div>
      </div>
    </header>
  );
}

export default Header;
