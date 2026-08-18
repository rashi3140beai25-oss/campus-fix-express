import { createFileRoute } from "@tanstack/react-router";
import ReportComplaint from "../pages/ReportComplaint";

export const Route = createFileRoute("/report")({
  head: () => ({
    meta: [
      { title: "Report an Issue — Campus Fix" },
      { name: "description", content: "Report a campus problem with a title, category, location, photo and priority in under a minute." },
      { property: "og:title", content: "Report an Issue — Campus Fix" },
      { property: "og:description", content: "Report a campus problem with a title, category, location, photo and priority in under a minute." },
    ],
  }),
  component: ReportComplaint,
});
