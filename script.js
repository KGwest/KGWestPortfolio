console.log("Script loaded!");

let misses = 0;
let resumeClicks = 0;

const resumeButton = document.getElementById("resumeButton");
const floatingResume = document.getElementById("floatingResume");
const confettiFill = document.getElementById("confettiFill");
const contactCard = document.querySelector(".contact-card");

// 🎉 Confetti explosion on click
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

// 📄 Floating resume effect
function launchResume() {
  floatingResume.classList.remove("hidden");

  const topTarget = Math.random() * 50 + 10; // Between 10% and 60%
  const leftTarget = Math.random() * 80 + 10; // Between 10% and 90%

  floatingResume.style.top = `${topTarget}%`;
  floatingResume.style.left = `${leftTarget}%`;
}

// 🖱️ Resume button click logic
resumeButton.addEventListener("click", () => {
  launchConfetti();
  launchResume();

  // 🧮 Update click count and confetti meter
  resumeClicks++;
  const fillPercent = Math.min(resumeClicks * 10, 100);
  if (confettiFill) {
    confettiFill.style.width = `${fillPercent}%`;
  }

  // ⚠️ Shake warning at 5 clicks
  if (resumeClicks === 5) {
    contactCard.classList.add("shake");
    setTimeout(() => contactCard.classList.remove("shake"), 400);
  }

  // 🛑 Drop card at 10 clicks
  if (resumeClicks >= 10 && !contactCard.classList.contains("fall-off")) {
    contactCard.classList.add("fall-off");
  }
});

// 🖱️ Clicking the floating resume
floatingResume.addEventListener("click", () => {
  downloadResume();
});

// ⏳ When resume animation ends
floatingResume.addEventListener("transitionend", () => {
  misses++;
  if (misses >= 3) {
    downloadResume(true);
  } else {
    floatingResume.classList.add("hidden");
  }
});

// 💾 Trigger resume download
function downloadResume(force = false) {
  const resumeURL = "RESUME.pdf"; // Make sure this matches the file name

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

  // Reset floating resume position
  floatingResume.classList.add("hidden");
  floatingResume.style.top = "100%";
  floatingResume.style.left = "50%";
  misses = 0;
}
