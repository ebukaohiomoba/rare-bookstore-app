function doLogin () {
    let tbUserName = document.getElementById("username").value;
    let tbPassword = document.getElementById("password").value;
    console.log(tbUserName, tbPassword);
    if (tbUserName=='manager@rarebooks.com'&& tbPassword=='12345') {
      window.location.href="managerwelcome.html";
    } else if (tbUserName=='employee@rarebooks.com'&& tbPassword=='67890') {
      window.location.href="employeewelcome.html";
    }  else {
      return "Wrong Password";
    }
}
  /*var doFormLogin = (userName, password) => {
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
  
}*/

