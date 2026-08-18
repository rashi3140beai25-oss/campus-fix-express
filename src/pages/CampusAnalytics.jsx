import { useEffect, useState } from "react";
import BarRow from "../components/BarRow";
import DashboardCard from "../components/DashboardCard";
import {
  complaints as demoComplaints,
  departments,
  monthlyComplaints,
  statusSteps,
} from "../data/sampleData";
import { getComplaints } from "../data/storage";

// Counts how many complaints belong to each value of one field.
export function countBy(list, field) {
  const counts = {};
  for (let i = 0; i < list.length; i++) {
    const key = list[i][field];
    if (counts[key]) {
      counts[key] = counts[key] + 1;
    } else {
      counts[key] = 1;
    }
  }
  return Object.keys(counts).map(function (key) {
    return { label: key, value: counts[key] };
  });
}

function CampusAnalytics() {
  const [complaints, setComplaints] = useState(demoComplaints);

  useEffect(function () {
    setComplaints(getComplaints());
  }, []);

  const byCategory = countBy(complaints, "category").sort(function (a, b) {
    return b.value - a.value;
  });
  const byLocation = countBy(complaints, "location").sort(function (a, b) {
    return b.value - a.value;
  });
  const byStatus = statusSteps.map(function (step) {
    const items = complaints.filter(function (item) {
      return item.status === step;
    });
    return { label: step, value: items.length };
  });

  const resolved = complaints.filter(function (item) {
    return item.status === "Resolved";
  });
  const open = complaints.length - resolved.length;
  const rate = complaints.length > 0 ? Math.round((resolved.length / complaints.length) * 100) : 0;

  const maxCategory = Math.max.apply(
    null,
    byCategory.map(function (item) {
      return item.value;
    }),
  );
  const maxLocation = Math.max.apply(
    null,
    byLocation.map(function (item) {
      return item.value;
    }),
  );
  const maxMonth = Math.max.apply(
    null,
    monthlyComplaints.map(function (item) {
      return item.count;
    }),
  );

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h1>Campus Analytics</h1>
          <p>
            All numbers on this page are calculated in JavaScript from the current complaint list,
            and drawn with simple CSS bars.
          </p>
        </div>

        <div className="grid grid-4 mb">
          <DashboardCard value={complaints.length} label="Total complaints" />
          <DashboardCard value={rate + "%"} label="Resolution rate" />
          <DashboardCard value="3.5h" label="Average response time" />
          <DashboardCard value={open} label="Open backlog" />
        </div>

        <div className="grid grid-2 mb">
          <section className="card">
            <h2 style={{ fontSize: "20px" }}>Issues by category</h2>
            {byCategory.map(function (item) {
              return (
                <BarRow key={item.label} label={item.label} value={item.value} max={maxCategory} />
              );
            })}
          </section>

          <section className="card">
            <h2 style={{ fontSize: "20px" }}>Issues by location</h2>
            {byLocation.map(function (item) {
              return (
                <BarRow key={item.label} label={item.label} value={item.value} max={maxLocation} />
              );
            })}
          </section>
        </div>

        <div className="grid grid-2 mb">
          <section className="card">
            <h2 style={{ fontSize: "20px" }}>Complaint status</h2>
            {byStatus.map(function (item) {
              return (
                <BarRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  max={complaints.length}
                />
              );
            })}
          </section>

          <section className="card">
            <h2 style={{ fontSize: "20px" }}>Monthly complaints</h2>
            <div className="chart-col-wrap">
              {monthlyComplaints.map(function (item) {
                return (
                  <div key={item.month} className="chart-col">
                    <b className="small">{item.count}</b>
                    <div
                      className="bar"
                      style={{ height: Math.round((item.count / maxMonth) * 100) + "%" }}
                    />
                    <span>{item.month}</span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <section className="card">
          <h2 style={{ fontSize: "20px" }}>Department performance</h2>
          <div className="table-wrap" style={{ border: "none", boxShadow: "none" }}>
            <table>
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Open</th>
                  <th>Resolution rate</th>
                  <th>Response time</th>
                  <th>Performance</th>
                </tr>
              </thead>
              <tbody>
                {departments.map(function (dep) {
                  return (
                    <tr key={dep.name}>
                      <td>{dep.name}</td>
                      <td>{dep.open}</td>
                      <td>{dep.resolutionRate}%</td>
                      <td>{dep.responseTime}</td>
                      <td style={{ minWidth: "180px" }}>
                        <div className="progress">
                          <div
                            className={
                              dep.resolutionRate >= 90 ? "progress-bar green" : "progress-bar"
                            }
                            style={{ width: dep.resolutionRate + "%" }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CampusAnalytics;
