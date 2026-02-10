function statusColor(status){
  return {
    "New": "#64748b",
    "Follow Up": "#facc15",
    "Survey": "#38bdf8",
    "Closing": "#22c55e"
  }[status] || "#64748b";
}

function isToday(date){
  if(!date) return false;
  const d = new Date(date).toDateString();
  return d === new Date().toDateString();
}
