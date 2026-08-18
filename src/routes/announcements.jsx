import { createFileRoute } from "@tanstack/react-router";
import Announcements from "../pages/Announcements";

export const Route = createFileRoute("/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements — Campus Fix" },
      { name: "description", content: "Official campus notices about maintenance, Wi-Fi, exams, library and infrastructure." },
      { property: "og:title", content: "Announcements — Campus Fix" },
      { property: "og:description", content: "Official campus notices about maintenance, Wi-Fi, exams, library and infrastructure." },
    ],
  }),
  component: Announcements,
});
