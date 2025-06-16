console.log("Script loaded!");

let misses = 0;
const resumeButton = document.getElementById("resumeButton");
const floatingResume = document.getElementById("floatingResume");

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

function launchResume() {
  floatingResume.classList.remove("hidden");

  const topTarget = Math.random() * 50 + 10;
  const leftTarget = Math.random() * 80 + 10;

  floatingResume.style.top = `${topTarget}%`;
  floatingResume.style.left = `${leftTarget}%`;
}

resumeButton.addEventListener("click", () => {
  launchConfetti();
  launchResume();
});

floatingResume.addEventListener("click", () => {
  downloadResume();
});

floatingResume.addEventListener("transitionend", () => {
  misses++;
  if (misses >= 3) {
    downloadResume(true);
  } else {
    floatingResume.classList.add("hidden");
  }
});

function downloadResume(force = false) {
  const resumeURL = "RESUME.pdf";

  const a = document.createElement("a");
  a.href = resumeURL;
  a.setAttribute("download", "Kezia-West-Resume.pdf");
  a.setAttribute("target", "_blank");

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  if (force) {
    alert("You gave it your best shot. Here's my resume – you've earned it!!");
  } else {
    alert("Nice catch!");
  }

  // Reset state
  floatingResume.classList.add("hidden");
  floatingResume.style.top = "100%";
  floatingResume.style.left = "50%";
  misses = 0;
}
