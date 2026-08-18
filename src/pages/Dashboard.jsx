import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";
import AnnouncementCard from "../components/AnnouncementCard";
import { announcements, complaints as demoComplaints } from "../data/sampleData";
import { formatDate, getComplaints, getNotifications, getUser } from "../data/storage";

function Dashboard() {
  const [complaints, setComplaints] = useState(demoComplaints);
  const [user, setUser] = useState(null);
  const [unread, setUnread] = useState(0);

  useEffect(function () {
    setComplaints(getComplaints());
    setUser(getUser());

    const notes = getNotifications();
    const notRead = notes.filter(function (note) {
      return note.read === false;
    });
    setUnread(notRead.length);
  }, []);

  // JavaScript calculations with filter() and length
  const resolved = complaints.filter(function (item) {
    return item.status === "Resolved";
  });
  const inProgress = complaints.filter(function (item) {
    return item.status === "In Progress";
  });
  const highPriority = complaints.filter(function (item) {
    return item.priority === "High";
  });
  const rate = complaints.length > 0 ? Math.round((resolved.length / complaints.length) * 100) : 0;

  const recent = complaints.slice().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="page">
      <div className="container">
        <div className="page-head flex-between flex-wrap">
          <div>
            {/* Conditional rendering: greeting depends on the login state */}
            {user ? <h1>Welcome back, {user.name}</h1> : <h1>Student Dashboard</h1>}
            <p>
              {user
                ? user.department + " · " + user.semester + " · ID " + user.studentId
                : "You are browsing as a guest. Login to see your own complaints."}
            </p>
          </div>
          <div className="flex flex-wrap">
            <Link to="/report" className="btn btn-primary">
              Report an Issue
            </Link>
            <Link to="/track" className="btn btn-outline">
              Track a Complaint
            </Link>
          </div>
        </div>

        {!user ? (
          <div className="alert alert-info">
            You are not logged in. Use the demo student account on the <b>Login</b> page to see the
            full experience.
          </div>
        ) : null}

        <div className="grid grid-4 mb">
          <DashboardCard value={complaints.length} label="Total complaints" />
          <DashboardCard value={inProgress.length} label="In progress" />
          <DashboardCard value={resolved.length} label="Resolved" />
          <DashboardCard value={rate + "%"} label="Resolution rate" />
        </div>

        <div className="grid grid-4 mb">
          <DashboardCard value={highPriority.length} label="High priority issues" />
          <DashboardCard value={unread} label="Unread notifications" />
          <DashboardCard value="4.6 / 5" label="Your satisfaction rating" />
          <DashboardCard value="86" label="Campus health score" />
        </div>

        <section className="mb">
          <div className="flex-between">
            <h2>Recent complaints</h2>
            <Link to="/explorer" className="btn btn-ghost btn-sm">
              Open Issue Explorer
            </Link>
          </div>

          {recent.length === 0 ? (
            <div className="empty">
              <b>No complaints yet</b>
              Report the first campus issue and it will appear here.
            </div>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {recent.slice(0, 6).map(function (item) {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.location}</td>
                        <td>
                          <StatusBadge value={item.priority} />
                        </td>
                        <td>
                          <StatusBadge value={item.status} />
                        </td>
                        <td>{formatDate(item.date)}</td>
                        <td>
                          <Link
                            to="/complaint/$id"
                            params={{ id: item.id }}
                            className="btn btn-ghost btn-sm"
                          >
                            View
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

        <section>
          <h2>Campus announcements</h2>
          <div className="grid grid-3">
            {announcements.slice(0, 3).map(function (item) {
              return <AnnouncementCard key={item.id} announcement={item} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
