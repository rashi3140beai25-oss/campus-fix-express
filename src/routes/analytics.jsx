import { createFileRoute } from "@tanstack/react-router";
import CampusAnalytics from "../pages/CampusAnalytics";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Campus Analytics — Campus Fix" },
      { name: "description", content: "Complaint analytics by category, location, status and month, with department performance." },
      { property: "og:title", content: "Campus Analytics — Campus Fix" },
      { property: "og:description", content: "Complaint analytics by category, location, status and month, with department performance." },
    ],
  }),
  component: CampusAnalytics,
});
