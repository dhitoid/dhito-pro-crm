/* ===============================
   STATUS CONFIG
================================ */
const STATUS_MAP = {
  "New":        { color:"#3b82f6", badge:"blue" },
  "Contacted": { color:"#6366f1", badge:"indigo" },
  "Interested":{ color:"#22c55e", badge:"green" },
  "Survey":    { color:"#facc15", badge:"yellow" },
  "Booking":   { color:"#f97316", badge:"orange" },
  "Deal":      { color:"#16a34a", badge:"green" },
  "Not Interested": { color:"#ef4444", badge:"red" }
};

/* ===============================
   COLOR FOR BORDER
================================ */
function statusColor(status){
  return STATUS_MAP[status]?.color || "#334155";
}

/* ===============================
   BADGE HTML
================================ */
function statusBadge(status){
  const s = STATUS_MAP[status];
  if(!s) return "";
  return `<span class="badge ${s.badge}">${status}</span>`;
}

/* ===============================
   DATE CHECK
================================ */
function isToday(date){
  if(!date) return false;
  const d = new Date(date).toISOString().slice(0,10);
  const t = new Date().toISOString().slice(0,10);
  return d === t;
}
