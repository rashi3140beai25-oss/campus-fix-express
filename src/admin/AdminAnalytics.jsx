import { useEffect, useState } from "react";
import BarRow from "../components/BarRow";
import DashboardCard from "../components/DashboardCard";
import {
  complaints as demoComplaints,
  departments,
  monthlyComplaints,
} from "../data/sampleData";
import { getComplaints } from "../data/storage";

function AdminAnalytics() {
  const [complaints, setComplaints] = useState(demoComplaints);

  useEffect(function () {
    setComplaints(getComplaints());
  }, []);

  function countBy(field) {
    const counts = {};
    complaints.forEach(function (item) {
      counts[item[field]] = (counts[item[field]] || 0) + 1;
    });
    return Object.keys(counts)
      .map(function (key) {
        return { label: key, value: counts[key] };
      })
      .sort(function (a, b) {
        return b.value - a.value;
      });
  }

  const byCategory = countBy("category");
  const byLocation = countBy("location");

  const resolved = complaints.filter(function (item) {
    return item.status === "Resolved";
  }).length;
  const rate = complaints.length > 0 ? Math.round((resolved / complaints.length) * 100) : 0;
  const backlog = complaints.length - resolved;

  const maxCat = byCategory.length > 0 ? byCategory[0].value : 1;
  const maxLoc = byLocation.length > 0 ? byLocation[0].value : 1;
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
          <h1>Admin — Analytics</h1>
          <p>Live numbers calculated from the complaint list stored in the browser.</p>
        </div>

        <div className="grid grid-4 mb">
          <DashboardCard value={rate + "%"} label="Resolution rate" />
          <DashboardCard value="3.5h" label="Average response time" />
          <DashboardCard value="4.6 / 5" label="Student satisfaction" />
          <DashboardCard value={backlog} label="Open backlog" />
        </div>

        <div className="grid grid-2 mb">
          <section className="card">
            <h2 style={{ fontSize: "20px" }}>Category-wise complaints</h2>
            {byCategory.map(function (item) {
              return <BarRow key={item.label} label={item.label} value={item.value} max={maxCat} />;
            })}
          </section>

          <section className="card">
            <h2 style={{ fontSize: "20px" }}>Location-wise complaints</h2>
            {byLocation.map(function (item) {
              return <BarRow key={item.label} label={item.label} value={item.value} max={maxLoc} />;
            })}
          </section>
        </div>

        <div className="grid grid-2">
          <section className="card">
            <h2 style={{ fontSize: "20px" }}>Monthly complaints</h2>
            <div className="chart-col-wrap">
              {monthlyComplaints.map(function (item) {
                return (
                  <div key={item.month} className="chart-col">
                    <b className="small">{item.count}</b>
                    <div
                      className="bar soft"
                      style={{ height: Math.round((item.count / maxMonth) * 100) + "%" }}
                    />
                    <span>{item.month}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="card">
            <h2 style={{ fontSize: "20px" }}>Department performance</h2>
            {departments.map(function (dep) {
              return (
                <BarRow
                  key={dep.name}
                  label={dep.name}
                  value={dep.resolutionRate}
                  max={100}
                  suffix="%"
                />
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminAnalytics;
