const form = document.getElementById("form");
const pokename = document.getElementById("pokeName");
const pokenumber = document.getElementById("pokeNumber");
const pokehp = document.getElementById("pokeHp");
const pokespeed = document.getElementById("pokeSpeed");
const pokeattack = document.getElementById("pokeAttack");
const pokespAttack = document.getElementById("pokeSpAttack");
const pokedefense = document.getElementById("pokeDefense");
const pokespDefense = document.getElementById("pokeSpDefense");
const pokedescricao = document.getElementById("pokeDescricao");
const pokeimgLink = document.getElementById("pokeImgLink");
const poketypeOne = document.getElementById("pokeTypeOne");
const poketypeTwo = document.getElementById("pokeTypeTwo");

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function handlePokeRegister(event) {
  event.preventDefault();
  const url = "http://localhost:8082/adm/addpokemon/new";
  const data = {
    pokeName: pokename.value.trim(),
    pokeNumber: pokenumber.value.trim(),
    pokeHp: pokehp.value.trim(),
    pokeSpeed: pokespeed.value.trim(),
    pokeAttack: pokeattack.value.trim(),
    pokeSpAttack: pokespAttack.value.trim(),
    pokeDefense: pokedefense.value.trim(),
    pokeSpDefense: pokespDefense.value.trim(),
    pokeDescricao: pokedescricao.value.trim(),
    pokeImgLink: pokeimgLink.value.trim(),
    pokeTypeOne: poketypeOne.value.trim(),
    pokeTypeTwo: poketypeTwo.value.trim(),
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
      console.log("Deu erro aqui", error.message);
      if (error.pokeName) {
        setErrorFor(pokename, "Nome do pokemon ja cadastrado");
      }
      if (errors.pokeNamber) {
        setErrorFor(pokenumber, "Numero do pokemon ja cadastrado");
      }
    });
}

function check() {
  checkName();
  checkNumber();
  checkHp();
  checkSpeed();
  checkAttack();
  checkSpAttack();
  checkDefense();
  checkSpDefense();
  checkTypeOne();
  checkDescricao();
  checkImgLink();
}

function checkAll() {
  if (
    checkName() == false ||
    checkNumber() == false ||
    checkHp() == false ||
    checkSpeed() == false ||
    checkAttack() == false ||
    checkSpAttack() == false ||
    checkDefense() == false ||
    checkSpDefense() == false ||
    checkTypeOne() == false ||
    checkDescricao() == false ||
    checkImgLink() == false
  ) {
    return false;
  } else {
    return true;
  }
}

function checkName() {
  const pokeNameValue = pokeName.value.trim();

  if (pokeNameValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(pokename, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(pokename);
    return true;
  }
}

function checkNumber() {
  const pokeNumberValue = pokeNumber.value.trim();

  if (pokeNumberValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(pokenumber, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(pokenumber);
    return true;
  }
}

function checkHp() {
  const pokeHpValue = pokeHp.value.trim();

  if (pokeHpValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(pokehp, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(pokehp);
    return true;
  }
}

function checkSpeed() {
  const pokeSpeedValue = pokeSpeed.value.trim();

  if (pokeSpeedValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(pokespeed, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(pokespeed);
    return true;
  }
}

function checkAttack() {
  const pokeAttackValue = pokeAttack.value.trim();

  if (pokeAttackValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(pokeattack, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(pokeattack);
    return true;
  }
}

function checkSpAttack() {
  const pokeSpAttackValue = pokeSpAttack.value.trim();

  if (pokeSpAttackValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(pokespAttack, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(pokespAttack);
    return true;
  }
}

function checkDefense() {
  const pokeDefenseValue = pokeDefense.value.trim();

  if (pokeDefenseValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(pokedefense, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(pokedefense);
    return true;
  }
}

function checkSpDefense() {
  const pokeSpDefenseValue = pokeSpDefense.value.trim();
  if (pokeSpDefenseValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(pokespDefense, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(pokespDefense);
    return true;
  }
}

function checkTypeOne() {
  const pokeTypeOneValue = pokeTypeOne.value.trim();

  if (pokeTypeOneValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(poketypeOne, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(poketypeOne);
    return true;
  }
}

function checkDescricao() {
  const pokeDescricaoValue = pokeDescricao.value.trim();
  if (pokeDescricaoValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(pokedescricao, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(pokedescricao);
    return true;
  }
}

function checkImgLink() {
  const pokeImgLinkValue = pokeImgLink.value.trim();
  if (pokeImgLinkValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(pokeimgLink, "Preencha esse campo");
    return false;
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(pokeimgLink);
    return true;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "textfield error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "textfield success";
}
