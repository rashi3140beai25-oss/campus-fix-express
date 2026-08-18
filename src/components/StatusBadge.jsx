// Shows a coloured badge for a status or a priority value.
function StatusBadge({ value }) {
  let className = "badge badge-gray";

  if (value === "Resolved" || value === "Low" || value === "Active" || value === "Returned") {
    className = "badge badge-green";
  } else if (value === "In Progress" || value === "Medium" || value === "Busy") {
    className = "badge badge-amber";
  } else if (value === "High" || value === "Backlog") {
    className = "badge badge-red";
  } else if (value === "Assigned" || value === "Under Review") {
    className = "badge badge-blue";
  }

  return <span className={className}>{value}</span>;
}

export default StatusBadge;
