import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { demoUsers } from "../data/sampleData";
import { saveUser } from "../data/storage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError("Please enter both email and password.");
      return;
    }

    // find() searches the demo users array
    const foundUser = demoUsers.find(function (user) {
      return user.email === email.trim().toLowerCase() && user.password === password;
    });

    if (!foundUser) {
      setError("Wrong email or password. Please use one of the demo accounts below.");
      return;
    }

    setError("");
    saveUser(foundUser);

    if (foundUser.role === "admin") {
      navigate({ to: "/admin" });
    } else {
      navigate({ to: "/dashboard" });
    }
  }

  function fillDemo(role) {
    if (role === "admin") {
      setEmail("admin@campusfix.com");
      setPassword("admin123");
    } else {
      setEmail("student@campusfix.com");
      setPassword("student123");
    }
    setError("");
  }

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: "880px" }}>
        <div className="grid grid-2">
          <section className="card">
            <h1 style={{ fontSize: "28px" }}>Login to Campus Fix</h1>
            <p className="muted small">
              Use a demo account to explore the student area or the admin panel.
            </p>

            {/* Conditional rendering of the error message */}
            {error ? <div className="alert alert-error">{error}</div> : null}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="email">College Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="student@campusfix.com"
                  onChange={function (event) {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={function (event) {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                Login
              </button>
            </form>
          </section>

          <aside className="card">
            <h3>Demo accounts</h3>
            <p className="small muted">Click a card to fill the form automatically.</p>

            <button
              className="card card-hover"
              style={{ width: "100%", textAlign: "left", cursor: "pointer", marginBottom: "12px" }}
              onClick={function () {
                fillDemo("student");
              }}
            >
              <b>Student</b>
              <div className="small muted">student@campusfix.com</div>
              <div className="small muted">student123</div>
            </button>

            <button
              className="card card-hover"
              style={{ width: "100%", textAlign: "left", cursor: "pointer" }}
              onClick={function () {
                fillDemo("admin");
              }}
            >
              <b>Administration</b>
              <div className="small muted">admin@campusfix.com</div>
              <div className="small muted">admin123</div>
            </button>

            <p className="small muted mt">
              This is a frontend demo login. The login state is stored in the browser using
              localStorage.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Login;
