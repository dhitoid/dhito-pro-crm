let db;
const req = indexedDB.open("DhitoCRM", 1);

req.onupgradeneeded = e => {
  db = e.target.result;
  db.createObjectStore("leads", {
    keyPath: "id",
    autoIncrement: true
  });
};

req.onsuccess = e => {
  db = e.target.result;
};

function addLead(data) {
  const tx = db.transaction("leads", "readwrite");
  tx.objectStore("leads").add(data);
}

function getLeads(cb) {
  const tx = db.transaction("leads", "readonly");
  const req = tx.objectStore("leads").getAll();
  req.onsuccess = () => cb(req.result);
}
