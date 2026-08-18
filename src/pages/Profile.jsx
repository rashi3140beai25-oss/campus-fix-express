import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getUser, saveUser } from "../data/storage";

const guestProfile = {
  name: "Guest Student",
  studentId: "-",
  email: "-",
  department: "-",
  semester: "-",
  role: "student",
};

function Profile() {
  const [profile, setProfile] = useState(guestProfile);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(guestProfile);
  const [saved, setSaved] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(function () {
    const user = getUser();
    if (user) {
      setProfile(user);
      setForm(user);
      setLoggedIn(true);
    }
  }, []);

  function handleChange(field, value) {
    setForm({ ...form, [field]: value });
  }

  function handleSave(event) {
    event.preventDefault();
    setProfile(form);
    saveUser(form);
    setEditing(false);
    setSaved(true);
  }

  const fields = [
    { key: "name", label: "Student Name" },
    { key: "studentId", label: "Student ID" },
    { key: "email", label: "Email" },
    { key: "department", label: "Department" },
    { key: "semester", label: "Semester" },
  ];

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: "760px" }}>
        <div className="page-head">
          <h1>My Profile</h1>
          <p>Your details are stored in the browser using localStorage for this demo project.</p>
        </div>

        {!loggedIn ? (
          <div className="alert alert-info">
            You are not logged in. <Link to="/login">Login</Link> with the demo student account to
            edit a real profile.
          </div>
        ) : null}

        {saved ? <div className="alert alert-success">Profile updated successfully.</div> : null}

        <section className="card">
          <div className="flex-between mb">
            <h2 style={{ margin: 0, fontSize: "22px" }}>{profile.name}</h2>
            <span className="badge badge-red">{profile.role === "admin" ? "Admin" : "Student"}</span>
          </div>

          {/* Conditional rendering: view mode or edit mode */}
          {editing ? (
            <form onSubmit={handleSave}>
              {fields.map(function (field) {
                return (
                  <div className="form-row" key={field.key}>
                    <label htmlFor={field.key}>{field.label}</label>
                    <input
                      id={field.key}
                      type="text"
                      value={form[field.key]}
                      onChange={function (event) {
                        handleChange(field.key, event.target.value);
                      }}
                    />
                  </div>
                );
              })}

              <div className="flex">
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={function () {
                    setForm(profile);
                    setEditing(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              {fields.map(function (field) {
                return (
                  <div
                    key={field.key}
                    className="flex-between"
                    style={{ padding: "10px 0", borderBottom: "1px solid #ebebee" }}
                  >
                    <span className="muted small">{field.label}</span>
                    <b>{profile[field.key]}</b>
                  </div>
                );
              })}

              <button
                className="btn btn-primary mt"
                onClick={function () {
                  setEditing(true);
                  setSaved(false);
                }}
              >
                Edit profile
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Profile;
