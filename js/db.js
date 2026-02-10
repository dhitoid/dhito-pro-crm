let db = null;
let dbReadyCallbacks = [];

/* ===============================
   OPEN DATABASE
================================ */
const request = indexedDB.open("DhitoCRM", 1);

/* ===============================
   UPGRADE
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
  console.log("✅ IndexedDB READY");

  dbReadyCallbacks.forEach(cb => cb());
  dbReadyCallbacks = [];
};

/* ===============================
   ERROR
================================ */
request.onerror = event => {
  console.error("❌ IndexedDB error", event.target.error);
};

/* ===============================
   DB READY HELPER
================================ */
function onDBReady(cb){
  if(db){
    cb();
  }else{
    dbReadyCallbacks.push(cb);
  }
}

/* ===============================
   CRUD
================================ */
function addLead(data){
  const tx = db.transaction("leads","readwrite");
  tx.objectStore("leads").add(data);
}

function getLeads(cb){
  const tx = db.transaction("leads","readonly");
  const req = tx.objectStore("leads").getAll();
  req.onsuccess = () => cb(req.result || []);
}
