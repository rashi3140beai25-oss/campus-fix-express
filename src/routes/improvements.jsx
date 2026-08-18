import { createFileRoute } from "@tanstack/react-router";
import HallOfImprovements from "../pages/HallOfImprovements";

export const Route = createFileRoute("/improvements")({
  head: () => ({
    meta: [
      { title: "Hall of Improvements — Campus Fix" },
      { name: "description", content: "Campus problems reported by students that were successfully solved by departments." },
      { property: "og:title", content: "Hall of Improvements — Campus Fix" },
      { property: "og:description", content: "Campus problems reported by students that were successfully solved by departments." },
    ],
  }),
  component: HallOfImprovements,
});
