import { createFileRoute } from "@tanstack/react-router";
import CampusMap from "../pages/CampusMap";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Campus Map — Campus Fix" },
      { name: "description", content: "Explore campus zones, issue hotspots and the department responsible for each area." },
      { property: "og:title", content: "Campus Map — Campus Fix" },
      { property: "og:description", content: "Explore campus zones, issue hotspots and the department responsible for each area." },
    ],
  }),
  component: CampusMap,
});
