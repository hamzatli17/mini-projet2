function signup() {
  var firstName = document.getElementById("firstName").value;
  if (!verifyLength(firstName, 5)) {
    document.getElementById("firstNameMsg").innerHTML =
      "First Name must have at least 5 characters";
  } else {
    document.getElementById("firstNameMsg").innerHTML = "";
  }
  var lastName = document.getElementById("lastName").value;
  if (!verifyLength(lastName, 5)) {
    document.getElementById("lastNameMsg").innerHTML =
      "Last Name must have at least 5 characters";
  } else {
    document.getElementById("lastNameMsg").innerHTML = "";
  }
  var email = document.getElementById("inputEmail").value;
  if (!validateEmail(email) || checkIfUExists(email)) {
    document.getElementById("emailMsg").innerHTML =
      "PLEASE check Email Format or Email exixts";
  } else {
    document.getElementById("emailMsg").innerHTML = "";
  }

  var pwd = document.getElementById("inputPassword").value;

  if (!verifyPwdFormat(pwd)) {
    document.getElementById("pwdMsg").innerHTML = "Please check Password !!";
  } else {
    document.getElementById("pwdMsg").innerHTML = "";
  }
  var confirmPwd = document.getElementById("confirmPwd").value;
  if (!verifyPwd(pwd, confirmPwd)) {
    document.getElementById("confirmPwdMsg").innerHTML =
      "Confirm Pwd does not match to Pwd";
  } else {
    document.getElementById("confirmPwdMsg").innerHTML = "";
  }
  var ville = document.getElementById("ville");
  var selectedVille = ville.options[ville.selectedIndex].value;
  var cin = document.getElementById("cin").value;

  if (!verifyLength(cin, 8)) {
    document.getElementById("cinMsg").innerHTML = "Please check C.I.N !!";
  } else {
    document.getElementById("cinMsg").innerHTML = "";
  }
  var tel = document.getElementById("tel").value;

  if (!verifyLength(tel, 8) || checkIfTelSExists(tel)) {
    document.getElementById("telMsg").innerHTML =
      "Please check phone-number !!";
  } else {
    document.getElementById("telMsg").innerHTML = "";
  }

  var idLocal = JSON.parse(localStorage.getItem("idU") || "1");

  var user = {
    id: idLocal,
    fName: firstName,
    lName: lastName,
    email: email,
    pwd: pwd,
    ville: selectedVille,
    cin: cin,
    tel: tel,
  };

  if (
    verifyLength(firstName, 5) &&
    verifyLength(lastName, 5) &&
    verifyPwd(pwd, confirmPwd) &&
    verifyPwdFormat(pwd) &&
    validateEmail(email) &&
    !checkIfUExists(email) &&
    verifyLength(tel, 8) &&
    verifyLength(cin, 8) &&
    !checkIfTelSExists(tel)
  ) {
    var T = JSON.parse(localStorage.getItem("users") || "[]");
    T.push(user);
    localStorage.setItem("users", JSON.stringify(T));
    localStorage.setItem("idU", idLocal + 1);
    location.reload();
  }

  //location.reload();
}
function verifyPwd(a, b) {
  return a === b;
}
function verifybDate(a) {
  return a === 01 - 01 - 2002;
}

function verifyLength(a, n) {
  return a.length == n;
}
function verifyPwdFormat(x) {
  // Numbers counter
  var c = 0;
  // Loop counter
  var i = 0;
  while (c == 0 && i < x.length) {
    if (typeof Number(x[i]) == "number" && !isNaN(x[i])) {
      c++;
    }
    i++;
  }
  return c > 0 && x.length >= 8;
}

