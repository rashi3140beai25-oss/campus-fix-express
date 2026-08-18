import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../pages/Dashboard";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Student Dashboard — Campus Fix" },
      { name: "description", content: "See your complaint statistics, recent reports and campus announcements in one place." },
      { property: "og:title", content: "Student Dashboard — Campus Fix" },
      { property: "og:description", content: "See your complaint statistics, recent reports and campus announcements in one place." },
    ],
  }),
  component: Dashboard,
});
