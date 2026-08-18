import { formatDate } from "../data/storage";

function SuccessStoryCard({ story }) {
  return (
    <article className="card card-hover">
      <div className="flex-between">
        <span className="badge badge-green">Resolved</span>
        <span className="small muted">{formatDate(story.date)}</span>
      </div>

      <h3 style={{ marginTop: "10px" }}>{story.title}</h3>

      <p className="small">
        <b>Problem: </b>
        <span className="muted">{story.problem}</span>
      </p>
      <p className="small">
        <b>Action taken: </b>
        <span className="muted">{story.action}</span>
      </p>
      <p className="small">
        <b>Result: </b>
        <span className="muted">{story.result}</span>
      </p>

      <div className="flex-between small" style={{ borderTop: "1px solid #ebebee", paddingTop: "10px" }}>
        <span className="badge badge-gray">{story.department}</span>
        <span className="muted">{story.students.toLocaleString()} students benefited</span>
      </div>
    </article>
  );
}

export default SuccessStoryCard;
