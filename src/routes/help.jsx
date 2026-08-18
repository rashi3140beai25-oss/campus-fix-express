import { createFileRoute } from "@tanstack/react-router";
import Help from "../pages/Help";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help & FAQ — Campus Fix" },
      { name: "description", content: "Answers about reporting, tracking, upvoting and lost and found on Campus Fix." },
      { property: "og:title", content: "Help & FAQ — Campus Fix" },
      { property: "og:description", content: "Answers about reporting, tracking, upvoting and lost and found on Campus Fix." },
    ],
  }),
  component: Help,
});
