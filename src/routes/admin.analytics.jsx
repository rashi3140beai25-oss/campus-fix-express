import { createFileRoute } from "@tanstack/react-router";
import AdminAnalytics from "../admin/AdminAnalytics";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({
    meta: [
      { title: "Admin Analytics — Campus Fix" },
      { name: "description", content: "Category, location, monthly and department analytics for campus complaints." },
      { property: "og:title", content: "Admin Analytics — Campus Fix" },
      { property: "og:description", content: "Category, location, monthly and department analytics for campus complaints." },
    ],
  }),
  component: AdminAnalytics,
});
