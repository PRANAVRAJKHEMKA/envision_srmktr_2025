function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("user", user);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function logout() {
  window.location.href = "login.html";
}
