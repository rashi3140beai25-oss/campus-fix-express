import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  complaints as demoComplaints,
  discussions,
  suggestions,
} from "../data/sampleData";
import { formatDate, getComplaints } from "../data/storage";

const pollOptions = ["Yes", "No", "Maybe"];

function Community() {
  const [complaints, setComplaints] = useState(demoComplaints);
  const [votes, setVotes] = useState({ Yes: 128, No: 34, Maybe: 51 });
  const [myVote, setMyVote] = useState("");

  useEffect(function () {
    setComplaints(getComplaints());
  }, []);

  function handleVote(option) {
    if (myVote !== "") {
      return;
    }
    const updated = { ...votes };
    updated[option] = updated[option] + 1;
    setVotes(updated);
    setMyVote(option);
  }

  const totalVotes = votes.Yes + votes.No + votes.Maybe;

  const popular = complaints
    .slice()
    .sort(function (a, b) {
      return b.upvotes - a.upvotes;
    })
    .slice(0, 5);

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h1>Campus Community</h1>
          <p>
            See which problems students care about most, share suggestions, vote in campus polls and
            join the discussion.
          </p>
        </div>

        <div className="grid grid-2" style={{ gridTemplateColumns: "1.5fr 1fr" }}>
          <div>
            <section className="card mb">
              <h2 style={{ fontSize: "20px" }}>Popular issues right now</h2>
              {popular.map(function (item, index) {
                return (
                  <div key={item.id} className="flex-between" style={{ padding: "9px 0" }}>
                    <div>
                      <b className="small">
                        {index + 1}. {item.title}
                      </b>
                      <div className="small muted">
                        {item.location} · {item.category}
                      </div>
                    </div>
                    <Link
                      to="/complaint/$id"
                      params={{ id: item.id }}
                      className="btn btn-ghost btn-sm"
                    >
                      👍 {item.upvotes}
                    </Link>
                  </div>
                );
              })}
            </section>

            <section className="card">
              <h2 style={{ fontSize: "20px" }}>Student discussions</h2>
              {discussions.map(function (topic) {
                return (
                  <article
                    key={topic.id}
                    style={{ padding: "12px 0", borderBottom: "1px solid #ebebee" }}
                  >
                    <div className="flex-between">
                      <b>{topic.title}</b>
                      <span className="badge badge-gray">{topic.replies} replies</span>
                    </div>
                    <p className="small muted" style={{ margin: "6px 0 0 0" }}>
                      {topic.text}
                    </p>
                    <p className="small muted" style={{ margin: 0 }}>
                      Posted by {topic.author} · {formatDate(topic.date)}
                    </p>
                  </article>
                );
              })}
            </section>
          </div>

          <aside>
            <section className="card mb">
              <h2 style={{ fontSize: "20px" }}>Campus poll</h2>
              <p className="small muted">Should the library remain open until midnight?</p>

              {pollOptions.map(function (option) {
                const percent = totalVotes > 0 ? Math.round((votes[option] / totalVotes) * 100) : 0;
                return (
                  <div key={option} style={{ marginBottom: "12px" }}>
                    <div className="flex-between small">
                      <span>{option}</span>
                      <b>{percent}%</b>
                    </div>
                    <div className="progress" style={{ margin: "5px 0" }}>
                      <div className="progress-bar" style={{ width: percent + "%" }} />
                    </div>
                    <button
                      className={myVote === option ? "btn btn-primary btn-sm" : "btn btn-outline btn-sm"}
                      onClick={function () {
                        handleVote(option);
                      }}
                    >
                      {myVote === option ? "Your vote" : "Vote " + option}
                    </button>
                  </div>
                );
              })}

              {/* Conditional rendering after voting */}
              {myVote !== "" ? (
                <div className="alert alert-success" style={{ marginTop: "10px" }}>
                  Thanks for voting. Total votes: {totalVotes}.
                </div>
              ) : (
                <p className="small muted">Every student can vote once in this demo poll.</p>
              )}
            </section>

            <section className="card">
              <h2 style={{ fontSize: "20px" }}>Student suggestions</h2>
              {suggestions.map(function (item) {
                return (
                  <div key={item.id} className="flex-between small" style={{ padding: "7px 0" }}>
                    <span>{item.text}</span>
                    <span className="badge badge-red">{item.votes}</span>
                  </div>
                );
              })}
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Community;
