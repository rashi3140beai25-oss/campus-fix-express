import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { campusLocations } from "../data/sampleData";

function CampusMap() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h1>Campus Map</h1>
          <p>
            Click any campus zone to see its open complaints, resolution percentage and the
            department responsible for it.
          </p>
        </div>

        <div className="flex flex-wrap mb">
          <span className="badge badge-red">High issue zone</span>
          <span className="badge badge-amber">Medium issue zone</span>
          <span className="badge badge-green">Low issue zone</span>
        </div>

        <div className="grid grid-2" style={{ gridTemplateColumns: "1.6fr 1fr" }}>
          <section className="map-board">
            {campusLocations.map(function (place) {
              let className = "map-pin " + place.level.toLowerCase();
              if (selected && selected.name === place.name) {
                className = className + " selected";
              }

              return (
                <button
                  key={place.name}
                  className={className}
                  style={{ top: place.top + "%", left: place.left + "%" }}
                  onClick={function () {
                    setSelected(place);
                  }}
                >
                  {place.name} · {place.open}
                </button>
              );
            })}
          </section>

          <aside>
            {/* Conditional rendering: details panel or empty state */}
            {selected ? (
              <div className="card">
                <div className="flex-between">
                  <h2 style={{ margin: 0, fontSize: "22px" }}>{selected.name}</h2>
                  <span
                    className={
                      selected.level === "High"
                        ? "badge badge-red"
                        : selected.level === "Medium"
                          ? "badge badge-amber"
                          : "badge badge-green"
                    }
                  >
                    {selected.level}
                  </span>
                </div>

                <div className="grid grid-2 mt" style={{ gap: "10px" }}>
                  <div>
                    <div className="stat-value" style={{ fontSize: "24px" }}>
                      {selected.open}
                    </div>
                    <div className="small muted">Open complaints</div>
                  </div>
                  <div>
                    <div className="stat-value" style={{ fontSize: "24px" }}>
                      {selected.resolved}%
                    </div>
                    <div className="small muted">Resolved</div>
                  </div>
                </div>

                <div className="progress" style={{ margin: "12px 0" }}>
                  <div className="progress-bar green" style={{ width: selected.resolved + "%" }} />
                </div>

                <p className="small">
                  <b>Most common issue: </b>
                  <span className="muted">{selected.common}</span>
                </p>
                <p className="small">
                  <b>Responsible department: </b>
                  <span className="muted">{selected.department}</span>
                </p>

                <div className="flex flex-wrap mt">
                  <Link to="/report" className="btn btn-primary btn-sm">
                    Report here
                  </Link>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={function () {
                      setSelected(null);
                    }}
                  >
                    Clear selection
                  </button>
                </div>
              </div>
            ) : (
              <div className="empty">
                <b>No location selected</b>
                Choose a marker on the map to view the details of that campus zone.
              </div>
            )}

            <div className="card mt">
              <h3>All zones</h3>
              {campusLocations.map(function (place) {
                return (
                  <div key={place.name} className="flex-between small" style={{ padding: "4px 0" }}>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={function () {
                        setSelected(place);
                      }}
                    >
                      {place.name}
                    </button>
                    <span className="muted">{place.open} open</span>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CampusMap;
