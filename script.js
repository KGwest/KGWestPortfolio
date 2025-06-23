document.addEventListener("DOMContentLoaded", () => {
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
    "a Localization-Minded Storyteller"
  ];

  let index = 0;
  setInterval(() => {
    index = (index + 1) % words.length;
    const rotatingWord = document.getElementById("rotating-word");
    if (rotatingWord) {
      rotatingWord.textContent = words[index];
    }
  }, 4000);

  const flashWords = ["better", "richer", "lovelier", "clearer", "more human"];
  let flashIndex = 0;
  const flashEl = document.getElementById("word-flash");
  if (flashEl) {
    setInterval(() => {
      flashIndex = (flashIndex + 1) % flashWords.length;
      flashEl.textContent = flashWords[flashIndex];
    }, 3000);
  }

  // Resume Confetti Logic
  let resumeClicks = 0;
  let misses = 0;

  const resumeButton = document.getElementById("resumeButton");
  const floatingResume = document.getElementById("floatingResume");
  const confettiFill = document.getElementById("confettiFill");
  const contactCard = document.querySelector(".contact-card");

  function launchConfetti() {
    if (window.confetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      console.warn("Confetti library not loaded.");
    }
  }

  function launchResume() {
    if (!floatingResume) return;
    floatingResume.classList.remove("hidden");
    floatingResume.style.top = `${50 * Math.random() + 10}%`;
    floatingResume.style.left = `${80 * Math.random() + 10}%`;
  }

  function downloadResume(autoDownload = false) {
    const link = document.createElement("a");
    link.href = "assets/RESUME.pdf";
    link.setAttribute("download", "Kezia-West-Resume.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (autoDownload) {
      alert("You gave it your best shot. Here's my resume – you've earned it!!");
    } else {
      alert("Nice catch!");
    }

    if (floatingResume) {
      floatingResume.classList.add("hidden");
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

      if (confettiFill) {
        const percent = Math.min(resumeClicks * 10, 100);
        confettiFill.style.width = `${percent}%`;
      }

      if (resumeClicks === 5 && contactCard) {
        contactCard.classList.add("shake");
        setTimeout(() => contactCard.classList.remove("shake"), 400);
      }

      if (resumeClicks >= 10 && contactCard && !contactCard.classList.contains("fall-off")) {
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
