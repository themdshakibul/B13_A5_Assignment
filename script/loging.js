document.getElementById("sing-btn").addEventListener("click", function () {
  // 1 get the user name input
  const inputUsername = document.getElementById("user-name");
  const userName = inputUsername.value;
  //   console.log(userName);

  // 2 get the password input
  const inputPassword = document.getElementById("password");
  const userPassword = inputPassword.value;
  //   console.log(userPassword);

  // 3 match user name & password
  if (userName == "admin" && userPassword == "admin123") {
    // 3.1 true --> alert--> homepage
    alert("loging successfull");
    window.location.assign("html/home.html");
  } else {
    // 3.2 false --> alert --> return
    alert("login Failed");
    return;
  }
});
