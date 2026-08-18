import { useState } from "react";
import DepartmentCard from "../components/DepartmentCard";
import DashboardCard from "../components/DashboardCard";
import { departments } from "../data/sampleData";

function Departments() {
  const [search, setSearch] = useState("");

  const visible = departments.filter(function (dep) {
    return dep.name.toLowerCase().indexOf(search.trim().toLowerCase()) !== -1;
  });

  // Average resolution rate with a normal loop
  let total = 0;
  for (let i = 0; i < departments.length; i++) {
    total = total + departments[i].resolutionRate;
  }
  const average = Math.round(total / departments.length);

  const totalOpen = departments.reduce(function (sum, dep) {
    return sum + dep.open;
  }, 0);

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h1>Campus Departments</h1>
          <p>
            Every complaint is handled by one of these campus departments. The numbers below are
            based on the last thirty days of activity.
          </p>
        </div>

        <div className="grid grid-4 mb">
          <DashboardCard value={departments.length} label="Active departments" />
          <DashboardCard value={totalOpen} label="Open complaints" />
          <DashboardCard value={average + "%"} label="Average resolution rate" />
          <DashboardCard value="3.5h" label="Average response time" />
        </div>

        <div className="card mb">
          <label htmlFor="depsearch">Search a department</label>
          <input
            id="depsearch"
            type="search"
            value={search}
            placeholder="Example: Electrical"
            onChange={function (event) {
              setSearch(event.target.value);
            }}
          />
        </div>

        {visible.length === 0 ? (
          <div className="empty">
            <b>No department found</b>
            Try another name, for example Security or Housekeeping.
          </div>
        ) : (
          <div className="grid grid-3">
            {visible.map(function (dep) {
              return <DepartmentCard key={dep.name} department={dep} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Departments;
