import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";
import { complaints as demoComplaints, lostFoundItems } from "../data/sampleData";
import { formatDate, getComplaints, getLostFound } from "../data/storage";

function AdminDashboard() {
  const [complaints, setComplaints] = useState(demoComplaints);
  const [lostFound, setLostFound] = useState(lostFoundItems);

  useEffect(function () {
    setComplaints(getComplaints());
    setLostFound(getLostFound());
  }, []);

  function countStatus(status) {
    return complaints.filter(function (item) {
      return item.status === status;
    }).length;
  }

  const resolved = countStatus("Resolved");
  const backlog = complaints.length - resolved;
  const highPriority = complaints.filter(function (item) {
    return item.priority === "High";
  });

  const urgent = highPriority.slice().sort(function (a, b) {
    return b.upvotes - a.upvotes;
  });

  return (
    <div className="page">
      <div className="container">
        <div className="page-head flex-between flex-wrap">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Overview of every complaint reported through Campus Fix.</p>
          </div>
          <div className="flex flex-wrap">
            <Link to="/admin/complaints" className="btn btn-primary">
              Manage Complaints
            </Link>
            <Link to="/admin/analytics" className="btn btn-outline">
              Analytics
            </Link>
            <Link to="/admin/performance" className="btn btn-outline">
              Performance
            </Link>
          </div>
        </div>

        <div className="grid grid-4 mb">
          <DashboardCard value={complaints.length} label="Total complaints" />
          <DashboardCard value={countStatus("Submitted")} label="Pending (submitted)" />
          <DashboardCard value={countStatus("Under Review")} label="Under review" />
          <DashboardCard value={countStatus("In Progress")} label="In progress" />
        </div>

        <div className="grid grid-4 mb">
          <DashboardCard value={resolved} label="Resolved" />
          <DashboardCard value={highPriority.length} label="High priority" />
          <DashboardCard value={lostFound.length} label="Lost & Found reports" />
          <DashboardCard value={backlog} label="Open backlog" />
        </div>

        <section>
          <h2>High priority queue</h2>
          {urgent.length === 0 ? (
            <div className="empty">
              <b>No high priority complaints</b>
              The campus is running smoothly at the moment.
            </div>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Department</th>
                    <th>Location</th>
                    <th>Upvotes</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {urgent.map(function (item) {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.department}</td>
                        <td>{item.location}</td>
                        <td>{item.upvotes}</td>
                        <td>
                          <StatusBadge value={item.status} />
                        </td>
                        <td>{formatDate(item.date)}</td>
                        <td>
                          <Link to="/admin/complaints" className="btn btn-ghost btn-sm">
                            Manage
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
