import { Link } from "react-router-dom";

const projects = [
  ["01", "Task Manager", "Full-stack CRUD workflow", "MongoDB"],
  ["02", "RideMate", "Ride-sharing platform concept", "Node + React"],
  ["03", "IntelliNotes", "Handwritten text recognition", "AI Project"]
];

export default function Projects() {
  return (
    <section className="page inner-page">
      <div className="page-heading">
        <div>
          <div className="kicker">LAZY ROUTE · /PROJECTS</div>
          <h1>Selected <em>projects.</em></h1>
        </div>
        <p>
          This entire page arrives as a separate JavaScript chunk when the
          Projects route is visited.
        </p>
      </div>

      <div className="project-grid">
        {projects.map(([number, title, desc, tech]) => (
          <article className="project-card" key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{desc}</p>
            <small>{tech}</small>
          </article>
        ))}
      </div>

      <Link className="back-link" to="/">← Back to overview</Link>
    </section>
  );
}
