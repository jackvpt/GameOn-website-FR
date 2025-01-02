function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const modalBody = document.querySelector(".modal-body")
const modalBodySubmit = document.querySelector(".modal-body-submit")

const first = document.getElementById("first")
const errorFirst = document.getElementById("error-first")
const last = document.getElementById("last")
const errorLast = document.getElementById("error-last")
const email = document.getElementById("email")
const errorEmail = document.getElementById("error-email")
const birthdate = document.getElementById("birthdate")
const errorBirthdate = document.getElementById("error-birthdate")
const quantity = document.getElementById("quantity")
const errorQuantity = document.getElementById("error-quantity")

const errorLocation = document.getElementById("error-location")
const checkbox1 = document.getElementById("checkbox1")
const errorCheckbox1 = document.getElementById("error-checkbox1")

const closeBtn = document.getElementById("btn-close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

closeBtn.addEventListener("click", closeModal)

// launch modal form
function launchModal() {
  modalbg.style.display = "flex"
  modalBodySubmit.style.display = "none"
}

// Close modal event
function closeModal() {
  modalbg.style.display = "none"
}

function checkFirstName() {
  if (first.value.trim().length < 2) {
    errorFirst.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom"
    first.style.border = "2px solid red"
    return false
  }
  errorFirst.textContent = ""
  first.style.border = "none"
  return true
}

function checkLastName() {
  if (last.value.trim().length < 2) {
    errorLast.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom"
    last.style.border = "2px solid red"
    return false
  }
  errorLast.textContent = ""
  last.style.border = "none"
  return true
}

function checkEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailPattern.test(email.value)) {
    errorEmail.textContent = "Veuillez entrer une adresse e-mail valide."
    isValid = false
    email.style.border = "2px solid red"
    return false
  }
  errorEmail.textContent = ""
  email.style.border = "none"
  return true
}

function checkBirthdate() {
  if (!birthdate.value) {
    errorBirthdate.textContent = "Vous devez entrer votre date de naissance."
    birthdate.style.border = "2px solid red"
    return false
  }
  errorBirthdate.textContent = ""
  birthdate.style.border = "none"
  return true
}

function checkQuantity() {
  if (quantity.value === "" || quantity.value < 0 || quantity.value > 99) {
    errorQuantity.textContent = "Veuillez entrer un nombre entre 0 et 99."
    quantity.style.border = "2px solid red"
    return false
  }
  errorQuantity.textContent = ""
  quantity.style.border = "none"
  return true
}

function checkLocation() {
  const selectedLocation = document.querySelector(
    'input[name="location"]:checked'
  )
  if (!selectedLocation) {
    errorLocation.textContent = "Vous devez choisir une option"
    return false
  }
  errorLocation.textContent = ""
  return true
}

function checkConditions() {
  if (!checkbox1.checked) {
    errorCheckbox1.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions."
    return false
  }
  errorCheckbox1.textContent = ""
  return true
}

function validate(event) {
  event.preventDefault() // Empêche la soumission par défaut

  let isValid = true

  if (!checkFirstName()) isValid = false
  if (!checkLastName()) isValid = false
  if (!checkEmail()) isValid = false
  if (!checkBirthdate()) isValid = false
  if (!checkQuantity()) isValid = false
  if (!checkLocation()) isValid = false
  if (!checkConditions()) isValid = false

  if (isValid) {
    first.value = ""
    last.value = ""
    email.value = ""
    birthdate.value = ""
    quantity.value = ""
    const radios = document.querySelectorAll('input[name="location"]')
    radios.forEach((radio) => (radio.checked = false))
    checkbox1.checked = false
    checkbox2.checked = false
    modalBody.style.display = "none"
    modalBodySubmit.style.display = "flex"
  }

  return isValid // Empêche la soumission si isValid est false
}
