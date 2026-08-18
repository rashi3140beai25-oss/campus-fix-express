import { createFileRoute } from "@tanstack/react-router";
import Profile from "../pages/Profile";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile — Campus Fix" },
      { name: "description", content: "View and edit your student profile details saved in your browser." },
      { property: "og:title", content: "My Profile — Campus Fix" },
      { property: "og:description", content: "View and edit your student profile details saved in your browser." },
    ],
  }),
  component: Profile,
});
