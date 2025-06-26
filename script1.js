function changeQty(button, delta) {
  const quantitySpan = button.parentElement.querySelector(".quantity");
  let currentQty = parseInt(quantitySpan.textContent);
  currentQty += delta;
  if (currentQty < 0) currentQty = 0;
  quantitySpan.textContent = currentQty;
}

function highlightOrder(button) {
  button.style.backgroundColor = "#ffd700"; // Gold
  button.style.color = "black";
  button.textContent = "Added!";
  setTimeout(() => {
    button.style.backgroundColor = "white";
    button.style.color = "black";
    button.textContent = "Order";
  }, 1500);
}