function validateEmail(x) {
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(x).toLowerCase());
}
function checkIfUExists(email) {
  var T = JSON.parse(localStorage.getItem("users") || "[]");
  var i = 0;
  while (i < T.length && T[i].email != email) {
    i++;
  }
  // i = 2
  if (i == T.length) {
    return false;
  } else {
    return T[i].email == email;
  }
}
function checkIfAExists(email) {
  var T = JSON.parse(localStorage.getItem("admin") || "[]");
  var i = 0;
  while (i < T.length && T[i].email != email) {
    i++;
  }
  // i = 2
  if (i == T.length) {
    return false;
  } else {
    return T[i].email == email;
  }
}
function checkIfTelTExists(tel) {
  var T = JSON.parse(localStorage.getItem("admin") || "[]");
  var i = 0;
  while (i < T.length && T[i].tel != tel) {
    i++;
  }
  // i = 2
  if (i == T.length) {
    return false;
  } else {
    return T[i].tel == tel;
  }
}
function checkIfTelSExists(tel) {
  var T = JSON.parse(localStorage.getItem("users") || "[]");
  var i = 0;
  while (i < T.length && T[i].tel != tel) {
    i++;
  }
  // i = 2
  if (i == T.length) {
    return false;
  } else {
    return T[i].tel == tel;
  }
}
function searchUserByEmail(T, email) {
  for (var i = 0; i < T.length; i++) {
    if (T[i].email == email) {
      var user = T[i];
    }
  }
  return user;
}

function resetAll() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputPassword").value = "";
  document.getElementById("confirmPwd").value = "";
  document.getElementById("ville").value = "";
  document.getElementById("cin").value = "";
  document.getElementById("classe").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("bday").value = "";
}
function resetAllT() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputPassword").value = "";
  document.getElementById("confirmPwd").value = "";
  document.getElementById("cin").value = "";
  document.getElementById("classe").value = "";
  document.getElementById("tel").value = "";
}
function goToAdminSignPage() {
  location.replace("signupAdmi.html");
}
function goToAdminLoginPage() {
  location.replace("loginadmi.html");
}
function goToUserLoginPage() {
  location.replace("userLogin.html");
}
function goToUserSignPage() {
  location.replace("signupU.html");
}

function signupadmi() {
  var firstName = document.getElementById("firstName").value;
  if (!verifyLength(firstName, 5)) {
    document.getElementById("firstNameMsg").innerHTML =
      "First Name must have at least 5 characters";
  } else {
    document.getElementById("firstNameMsg").innerHTML = "";
  }
  var lastName = document.getElementById("lastName").value;
  if (!verifyLength(lastName, 5)) {
    document.getElementById("lastNameMsg").innerHTML =
      "Last Name must have at least 5 characters";
  } else {
    document.getElementById("lastNameMsg").innerHTML = "";
  }
  var email = document.getElementById("inputEmail").value;
  if (!validateEmail(email) || checkIfAExists(email)) {
    document.getElementById("emailMsg").innerHTML =
      "PLEASE check Email Format or Email exixts";
  } else {
    document.getElementById("emailMsg").innerHTML = "";
  }

  var pwd = document.getElementById("inputPassword").value;

  if (!verifyPwdFormat(pwd)) {
    document.getElementById("pwdMsg").innerHTML = "Please check Password !!";
  } else {
    document.getElementById("pwdMsg").innerHTML = "";
  }
  var confirmPwd = document.getElementById("confirmPwd").value;
  if (!verifyPwd(pwd, confirmPwd)) {
    document.getElementById("confirmPwdMsg").innerHTML =
      "Confirm Pwd does not match to Pwd";
  } else {
    document.getElementById("confirmPwdMsg").innerHTML = "";
  }

  var cin = document.getElementById("cin").value;

  if (!verifyLength(cin, 8)) {
    document.getElementById("telMsg").innerHTML = "Please check C.I.N !!";
  } else {
    document.getElementById("telMsg").innerHTML = "";
  }
  var tel = document.getElementById("tel").value;

  if (!verifyLength(tel, 8) || checkIfTelTExists(tel)) {
    document.getElementById("telMsg").innerHTML =
      "Please check phone-number !!";
  } else {
    document.getElementById("telMsg").innerHTML = "";
  }
  var idLocal = JSON.parse(localStorage.getItem("idA") || "1");

  var admi = {
    id: idLocal,
    fName: firstName,
    lName: lastName,
    email: email,
    pwd: pwd,
    confirmPwd: confirmPwd,
    cin: cin,
    tel: tel,
  };

  if (
    verifyLength(firstName, 5) &&
    verifyLength(lastName, 5) &&
    verifyPwd(pwd, confirmPwd) &&
    verifyPwdFormat(pwd) &&
    validateEmail(email) &&
    !checkIfAExists(email) &&
    verifyLength(tel, 8) &&
    verifyLength(cin, 8) &&
    !checkIfTelTExists(tel)
  ) {
    var T = JSON.parse(localStorage.getItem("admin") || "[]");
    T.push(admi);
    localStorage.setItem("admin", JSON.stringify(T));
    localStorage.setItem("idA", idLocal + 1);
    location.reload();
  }

  //location.reload();
}

