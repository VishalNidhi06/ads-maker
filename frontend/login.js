function phoneLogin() {
  const phone = document.getElementById("phone").value;
  const otp = document.getElementById("otp").value;

  if (phone.length < 10) {
    alert("Enter valid mobile number");
    return;
  }

  // TEMP SUCCESS (until Firebase OTP verification)
  window.location.href = "index.html";
}

function emailLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Enter email and password");
    return;
  }

  // TEMP SUCCESS (until Firebase auth)
  window.location.href = "index.html";
}
