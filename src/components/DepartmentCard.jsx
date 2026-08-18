import StatusBadge from "./StatusBadge";

function DepartmentCard({ department }) {
  return (
    <article className="card card-hover">
      <div className="flex-between">
        <h3 style={{ margin: 0 }}>{department.name}</h3>
        <StatusBadge value={department.status} />
      </div>

      <p className="small muted">Head: {department.head}</p>

      <div className="flex-between small">
        <span>Resolution rate</span>
        <b>{department.resolutionRate}%</b>
      </div>
      <div className="progress" style={{ margin: "6px 0 14px 0" }}>
        <div
          className={department.resolutionRate >= 90 ? "progress-bar green" : "progress-bar"}
          style={{ width: department.resolutionRate + "%" }}
        />
      </div>

      <div className="grid grid-2" style={{ gap: "10px" }}>
        <div>
          <div className="stat-value" style={{ fontSize: "22px" }}>
            {department.open}
          </div>
          <div className="small muted">Open complaints</div>
        </div>
        <div>
          <div className="stat-value" style={{ fontSize: "22px" }}>
            {department.responseTime}
          </div>
          <div className="small muted">Avg. response time</div>
        </div>
      </div>
    </article>
  );
}

export default DepartmentCard;
