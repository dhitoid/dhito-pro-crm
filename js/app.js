// ===== CONFIG =====
const API_URL = "https://script.google.com/macros/s/AKfycbwrYOzLyD_PlgcgydAo4Zrozp0hGOFpkYAY4_JYTlbGTT5ycVzuxMNeYKZlppb-tCMosw/exec";

// ===== HELPER =====
function post(data) {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .catch(err => {
    alert("API ERROR: " + err);
  });
}

// ===== AUTH =====
function setLogin() {
  localStorage.setItem("dhito_login", "true");
}

function isLogin() {
  return localStorage.getItem("dhito_login") === "true";
}

function logout() {
  localStorage.removeItem("dhito_login");
  location.href = "index.html";
}

function protectPage() {
  if (!isLogin()) {
    location.href = "index.html";
  }
}