function searchUserByTel(T, tel) {
  for (var i = 0; i < T.length; i++) {
    if (T[i].tel == tel) {
      var user = T[i];
    }
  }
  return user;
}

function userLogin() {
  var tel = document.getElementById("tel").value;
  var pwd = document.getElementById("pwd").value;
  var S = JSON.parse(localStorage.getItem("users"));
  var st = searchUserByTel(S, tel);
  if (st) {
    var idUs = localStorage.setItem("idUs", st.id);
    location.replace("user.html");
  }
  return st.pwd == pwd;
}
function admiLogin() {
  var tel = document.getElementById("tel").value;
  var pwd = document.getElementById("pwd").value;
  var T = JSON.parse(localStorage.getItem("admin"));
  var A = searchUserByTel(T, tel);
  if (A) {
    var idAdmi = localStorage.setItem("ididAdmi", A.id);
    location.replace("admin.html");
  }
  return t.pwd == pwd;
}
function searchById(id) {
  var T = JSON.parse(localStorage.getItem("admin") || "[]");
  var result = T.filter((x) => {
    if (x.id == id) {
      return true;
    }
  });
  return result[0];
}

function checkIfNumTExists(num) {
  var T = JSON.parse(localStorage.getItem("numeros") || "[]");
  var i = 0;
  while (i < T.length && T[i] != num) {
    i++;
  }
  // i = 2
  if (i == T.length) {
    return false;
  } else {
    return T[i] == num;
  }
}

function ajout() {
  var num = document.getElementById("num").value;
  if (!verifyLength(num, 10) || checkIfNumTExists(num)) {
    document.getElementById("numMsg").innerHTML = "Please check number !!";
  } else {
    document.getElementById("numMsg").innerHTML = "";
  }
  if (!checkIfNumTExists(num) && verifyLength(num, 10)) {
    var T = JSON.parse(localStorage.getItem("numeros") || "[]");
    T.push(num);
    localStorage.setItem("numeros", JSON.stringify(T));
    location.reload();
  }
}
function nb_aleatoire(T) {
  var nb = Math.floor(Math.random() * T.length);
  localStorage.setItem("nomb", nb);
  return T[nb];
}

function cacher(n) {
  var cn = n[0] + n[1] + n[2] + "x" + n[4] + n[5] + n[6] + "x" + n[8] + "x";
  return cn;
}
function renderNumero() {
  var T = JSON.parse(localStorage.getItem("numeros") || "[]");
  var nbr = T.length;
  if (nbr > 0) {
    var render = '<table class="table table-striped" id="divTable"> ';
    render += "<thead><tr><th>numeros a decouvrir</th></tr></thead>";
    render += "<tbody>";

    render += "<tr>" + "<td>" + cacher(nb_aleatoire(T)) + `</td> </tr>`;

    render += "</tbody></table>";

    var newTable = document.getElementById("nombre");
    newTable.innerHTML = render;
  } else {
    document.getElementById("nombre").innerHTML = "Aucun Numero";
  }
}

