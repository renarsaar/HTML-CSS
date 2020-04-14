// Sliding Panels
const container = document.getElementById("container");
const singUpButton = document
  .getElementById("signUp")
  .addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

const signInButton = document
  .getElementById("signIn")
  .addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

// Form Validation
// Name
document.querySelector("#name").addEventListener("blur", () => {
  const errtxt = document.querySelector(".err-txt");
  const name = document.querySelector("#name");
  const re = /^[a-zA-Z\ ]{0,50}$/;

  if (!re.test(name.value)) {
    errtxt.innerHTML = "Please enter a valid Name";
  } else {
    errtxt.innerHTML = "";
  }
});

// Email
document.querySelector("#email").addEventListener("blur", () => {
  const errtxt = document.querySelector(".err-txt");
  const email = document.querySelector("#email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (email.value === "") {
    errtxt.innerHTML = "";
  } else if (!re.test(email.value)) {
    errtxt.innerHTML = "Please enter a valid Email";
  }
});

// Password
document.querySelector("#password").addEventListener("blur", () => {
  const errtxt = document.querySelector(".err-txt");
  const password = document.querySelector("#password").value;

  if (password === "") {
    errtxt.innerHTML = "";
  } else if (password.length < 6) {
    errtxt.innerHTML = "Password must be atleast 6 characters long";
  }
});

// RM cookie div
document.querySelector("#cookie-link").addEventListener("click", () => {
  const cookie = document.querySelector(".cookie");

  cookie.classList.add("cookie-rm");
});
