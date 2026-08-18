import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";
import { departments } from "../data/sampleData";

function AdminPerformance() {
  const sorted = departments.slice().sort(function (a, b) {
    return b.resolutionRate - a.resolutionRate;
  });

  let totalRate = 0;
  let totalOpen = 0;
  for (let i = 0; i < departments.length; i++) {
    totalRate = totalRate + departments[i].resolutionRate;
    totalOpen = totalOpen + departments[i].open;
  }
  const averageRate = Math.round(totalRate / departments.length);

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h1>Performance Center</h1>
          <p>Department scorecards for response time, resolution rate and pending workload.</p>
        </div>

        <div className="grid grid-5 mb">
          <DashboardCard value="3.5h" label="Average response time" />
          <DashboardCard value="2.4 days" label="Average resolution time" />
          <DashboardCard value={averageRate + "%"} label="Resolution rate" />
          <DashboardCard value={totalOpen} label="Open backlog" />
          <DashboardCard value="4.6 / 5" label="Student satisfaction" />
        </div>

        <div className="grid grid-2">
          {sorted.map(function (dep, index) {
            return (
              <article key={dep.name} className="card card-hover">
                <div className="flex-between">
                  <h3 style={{ margin: 0 }}>
                    #{index + 1} {dep.name}
                  </h3>
                  <StatusBadge value={dep.status} />
                </div>

                <div className="grid grid-3 mt" style={{ gap: "10px" }}>
                  <div>
                    <div className="stat-value" style={{ fontSize: "22px" }}>
                      {dep.resolutionRate}%
                    </div>
                    <div className="small muted">resolved</div>
                  </div>
                  <div>
                    <div className="stat-value" style={{ fontSize: "22px" }}>
                      {dep.responseTime}
                    </div>
                    <div className="small muted">response</div>
                  </div>
                  <div>
                    <div className="stat-value" style={{ fontSize: "22px" }}>
                      {dep.open}
                    </div>
                    <div className="small muted">open</div>
                  </div>
                </div>

                <div className="progress" style={{ marginTop: "12px" }}>
                  <div
                    className={dep.resolutionRate >= 90 ? "progress-bar green" : "progress-bar"}
                    style={{ width: dep.resolutionRate + "%" }}
                  />
                </div>

                {/* Conditional rendering of a short performance note */}
                {dep.resolutionRate >= 92 ? (
                  <p className="small muted mt">Consistently above the campus target.</p>
                ) : dep.resolutionRate >= 85 ? (
                  <p className="small muted mt">Close to the target of 90% resolution.</p>
                ) : (
                  <p className="small muted mt">Needs support to clear the pending backlog.</p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminPerformance;
