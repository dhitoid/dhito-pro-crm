const USER = {
  email: "dhitoproperti@pro.id",
  password: "12345678"
};

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === USER.email && password === USER.password) {
    localStorage.setItem("dhito_login", "true");
    location.href = "dashboard.html";
  } else {
    alert("Email atau password salah");
  }
}

function protect() {
  if (localStorage.getItem("dhito_login") !== "true") {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("dhito_login");
  location.href = "index.html";
}
