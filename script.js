document.getElementById("reservation-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmation-message").textContent = "Reservation confirmed! 🍽️";
  this.reset();
});
