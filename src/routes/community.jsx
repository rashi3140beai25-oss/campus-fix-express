import { createFileRoute } from "@tanstack/react-router";
import Community from "../pages/Community";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Campus Fix" },
      { name: "description", content: "Popular issues, student suggestions, campus polls and open discussions." },
      { property: "og:title", content: "Community — Campus Fix" },
      { property: "og:description", content: "Popular issues, student suggestions, campus polls and open discussions." },
    ],
  }),
  component: Community,
});
