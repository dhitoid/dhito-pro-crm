// ===== CONFIG =====
const API_URL = "https://script.google.com/macros/s/AKfycby-aa2-HohONBOls-X0VIPlDm1Cb7_W2J_f9z88-7OH3Ytin_WpO48oSL4QajHWMgl3gQ/exec";

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