function deviner() {
  var T = JSON.parse(localStorage.getItem("numeros") || "[]");
  var x = JSON.parse(localStorage.getItem("nomb"));
  var idU = JSON.parse(localStorage.getItem("idUs"));
  var dev = T[x];

  var tent = document.getElementById("tentative").value;
  if (!verifyLength(tent, 3)) {
    document.getElementById("tentativeMsg").innerHTML =
      "Please check number !!";
  } else {
    document.getElementById("tentativeMsg").innerHTML = "";
  }
  var idLocal = JSON.parse(localStorage.getItem("idTent") || "1");
  var tentative = {
    idTent: idLocal,
    val: tent,
    idU: idU,
    date: new Date(Date.now()),
  };

  if (verifyLength(tent, 3)) {
    var T = JSON.parse(localStorage.getItem("tentatives") || "[]");
    T.push(tentative);
    localStorage.setItem("tentatives", JSON.stringify(T));
    localStorage.setItem("idTent", idLocal + 1);
  }
  if (tent != dev[3] + dev[7] + dev[9]) {
    document.getElementById("devMsg").innerHTML = "essayer une autre fois";
    return false;
  }
  return true;
}
function disableBtn() {
  document.getElementById("myBtn").disabled = true;
  setTimeout(() => {
    document.getElementById("myBtn").disabled = false;
  }, 600000);
}

var cpt = 0;
function PoM_partie() {
  var us_score = 0;
  var score;

  score = deviner();
  if (!score) {
    cpt++;
  } else {
    document.getElementById("msg").innerHTML = "win";
    us_score = cpt+1;
     enregistrer( us_score);
     removeNum();
  }
  if (cpt == 10) {
    disableBtn();
    document.getElementById("msg").innerHTML = "attendez 10 min";
  }
}
function renderTentatives() {
  var T = JSON.parse(localStorage.getItem("scores") || "[]");
  var idUs = JSON.parse(localStorage.getItem("idUs"));
  var user = searchStById(idUs);
  var nbr = T.length;
  if (nbr > 0) {
    var render = '<table class="table table-striped" id="divUserTable"> ';
    render +=
      "<thead><tr><th> First Name User</th><th>Last Name</th><th>score</th><th>date</th></tr></thead>";
    render += "<tbody>";
    for (i = 0; i < nbr; i++) {
      var score = T[i];
      if ((user.idU = score.idU)) {
        render +=
          "<tr>" +
          "<td>" +
          user.fName +
          "</td> <td>" +
          user.lName +
          "</td><td>" +
          score.score +
          "</td><td>" +
          score.date +
          `</td>
                        </tr>`;
      }
    }
    render += "</tbody></table>";

    var newTable = document.getElementById("divUserTable");
    newTable.innerHTML = render;
  } else {
    document.getElementById("divUserTable").innerHTML = "Aucun tentative";
  }
}
function searchStById(id) {
  var T = JSON.parse(localStorage.getItem("users") || "[]");
  var result = T.filter((x) => {
    if (x.id == id) {
      return true;
    }
  });
  return result[0];
}
function enregistrer(x) {
  var idU = JSON.parse(localStorage.getItem("idUs"));
  var idLocal = JSON.parse(localStorage.getItem("idSc") || "1");
  var score = {
    idSc: idLocal,
    score: x,
    idU: idU,
    date: new Date(Date.now()),
  };

    var T = JSON.parse(localStorage.getItem("scores") || "[]");
    T.push(score);
    localStorage.setItem("scores", JSON.stringify(T));
    localStorage.setItem("idSc", idLocal + 1);
}
function removeNum() {
  var T = JSON.parse(localStorage.getItem("numeros") || "[]");
  var nomb = JSON.parse(localStorage.getItem("nomb") );
 // var index = searchIndex(nomb, T);
  T.splice(nomb, 1);
}
function searchIndex(id, T) {
  var index;
  for (var i = 0; i < T.length; i++) {
    if (T[i].id == id) {
      index = i;
    }
  }
  return index;
}