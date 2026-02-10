const STATUS_LIST = [
  "New",
  "Contacted",
  "Follow Up",
  "Interested",
  "Survey",
  "Closing",
  "Reject"
];

function normalizeStatus(s){
  return STATUS_LIST.includes(s) ? s : "New";
}

function statusBadge(s){
  const map = {
    "New":"gray",
    "Contacted":"blue",
    "Follow Up":"orange",
    "Interested":"purple",
    "Survey":"teal",
    "Closing":"green",
    "Reject":"red"
  };
  return `<span class="badge ${map[s]||"gray"}">${s}</span>`;
}

function isToday(date){
  if(!date) return false;
  const d = new Date(date);
  const t = new Date();
  return d.toDateString() === t.toDateString();
}


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

const STATUS_LIST = Object.keys(STATUS_MAP).filter(s=>s!=="TODAY");

/* ===============================
   HELPERS
================================ */

function statusColor(status){
  return STATUS_MAP[normalizeStatus(status)].color;
}
