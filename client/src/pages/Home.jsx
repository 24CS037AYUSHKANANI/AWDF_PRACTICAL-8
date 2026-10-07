import { Link } from "react-router-dom";
import MetricCard from "../components/MetricCard";

export default function Home() {
  return (
    <section className="page home-page">
      <div className="hero-copy">
        <div className="kicker">PERFORMANCE LAB · REACT</div>
        <h1>Load less.<br /><em>Do more.</em></h1>
        <p className="lead">
          This dashboard demonstrates route-based code splitting with
          React.lazy and Suspense. Pages are downloaded only when they
          become relevant.
        </p>

        <div className="hero-actions">
          <Link className="primary-button" to="/projects">
            Open Projects →
          </Link>
          <Link className="text-link" to="/insights">
            View performance notes
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="bundle-card">
          <div className="bundle-head">
            <span>INITIAL BUNDLE</span>
            <span className="tiny-live">LIVE</span>
          </div>
          <div className="bundle-line">
            <span className="dot main" />
            <div>
              <strong>main.js</strong>
              <small>essential application code</small>
            </div>
            <b>LOAD</b>
          </div>
          <div className="bundle-line delayed">
            <span className="dot" />
            <div>
              <strong>Projects.chunk.js</strong>
              <small>requested on /projects</small>
            </div>
            <b>WAIT</b>
          </div>
          <div className="bundle-line delayed">
            <span className="dot" />
            <div>
              <strong>Contact.chunk.js</strong>
              <small>requested on /contact</small>
            </div>
            <b>WAIT</b>
          </div>
          <div className="bundle-line delayed">
            <span className="dot" />
            <div>
              <strong>Insights.chunk.js</strong>
              <small>requested on /insights</small>
            </div>
            <b>WAIT</b>
          </div>
        </div>
      </div>

      <div className="metrics">
        <MetricCard number="01" label="Initial application shell" />
        <MetricCard number="02+" label="Lazy route chunks" accent="green" />
        <MetricCard number="∞" label="Routes can scale independently" />
      </div>

      <div className="explain-strip">
        <span>WHY IT MATTERS</span>
        <p>
          Route-level splitting improves perceived startup performance by
          postponing non-essential JavaScript until the user asks for it.
        </p>
      </div>
    </section>
  );
}
