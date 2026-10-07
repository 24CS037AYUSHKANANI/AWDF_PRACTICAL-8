import { Link } from "react-router-dom";

const observations = [
  "The home route remains immediately available.",
  "Projects is requested only after its route is visited.",
  "Contact is requested only after its route is visited.",
  "The Insights module itself is also split into a separate chunk.",
  "Suspense provides visible feedback while a chunk is loading."
];

export default function Insights() {
  return (
    <section className="page inner-page">
      <div className="page-heading">
        <div>
          <div className="kicker">ADDITIONAL LAZY MODULE · /INSIGHTS</div>
          <h1>Performance <em>notes.</em></h1>
        </div>
        <p>
          This page satisfies the practical's additional lazy-loading task
          without introducing another external library.
        </p>
      </div>

      <div className="insight-layout">
        <div className="score-panel">
          <span>CODE SPLITTING</span>
          <strong>ON</strong>
          <small>React.lazy + Suspense</small>
        </div>

        <div className="observation-list">
          {observations.map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <Link className="back-link" to="/">← Back to overview</Link>
    </section>
  );
}
