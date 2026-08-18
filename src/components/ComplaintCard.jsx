import { Link } from "@tanstack/react-router";
import StatusBadge from "./StatusBadge";
import { formatDate } from "../data/storage";

function ComplaintCard({ complaint, hasVoted, onUpvote }) {
  return (
    <article className="complaint-card">
      {/* Conditional rendering: image only when the complaint has one */}
      {complaint.image ? (
        <img
          className="complaint-img"
          src={complaint.image}
          alt={complaint.title}
          loading="lazy"
          width={800}
          height={560}
        />
      ) : (
        <div className="complaint-img" />
      )}

      <div className="complaint-body">
        <div className="flex flex-wrap" style={{ gap: "6px" }}>
          <StatusBadge value={complaint.status} />
          <StatusBadge value={complaint.priority} />
          <span className="badge badge-gray">{complaint.category}</span>
        </div>

        <h3 style={{ fontSize: "17px", margin: 0 }}>{complaint.title}</h3>

        <p className="complaint-meta">
          {complaint.location} • {formatDate(complaint.date)} • {complaint.id}
        </p>

        <p className="small muted" style={{ margin: 0 }}>
          {complaint.description.length > 110
            ? complaint.description.slice(0, 110) + "..."
            : complaint.description}
        </p>

        <div className="flex-between" style={{ marginTop: "auto", paddingTop: "10px" }}>
          <button
            className={hasVoted ? "upvote-btn voted" : "upvote-btn"}
            onClick={function () {
              onUpvote(complaint.id);
            }}
          >
            👍 {complaint.upvotes} {hasVoted ? "Voted" : "Upvote"}
          </button>

          <Link
            to="/complaint/$id"
            params={{ id: complaint.id }}
            className="btn btn-ghost btn-sm"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ComplaintCard;
