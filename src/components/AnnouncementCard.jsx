import { formatDate } from "../data/storage";

function AnnouncementCard({ announcement }) {
  return (
    <article className="card card-hover">
      <div className="flex-between">
        <span className="badge badge-red">{announcement.category}</span>
        <span className="small muted">{formatDate(announcement.date)}</span>
      </div>
      <h3 style={{ marginTop: "10px" }}>{announcement.title}</h3>
      <p className="small muted" style={{ margin: 0 }}>
        {announcement.description}
      </p>
    </article>
  );
}

export default AnnouncementCard;
