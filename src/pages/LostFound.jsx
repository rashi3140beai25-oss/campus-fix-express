import { useEffect, useState } from "react";
import StatusBadge from "../components/StatusBadge";
import {
  locations,
  lostFoundCategories,
  lostFoundItems as demoItems,
} from "../data/sampleData";
import { formatDate, getLostFound, saveLostFound } from "../data/storage";

function LostFound() {
  const [items, setItems] = useState(demoItems);
  const [tab, setTab] = useState("Lost");
  const [formType, setFormType] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(function () {
    setItems(getLostFound());
  }, []);

  function openForm(type) {
    setFormType(type);
    setError("");
    setSuccess("");
  }

  function closeForm() {
    setFormType("");
    setName("");
    setCategory("");
    setPlace("");
    setDescription("");
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim().length < 3 || category === "" || place === "") {
      setError("Please fill the item name, category and location.");
      return;
    }

    const newItem = {
      id: "LF-" + String(items.length + 1).padStart(2, "0"),
      type: formType,
      name: name.trim(),
      category: category,
      location: place,
      date: new Date().toISOString().slice(0, 10),
      description: description.trim() === "" ? "No extra description provided." : description.trim(),
      status: "Open",
    };

    const updated = [newItem].concat(items);
    setItems(updated);
    saveLostFound(updated);
    setTab(formType);
    setSuccess(formType + " item posted successfully as " + newItem.id + ".");
    closeForm();
  }

  const visible = items.filter(function (item) {
    return item.type === tab;
  });

  return (
    <div className="page">
      <div className="container">
        <div className="page-head flex-between flex-wrap">
          <div>
            <h1>Lost &amp; Found</h1>
            <p>Post something you lost, or help a classmate by posting something you found.</p>
          </div>
          <div className="flex flex-wrap">
            <button
              className="btn btn-primary"
              onClick={function () {
                openForm("Lost");
              }}
            >
              Report Lost Item
            </button>
            <button
              className="btn btn-outline"
              onClick={function () {
                openForm("Found");
              }}
            >
              Report Found Item
            </button>
          </div>
        </div>

        {success !== "" ? <div className="alert alert-success">{success}</div> : null}

        <div className="tabs">
          <button
            className={tab === "Lost" ? "tab active" : "tab"}
            onClick={function () {
              setTab("Lost");
            }}
          >
            Lost Items
          </button>
          <button
            className={tab === "Found" ? "tab active" : "tab"}
            onClick={function () {
              setTab("Found");
            }}
          >
            Found Items
          </button>
        </div>

        {visible.length === 0 ? (
          <div className="empty">
            <b>Nothing posted in this tab yet</b>
            Use the buttons above to add the first {tab.toLowerCase()} item.
          </div>
        ) : (
          <div className="grid grid-3">
            {visible.map(function (item) {
              return (
                <article key={item.id} className="card card-hover">
                  <div className="flex-between">
                    <span className={item.type === "Lost" ? "badge badge-red" : "badge badge-green"}>
                      {item.type}
                    </span>
                    <StatusBadge value={item.status} />
                  </div>
                  <h3 style={{ marginTop: "10px" }}>{item.name}</h3>
                  <p className="small muted" style={{ marginBottom: "6px" }}>
                    {item.category} · {item.location} · {formatDate(item.date)}
                  </p>
                  <p className="small muted" style={{ margin: 0 }}>
                    {item.description}
                  </p>
                  <p className="small" style={{ marginTop: "10px", marginBottom: 0 }}>
                    Reference: <b>{item.id}</b>
                  </p>
                </article>
              );
            })}
          </div>
        )}

        {/* Modal form, shown only when a report button is clicked */}
        {formType !== "" ? (
          <div className="modal-backdrop">
            <div className="modal">
              <div className="flex-between mb">
                <h2 style={{ margin: 0, fontSize: "22px" }}>Report {formType} Item</h2>
                <button className="btn btn-ghost btn-sm" onClick={closeForm}>
                  Close
                </button>
              </div>

              {error !== "" ? <div className="alert alert-error">{error}</div> : null}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="itemname">Item name *</label>
                  <input
                    id="itemname"
                    type="text"
                    value={name}
                    placeholder="Example: Black wallet"
                    onChange={function (event) {
                      setName(event.target.value);
                    }}
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="itemcat">Category *</label>
                  <select
                    id="itemcat"
                    value={category}
                    onChange={function (event) {
                      setCategory(event.target.value);
                    }}
                  >
                    <option value="">Select a category</option>
                    {lostFoundCategories.map(function (item) {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-row">
                  <label htmlFor="itemloc">Location *</label>
                  <select
                    id="itemloc"
                    value={place}
                    onChange={function (event) {
                      setPlace(event.target.value);
                    }}
                  >
                    <option value="">Select a location</option>
                    {locations.map(function (item) {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-row">
                  <label htmlFor="itemdesc">Description</label>
                  <textarea
                    id="itemdesc"
                    value={description}
                    placeholder="Colour, brand, or anything that helps identify the item."
                    onChange={function (event) {
                      setDescription(event.target.value);
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Post {formType} Item
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LostFound;
