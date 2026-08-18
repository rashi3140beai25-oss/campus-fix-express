import { createFileRoute } from "@tanstack/react-router";
import AdminDashboard from "../admin/AdminDashboard";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Campus Fix" },
      { name: "description", content: "Administration overview of all campus complaints, backlog and high priority issues." },
      { property: "og:title", content: "Admin Dashboard — Campus Fix" },
      { property: "og:description", content: "Administration overview of all campus complaints, backlog and high priority issues." },
    ],
  }),
  component: AdminDashboard,
});
