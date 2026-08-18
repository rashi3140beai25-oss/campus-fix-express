import { useEffect, useState } from "react";
import ComplaintCard from "../components/ComplaintCard";
import {
  categories,
  complaints as demoComplaints,
  locations,
  statusSteps,
} from "../data/sampleData";
import { getComplaints, getUpvoted, saveComplaints, saveUpvoted } from "../data/storage";

const priorityValue = { High: 3, Medium: 2, Low: 1 };

function IssueExplorer() {
  const [complaints, setComplaints] = useState(demoComplaints);
  const [upvoted, setUpvoted] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [location, setLocation] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [toast, setToast] = useState("");

  useEffect(function () {
    setComplaints(getComplaints());
    setUpvoted(getUpvoted());
  }, []);

  function handleUpvote(id) {
    // A student can upvote a complaint only once
    if (upvoted.indexOf(id) !== -1) {
      setToast("You have already upvoted this complaint.");
      return;
    }

    const updated = complaints.map(function (item) {
      if (item.id === id) {
        return { ...item, upvotes: item.upvotes + 1 };
      }
      return item;
    });

    const updatedVotes = upvoted.concat(id);

    setComplaints(updated);
    setUpvoted(updatedVotes);
    saveComplaints(updated);
    saveUpvoted(updatedVotes);
    setToast("Thanks! Your upvote was counted.");
  }

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setStatus("All");
    setLocation("All");
    setSortBy("Newest");
  }

  // filter() applies search + all three dropdown filters
  const filtered = complaints.filter(function (item) {
    const text = (item.title + " " + item.description + " " + item.id).toLowerCase();
    const matchesSearch = text.indexOf(search.trim().toLowerCase()) !== -1;
    const matchesCategory = category === "All" || item.category === category;
    const matchesStatus = status === "All" || item.status === status;
    const matchesLocation = location === "All" || item.location === location;
    return matchesSearch && matchesCategory && matchesStatus && matchesLocation;
  });

  // sort() creates the final order
  const visible = filtered.slice().sort(function (a, b) {
    if (sortBy === "Most Upvoted") {
      return b.upvotes - a.upvotes;
    }
    if (sortBy === "Highest Priority") {
      return priorityValue[b.priority] - priorityValue[a.priority];
    }
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h1>Issue Explorer</h1>
          <p>
            Browse every complaint reported on campus. Search, filter and sort to find the issues
            that matter to you, then upvote the ones that need urgent attention.
          </p>
        </div>

        <div className="filter-bar">
          <div>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="search"
              value={search}
              placeholder="Search title, description or ID"
              onChange={function (event) {
                setSearch(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="fcat">Category</label>
            <select
              id="fcat"
              value={category}
              onChange={function (event) {
                setCategory(event.target.value);
              }}
            >
              <option value="All">All categories</option>
              {categories.map(function (item) {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="fstat">Status</label>
            <select
              id="fstat"
              value={status}
              onChange={function (event) {
                setStatus(event.target.value);
              }}
            >
              <option value="All">All statuses</option>
              {statusSteps.map(function (item) {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="floc">Location</label>
            <select
              id="floc"
              value={location}
              onChange={function (event) {
                setLocation(event.target.value);
              }}
            >
              <option value="All">All locations</option>
              {locations.map(function (item) {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="fsort">Sort by</label>
            <select
              id="fsort"
              value={sortBy}
              onChange={function (event) {
                setSortBy(event.target.value);
              }}
            >
              <option value="Newest">Newest</option>
              <option value="Most Upvoted">Most Upvoted</option>
              <option value="Highest Priority">Highest Priority</option>
            </select>
          </div>
        </div>

        <div className="flex-between mb">
          <p className="small muted" style={{ margin: 0 }}>
            Showing <b>{visible.length}</b> of {complaints.length} complaints
          </p>
          <button className="btn btn-ghost btn-sm" onClick={resetFilters}>
            Reset filters
          </button>
        </div>

        {visible.length === 0 ? (
          <div className="empty">
            <b>No complaints match your filters</b>
            Try a different keyword, or reset the filters to see all campus issues.
          </div>
        ) : (
          <div className="grid grid-3">
            {visible.map(function (item) {
              return (
                <ComplaintCard
                  key={item.id}
                  complaint={item}
                  hasVoted={upvoted.indexOf(item.id) !== -1}
                  onUpvote={handleUpvote}
                />
              );
            })}
          </div>
        )}

        {toast !== "" ? (
          <div
            className="toast"
            onClick={function () {
              setToast("");
            }}
          >
            {toast}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default IssueExplorer;
