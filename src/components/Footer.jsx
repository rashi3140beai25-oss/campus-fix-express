import { Link } from "@tanstack/react-router";

const footerLinks = [
  {
    heading: "Operations",
    items: [
      { to: "/report", label: "Report Issue" },
      { to: "/track", label: "Track Complaint" },
      { to: "/explorer", label: "Issue Explorer" },
      { to: "/map", label: "Campus Map" },
    ],
  },
  {
    heading: "Campus Life",
    items: [
      { to: "/community", label: "Community" },
      { to: "/announcements", label: "Announcements" },
      { to: "/improvements", label: "Hall of Improvements" },
      { to: "/lost-found", label: "Lost & Found" },
    ],
  },
  {
    heading: "Support",
    items: [
      { to: "/help", label: "Help / FAQ" },
      { to: "/profile", label: "Profile" },
      { to: "/notifications", label: "Notifications" },
      { to: "/login", label: "Login" },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: "10px" }}>
              <span className="logo-mark">CF</span>
              <span>Campus Fix</span>
            </div>
            <p className="muted small">
              A student-first campus complaint and improvement platform. Report a problem, follow
              its progress and support the issues that matter to your campus.
            </p>
          </div>

          {footerLinks.map(function (group) {
            return (
              <div key={group.heading}>
                <h4>{group.heading}</h4>
                {group.items.map(function (item) {
                  return (
                    <Link key={item.to} to={item.to}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Campus Fix — College Project Demo</span>
          <span>Report. Track. Improve Your Campus.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
