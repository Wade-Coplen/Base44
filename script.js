const sidebar = document.querySelector(".sidebar");
const sidebarEdge = document.querySelector(".sidebar__edge");
const sidebarBackdrop = document.querySelector(".sidebar-backdrop");
const pinToggle = document.getElementById("pinToggle");
const focusStatus = document.getElementById("focusStatus");

function syncStatus() {
  const isPinned = sidebar.classList.contains("is-pinned");
  const isTemporary = sidebar.classList.contains("is-temporary-open");

  sidebar.dataset.state = isPinned ? "pinned" : isTemporary ? "peek" : "hover";
  focusStatus.textContent = isPinned
    ? "Sidebar pinned open"
    : isTemporary
      ? "Sidebar temporarily open"
      : "Hover reveal active";
}

function setTemporaryOpen(nextOpen) {
  if (sidebar.classList.contains("is-pinned")) {
    return;
  }

  sidebar.classList.toggle("is-temporary-open", nextOpen);
  syncStatus();
}

function setPinned(nextPinned) {
  sidebar.classList.toggle("is-pinned", nextPinned);

  if (nextPinned) {
    sidebar.classList.remove("is-temporary-open");
  }

  pinToggle.setAttribute("aria-pressed", String(nextPinned));
  pinToggle.textContent = nextPinned ? "Unpin sidebar" : "Pin sidebar";
  syncStatus();
}

pinToggle.addEventListener("click", () => {
  const isPinned = sidebar.classList.contains("is-pinned");
  setPinned(!isPinned);
});

sidebarEdge.addEventListener("click", () => {
  const isTemporary = sidebar.classList.contains("is-temporary-open");
  setTemporaryOpen(!isTemporary);
});

sidebarBackdrop.addEventListener("click", () => {
  setPinned(false);
  setTemporaryOpen(false);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "[") {
    setPinned(true);
  }

  if (event.key === "]" || event.key === "Escape") {
    setPinned(false);
    setTemporaryOpen(false);
  }
});

syncStatus();
