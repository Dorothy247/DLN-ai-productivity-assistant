import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DLN AI — Learning Navigator" },
      { name: "description", content: "AI-powered workplace productivity assistant for learners, facilitators, coordinators and managers." },
      { property: "og:title", content: "DLN AI — Learning Navigator" },
      { property: "og:description", content: "Automate emails, meetings, planning, research and more." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/dln.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0B0716", color: "#fff", fontFamily: "system-ui" }}>
      Loading DLN AI…
    </div>
  );
}
