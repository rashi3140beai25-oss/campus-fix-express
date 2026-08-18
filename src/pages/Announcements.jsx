import { useState } from "react";
import AnnouncementCard from "../components/AnnouncementCard";
import { announcements } from "../data/sampleData";

function Announcements() {
  const [filter, setFilter] = useState("All");

  // Unique category list built from the data
  const allCategories = ["All"].concat(
    announcements
      .map(function (item) {
        return item.category;
      })
      .filter(function (value, index, array) {
        return array.indexOf(value) === index;
      }),
  );

  const visible = announcements
    .filter(function (item) {
      return filter === "All" || item.category === filter;
    })
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h1>Campus Announcements</h1>
          <p>Official notices from the campus administration and the maintenance departments.</p>
        </div>

        <div className="flex flex-wrap mb">
          {allCategories.map(function (item) {
            return (
              <button
                key={item}
                className={filter === item ? "btn btn-primary btn-sm" : "btn btn-outline btn-sm"}
                onClick={function () {
                  setFilter(item);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <div className="empty">
            <b>No announcements in this category</b>
            Choose another category to see the latest notices.
          </div>
        ) : (
          <div className="grid grid-3">
            {visible.map(function (item) {
              return <AnnouncementCard key={item.id} announcement={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Announcements;
