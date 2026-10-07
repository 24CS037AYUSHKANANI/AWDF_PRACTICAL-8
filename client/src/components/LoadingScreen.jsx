export default function LoadingScreen() {
  return (
    <div className="route-loading">
      <div className="loading-card">
        <div className="loading-spinner" />
        <div>
          <span>ON DEMAND</span>
          <h2>Loading route...</h2>
          <p>Fetching only the JavaScript this page needs.</p>
        </div>
      </div>
    </div>
  );
}
