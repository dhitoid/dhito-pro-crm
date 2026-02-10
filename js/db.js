let db = null;

function openDB(cb){
  const req = indexedDB.open("DhitoCRM", 1);

  req.onupgradeneeded = e => {
    db = e.target.result;

    if(!db.objectStoreNames.contains("leads")){
      const store = db.createObjectStore("leads", {
        keyPath: "id",
        autoIncrement: true
      });
    }
  };

  req.onsuccess = e => {
    db = e.target.result;
    cb && cb();
  };

  req.onerror = () => {
    alert("Gagal membuka database");
  };
}

/* CRUD */
function addLead(data, cb){
  const tx = db.transaction("leads","readwrite");
  tx.objectStore("leads").add(data);
  tx.oncomplete = ()=> cb && cb();
}

function updateLead(data, cb){
  const tx = db.transaction("leads","readwrite");
  tx.objectStore("leads").put(data);
  tx.oncomplete = ()=> cb && cb();
}

function getLeads(cb){
  const tx = db.transaction("leads","readonly");
  const req = tx.objectStore("leads").getAll();
  req.onsuccess = ()=> cb(req.result || []);
}
