const sidebar = document.querySelector(".sidebar");
const pinToggle = document.getElementById("pinToggle");

function setPinned(nextPinned) {
  sidebar.classList.toggle("is-pinned", nextPinned);
  pinToggle.setAttribute("aria-pressed", String(nextPinned));
  pinToggle.textContent = nextPinned ? "Unpin sidebar" : "Pin sidebar";
}

pinToggle.addEventListener("click", () => {
  const isPinned = sidebar.classList.contains("is-pinned");
  setPinned(!isPinned);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "[") {
    setPinned(true);
  }

  if (event.key === "]") {
    setPinned(false);
  }
});
