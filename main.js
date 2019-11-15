var inviteBtn = document.querySelector(".invite-btn");
var inviteListContainer = document.querySelector(".invite-list-container");

inviteBtn.addEventListener("click", addRsvpInfo);
inviteListContainer.addEventListener("click", removeRsvpInfo);

function addRsvpInfo() {
  var hogletName = document.querySelector(".name");
  var numberOfHoglets = document.querySelector(".hoglets");
  var allergies = document.querySelector(".allergies");
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
