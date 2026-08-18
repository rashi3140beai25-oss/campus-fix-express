import { Link } from "@tanstack/react-router";
import DashboardCard from "../components/DashboardCard";
import AnnouncementCard from "../components/AnnouncementCard";
import SuccessStoryCard from "../components/SuccessStoryCard";
import TestimonialCard from "../components/TestimonialCard";
import {
  announcements,
  campusLocations,
  departments,
  successStories,
  testimonials,
} from "../data/sampleData";

const campusStats = [
  { id: 1, value: "1,250+", label: "Issues Reported" },
  { id: 2, value: "980+", label: "Issues Resolved" },
  { id: 3, value: "5,000+", label: "Students Using Campus Fix" },
  { id: 4, value: "92%", label: "Resolution Rate" },
  { id: 5, value: "4.6/5", label: "Student Satisfaction" },
];

const steps = [
  { id: 1, title: "Report", text: "Describe the problem, choose a category and attach a photo." },
  { id: 2, title: "Track", text: "Follow your complaint with a unique ID from start to finish." },
  { id: 3, title: "Support", text: "Upvote issues so the most urgent problems reach the top." },
  { id: 4, title: "Resolve", text: "The right department acts and the result is published." },
];

const healthCards = [
  { id: 1, value: "86 / 100", label: "Campus Health Score", hint: "Up 4 points this month" },
  { id: 2, value: "92%", label: "Resolution Rate", hint: "Target is 90%" },
  { id: 3, value: "4.6 / 5", label: "Student Satisfaction", hint: "Based on 812 ratings" },
  { id: 4, value: "78", label: "Open Backlog", hint: "Complaints still pending" },
];

function Home() {
  // Top four departments sorted with .sort() and cut with .slice()
  const topDepartments = departments
    .slice()
    .sort(function (a, b) {
      return b.resolutionRate - a.resolutionRate;
    })
    .slice(0, 4);

  // Busiest campus locations
  const hotspots = campusLocations
    .slice()
    .sort(function (a, b) {
      return b.open - a.open;
    })
    .slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-tag">Campus Fix · Student Platform</span>
            <h1>Fixing Campus Problems, Together.</h1>
            <p className="lead">
              Report campus issues, track their progress, support important complaints, and help
              build a better university experience.
            </p>
            <div className="flex flex-wrap mt">
              <Link to="/report" className="btn btn-primary">
                Report an Issue
              </Link>
              <Link to="/track" className="btn btn-outline">
                Track a Complaint
              </Link>
            </div>
          </div>

          <div className="hero-art">
            <div className="flex-between mb">
              <b>Live campus board</b>
              <span className="badge badge-red">Today</span>
            </div>
            {hotspots.slice(0, 4).map(function (spot) {
              return (
                <div key={spot.name} className="bar-row">
                  <span className="dot" />
                  <span className="small" style={{ width: "140px" }}>
                    {spot.name}
                  </span>
                  <div className="progress" style={{ flex: 1 }}>
                    <div className="progress-bar" style={{ width: spot.open * 5 + "%" }} />
                  </div>
                  <b className="small">{spot.open}</b>
                </div>
              );
            })}
            <p className="small muted" style={{ marginTop: "12px", marginBottom: 0 }}>
              Open complaints by campus zone. Updated when a department changes a status.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Campus Statistics</span>
            <h2>What Campus Fix has achieved so far</h2>
          </div>
          <div className="grid grid-5">
            {campusStats.map(function (stat) {
              return <DashboardCard key={stat.id} value={stat.value} label={stat.label} />;
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span>How it works</span>
            <h2>Four simple steps</h2>
          </div>
          <div className="grid grid-4">
            {steps.map(function (step) {
              return (
                <article key={step.id} className="step">
                  <div className="step-num">{step.id}</div>
                  <h3>{step.title}</h3>
                  <p className="small muted" style={{ margin: 0 }}>
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Campus Health</span>
            <h2>How healthy is our campus right now?</h2>
          </div>
          <div className="grid grid-4">
            {healthCards.map(function (item) {
              return (
                <DashboardCard
                  key={item.id}
                  value={item.value}
                  label={item.label}
                  hint={item.hint}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span>Issue Hotspots</span>
            <h2>Locations reporting the most problems</h2>
          </div>
          <div className="grid grid-3">
            {hotspots.map(function (spot) {
              return (
                <article key={spot.name} className="card card-hover">
                  <div className="flex-between">
                    <h3 style={{ margin: 0 }}>{spot.name}</h3>
                    <span
                      className={
                        spot.level === "High"
                          ? "badge badge-red"
                          : spot.level === "Medium"
                            ? "badge badge-amber"
                            : "badge badge-green"
                      }
                    >
                      {spot.level}
                    </span>
                  </div>
                  <p className="small muted">Most common issue: {spot.common}</p>
                  <div className="flex-between small">
                    <span>{spot.open} open complaints</span>
                    <b>{spot.resolved}% resolved</b>
                  </div>
                  <div className="progress" style={{ marginTop: "8px" }}>
                    <div className="progress-bar green" style={{ width: spot.resolved + "%" }} />
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt">
            <Link to="/map" className="btn btn-outline">
              Open Campus Map
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Departments</span>
            <h2>Top performing departments</h2>
          </div>
          <div className="grid grid-4">
            {topDepartments.map(function (dep) {
              return (
                <article key={dep.name} className="card card-hover">
                  <h3>{dep.name}</h3>
                  <div className="stat-value" style={{ fontSize: "26px" }}>
                    {dep.resolutionRate}%
                  </div>
                  <div className="small muted">resolved · {dep.responseTime} response</div>
                  <div className="progress" style={{ marginTop: "10px" }}>
                    <div className="progress-bar" style={{ width: dep.resolutionRate + "%" }} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span>Hall of Improvements</span>
            <h2>Problems that were actually fixed</h2>
          </div>
          <div className="grid grid-3">
            {successStories.slice(0, 3).map(function (story) {
              return <SuccessStoryCard key={story.id} story={story} />;
            })}
          </div>
          <div className="mt">
            <Link to="/improvements" className="btn btn-outline">
              See all improvements
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Student Feedback</span>
            <h2>What students say about Campus Fix</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.slice(0, 3).map(function (item) {
              return <TestimonialCard key={item.id} testimonial={item} />;
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span>Announcements</span>
            <h2>Latest campus notices</h2>
          </div>
          <div className="grid grid-3">
            {announcements.slice(0, 3).map(function (item) {
              return <AnnouncementCard key={item.id} announcement={item} />;
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card center" style={{ padding: "34px" }}>
            <h2>Something broken on campus?</h2>
            <p className="muted">
              It takes less than a minute to report an issue and your complaint gets a tracking ID
              immediately.
            </p>
            <Link to="/report" className="btn btn-primary">
              Report an Issue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
