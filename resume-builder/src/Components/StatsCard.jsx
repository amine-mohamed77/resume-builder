import "./StatsCard.css";

function StatsCard({ title, value, icon, note }) {
  return (
    <article className="stats-card">
      <div className="stats-card-info">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
      <span className="stats-card-icon" aria-hidden="true">{icon}</span>
      <p className="stats-card-note">{note}</p>
    </article>
  );
}

export default StatsCard;
