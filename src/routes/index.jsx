import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campus Fix — Report. Track. Improve Your Campus." },
      { name: "description", content: "Report campus issues, track their progress, support important complaints and help build a better university experience." },
      { property: "og:title", content: "Campus Fix — Report. Track. Improve Your Campus." },
      { property: "og:description", content: "Report campus issues, track their progress, support important complaints and help build a better university experience." },
    ],
  }),
  component: Home,
});
