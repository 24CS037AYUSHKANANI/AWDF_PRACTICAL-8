export default function MetricCard({ number, label, accent }) {
  return (
    <div className="metric-card">
      <div className={`metric-number ${accent || ""}`}>{number}</div>
      <div className="metric-label">{label}</div>
    </div>
  );
}
