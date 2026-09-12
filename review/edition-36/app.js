/* Heads Up! Edition 36 — bare-bones review build.
   Two behaviours only: reading mode, and the photo carousel.
   No autoplay anywhere: motion is a symptom trigger for this readership. */
(function () {
  'use strict';

  /* ---------- Reading mode ---------- */
  var MODES = ['light', 'warm', 'dark'];
  /* Warm is the default: photophobia is a core IIH symptom, and a bright white
     page is the thing readers most often cannot cope with on a bad day.
     The pages also carry data-mode="warm" in the markup so there is no flash
     of white before this script runs. */
  var DEFAULT_MODE = 'warm';
  var root = document.documentElement;

  function readStored() {
    try { return localStorage.getItem('hu36-mode'); } catch (e) { return null; }
  }
  function store(mode) {
    try { localStorage.setItem('hu36-mode', mode); } catch (e) { /* private mode: ignore */ }
  }
  function applyMode(mode, buttons) {
    if (MODES.indexOf(mode) === -1) mode = DEFAULT_MODE;
    if (mode === 'light') root.removeAttribute('data-mode');
    else root.setAttribute('data-mode', mode);
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.mode === mode));
    });
  }

  var modeButtons = Array.prototype.slice.call(document.querySelectorAll('.modebtn'));
  if (modeButtons.length) {
    applyMode(readStored() || DEFAULT_MODE, modeButtons);
    modeButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyMode(btn.dataset.mode, modeButtons);
        store(btn.dataset.mode);
      });
    });
  }

  /* ---------- Carousel ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-carousel]'), function (car) {
    var slides = Array.prototype.slice.call(car.querySelectorAll('.slide'));
    if (slides.length < 2) return;

    var prev = car.querySelector('[data-prev]');
    var next = car.querySelector('[data-next]');
    var count = car.querySelector('[data-count]');
    var dotwrap = car.querySelector('[data-dots]');
    var live = car.querySelector('[data-live]');
    var i = 0;
    var dots = [];

    if (dotwrap) {
      slides.forEach(function (_s, n) {
        var d = document.createElement('button');
        d.type = 'button';
        d.className = 'cdot';
        d.innerHTML = '<span class="vh">Photo ' + (n + 1) + '</span>';
        d.addEventListener('click', function () { go(n); });
        dotwrap.appendChild(d);
        dots.push(d);
      });
    }

    function go(n) {
      i = Math.max(0, Math.min(slides.length - 1, n));
      slides.forEach(function (s, k) { s.dataset.active = String(k === i); });
      dots.forEach(function (d, k) {
        if (k === i) { d.setAttribute('aria-current', 'true'); }
        else { d.removeAttribute('aria-current'); }
      });
      if (count) count.textContent = (i + 1) + ' of ' + slides.length;
      if (prev) prev.disabled = (i === 0);
      if (next) next.disabled = (i === slides.length - 1);
      if (live) live.textContent = 'Photo ' + (i + 1) + ' of ' + slides.length;
    }

    if (prev) prev.addEventListener('click', function () { go(i - 1); });
    if (next) next.addEventListener('click', function () { go(i + 1); });

    car.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { go(i - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { go(i + 1); e.preventDefault(); }
    });

    /* Swipe — horizontal only, so it never fights a vertical scroll */
    var x0 = null, y0 = null;
    car.addEventListener('touchstart', function (e) {
      x0 = e.changedTouches[0].clientX; y0 = e.changedTouches[0].clientY;
    }, { passive: true });
    car.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        go(dx < 0 ? i + 1 : i - 1);
      }
      x0 = null; y0 = null;
    }, { passive: true });

    go(0);
  });

  /* ---------- Read time from actual word count ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.piece'), function (piece) {
    var slot = piece.querySelector('[data-readtime]');
    if (!slot) return;
    var words = (piece.textContent || '').trim().split(/\s+/).length;
    var mins = Math.max(1, Math.round(words / 180));
    slot.textContent = mins + ' min read';
  });
})();
