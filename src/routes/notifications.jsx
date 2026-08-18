import { createFileRoute } from "@tanstack/react-router";
import Notifications from "../pages/Notifications";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — Campus Fix" },
      { name: "description", content: "Status updates, community activity and campus announcements for your complaints." },
      { property: "og:title", content: "Notifications — Campus Fix" },
      { property: "og:description", content: "Status updates, community activity and campus announcements for your complaints." },
    ],
  }),
  component: Notifications,
});
