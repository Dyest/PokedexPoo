const form = document.getElementById("form");
const username = document.getElementById("userName");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPass");

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function handleRegister(event) {
  event.preventDefault();
  const url = "http://localhost:8082/signup/new";
  const data = {
    userName: username.value.trim(),
    userEmail: email.value.trim(),
    userPass: password.value.trim(),
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => {
      res.json();
      handleErrors(res);
    })
    .then((data) => {
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
      setErrorFor(email, "Email ja existente");
    });
}

function checkName() {
  const usernameValue = userName.value.trim();

  if (usernameValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(username, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(username);
    return true;
  }
}

function checkEmail() {
  const emailValue = userEmail.value.trim();

  if (emailValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(email, "Preencha esse campo");
    return false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email inválido");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(email);
    return true;
  }
}

function checkPass() {
  const passwordValue = userPass.value.trim();

  if (passwordValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(password, "Preencha esse campo");
    return false;
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Senha deve ter mais que 6 caracteres");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(password);
    return true;
  }
}

function checkCad() {
  if (checkName() == false || checkEmail() == false || checkPass() == false) {
    return false;
  } else {
    return true;
  }
}

function checkLog() {
  if (checkEmail() == false || checkPass() == false) {
    return false;
  } else {
    return true;
  }
}

function setErrorFor(input, message) {
  console.log("aqui");
  console.log(input, message);
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "textfield error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "textfield success";
}

function isEmail(email) {
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );
}
