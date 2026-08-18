import { createFileRoute } from "@tanstack/react-router";
import TrackComplaint from "../pages/TrackComplaint";

export const Route = createFileRoute("/track")({
  head: () => ({
    meta: [
      { title: "Track a Complaint — Campus Fix" },
      { name: "description", content: "Enter your Campus Fix complaint ID to see the full status timeline from Submitted to Resolved." },
      { property: "og:title", content: "Track a Complaint — Campus Fix" },
      { property: "og:description", content: "Enter your Campus Fix complaint ID to see the full status timeline from Submitted to Resolved." },
    ],
  }),
  component: TrackComplaint,
});
