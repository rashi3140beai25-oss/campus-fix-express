import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { categories, locations, priorities } from "../data/sampleData";
import { getComplaints, makeComplaintId, saveComplaints } from "../data/storage";

// Which department should handle which category
const departmentByCategory = {
  Electrical: "Electrical",
  Plumbing: "Maintenance",
  Cleanliness: "Housekeeping",
  Infrastructure: "Infrastructure",
  "Internet / Wi-Fi": "IT Department",
  Classroom: "IT Department",
  Hostel: "Hostel Administration",
  Library: "Library Services",
  Canteen: "Housekeeping",
  Security: "Security",
  Parking: "Security",
  Other: "Maintenance",
};

function ReportComplaint() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const [newId, setNewId] = useState("");

  function handleImage(event) {
    const file = event.target.files[0];
    if (!file) {
      setImage("");
      return;
    }
    // FileReader converts the picture into a text (base64) preview
    const reader = new FileReader();
    reader.onload = function () {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function validate() {
    const found = {};

    if (title.trim().length < 6) {
      found.title = "Please write a title of at least 6 characters.";
    }
    if (category === "") {
      found.category = "Please choose a category.";
    }
    if (location === "") {
      found.location = "Please choose a location.";
    }
    if (description.trim().length < 15) {
      found.description = "Please describe the problem in at least 15 characters.";
    }
    return found;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const found = validate();
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setNewId("");
      return;
    }

    const list = getComplaints();
    const id = makeComplaintId(list);

    const complaint = {
      id: id,
      title: title.trim(),
      category: category,
      location: location,
      description: description.trim(),
      status: "Submitted",
      priority: priority,
      upvotes: 0,
      date: new Date().toISOString().slice(0, 10),
      department: departmentByCategory[category],
      image: image,
      reporter: "You",
    };

    const updated = [complaint].concat(list);
    saveComplaints(updated);

    setNewId(id);
    setTitle("");
    setCategory("");
    setLocation("");
    setDescription("");
    setPriority("Medium");
    setImage("");
  }

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: "940px" }}>
        <div className="page-head">
          <h1>Report a Campus Issue</h1>
          <p>
            Give a clear title, choose the correct category and location, and add a photo if you
            can. A tracking ID is generated as soon as you submit.
          </p>
        </div>

        {/* Success message with the generated complaint ID */}
        {newId !== "" ? (
          <div className="alert alert-success">
            Complaint submitted successfully. Your complaint ID is <b>{newId}</b>. Save this ID to
            track the progress on the <Link to="/track">Track Complaint</Link> page.
          </div>
        ) : null}

        <div className="grid grid-2" style={{ gridTemplateColumns: "1.6fr 1fr" }}>
          <form className="card" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="title">Complaint Title *</label>
              <input
                id="title"
                type="text"
                className={errors.title ? "input-error" : ""}
                value={title}
                placeholder="Example: Fan not working in Room 108"
                onChange={function (event) {
                  setTitle(event.target.value);
                }}
              />
              {errors.title ? <p className="error-text">{errors.title}</p> : null}
            </div>

            <div className="grid grid-2" style={{ gap: "14px" }}>
              <div className="form-row">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  className={errors.category ? "input-error" : ""}
                  value={category}
                  onChange={function (event) {
                    setCategory(event.target.value);
                  }}
                >
                  <option value="">Select a category</option>
                  {categories.map(function (item) {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                {errors.category ? <p className="error-text">{errors.category}</p> : null}
              </div>

              <div className="form-row">
                <label htmlFor="location">Location *</label>
                <select
                  id="location"
                  className={errors.location ? "input-error" : ""}
                  value={location}
                  onChange={function (event) {
                    setLocation(event.target.value);
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
                {errors.location ? <p className="error-text">{errors.location}</p> : null}
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                className={errors.description ? "input-error" : ""}
                value={description}
                placeholder="Explain the problem, since when it exists and how it affects students."
                onChange={function (event) {
                  setDescription(event.target.value);
                }}
              />
              <div className="small muted">{description.length} characters</div>
              {errors.description ? <p className="error-text">{errors.description}</p> : null}
            </div>

            <div className="form-row">
              <label>Priority *</label>
              <div className="flex flex-wrap">
                {priorities.map(function (item) {
                  return (
                    <button
                      type="button"
                      key={item}
                      className={priority === item ? "btn btn-primary btn-sm" : "btn btn-outline btn-sm"}
                      onClick={function () {
                        setPriority(item);
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="image">Photo (optional)</label>
              <input id="image" type="file" accept="image/*" onChange={handleImage} />
            </div>

            {/* Image preview appears only after a file is chosen */}
            {image !== "" ? (
              <div className="form-row">
                <img
                  src={image}
                  alt="Preview of the reported issue"
                  style={{ width: "100%", maxHeight: "260px", objectFit: "cover", borderRadius: "10px" }}
                />
                <button
                  type="button"
                  className="btn btn-ghost btn-sm mt"
                  onClick={function () {
                    setImage("");
                  }}
                >
                  Remove photo
                </button>
              </div>
            ) : null}

            <div className="flex flex-wrap">
              <button type="submit" className="btn btn-primary">
                Submit Complaint
              </button>
              <Link to="/explorer" className="btn btn-outline">
                View all complaints
              </Link>
            </div>
          </form>

          <aside>
            <div className="card mb">
              <h3>Reporting tips</h3>
              <ul className="small muted">
                <li>Mention the exact room, floor or block.</li>
                <li>One complaint per problem works best.</li>
                <li>A photo helps the department act faster.</li>
                <li>Use High priority only for safety issues.</li>
              </ul>
            </div>

            <div className="card">
              <h3>Auto assignment</h3>
              <p className="small muted">
                Based on the selected category, this complaint will be sent to:
              </p>
              <p>
                <b>{category === "" ? "Select a category first" : departmentByCategory[category]}</b>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ReportComplaint;
