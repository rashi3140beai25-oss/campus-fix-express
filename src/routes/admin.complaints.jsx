import { createFileRoute } from "@tanstack/react-router";
import AdminComplaints from "../admin/AdminComplaints";

export const Route = createFileRoute("/admin/complaints")({
  head: () => ({
    meta: [
      { title: "Admin Complaints — Campus Fix" },
      { name: "description", content: "Search complaints and update status, priority and assigned department." },
      { property: "og:title", content: "Admin Complaints — Campus Fix" },
      { property: "og:description", content: "Search complaints and update status, priority and assigned department." },
    ],
  }),
  component: AdminComplaints,
});
