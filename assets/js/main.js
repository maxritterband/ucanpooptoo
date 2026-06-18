/* UCanPoopToo — tiny bit of interactivity (no frameworks needed) */
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('.nav__menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close the menu when a real link is tapped (not a dropdown parent)
    menu.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (a && !a.parentElement.classList.contains('has-sub')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Auto-update the copyright year
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
