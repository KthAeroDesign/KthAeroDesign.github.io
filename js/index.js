
// Ensure page starts at top when loaded
window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});

// Handle hash fragments in URL
window.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
  window.scrollTo(0, 0);
});
