import { useEffect, useState } from "react";
import StatusBadge from "../components/StatusBadge";
import {
  complaints as demoComplaints,
  departments,
  priorities,
  statusSteps,
} from "../data/sampleData";
import { formatDate, getComplaints, saveComplaints } from "../data/storage";

function AdminComplaints() {
  const [complaints, setComplaints] = useState(demoComplaints);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [openId, setOpenId] = useState("");
  const [toast, setToast] = useState("");

  useEffect(function () {
    setComplaints(getComplaints());
  }, []);

  function updateComplaint(id, field, value) {
    const updated = complaints.map(function (item) {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setComplaints(updated);
    saveComplaints(updated);
    setToast(field + " updated for " + id);
  }

  const visible = complaints.filter(function (item) {
    const text = (item.title + " " + item.id + " " + item.location).toLowerCase();
    const matchesSearch = text.indexOf(search.trim().toLowerCase()) !== -1;
    const matchesStatus = status === "All" || item.status === status;
    const matchesPriority = priority === "All" || item.priority === priority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const selected = complaints.find(function (item) {
    return item.id === openId;
  });

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h1>Admin — Complaints</h1>
          <p>Search complaints, open one, and update its status, priority or department.</p>
        </div>

        <div className="filter-bar" style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
          <div>
            <label htmlFor="asearch">Search</label>
            <input
              id="asearch"
              type="search"
              value={search}
              placeholder="Search by title, ID or location"
              onChange={function (event) {
                setSearch(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="astatus">Status</label>
            <select
              id="astatus"
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
            <label htmlFor="apriority">Priority</label>
            <select
              id="apriority"
              value={priority}
              onChange={function (event) {
                setPriority(event.target.value);
              }}
            >
              <option value="All">All priorities</option>
              {priorities.map(function (item) {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="empty">
            <b>No complaints match this search</b>
            Clear the search box or change the filters.
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Department</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {visible.map(function (item) {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>{item.department}</td>
                      <td>
                        <StatusBadge value={item.priority} />
                      </td>
                      <td>
                        <StatusBadge value={item.status} />
                      </td>
                      <td>{formatDate(item.date)}</td>
                      <td>
                        <button
                          className="btn btn-ghost btn-sm"
                          onClick={function () {
                            setOpenId(item.id);
                          }}
                        >
                          Open
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal with the editing controls */}
        {selected ? (
          <div className="modal-backdrop">
            <div className="modal">
              <div className="flex-between mb">
                <h2 style={{ margin: 0, fontSize: "21px" }}>{selected.id}</h2>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={function () {
                    setOpenId("");
                  }}
                >
                  Close
                </button>
              </div>

              <h3>{selected.title}</h3>
              <p className="small muted">
                {selected.category} · {selected.location} · {formatDate(selected.date)}
              </p>
              <p className="small muted">{selected.description}</p>

              <div className="form-row">
                <label htmlFor="setstatus">Status</label>
                <select
                  id="setstatus"
                  value={selected.status}
                  onChange={function (event) {
                    updateComplaint(selected.id, "status", event.target.value);
                  }}
                >
                  {statusSteps.map(function (item) {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="setpriority">Priority</label>
                <select
                  id="setpriority"
                  value={selected.priority}
                  onChange={function (event) {
                    updateComplaint(selected.id, "priority", event.target.value);
                  }}
                >
                  {priorities.map(function (item) {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="setdep">Assigned department</label>
                <select
                  id="setdep"
                  value={selected.department}
                  onChange={function (event) {
                    updateComplaint(selected.id, "department", event.target.value);
                  }}
                >
                  {departments.map(function (dep) {
                    return (
                      <option key={dep.name} value={dep.name}>
                        {dep.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={function () {
                  setOpenId("");
                  setToast("Changes saved for " + selected.id);
                }}
              >
                Done
              </button>
            </div>
          </div>
        ) : null}

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

export default AdminComplaints;
