// Simple statistic card used on the home page, dashboard and admin pages.
function DashboardCard({ value, label, hint }) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {hint ? (
        <div className="small muted" style={{ marginTop: "4px" }}>
          {hint}
        </div>
      ) : null}
    </div>
  );
}

export default DashboardCard;
