import { useEffect, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import StatusBadge from "../components/StatusBadge";
import { statusSteps } from "../data/sampleData";
import {
  formatDate,
  getComplaints,
  getUpvoted,
  saveComplaints,
  saveUpvoted,
} from "../data/storage";

function ComplaintDetails() {
  const params = useParams({ strict: false });
  const [complaint, setComplaint] = useState(null);
  const [upvoted, setUpvoted] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(
    function () {
      const list = getComplaints();
      const match = list.find(function (item) {
        return item.id === params.id;
      });
      setComplaint(match ? match : null);
      setUpvoted(getUpvoted());
      setLoaded(true);
    },
    [params.id],
  );

  function handleUpvote() {
    if (!complaint || upvoted.indexOf(complaint.id) !== -1) {
      return;
    }

    const list = getComplaints();
    const updatedList = list.map(function (item) {
      if (item.id === complaint.id) {
        return { ...item, upvotes: item.upvotes + 1 };
      }
      return item;
    });

    const updatedVotes = upvoted.concat(complaint.id);
    saveComplaints(updatedList);
    saveUpvoted(updatedVotes);
    setUpvoted(updatedVotes);
    setComplaint({ ...complaint, upvotes: complaint.upvotes + 1 });
  }

  if (!loaded) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty">Loading complaint...</div>
        </div>
      </div>
    );
  }

  if (!complaint) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty">
            <b>Complaint not found</b>
            The ID {params.id} does not exist in the current complaint list.
            <div className="mt">
              <Link to="/explorer" className="btn btn-primary">
                Back to Issue Explorer
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentStep = statusSteps.indexOf(complaint.status);
  const hasVoted = upvoted.indexOf(complaint.id) !== -1;

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: "980px" }}>
        <p className="small muted">
          <Link to="/explorer">Issue Explorer</Link> / {complaint.id}
        </p>

        <div className="grid grid-2" style={{ gridTemplateColumns: "1.6fr 1fr" }}>
          <article className="card">
            <div className="flex flex-wrap mb" style={{ gap: "6px" }}>
              <StatusBadge value={complaint.status} />
              <StatusBadge value={complaint.priority} />
              <span className="badge badge-gray">{complaint.category}</span>
            </div>

            <h1 style={{ fontSize: "28px" }}>{complaint.title}</h1>
            <p className="small muted">
              Reported by {complaint.reporter} on {formatDate(complaint.date)} · {complaint.location}
            </p>

            {complaint.image ? (
              <img
                src={complaint.image}
                alt={complaint.title}
                loading="lazy"
                style={{ width: "100%", borderRadius: "10px", margin: "12px 0" }}
              />
            ) : null}

            <h3>Description</h3>
            <p className="muted">{complaint.description}</p>

            <div className="flex flex-wrap mt">
              <button
                className={hasVoted ? "upvote-btn voted" : "upvote-btn"}
                onClick={handleUpvote}
              >
                👍 {complaint.upvotes} {hasVoted ? "Already upvoted" : "Upvote this issue"}
              </button>
              <Link to="/track" className="btn btn-outline btn-sm">
                Track another complaint
              </Link>
            </div>
          </article>

          <aside>
            <div className="card mb">
              <h3>Complaint details</h3>
              <div className="flex-between small">
                <span className="muted">Complaint ID</span>
                <b>{complaint.id}</b>
              </div>
              <div className="flex-between small">
                <span className="muted">Department</span>
                <b>{complaint.department}</b>
              </div>
              <div className="flex-between small">
                <span className="muted">Location</span>
                <b>{complaint.location}</b>
              </div>
              <div className="flex-between small">
                <span className="muted">Upvotes</span>
                <b>{complaint.upvotes}</b>
              </div>
            </div>

            <div className="card">
              <h3>Status timeline</h3>
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
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ComplaintDetails;
