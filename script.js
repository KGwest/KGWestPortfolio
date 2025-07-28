document.addEventListener("DOMContentLoaded", () => {
  // --- Hero rotating word logic ---
  const words = [
    "a Linguist",
    "an AI Trainer",
    "a Data Annotator",
    "an NLP Explorer",
    "a Machine Learning Newbie",
    "a Connector",
    "a Creative Technologist",
    "a Language-to-Code Translator",
    "a Gamer",
    "a Localization-Minded Storyteller",
  ];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % words.length;
    const rotatingWord = document.getElementById("rotating-word");
    if (rotatingWord) rotatingWord.textContent = words[index];
  }, 4000);

  // --- Flashing word logic ---
  const flashWords = ["better", "richer", "lovelier", "clearer", "more human"];
  let flashIndex = 0;
  const flashEl = document.getElementById("word-flash");
  if (flashEl) {
    setInterval(() => {
      flashIndex = (flashIndex + 1) % flashWords.length;
      flashEl.textContent = flashWords[flashIndex];
    }, 3000);
  }

  // --- Resume Confetti Mini-Game Logic ---
  let resumeClicks = 0;
  let misses = 0;

  const resumeButton = document.getElementById("resumeButton");
  const floatingResume = document.getElementById("floatingResume");
  const confettiFill = document.getElementById("confettiFill");
  const contactCard = document.querySelector(".contact-card");

  // Always hide floatingResume on load
  if (floatingResume) floatingResume.style.display = "none";

  function launchConfetti() {
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
    if (!floatingResume) return;
    floatingResume.style.display = "block";
    // Randomize position
    floatingResume.style.top = `${50 * Math.random() + 10}%`;
    floatingResume.style.left = `${80 * Math.random() + 10}%`;
  }

function downloadResume(autoDownload = false) {
  // Show celebration GIF
  const gif = document.getElementById("celebrationGif");
  if (gif) {
    gif.style.display = "block";
  }

  const link = document.createElement("a");
  link.href = "assets/RESUME.pdf";
  link.setAttribute("download", "Kezia-West-Resume.pdf");
  link.setAttribute("target", "_blank");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Show alert AFTER gif appears
  alert(
    autoDownload
      ? "You gave it your best shot. Here's my resume – you've earned it!!"
      : "Nice catch!"
  );

  // Hide celebration GIF after a short delay
  if (gif) {
    setTimeout(() => {
      gif.style.display = "none";
    }, 1400); // Adjust to match your gif's duration, or just use 1500ms
  }

  if (floatingResume) {
    floatingResume.style.display = "none";
    floatingResume.style.top = "100%";
    floatingResume.style.left = "50%";
  }

  misses = 0;
}

  if (resumeButton && floatingResume) {
    resumeButton.addEventListener("click", () => {
      resumeClicks++;
      launchConfetti();
      launchResume();

      // Confetti meter update
      if (confettiFill) {
        const percent = Math.min(resumeClicks * 10, 100);
        confettiFill.style.width = `${percent}%`;
      }

      if (resumeClicks === 5 && contactCard) {
        contactCard.classList.add("shake");
        setTimeout(() => contactCard.classList.remove("shake"), 400);
      }

      if (
        resumeClicks >= 10 &&
        contactCard &&
        !contactCard.classList.contains("fall-off")
      ) {
        contactCard.classList.add("fall-off");
      }
    });

    floatingResume.addEventListener("click", () => {
      downloadResume();
    });

    floatingResume.addEventListener("transitionend", () => {
      misses++;
      if (misses >= 3) {
        downloadResume(true);
      } else {
        floatingResume.style.display = "none";
      }
    });
  }  
    console.log("script.js loaded");
});

