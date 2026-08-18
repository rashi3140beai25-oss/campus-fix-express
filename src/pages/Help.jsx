import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { faqs } from "../data/sampleData";

function Help() {
  const [openId, setOpenId] = useState(0);

  function toggle(id) {
    if (openId === id) {
      setOpenId(0);
    } else {
      setOpenId(id);
    }
  }

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: "820px" }}>
        <div className="page-head">
          <h1>Help &amp; FAQ</h1>
          <p>Short answers to the questions students ask most often about Campus Fix.</p>
        </div>

        <section>
          {faqs.map(function (faq) {
            return (
              <article key={faq.id} className="card" style={{ marginBottom: "12px" }}>
                <button
                  className="flex-between"
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "left",
                  }}
                  onClick={function () {
                    toggle(faq.id);
                  }}
                >
                  <span>{faq.q}</span>
                  <span className="badge badge-red">{openId === faq.id ? "−" : "+"}</span>
                </button>

                {/* Conditional rendering of the answer */}
                {openId === faq.id ? (
                  <p className="muted small" style={{ marginTop: "10px", marginBottom: 0 }}>
                    {faq.a}
                  </p>
                ) : null}
              </article>
            );
          })}
        </section>

        <div className="card center mt">
          <h3>Still need help?</h3>
          <p className="muted small">
            Visit the campus help desk in the Academic Block, or simply raise a complaint and the
            right department will contact you.
          </p>
          <Link to="/report" className="btn btn-primary">
            Report an Issue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Help;
