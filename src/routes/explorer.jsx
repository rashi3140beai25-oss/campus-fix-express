import { createFileRoute } from "@tanstack/react-router";
import IssueExplorer from "../pages/IssueExplorer";

export const Route = createFileRoute("/explorer")({
  head: () => ({
    meta: [
      { title: "Issue Explorer — Campus Fix" },
      { name: "description", content: "Browse, search, filter and upvote every campus complaint reported by students." },
      { property: "og:title", content: "Issue Explorer — Campus Fix" },
      { property: "og:description", content: "Browse, search, filter and upvote every campus complaint reported by students." },
    ],
  }),
  component: IssueExplorer,
});
