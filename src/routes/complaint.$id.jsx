import { createFileRoute } from "@tanstack/react-router";
import ComplaintDetails from "../pages/ComplaintDetails";

export const Route = createFileRoute("/complaint/$id")({
  head: () => ({
    meta: [
      { title: "Complaint Details — Campus Fix" },
      { name: "description", content: "Full details, photo, upvotes and status timeline of a single campus complaint." },
      { property: "og:title", content: "Complaint Details — Campus Fix" },
      { property: "og:description", content: "Full details, photo, upvotes and status timeline of a single campus complaint." },
    ],
  }),
  component: ComplaintDetails,
});
