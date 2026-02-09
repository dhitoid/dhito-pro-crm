// ===== CONFIG =====
const API_URL = "PASTE_API_APPS_SCRIPT_KAMU";

// ===== HELPER =====
function post(data) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  }).then(res => res.json());
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
  location.href = "login.html";
}

function protectPage() {
  if (!isLogin()) {
    location.href = "login.html";
  }
}
