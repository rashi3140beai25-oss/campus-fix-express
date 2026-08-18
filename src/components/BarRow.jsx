// A very simple CSS bar used in all analytics sections.
function BarRow({ label, value, max, suffix }) {
  const width = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className="chart-row">
      <span className="muted">{label}</span>
      <div className="progress">
        <div className="progress-bar" style={{ width: width + "%" }} />
      </div>
      <b>
        {value}
        {suffix ? suffix : ""}
      </b>
    </div>
  );
}

export default BarRow;
