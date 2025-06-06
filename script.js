const messages = {
  1: "I'm kinda sorry.",
  2: "Okay, I'm really sorry.",
  3: "I'm super sorry 🥺",
  4: "I owe you big time.",
  5: "I'm groveling on the floor right now."
};

const slider = document.getElementById("sorryLevel");
const message = document.getElementById("sorryMessage");

slider.addEventListener("input", function () {
  const level = this.value;
  message.textContent = messages[level];
});

function showForgiveness() {
  document.getElementById("gifContainer").classList.remove("hidden");
}
