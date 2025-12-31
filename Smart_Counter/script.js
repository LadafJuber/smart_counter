// Step 1: Get DOM elements
const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Step 2: Application state
let count = 0;

// Step 3: Update UI function
function updateUI() {
  countEl.textContent = count;

  // Prevent count from going below 0
  decreaseBtn.disabled = count === 0;

  // Bonus: change color if count > 10
  if (count > 10) {
    countEl.style.color = "green";
  } else {
    countEl.style.color = "#333";
  }
}

// Step 4: Event listeners
increaseBtn.addEventListener("click", function () {
  count++;
  updateUI();
});

decreaseBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    updateUI();
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateUI();
});

// Step 5: Initial render
updateUI();
