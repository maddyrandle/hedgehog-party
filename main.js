var inviteBtn = document.querySelector(".invite-btn");
var inviteListContainer = document.querySelector(".invite-list-container");
var hogletName = document.querySelector(".name");
var numberOfHoglets = document.querySelector(".hoglets");
var allergies = document.querySelector(".allergies");
var validateNameInput = document.querySelector(".validate-name");
var validateNumberInput = document.querySelector(".validate-number");
var validateAllergyInput = document.querySelector(".validate-allergies");

inviteBtn.addEventListener("click", validateRsvpInfo);
inviteListContainer.addEventListener("click", removeRsvpInfo);
validateNameInput.addEventListener("keydown", validateRsvpInfo(event));
validateNumberInput.addEventListener("keydown", validateRsvpInfo(event));
validateAllergyInput.addEventListener("keydown", validateRsvpInfo(event));

function addRsvpInfo() {
  var form = document.querySelector(".rsvp-form");
  inviteListContainer.innerHTML += `
  <div class="rsvp-categories">
    <p>${hogletName.value}</p>
    <p>${numberOfHoglets.value}</p>
    <p>${allergies.value}</p>
    <button class="uninvite-btn" type="button">UNINVITE</button>
  </div>
  `
  form.reset();
}

function removeRsvpInfo(event) {
  event.target.closest(".rsvp-categories").remove();
}

function validateRsvpInfo(event) {
  if (hogletName.event.target.value === "" || numberOfHoglets.event.target.value === "" || allergies.event.target.value === "") {
    inviteBtn.disabled = true;
  } else {
    inviteBtn.disabled = false;
    addRsvpInfo();
  }
}
