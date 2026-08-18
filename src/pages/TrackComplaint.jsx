import { useState } from "react";
import { Link } from "@tanstack/react-router";
import StatusBadge from "../components/StatusBadge";
import { statusSteps } from "../data/sampleData";
import { formatDate, getComplaints } from "../data/storage";

function TrackComplaint() {
  const [searchId, setSearchId] = useState("");
  const [found, setFound] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function handleSearch(event) {
    event.preventDefault();

    const typed = searchId.trim().toUpperCase();
    if (typed === "") {
      setFound(null);
      setNotFound(true);
      return;
    }

    const list = getComplaints();
    const match = list.find(function (item) {
      return item.id.toUpperCase() === typed;
    });

    if (match) {
      setFound(match);
      setNotFound(false);
    } else {
      setFound(null);
      setNotFound(true);
    }
  }

  // Where the complaint currently stands in the 5 step process
  const currentStep = found ? statusSteps.indexOf(found.status) : -1;

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div className="page-head">
          <h1>Track Your Complaint</h1>
          <p>Enter the complaint ID you received after submitting, for example CF-2026-00101.</p>
        </div>

        <form className="card mb" onSubmit={handleSearch}>
          <div className="flex flex-wrap" style={{ alignItems: "flex-end" }}>
            <div style={{ flex: 1, minWidth: "220px" }}>
              <label htmlFor="cid">Complaint ID</label>
              <input
                id="cid"
                type="text"
                value={searchId}
                placeholder="CF-2026-00101"
                onChange={function (event) {
                  setSearchId(event.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Track Complaint
            </button>
          </div>
        </form>

        {/* Conditional rendering: error state */}
        {notFound ? (
          <div className="alert alert-error">
            No complaint found with that ID. Please check the ID and try again.
          </div>
        ) : null}

        {/* Conditional rendering: result */}
        {found ? (
          <section className="card">
            <div className="flex-between flex-wrap">
              <div>
                <h2 style={{ marginBottom: "4px" }}>{found.title}</h2>
                <p className="small muted">Complaint ID: {found.id}</p>
              </div>
              <div className="flex">
                <StatusBadge value={found.priority} />
                <StatusBadge value={found.status} />
              </div>
            </div>

            <div className="grid grid-4 mb">
              <div>
                <div className="small muted">Category</div>
                <b>{found.category}</b>
              </div>
              <div>
                <div className="small muted">Location</div>
                <b>{found.location}</b>
              </div>
              <div>
                <div className="small muted">Reported on</div>
                <b>{formatDate(found.date)}</b>
              </div>
              <div>
                <div className="small muted">Assigned department</div>
                <b>{found.department}</b>
              </div>
            </div>

            <h3>Progress</h3>
            <ol className="timeline">
              {statusSteps.map(function (step, index) {
                let className = "";
                if (index < currentStep) {
                  className = "done";
                } else if (index === currentStep) {
                  className = "current";
                }

                return (
                  <li key={step} className={className}>
                    <span className="tl-dot">{index < currentStep ? "✓" : index + 1}</span>
                    <div>
                      <b>{step}</b>
                      {index === currentStep ? (
                        <div className="small muted">Current stage of your complaint</div>
                      ) : null}
                      {index < currentStep ? <div className="small muted">Completed</div> : null}
                      {index > currentStep ? <div className="small muted">Pending</div> : null}
                    </div>
                  </li>
                );
              })}
            </ol>

            <Link to="/complaint/$id" params={{ id: found.id }} className="btn btn-outline">
              Open full complaint details
            </Link>
          </section>
        ) : null}

        {!found && !notFound ? (
          <div className="empty">
            <b>Nothing to show yet</b>
            Enter a complaint ID above to see its full status timeline.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default TrackComplaint;
