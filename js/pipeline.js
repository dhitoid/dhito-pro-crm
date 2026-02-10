/* ===============================
   STATUS CONFIG (SINGLE SOURCE)
================================ */
const STATUS_MAP = {
  "New": { color:"#3b82f6", badge:"blue" },
  "Contacted": { color:"#6366f1", badge:"indigo" },
  "Interested": { color:"#22c55e", badge:"green" },
  "Survey": { color:"#facc15", badge:"yellow" },
  "Booking": { color:"#f97316", badge:"orange" },
  "Deal": { color:"#16a34a", badge:"green" },
  "Not Interested": { color:"#ef4444", badge:"red" },
  "TODAY": { color:"#0ea5e9", badge:"sky" }
};

/* ===============================
   NORMALIZE STATUS
================================ */
function normalizeStatus(status){
  return STATUS_MAP[status] ? status : "New";
}

/* ===============================
   COLOR
================================ */
function statusColor(status){
  return STATUS_MAP[normalizeStatus(status)].color;
}

/* ===============================
   BADGE
================================ */
function statusBadge(status){
  const s = STATUS_MAP[normalizeStatus(status)];
  return `<span class="badge ${s.badge}">${normalizeStatus(status)}</span>`;
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
