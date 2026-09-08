document.addEventListener('DOMContentLoaded', () => {

  const icons = document.querySelectorAll('.desktop-icon[data-window]');

  // Every section is now permanently in the page — icons just scroll to them.
  icons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const targetId = icon.getAttribute('data-window');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Close buttons now just scroll back to the top of the page.
  document.querySelectorAll('.close-window').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Live clock in the taskbar
  const clock = document.querySelector('.taskbar .clock');
  if (clock) {
    const updateClock = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      clock.textContent = `${h}:${m}`;
    };
    updateClock();
    setInterval(updateClock, 1000 * 30);
  }

});