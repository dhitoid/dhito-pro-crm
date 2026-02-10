let db = null;

function openDB(callback){
  const request = indexedDB.open("DhitoCRM", 1);

  request.onupgradeneeded = e => {
    const d = e.target.result;
    if(!d.objectStoreNames.contains("leads")){
      d.createObjectStore("leads", {
        keyPath: "id",
        autoIncrement: true
      });
    }
  };

  request.onsuccess = e => {
    db = e.target.result;
    console.log("✅ DB READY");
    callback && callback();
  };

  request.onerror = e => {
    console.error("❌ DB ERROR", e);
    alert("Database error");
  };
}

/* CRUD */
function addLead(data, cb){
  const tx = db.transaction("leads","readwrite");
  tx.objectStore("leads").add(data);
  tx.oncomplete = () => cb && cb();
}

function updateLead(data, cb){
  const tx = db.transaction("leads","readwrite");
  tx.objectStore("leads").put(data);
  tx.oncomplete = () => cb && cb();
}

function getLeads(cb){
  const tx = db.transaction("leads","readonly");
  const req = tx.objectStore("leads").getAll();
  req.onsuccess = () => cb(req.result || []);
}
