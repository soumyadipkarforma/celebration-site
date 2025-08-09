function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    name: params.get("name") || "BARDIBHAI",
    occasion: params.get("occasion") || "rakhi",
  };
}

function showMessage(name, occasion) {
  const capitalizedOccasion = occasion[0].toUpperCase() + occasion.slice(1);
  const message = `Happy ${capitalizedOccasion}, ${name}! 🎉`;
  document.getElementById("message").textContent = message;
}

function launchConfetti() {
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

const { name, occasion } = getQueryParams();
showMessage(name, occasion);
launchConfetti();
