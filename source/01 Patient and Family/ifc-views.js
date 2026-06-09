/* =========================================================
   IIHPT004 — view rendering + interaction
   Renders TOPICS into: cards grid + detail panel, accordion
   list, print-only full document, and the topic nav.
   Handles the Cards/List view switch and jump-to-topic nav.
   ========================================================= */
(function () {
  'use strict';

  var TOPICS = window.IFC_TOPICS || [];
  var STORE_VIEW = 'ifc004.view';
  var STORE_TOPIC = 'ifc004.topic';

  /* ---------- helpers ---------- */
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) { for (var k in attrs) { if (attrs[k] != null) n.setAttribute(k, attrs[k]); } }
    if (html != null) n.innerHTML = html;
    return n;
  }
  function controlbarOffset() {
    var bar = document.querySelector('.controlbar');
    return (bar ? bar.offsetHeight : 0) + 12;
  }
  function scrollToEl(node) {
    if (!node) return;
    var y = node.getBoundingClientRect().top + window.pageYOffset - controlbarOffset();
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }

  /* =========================================================
     BUILD: topic nav
     ========================================================= */
  var navList = document.getElementById('topic-nav');
  TOPICS.forEach(function (t) {
    var li = el('li');
    var btn = el('button', { type: 'button', 'data-topic': t.id });
    btn.innerHTML = '<span class="nav-letter">' + t.letter + '</span>' + t.title;
    btn.addEventListener('click', function () { jumpTo(t.id); });
    li.appendChild(btn);
    navList.appendChild(li);
  });

  function setActiveNav(id) {
    navList.querySelectorAll('button').forEach(function (b) {
      if (id && b.getAttribute('data-topic') === id) { b.setAttribute('aria-current', 'true'); }
      else { b.removeAttribute('aria-current'); }
    });
  }

  /* =========================================================
     BUILD: cards grid + detail panel
     ========================================================= */
  var grid = document.getElementById('cards-grid');
  TOPICS.forEach(function (t) {
    var card = el('button', {
      type: 'button',
      class: 'topic-card' + (t.featured ? ' is-featured' : ''),
      'data-topic': t.id,
      'aria-expanded': 'false',
      'aria-controls': 'detail-panel'
    });
    card.innerHTML =
      '<span class="card-letter" aria-hidden="true">' + t.letter + '</span>' +
      '<span class="card-title">' + t.title + '</span>' +
      '<span class="card-teaser">' + t.teaser + '</span>' +
      '<span class="card-cue">Read more </span>';
    card.addEventListener('click', function () {
      if (currentTopic === t.id) { closeDetail(); }
      else { openDetail(t.id, true); }
    });
    grid.appendChild(card);
  });

  /* Accessed / "already read" state — italic cue, persisted */
  var STORE_ACCESSED = 'ifc004.accessed';
  var accessed = {};
  try { (JSON.parse(localStorage.getItem(STORE_ACCESSED)) || []).forEach(function (x) { accessed[x] = 1; }); } catch (e) {}
  function applyAccessed() {
    grid.querySelectorAll('.topic-card').forEach(function (c) {
      c.classList.toggle('is-accessed', !!accessed[c.getAttribute('data-topic')]);
    });
    navList.querySelectorAll('button').forEach(function (b) {
      b.classList.toggle('is-accessed', !!accessed[b.getAttribute('data-topic')]);
    });
  }
  function markAccessed(id) {
    if (accessed[id]) { return; }
    accessed[id] = 1;
    try { localStorage.setItem(STORE_ACCESSED, JSON.stringify(Object.keys(accessed))); } catch (e) {}
    applyAccessed();
  }

  var panel = document.getElementById('detail-panel');
  var dLetter = document.getElementById('detail-letter');
  var dTitle = document.getElementById('detail-title');
  var dBody = document.getElementById('detail-body');
  var dPrev = document.getElementById('detail-prev');
  var dNext = document.getElementById('detail-next');
  var currentTopic = null;

  function topicIndex(id) {
    for (var i = 0; i < TOPICS.length; i++) { if (TOPICS[i].id === id) return i; }
    return -1;
  }

  function openDetail(id, doScroll) {
    var i = topicIndex(id);
    if (i < 0) return;
    var t = TOPICS[i];
    currentTopic = id;

    // toggle pressed state on cards
    grid.querySelectorAll('.topic-card').forEach(function (c) {
      c.setAttribute('aria-expanded', c.getAttribute('data-topic') === id ? 'true' : 'false');
    });

    dLetter.textContent = t.letter;
    dTitle.textContent = t.title;
    dBody.innerHTML = t.html;
    dPrev.disabled = (i === 0);
    dNext.disabled = (i === TOPICS.length - 1);
    dPrev.setAttribute('data-topic', i > 0 ? TOPICS[i - 1].id : '');
    dNext.setAttribute('data-topic', i < TOPICS.length - 1 ? TOPICS[i + 1].id : '');
    panel.hidden = false;

    setActiveNav(id);
    try { localStorage.setItem(STORE_TOPIC, id); } catch (e) {}

    if (doScroll) {
      markAccessed(id);
      scrollToEl(panel);
      dTitle.focus({ preventScroll: true });
    }
  }

  function closeDetail() {
    var prev = currentTopic;
    currentTopic = null;
    panel.hidden = true;
    grid.querySelectorAll('.topic-card').forEach(function (c) { c.setAttribute('aria-expanded', 'false'); });
    setActiveNav(null);
    try { localStorage.removeItem(STORE_TOPIC); } catch (e) {}
    if (prev) {
      var card = grid.querySelector('.topic-card[data-topic="' + prev + '"]');
      if (card) card.focus({ preventScroll: true });
    }
  }

  document.getElementById('detail-close').addEventListener('click', closeDetail);
  dPrev.addEventListener('click', function () { var id = this.getAttribute('data-topic'); if (id) openDetail(id, true); });
  dNext.addEventListener('click', function () { var id = this.getAttribute('data-topic'); if (id) openDetail(id, true); });

  /* =========================================================
     BUILD: accordion list
     ========================================================= */
  var accList = document.getElementById('accordion-list');
  TOPICS.forEach(function (t, i) {
    var wrap = el('div', { class: 'accordion', role: 'listitem' });
    var triggerId = 'acc-trigger-' + t.id;
    var panelId = 'acc-panel-' + t.id;

    var trigger = el('button', {
      class: 'accordion-trigger',
      type: 'button',
      id: triggerId,
      'aria-expanded': 'false',
      'aria-controls': panelId
    });
    trigger.innerHTML =
      '<span class="acc-titlewrap"><span class="acc-letter" aria-hidden="true">' + t.letter + '</span>' +
      '<span class="acc-title">' + t.title + '</span></span>' +
      '<span class="accordion-icon" aria-hidden="true">▼</span>';

    var accPanel = el('div', {
      class: 'accordion-panel',
      id: panelId,
      role: 'region',
      'aria-labelledby': triggerId,
      'aria-hidden': 'true'
    });
    accPanel.appendChild(el('div', { class: 'accordion-content rich' }, t.html));

    trigger.addEventListener('click', function () { toggleAcc(trigger); });
    wrap.appendChild(trigger);
    wrap.appendChild(accPanel);
    accList.appendChild(wrap);
  });

  function accSet(trigger, open) {
    var p = document.getElementById(trigger.getAttribute('aria-controls'));
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    p.setAttribute('aria-hidden', open ? 'false' : 'true');
    p.style.maxHeight = open ? (p.scrollHeight + 'px') : '0';
  }
  function toggleAcc(trigger) {
    var willOpen = trigger.getAttribute('aria-expanded') !== 'true';
    accSet(trigger, willOpen);
    if (willOpen) { markAccessed(trigger.id.slice('acc-trigger-'.length)); }
  }
  function initAccHeights() {
    accList.querySelectorAll('.accordion-trigger').forEach(function (tr) {
      accSet(tr, tr.getAttribute('aria-expanded') === 'true');
    });
  }
  document.getElementById('btn-open-all').addEventListener('click', function () {
    accList.querySelectorAll('.accordion-trigger').forEach(function (tr) { accSet(tr, true); });
  });
  document.getElementById('btn-close-all').addEventListener('click', function () {
    accList.querySelectorAll('.accordion-trigger').forEach(function (tr) { accSet(tr, false); });
  });

  /* =========================================================
     BUILD: print-only full document
     ========================================================= */
  var printRoot = document.getElementById('print-content');
  TOPICS.forEach(function (t) {
    var sec = el('section', { class: 'print-topic rich' });
    sec.innerHTML = '<h2>' + t.letter + '. ' + t.title + '</h2>' + t.html;
    printRoot.appendChild(sec);
  });

  /* =========================================================
     VIEW SWITCH
     ========================================================= */
  var viewCards = document.getElementById('view-cards');
  var viewList = document.getElementById('view-list');
  var btnCards = document.getElementById('btn-view-cards');
  var btnList = document.getElementById('btn-view-list');
  var currentView = 'cards';

  function setView(view, persist) {
    currentView = view;
    var isCards = view === 'cards';
    viewCards.hidden = !isCards;
    viewList.hidden = isCards;
    btnCards.setAttribute('aria-pressed', isCards ? 'true' : 'false');
    btnList.setAttribute('aria-pressed', isCards ? 'false' : 'true');
    if (!isCards) { initAccHeights(); }
    if (persist) { try { localStorage.setItem(STORE_VIEW, view); } catch (e) {} }
  }
  btnCards.addEventListener('click', function () { setView('cards', true); });
  btnList.addEventListener('click', function () { setView('list', true); });

  /* =========================================================
     JUMP TO TOPIC (nav) — view-aware, no scrollIntoView
     ========================================================= */
  function jumpTo(id) {
    if (currentView === 'cards') {
      openDetail(id, true);
    } else {
      var trigger = document.getElementById('acc-trigger-' + id);
      if (trigger) {
        accSet(trigger, true);
        markAccessed(id);
        setActiveNav(id);
        scrollToEl(trigger.parentNode);
        trigger.focus({ preventScroll: true });
      }
    }
  }

  /* =========================================================
     RESIZE — recompute open accordion heights
     ========================================================= */
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      accList.querySelectorAll('.accordion-trigger[aria-expanded="true"]').forEach(function (tr) {
        var p = document.getElementById(tr.getAttribute('aria-controls'));
        p.style.maxHeight = p.scrollHeight + 'px';
      });
    }, 150);
  });

  /* =========================================================
     INIT — restore saved view; nothing open by default so the
     reader can navigate freely. Previously-read topics show
     in italic.
     ========================================================= */
  var savedView = 'cards';
  try { savedView = localStorage.getItem(STORE_VIEW) || 'cards'; } catch (e) {}
  setView(savedView === 'list' ? 'list' : 'cards', false);

  applyAccessed();

})();
