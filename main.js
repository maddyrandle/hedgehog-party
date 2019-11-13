var hogletName = document.getElementById("name");
var hoglet = document.getElementById("hoglets");
var allergies = document.getElementById("allergies");
var rsvpInfo = document.querySelector(".rsvp-info");
var nameInput = document.querySelector(".name-input");
var hogletInput = document.querySelector(".hoglet-input");
var allergiesInput = document.querySelector(".allergies-input");
var inviteBtn = document.querySelector(".invite-btn");
var errorMessage = document.querySelector(".error-message")
var form = document.querySelector(".input-form");


inviteBtn.addEventListener("click", validateInput);

//  I need help with this function
function validateInput() {
  if (name.value === "" || hoglet.value === "" || allergies.value === "") {
   inviteBtn.disabled = true;
 } else if (name.value !== "" || hoglet.value !== "" || allergies.value !== "") {
    inviteBtn.disabled = false;
    showRsvpInfo();
    console.log("invisible");
  }
}

function showRsvpInfo() {
  interpolateInfo();
  rsvpInfo.classList.remove("hidden");
  nameInput.classList.remove("hidden");
  hogletInput.classList.remove("hidden");
  allergiesInput.classList.remove("hidden");
}

function interpolateInfo() {
  nameInput.insertAdjacentHTML("afterbegin", `${hogletName.value}`);
  hogletInput.insertAdjacentHTML("afterbegin", `${hoglet.value}`);
  allergiesInput.insertAdjacentHTML("afterbegin", `${allergies.value}`);
  form.reset();
}
