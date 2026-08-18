import { createFileRoute } from "@tanstack/react-router";
import Login from "../pages/Login";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Campus Fix" },
      { name: "description", content: "Login to Campus Fix with your college account to report and track campus issues." },
      { property: "og:title", content: "Login — Campus Fix" },
      { property: "og:description", content: "Login to Campus Fix with your college account to report and track campus issues." },
    ],
  }),
  component: Login,
});
