firebase.initializeApp({
  apiKey: "AIzaSyDz9-J2Ge-uyKXVC6otF-dQ2iX_D6zGboI",
  authDomain: "ads-maker-32aee.firebaseapp.com",
  projectId: "ads-maker-32aee",
  messagingSenderId: "753217117880",
  appId: "1:753217117880:web:6cf8024af52e5b383f9e4d"
});

const auth = firebase.auth();
let confirmationResult;

window.onload = () => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    { size: "normal" }
  );
  recaptchaVerifier.render();
};

function sendOTP() {
  const phone = "+91" + document.getElementById("phone").value;
  auth.signInWithPhoneNumber(phone, recaptchaVerifier)
    .then(res => {
      confirmationResult = res;
      alert("OTP Sent");
    })
    .catch(err => alert(err.message));
}

function verifyOTP() {
  confirmationResult.confirm(document.getElementById("otp").value)
    .then(() => location.href = "index.html")
    .catch(() => alert("Wrong OTP"));
}

function emailLogin() {
  auth.signInWithEmailAndPassword(email.value, password.value)
    .then(() => location.href = "index.html")
    .catch(err => alert(err.message));
}
