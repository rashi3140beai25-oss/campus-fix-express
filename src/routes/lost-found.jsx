import { createFileRoute } from "@tanstack/react-router";
import LostFound from "../pages/LostFound";

export const Route = createFileRoute("/lost-found")({
  head: () => ({
    meta: [
      { title: "Lost & Found — Campus Fix" },
      { name: "description", content: "Post a lost item or a found item and help classmates get their belongings back." },
      { property: "og:title", content: "Lost & Found — Campus Fix" },
      { property: "og:description", content: "Post a lost item or a found item and help classmates get their belongings back." },
    ],
  }),
  component: LostFound,
});
