console.log("Script loaded!");

let misses = 0;
const resumeButton = document.getElementById("resumeButton");
const floatingResume = document.getElementById("floatingResume");

function launchConfetti() {
  if (window.confetti) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}

function launchResume() {
  floatingResume.classList.remove("hidden");

  const topTarget = Math.random() * 50 + 10; // Between 10% and 60% of screen
  const leftTarget = Math.random() * 80 + 10; // Between 10% and 90%

  floatingResume.style.top = `${topTarget}%`;
  floatingResume.style.left = `${leftTarget}%`;
}

resumeButton.addEventListener("click", () => {
  launchConfetti();
  launchResume();
});

floatingResume.addEventListener("click", () => {
  // success
  downloadResume();
});

floatingResume.addEventListener("transitionend", () => {
  // If they didn't click it, increment miss
  misses++;
  if (misses >= 3) {
    downloadResume(true);
  } else {
    floatingResume.classList.add("hidden");
  }
});

function downloadResume(force = false) {
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "Kezia-West-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (force) {
    alert("You gave it your best shot. Here's my resume - you've earned it!! ");
  } else {
    alert("Nice catch!");
  }

  // Reset state
  floatingResume.classList.add("hidden");
  floatingResume.style.top = "100%";
  floatingResume.style.left = "50%";
  misses = 0;
}


function launchConfetti() {
  console.log("Launching confetti!");
  if (window.confetti) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  } else {
    console.warn("Confetti library not loaded.");
  }
}
