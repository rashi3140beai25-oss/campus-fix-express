import { createFileRoute } from "@tanstack/react-router";
import Departments from "../pages/Departments";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — Campus Fix" },
      { name: "description", content: "Resolution rates, response times and open workload for every campus department." },
      { property: "og:title", content: "Departments — Campus Fix" },
      { property: "og:description", content: "Resolution rates, response times and open workload for every campus department." },
    ],
  }),
  component: Departments,
});
