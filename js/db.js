let db = null;

/* ===============================
   OPEN DATABASE
================================ */
const request = indexedDB.open("DhitoCRM", 1);

/* ===============================
   UPGRADE (ONLY ONCE)
================================ */
request.onupgradeneeded = event => {
  const dbx = event.target.result;

  if (!dbx.objectStoreNames.contains("leads")) {
    dbx.createObjectStore("leads", {
      keyPath: "id",
      autoIncrement: true
    });
  }
};

/* ===============================
   SUCCESS
================================ */
request.onsuccess = event => {
  db = event.target.result;
  console.log("✅ DB ready");
};

/* ===============================
   ERROR
================================ */
request.onerror = event => {
  console.error("❌ DB error", event.target.error);
};

/* ===============================
   ADD LEAD
================================ */
function addLead(data) {
  if (!db) {
    console.warn("DB not ready");
    return;
  }

  const tx = db.transaction("leads", "readwrite");
  const store = tx.objectStore("leads");
  store.add(data);
}

/* ===============================
   GET ALL LEADS
================================ */
function getLeads(cb) {
  if (!db) {
    cb([]);
    return;
  }

  const tx = db.transaction("leads", "readonly");
  const store = tx.objectStore("leads");
  const req = store.getAll();

  req.onsuccess = () => cb(req.result || []);
}
