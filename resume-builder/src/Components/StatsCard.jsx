import "./StatsCard.css";
function StatsCard({ title, value, icon }) {
  return (
    <div className="stats-card">
      <div className="stats-card-info">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>

      <div className="stats-card-icon">
        {icon}
      </div>
    </div>
  );
}

export default StatsCard;