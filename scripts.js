var submitLogin = (e) => {
    debugger;
    console.log("submitLogin e: ", e);
  
    setLoginError("");
    let tbUserName = document.getElementById("userName");
    let tbPassword = document.getElementById("password");
    console.log(tbUserName, tbPassword);
    let loginResult = doFormLogin(tbUserName.value, tbPassword.value);
    if (loginResult.ok) {
      e.preventDefault();
      window.location.href = "index.html";
    } else {
      setLoginError(loginResult.message, true);
      e.preventDefault();
    }
  };
  
  var doFormLogin = (userName, password) => {
    let result = { ok: false, message: "Incorrect username and/or password" };
  
    if (login(userName, password)) {
      result = { ok: true, message: "" };
    }
  
    return result;
  };
  
  var setLoginError = (errorMessage, show) => {
    debugger;
    const loginErr = document.getElementById("loginError");
    loginErr.innerText = errorMessage;
    loginErr.className = "hide";
    if (show) {
      loginErr.className = "errorMessage";
    }
  };