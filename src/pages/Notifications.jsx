import { useEffect, useState } from "react";
import { notificationsData } from "../data/sampleData";
import { formatDate, getNotifications, saveNotifications } from "../data/storage";

function Notifications() {
  const [notes, setNotes] = useState(notificationsData);
  const [tab, setTab] = useState("All");

  useEffect(function () {
    setNotes(getNotifications());
  }, []);

  function markAsRead(id) {
    const updated = notes.map(function (note) {
      if (note.id === id) {
        return { ...note, read: true };
      }
      return note;
    });
    setNotes(updated);
    saveNotifications(updated);
  }

  function markAllRead() {
    const updated = notes.map(function (note) {
      return { ...note, read: true };
    });
    setNotes(updated);
    saveNotifications(updated);
  }

  const unreadCount = notes.filter(function (note) {
    return note.read === false;
  }).length;

  const visible = notes.filter(function (note) {
    if (tab === "Unread") {
      return note.read === false;
    }
    if (tab === "Read") {
      return note.read === true;
    }
    return true;
  });

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: "820px" }}>
        <div className="page-head flex-between flex-wrap">
          <div>
            <h1>Notifications</h1>
            <p>Status updates, community activity and campus announcements in one place.</p>
          </div>
          <button className="btn btn-outline" onClick={markAllRead}>
            Mark all as read
          </button>
        </div>

        <div className="tabs">
          {["All", "Unread", "Read"].map(function (item) {
            return (
              <button
                key={item}
                className={tab === item ? "tab active" : "tab"}
                onClick={function () {
                  setTab(item);
                }}
              >
                {item} {item === "Unread" ? "(" + unreadCount + ")" : ""}
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <div className="empty">
            <b>Nothing here</b>
            You have no {tab.toLowerCase()} notifications right now.
          </div>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {visible.map(function (note) {
              return (
                <li
                  key={note.id}
                  className="card"
                  style={{
                    marginBottom: "12px",
                    borderLeft: note.read ? "4px solid #ebebee" : "4px solid var(--red)",
                  }}
                >
                  <div className="flex-between flex-wrap">
                    <div>
                      <span className="badge badge-gray">{note.type}</span>
                      <p style={{ margin: "8px 0 2px 0" }}>{note.text}</p>
                      <span className="small muted">{formatDate(note.date)}</span>
                    </div>

                    {/* Conditional rendering: button only for unread items */}
                    {note.read ? (
                      <span className="badge badge-green">Read</span>
                    ) : (
                      <button
                        className="btn btn-ghost btn-sm"
                        onClick={function () {
                          markAsRead(note.id);
                        }}
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Notifications;
