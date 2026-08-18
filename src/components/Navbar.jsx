import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { getUser, clearUser } from "../data/storage";

// Main navigation. Links are created with .map() from simple arrays.
const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/analytics", label: "Campus Analytics" },
];

const operationLinks = [
  { to: "/report", label: "Report Issue" },
  { to: "/track", label: "Track Complaint" },
  { to: "/explorer", label: "Issue Explorer" },
  { to: "/map", label: "Campus Map" },
  { to: "/departments", label: "Departments" },
  { to: "/lost-found", label: "Lost & Found" },
];

const campusLifeLinks = [
  { to: "/community", label: "Community" },
  { to: "/announcements", label: "Announcements" },
  { to: "/improvements", label: "Hall of Improvements" },
];

const userLinks = [
  { to: "/notifications", label: "Notifications" },
  { to: "/profile", label: "Profile" },
];

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(function () {
    setUser(getUser());
  }, []);

  function handleLogout() {
    clearUser();
    setUser(null);
    navigate({ to: "/login" });
  }

  return (
    <header className={menuOpen ? "navbar nav-open" : "navbar"}>
      <div className="container">
        <div className="nav-top">
          <Link to="/" className="logo">
            <span className="logo-mark">CF</span>
            <span>
              Campus Fix
              <small>Report. Track. Improve.</small>
            </span>
          </Link>

          <nav className="nav-links">
            {mainLinks.map(function (link) {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="nav-link"
                  activeProps={{ className: "nav-link active" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Conditional rendering: admin links only for the admin user */}
            {user && user.role === "admin" ? (
              <Link to="/admin" className="nav-link" activeProps={{ className: "nav-link active" }}>
                Admin
              </Link>
            ) : null}

            {user ? (
              <button className="btn btn-outline btn-sm" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-primary btn-sm">
                Login
              </Link>
            )}
          </nav>

          <button
            className="nav-toggle"
            onClick={function () {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div className="nav-groups">
          <div className="nav-group">
            <b>Operations</b>
            {operationLinks.map(function (link) {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="nav-link"
                  activeProps={{ className: "nav-link active" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="nav-group">
            <b>Campus Life</b>
            {campusLifeLinks.map(function (link) {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="nav-link"
                  activeProps={{ className: "nav-link active" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="nav-group">
            <b>User</b>
            {userLinks.map(function (link) {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="nav-link"
                  activeProps={{ className: "nav-link active" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link to="/help" className="nav-link" activeProps={{ className: "nav-link active" }}>
              Help
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
