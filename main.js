const startButton = document.getElementById("start-btn");
const output = document.getElementById("output");

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  startButton.style.display = "none";

  output.textContent = "Final sequence initiated...";

  setTimeout(() => {
    output.textContent = "All syndicate nodes disabled.";
  }, 2000);
});
