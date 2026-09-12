/* Shared background switcher for the Edition 36 review pack.
   The choice is remembered on the reader's own device and carries across
   every page in the pack, so it does not have to be set again per sketch. */
(function () {
  'use strict';
  var MODES = ['warm', 'dark', 'light'];
  var DEFAULT_MODE = 'warm';
  var KEY = 'hu36-mode';
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function remember(mode) {
    try { localStorage.setItem(KEY, mode); } catch (e) { /* private browsing */ }
  }
  function apply(mode, buttons) {
    if (MODES.indexOf(mode) === -1) mode = DEFAULT_MODE;
    if (mode === 'light') root.removeAttribute('data-mode');
    else root.setAttribute('data-mode', mode);
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.mode === mode));
    });
  }

  function init() {
    var buttons = Array.prototype.slice.call(document.querySelectorAll('.modebtn'));
    if (!buttons.length) return;
    apply(stored() || DEFAULT_MODE, buttons);
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(btn.dataset.mode, buttons);
        remember(btn.dataset.mode);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
