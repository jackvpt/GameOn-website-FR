/**
 * GET DOM ELEMENTS
 */
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

setEventListeners()

/**
 * SET ALL EVENT LISTENERS
 */
function setEventListeners() {
  // Signup button
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
  // Modal close button
  closeBtn.addEventListener("click", closeModal)
}

/**
 * EDIT NAVBAR
 * When clicking on navbar burger icon, the navbar is responsive
 */
function editNav() {
  var topNav = document.getElementById("myTopnav")
  if (topNav.className === "topnav") {
    topNav.className += " responsive"
  } else {
    topNav.className = "topnav"
  }
}

/**
 * LAUNCH MODAL FORM
 */
function launchModal() {
  modalbg.style.display = "flex"
  modalBody.style.display = "flex"
  modalBodySubmit.style.display = "none"
}

/**
 * CLOSE MODAL FORM
 */
function closeModal() {
  modalbg.style.display = "none"
}

/**
 * CHECK FIRST NAME
 * @returns true if item is valid or false
 */
function checkFirstName() {
  if (!first.checkValidity()) {
    errorFirst.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom"
    first.classList.add("input-invalid")
    return false
  }
  errorFirst.textContent = ""
  first.classList.remove("input-invalid")
  return true
}

/**
 * CHECK LAST NAME
 * @returns true if item is valid or false
 */
function checkLastName() {
  if (!last.checkValidity()) {
    errorLast.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom"
    first.classList.add("input-invalid")
    return false
  }
  errorLast.textContent = ""
  first.classList.remove("input-invalid")
  return true
}

/**
 * CHECK EMAIL
 * @returns true if item is valid or false
 */
function checkEmail() {
  if (!email.checkValidity()) {
    errorEmail.textContent = "Veuillez entrer une adresse e-mail valide."
    isValid = false
    first.classList.add("input-invalid")
    return false
  }
  errorEmail.textContent = ""
  first.classList.remove("input-invalid")
  return true
}

/**
 * CHECK BIRTH DATE
 * @returns true if item is valid or false
 */
function checkBirthdate() {
  if (!birthdate.checkValidity()) {
    errorBirthdate.textContent = "Vous devez entrer votre date de naissance."
    first.classList.add("input-invalid")
    return false
  }
  errorBirthdate.textContent = ""
  first.classList.remove("input-invalid")
  return true
}

/**
 * CHECK QUANTITY
 * @returns true if item is valid or false
 */
function checkQuantity() {
  if (!quantity.checkValidity()) {
    errorQuantity.textContent = "Veuillez entrer un nombre entre 0 et 99."
    first.classList.add("input-invalid")
    return false
  }
  errorQuantity.textContent = ""
  first.classList.remove("input-invalid")
  return true
}

/**
 * CHECK LOCATION
 * @returns true if one radio button is checked or false
 */
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

/**
 * CHECK GENERAL CONDITIONS
 * @returns true if checkbox is checked or false
 */
function checkConditions() {
  if (!checkbox1.checked) {
    errorCheckbox1.textContent = "Vous devez accepter les termes et conditions."
    return false
  }
  errorCheckbox1.textContent = ""
  return true
}

/**
 * VALIDATE THE WHOLE FORM
 * @param {*} event
 * @returns true if all items are valid or false
 */
function validate(event) {
  event.preventDefault()

  let isValid = true

  if (!checkFirstName()) isValid = false
  if (!checkLastName()) isValid = false
  if (!checkEmail()) isValid = false
  if (!checkBirthdate()) isValid = false
  if (!checkQuantity()) isValid = false
  if (!checkLocation()) isValid = false
  if (!checkConditions()) isValid = false

  if (isValid) {
    document.forms["reserve"].reset() // Reset all fields
    modalBody.style.display = "none" // Hide the submit form
    modalBodySubmit.style.display = "flex" // Show the success message
  }

  return isValid
}
