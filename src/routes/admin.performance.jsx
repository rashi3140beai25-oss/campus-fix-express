import { createFileRoute } from "@tanstack/react-router";
import AdminPerformance from "../admin/AdminPerformance";

export const Route = createFileRoute("/admin/performance")({
  head: () => ({
    meta: [
      { title: "Performance Center — Campus Fix" },
      { name: "description", content: "Department scorecards for response time, resolution rate and pending backlog." },
      { property: "og:title", content: "Performance Center — Campus Fix" },
      { property: "og:description", content: "Department scorecards for response time, resolution rate and pending backlog." },
    ],
  }),
  component: AdminPerformance,
});
