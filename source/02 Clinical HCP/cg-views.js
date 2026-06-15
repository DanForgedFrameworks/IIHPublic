/* =========================================================
   IIHHCP002 — 2018 Consensus Guidelines Interactive Tool
   VIEW RENDERING + INTERACTION  (presentation-led, polished)
   ---------------------------------------------------------
   Register C (hybrid): calm shell, dense banded core, with a
   contemporary finish: inline SVG icon system (no glyph
   fallbacks), staggered entrance animation, animated
   expand/collapse, and a pathway rail that guides the eye
   Immediate -> Short-term -> Long-term. All motion is gated
   by prefers-reduced-motion in CSS.
   Urgency is encoded by ICON SHAPE + LABEL + POSITION, never
   colour alone (WCAG 2.2 SC 1.4.1). No external dependencies.
   ========================================================= */
(function () {
  'use strict';

  var META   = window.CG_META || {};
  var RECS   = window.CG_RECS || [];
  var ROUTES = window.CG_ROUTES || [];
  var PLACE  = window.CG_PLACEMENTS || {};
  var TIMES  = window.CG_TIMEFRAMES || [];
  var DRAFT  = window.CG_DRAFT || {};
  var QS     = window.CG_REVIEW_QUESTIONS || [];
  var SOURCES = window.CG_SOURCES || {};
  var AUDIT   = window.CG_AUDIT_LEGEND || {};
  var SYMPTOMS = window.CG_SYMPTOMS || [];
  var FINDINGS = window.CG_FINDINGS || [];

  /* display grouping for the symptom matrix (presentation only) */
  var SYMPTOM_GROUPS = [
    { title: 'Headache & pain',        ids: ['headache', 'back', 'neck', 'radicular'] },
    { title: 'Vision & ear',           ids: ['vision-threat', 'papilloedema', 'tvo', 'blurred', 'diplopia', 'tinnitus'] },
    { title: 'Neurological & other',   ids: ['sixth-nerve', 'has-shunt', 'dizzy', 'cognitive'] },
    { title: 'Key findings & context', ids: ['no-papilloedema', 'pregnant', 'confirmed'], accent: true }
  ];

  var STORE_VIEW  = 'cg002.view';
  var STORE_ROUTE = 'cg002.route';

  /* =========================================================
     INLINE SVG ICON SYSTEM (stroke icons, currentColor)
     ========================================================= */
  var PATHS = {
    eye:      '<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>',
    alert:    '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    pill:     '<path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    branch:   '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    heart:    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    search:   '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>',
    clock:    '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    grid:     '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    compass:  '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    printer:  '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
    chevron:  '<polyline points="6 9 12 15 18 9"/>',
    arrowL:   '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    arrowR:   '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    flag:     '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
    refresh:  '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    info:     '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
  };
  function ico(name, cls) {
    return '<svg class="ico' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (PATHS[name] || '') + '</svg>';
  }

  var TIME_SVG  = { immediate: 'alert', short: 'clock', long: 'calendar' };
  var ROUTE_SVG = { eye: 'eye', alert: 'alert', pill: 'pill', activity: 'activity', device: 'branch', heart: 'heart', search: 'search', calendar: 'clipboard' };

  /* ---------- helpers ---------- */
  var byId = {};
  RECS.forEach(function (r) { byId[r.id] = r; });

  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) { for (var k in attrs) { if (attrs[k] != null) n.setAttribute(k, attrs[k]); } }
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function stripTags(s) { return String(s || '').replace(/<[^>]*>/g, ' '); }
  function strengthOf(id) { return (META.strengths && META.strengths[id]) || { label: id, short: id, tone: 'muted', note: '' }; }
  function categoryOf(id) {
    var cats = META.categories || [];
    for (var i = 0; i < cats.length; i++) { if (cats[i].id === id) return cats[i]; }
    return { id: id, label: id, color: 'muted' };
  }
  function routeOf(id) {
    for (var i = 0; i < ROUTES.length; i++) { if (ROUTES[i].id === id) return ROUTES[i]; }
    return null;
  }
  function timeLabel(id) {
    for (var i = 0; i < TIMES.length; i++) { if (TIMES[i].id === id) return TIMES[i]; }
    return { id: id, label: id, short: id };
  }
  function pointsHtml(rec) {
    if (!rec.points || !rec.points.length) return '';
    return '<ul>' + rec.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>';
  }
  function recsForRoute(routeId) {
    var out = { immediate: [], short: [], long: [] };
    RECS.forEach(function (rec) {
      (PLACE[rec.id] || []).forEach(function (p) {
        if (p.route === routeId && out[p.time]) out[p.time].push(rec);
      });
    });
    return out;
  }
  function badges(rec) {
    var s = strengthOf(rec.strength);
    var c = categoryOf(rec.category);
    return '<span class="badge badge-str badge-' + s.tone + '">' + esc(s.short) + '</span>' +
           '<span class="badge badge-cat badge-' + c.color + '">' + esc(c.label) + '</span>' +
           '<span class="badge badge-q">' + esc(rec.q.split('—')[0].trim()) + '</span>';
  }
  function auditChip(conf) {
    var a = AUDIT[conf] || { label: conf, tone: 'muted' };
    return '<span class="badge badge-' + a.tone + '" title="Editorial fidelity self-audit">' + esc(a.label) + '</span>';
  }

  function sourceBlock(rec) {
    var s = SOURCES[rec.id];
    if (!s) return '';
    var quotes = (s.quotes || []).map(function (q) {
      return '<blockquote class="src-quote">' + esc(q) + '</blockquote>';
    }).join('');
    return '<div class="src">' +
      '<div class="src-head">' +
        '<span class="src-label">Source — verbatim from the guideline</span>' +
        auditChip(s.confidence) +
        '<span class="src-page">Mollan 2018, p ' + esc(s.page) + '</span>' +
      '</div>' + quotes + '</div>';
  }

  function detailBody(rec) {
    var html = '<div class="rec-points">' + pointsHtml(rec) + '</div>';
    if (rec.evidence) {
      html += '<p class="rec-evidence"><span class="rec-evidence-label">Evidence base:</span> ' + esc(rec.evidence) + '</p>';
    }
    if (rec.uncertainty) {
      html += '<div class="callout callout-warning" role="note"><strong>Uncertainty (as stated in the guideline):</strong> ' + esc(rec.uncertainty) + '</div>';
    }
    html += sourceBlock(rec);
    return html;
  }

  /* =========================================================
     STATE
     ========================================================= */
  var state = { view: 'route', route: null, query: '' };

  /* =========================================================
     SIDEBAR — route navigation (desktop) / drawer (mobile)
     ========================================================= */
  var routeNav = document.getElementById('route-nav');
  ROUTES.forEach(function (rt, i) {
    var btn = el('button', { type: 'button', class: 'route-link', 'data-route': rt.id, style: '--i:' + i });
    btn.innerHTML =
      '<span class="route-ico">' + ico(ROUTE_SVG[rt.icon] || 'flag') + '</span>' +
      '<span class="route-link-text"><span class="route-link-title">' + esc(rt.title) + '</span>' +
      '<span class="route-link-sub">' + esc(rt.sub) + '</span></span>';
    btn.addEventListener('click', function () { openRoute(rt.id, true); closeDrawer(); });
    routeNav.appendChild(btn);
  });

  function setActiveRouteLink(id) {
    routeNav.querySelectorAll('.route-link').forEach(function (b) {
      if (b.getAttribute('data-route') === id) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
  }

  /* drawer (mobile) */
  var drawerToggle = document.getElementById('drawer-toggle');
  var scrim = document.getElementById('scrim');
  function openDrawer() { document.body.classList.add('drawer-open'); drawerToggle.setAttribute('aria-expanded', 'true'); }
  function closeDrawer() { document.body.classList.remove('drawer-open'); drawerToggle.setAttribute('aria-expanded', 'false'); }
  drawerToggle.addEventListener('click', function () {
    if (document.body.classList.contains('drawer-open')) closeDrawer(); else openDrawer();
  });
  scrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });

  /* sticky tabbar elevation on scroll */
  var tabbar = document.querySelector('.tabbar');
  window.addEventListener('scroll', function () {
    tabbar.classList.toggle('scrolled', window.scrollY > 4);
  }, { passive: true });

  /* =========================================================
     TOP TABS
     ========================================================= */
  var tabSymptoms = document.getElementById('tab-symptoms');
  var tabRoute  = document.getElementById('tab-route');
  var tabMatrix = document.getElementById('tab-matrix');
  var tabReview = document.getElementById('tab-review');

  function setView(view, persist) {
    state.view = view;
    [['symptoms', tabSymptoms], ['route', tabRoute], ['matrix', tabMatrix], ['review', tabReview]].forEach(function (pair) {
      pair[1].setAttribute('aria-selected', pair[0] === view ? 'true' : 'false');
    });
    document.getElementById('app').setAttribute('data-view', view);
    document.body.setAttribute('data-view', view);
    if (view !== 'route') closeDrawer();
    if (persist) { try { localStorage.setItem(STORE_VIEW, view); } catch (e) {} }
    render();
  }
  tabSymptoms.addEventListener('click', function () { state.query = ''; syncSearchBox(); setView('symptoms', true); });
  tabRoute.addEventListener('click', function () { state.query = ''; syncSearchBox(); setView('route', true); });
  tabMatrix.addEventListener('click', function () { setView('matrix', true); });
  tabReview.addEventListener('click', function () { setView('review', true); });

  /* =========================================================
     SEARCH
     ========================================================= */
  var searchInput = document.getElementById('search-input');
  var searchClear = document.getElementById('search-clear');
  function syncSearchBox() { searchInput.value = state.query; searchClear.hidden = !state.query; }
  searchInput.addEventListener('input', function () {
    state.query = searchInput.value.trim();
    searchClear.hidden = !state.query;
    if (state.query) { setView('route', false); }
    render();
  });
  searchClear.addEventListener('click', function () {
    state.query = ''; syncSearchBox(); searchInput.focus(); render();
  });
  function matchesQuery(rec, q) {
    var hay = (rec.title + ' ' + rec.summary + ' ' + rec.q + ' ' + (rec.principle || '') + ' ' +
      (rec.evidence || '') + ' ' + (rec.uncertainty || '') + ' ' + stripTags((rec.points || []).join(' '))).toLowerCase();
    return hay.indexOf(q.toLowerCase()) !== -1;
  }

  /* =========================================================
     OPEN A ROUTE
     ========================================================= */
  function openRoute(routeId, persist) {
    state.route = routeId;
    state.query = ''; syncSearchBox();
    setActiveRouteLink(routeId);
    if (persist) { try { localStorage.setItem(STORE_ROUTE, routeId); } catch (e) {} }
    if (state.view !== 'route') setView('route', true); else render();
    var main = document.getElementById('view-main');
    if (main) main.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  /* =========================================================
     RENDER
     ========================================================= */
  var main = document.getElementById('view-main');

  function animateIn() {
    main.classList.remove('vin');
    void main.offsetWidth; /* restart entrance animation */
    main.classList.add('vin');
  }

  function render() {
    if (state.view === 'symptoms') { setActiveRouteLink(null); renderSymptoms(); animateIn(); return; }
    if (state.view === 'matrix') { setActiveRouteLink(null); renderMatrix(); animateIn(); return; }
    if (state.view === 'review') { setActiveRouteLink(null); renderReview(); animateIn(); return; }
    if (state.query) { setActiveRouteLink(null); renderSearch(); animateIn(); return; }
    if (!state.route) { setActiveRouteLink(null); renderRoutePicker(); animateIn(); return; }
    renderRoute(state.route); animateIn();
  }

  /* ---------- route picker (landing) ---------- */
  function renderRoutePicker() {
    main.innerHTML = '';
    var intro = el('div', { class: 'picker-intro' },
      '<h2>What is the patient presenting with?</h2>' +
      '<p>Choose a clinical route to see what to address <strong>now</strong>, in the <strong>short term</strong> and <strong>long term</strong> — from the 2018 UK consensus guidelines on adult IIH.</p>' +
      '<div class="picker-stats">' +
        '<span class="stat">' + ico('flag') + ' 8 routes</span>' +
        '<span class="stat">' + ico('clipboard') + ' 35 recommendations</span>' +
        '<span class="stat">' + ico('clock') + ' 3 timeframes</span>' +
        '<button type="button" class="stat stat-link" id="go-matrix">' + ico('grid') + ' whole-guideline matrix ' + ico('arrowR', 'ico-sm') + '</button>' +
      '</div>');
    main.appendChild(intro);

    var grid = el('div', { class: 'picker-grid' });
    ROUTES.forEach(function (rt, i) {
      var counts = recsForRoute(rt.id);
      var n = counts.immediate.length + counts.short.length + counts.long.length;
      var hasImmediate = counts.immediate.length > 0;
      var advisory = !hasImmediate && !!rt.redflag;
      var flagCls = hasImmediate ? ' has-immediate' : (advisory ? ' has-advisory' : '');
      var card = el('button', { type: 'button', class: 'picker-card' + flagCls, 'data-route': rt.id, style: '--i:' + i });
      var flag = hasImmediate
        ? '<span class="picker-flag">' + ico('alert', 'ico-sm') + ' Immediate action</span>'
        : (advisory ? '<span class="picker-flag picker-flag-amber">' + ico('flag', 'ico-sm') + ' Safety flag</span>' : '');
      card.innerHTML =
        '<span class="picker-ico">' + ico(ROUTE_SVG[rt.icon] || 'flag') + '</span>' +
        '<span class="picker-title">' + esc(rt.title) + '</span>' +
        '<span class="picker-sub">' + esc(rt.sub) + '</span>' +
        '<span class="picker-meta"><span>' + n + ' recommendations · ' + esc(rt.source) + '</span>' + flag + '</span>' +
        '<span class="picker-go">' + ico('arrowR') + '</span>';
      card.addEventListener('click', function () { openRoute(rt.id, true); });
      grid.appendChild(card);
    });
    main.appendChild(grid);
    var gm = document.getElementById('go-matrix');
    if (gm) gm.addEventListener('click', function () { setView('matrix', true); });
  }

  /* ---------- symptom / finding picker ---------- */
  var symById = {};
  SYMPTOMS.concat(FINDINGS).forEach(function (s) { symById[s.id] = s; });
  state.picked = state.picked || {};

  function renderSymptoms() {
    main.innerHTML = '';
    main.appendChild(el('div', { class: 'picker-intro' },
      '<h2>What is the patient presenting with?</h2>' +
      '<p>Select the symptoms and findings that apply. The tool suggests which clinical route(s) to follow — select a suggestion to open it.</p>' +
      '<p class="sym-freq-note">' + ico('info', 'ico-sm') + ' Percentages show how often each symptom is reported in IIH (Mollan 2018, Fig 1A).</p>' +
      '<div class="callout callout-warning" role="note"><strong>Triage aid, not a diagnosis.</strong> Suggested routes are an editorial mapping of the 2018 guideline and need clinical review-team sign-off. Use clinical judgement; if vision is threatened, treat as an emergency.</div>'));

    var bar = el('div', { class: 'sym-toolbar' });
    bar.innerHTML = '<span class="sym-count" id="sym-count" role="status" aria-live="polite"></span>' +
      '<button type="button" class="btn-reset" id="sym-reset">' + ico('refresh', 'ico-sm') + ' Reset selections</button>';
    main.appendChild(bar);

    var grid = el('div', { class: 'sym-grid' });
    SYMPTOM_GROUPS.forEach(function (g) {
      var block = el('section', { class: 'sym-block' + (g.accent ? ' sym-block-find' : '') });
      block.appendChild(el('h3', { class: 'sym-block-title' }, esc(g.title)));
      g.ids.forEach(function (id) {
        var s = symById[id]; if (!s) return;
        block.appendChild(symChip(s));
      });
      grid.appendChild(block);
    });
    main.appendChild(grid);

    var out = el('div', { class: 'suggest', id: 'suggest' });
    main.appendChild(out);

    main.querySelectorAll('.sym-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var id = chip.getAttribute('data-id');
        var on = !state.picked[id];
        state.picked[id] = on;
        chip.setAttribute('aria-pressed', on ? 'true' : 'false');
        if (!on) delete state.picked[id];
        updateSuggestions();
      });
    });
    document.getElementById('sym-reset').addEventListener('click', function () {
      state.picked = {};
      main.querySelectorAll('.sym-chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      updateSuggestions();
    });
    updateSuggestions();
  }

  function symChip(s) {
    var on = !!state.picked[s.id];
    var chip = el('button', {
      type: 'button',
      class: 'sym-chip' + (s.emergency ? ' sym-emergency' : ''),
      'data-id': s.id, 'aria-pressed': on ? 'true' : 'false'
    });
    chip.innerHTML = '<span class="sym-check" aria-hidden="true"></span>' +
      '<span class="sym-label">' + esc(s.label) + '</span>' +
      (s.freq ? '<span class="sym-freq">' + esc(s.freq) + '</span>' : '') +
      (s.emergency ? '<span class="sym-emflag">' + ico('alert', 'ico-sm') + '</span>' : '');
    return chip;
  }

  function suggestCardHtml(rid, opts) {
    opts = opts || {};
    var rt = routeOf(rid); if (!rt) return '';
    var hasImmediate = recsForRoute(rid).immediate.length > 0;
    var isEmergency = !!opts.emergency && rid === 'fulminant';
    var urgent = isEmergency || hasImmediate;
    var cls = 'suggest-card' + (isEmergency ? ' is-emergency' : (hasImmediate ? ' is-immediate' : '')) + (opts.pulse && urgent ? ' pulse' : '');
    var chips = (opts.why || []).map(function (w) { return '<span class="suggest-why">' + esc(w) + '</span>'; }).join('');
    var flagTag = urgent
      ? '<span class="suggest-flag">' + ico('alert', 'ico-sm') + ' Immediate action</span>'
      : (rt.redflag ? '<span class="suggest-flag suggest-flag-amber">' + ico('flag', 'ico-sm') + ' Safety flag</span>' : '');
    var prefix = opts.prefix ? '<span class="suggest-prefix">' + esc(opts.prefix) + '</span>' : '';
    return '<button type="button" class="' + cls + '" data-goroute="' + esc(rid) + '">' +
      '<span class="suggest-ico">' + ico(ROUTE_SVG[rt.icon] || 'flag') + '</span>' +
      '<span class="suggest-body">' + prefix + '<span class="suggest-titlerow"><span class="suggest-title">' + esc(rt.title) + '</span>' + flagTag + '</span>' +
      '<span class="suggest-sub">' + esc(rt.sub) + '</span>' +
      '<span class="suggest-whys">' + chips + '</span></span>' +
      '<span class="suggest-go">' + ico('arrowR') + '</span></button>';
  }

  function updateSuggestions() {
    var out = document.getElementById('suggest');
    if (!out) return;
    var picked = Object.keys(state.picked).filter(function (k) { return state.picked[k]; });
    var cnt = document.getElementById('sym-count');
    if (cnt) cnt.textContent = picked.length ? (picked.length + ' selected') : 'Nothing selected yet';
    if (!picked.length) {
      out.innerHTML = '<div class="suggest-empty">' + ico('compass') +
        '<p>Select what the patient has above and the suggested route(s) will appear here.</p></div>';
      return;
    }
    var tally = {}, why = {};
    picked.forEach(function (id) {
      var s = symById[id]; if (!s) return;
      (s.routes || []).forEach(function (rid) {
        tally[rid] = (tally[rid] || 0) + 1;
        (why[rid] = why[rid] || []).push(s.label);
      });
    });
    var emergency = !!state.picked['vision-threat'];
    var ranked = Object.keys(tally).sort(function (a, b) {
      if (a === 'fulminant' && emergency) return -1;
      if (b === 'fulminant' && emergency) return 1;
      return tally[b] - tally[a];
    });

    /* Generic differential forks: where two+ routes differ only by a
       discriminator (e.g. papilloedema), show them SIDE BY SIDE until the
       clinician resolves it by selecting the discriminator. */
    var DIFFS = window.CG_DIFFERENTIALS || [];
    var routeFork = {};
    DIFFS.forEach(function (d) {
      var resolved = null;
      if (d.resolvedBy) { for (var k in d.resolvedBy) { if (state.picked[d.resolvedBy[k]]) { resolved = k; break; } } }
      if (resolved) {
        ranked = ranked.filter(function (rid) {
          var br = d.branches.filter(function (b) { return b.route === rid; })[0];
          return !br || br.key === resolved;
        });
        return;
      }
      var inRanked = d.branches.filter(function (b) { return ranked.indexOf(b.route) >= 0; });
      if (inRanked.length >= 2) { inRanked.forEach(function (b) { routeFork[b.route] = { diff: d, branches: inRanked }; }); }
    });

    var html = '';
    if (emergency) {
      html += '<div class="redflag" role="note"><span class="redflag-ico">' + ico('alert') + '</span>' +
        '<span class="redflag-text"><span class="redflag-label">Emergency</span> Vision is declining or threatened — treat as sight-threatening / fulminant IIH and act now.</span></div>';
    }
    html += '<h3 class="suggest-head">Suggested route' + (ranked.length > 1 ? 's' : '') + '</h3>';
    html += '<div class="suggest-cards">';
    var renderedForks = {}, realIdx = 0;
    ranked.forEach(function (rid) {
      var fork = routeFork[rid];
      if (fork) {
        if (renderedForks[fork.diff.id]) return;
        renderedForks[fork.diff.id] = true;
        var brs = fork.branches.map(function (b) { return b.route; });
        var shared = null;
        brs.forEach(function (r) { var w = why[r] || []; shared = (shared === null) ? w.slice() : shared.filter(function (x) { return w.indexOf(x) >= 0; }); });
        var cols = fork.branches.map(function (b) {
          return suggestCardHtml(b.route, { why: why[b.route], prefix: b.condition, emergency: emergency });
        }).join('');
        html += '<div class="suggest-fork">' +
          '<div class="fork-head">' + ico('branch', 'ico-sm') + ' Differential — ' + esc(fork.diff.question) +
          (shared && shared.length ? '<span class="fork-shared">shared: ' + shared.map(esc).join(', ') + '</span>' : '') +
          (fork.diff.hint ? '<span class="fork-hint">' + esc(fork.diff.hint) + '</span>' : '') + '</div>' +
          '<div class="fork-branches fork-cols">' + cols + '</div></div>';
        realIdx++;
        return;
      }
      html += suggestCardHtml(rid, { why: why[rid], emergency: emergency, pulse: (realIdx === 0) });
      realIdx++;
    });
    html += '</div>';
    out.innerHTML = html;
    out.querySelectorAll('[data-goroute]').forEach(function (b) {
      b.addEventListener('click', function () { openRoute(b.getAttribute('data-goroute'), true); });
    });
  }

  /* ---------- single route page ---------- */
  function renderRoute(routeId) {
    var rt = routeOf(routeId);
    if (!rt) { renderRoutePicker(); return; }
    var groups = recsForRoute(routeId);
    var total = groups.immediate.length + groups.short.length + groups.long.length;
    main.innerHTML = '';

    var head = el('div', { class: 'route-head' });
    head.innerHTML =
      '<button type="button" class="back-btn" id="back-picker">' + ico('arrowL', 'ico-sm') + ' All presentations</button>' +
      '<h2><span class="route-head-ico">' + ico(ROUTE_SVG[rt.icon] || 'flag') + '</span> ' + esc(rt.title) + '</h2>' +
      '<p class="route-head-sub">' + esc(rt.sub) + ' · ' + esc(rt.source) + ' · ' + total + ' recommendations</p>';
    main.appendChild(head);

    if (rt.redflag) {
      var flag = el('div', { class: 'redflag', role: 'note' });
      flag.innerHTML =
        '<span class="redflag-ico">' + ico('alert') + '</span>' +
        '<span class="redflag-text"><span class="redflag-label">Red flag</span> ' + esc(rt.redflag) +
        (rt.redflagRoute ? ' <button type="button" class="link-btn" data-goroute="' + esc(rt.redflagRoute) + '">Go to that route ' + ico('arrowR', 'ico-sm') + '</button>' : '') +
        '</span>';
      main.appendChild(flag);
    }

    var pathway = el('div', { class: 'pathway' });
    var bandIdx = 0;
    TIMES.forEach(function (tf) {
      var list = groups[tf.id];
      var band = el('section', { class: 'band band-' + tf.id, 'aria-label': tf.label, style: '--i:' + (bandIdx++) });
      band.appendChild(el('div', { class: 'band-node', 'aria-hidden': 'true' }, ico(TIME_SVG[tf.id])));
      band.appendChild(el('h3', { class: 'band-head' },
        esc(tf.label) + ' <span class="band-count">' + list.length + '</span>'));
      if (!list.length) {
        band.appendChild(el('p', { class: 'band-empty' }, 'No specific actions in this timeframe for this presentation.'));
      } else {
        var tbl = el('div', { class: 'actions' });
        list.forEach(function (rec, j) { tbl.appendChild(actionRow(rec, tf.id, j)); });
        band.appendChild(tbl);
      }
      pathway.appendChild(band);
    });
    main.appendChild(pathway);

    document.getElementById('back-picker').addEventListener('click', function () {
      state.route = null;
      try { localStorage.removeItem(STORE_ROUTE); } catch (e) {}
      render();
    });
    main.querySelectorAll('[data-goroute]').forEach(function (b) {
      b.addEventListener('click', function () { openRoute(b.getAttribute('data-goroute'), true); });
    });
  }

  function actionRow(rec, tf, idx) {
    var panelId = 'p-' + rec.id + '-' + tf;
    var wrap = el('div', { class: 'action' + (tf === 'immediate' ? ' action-immediate' : ''), style: '--i:' + (idx || 0) });
    var trig = el('button', {
      type: 'button', class: 'action-trigger', 'aria-expanded': 'false', 'aria-controls': panelId
    });
    trig.innerHTML =
      '<span class="action-main"><span class="action-title">' + esc(rec.title) + '</span>' +
      '<span class="action-summary">' + esc(rec.summary) + '</span>' +
      '<span class="action-badges">' + badges(rec) + '</span></span>' +
      '<span class="action-toggle" aria-hidden="true">Detail ' + ico('chevron', 'chev') + '</span>';
    var wrapPanel = el('div', { class: 'action-panel-wrap', id: panelId, role: 'region', 'aria-hidden': 'true' });
    wrapPanel.appendChild(el('div', { class: 'action-panel-inner' }, '<div class="action-panel rich">' + detailBody(rec) + '</div>'));
    trig.addEventListener('click', function () {
      var open = trig.getAttribute('aria-expanded') === 'true';
      trig.setAttribute('aria-expanded', open ? 'false' : 'true');
      wrapPanel.classList.toggle('open', !open);
      wrapPanel.setAttribute('aria-hidden', open ? 'true' : 'false');
    });
    wrap.appendChild(trig);
    wrap.appendChild(wrapPanel);
    return wrap;
  }

  /* ---------- search results ---------- */
  function renderSearch() {
    main.innerHTML = '';
    var list = RECS.filter(function (r) { return matchesQuery(r, state.query); });
    main.appendChild(el('div', { class: 'route-head' },
      '<h2>Search results</h2><p class="route-head-sub">' + list.length + ' of ' + RECS.length +
      ' recommendations match “' + esc(state.query) + '”</p>'));
    if (!list.length) {
      main.appendChild(el('div', { class: 'band-empty', role: 'status' }, 'No recommendations match. Try a different term or browse by presentation.'));
      return;
    }
    var tbl = el('div', { class: 'actions' });
    list.forEach(function (rec, i) {
      var place = (PLACE[rec.id] || [])[0];
      var rt = place ? routeOf(place.route) : null;
      var tf = place ? timeLabel(place.time) : null;
      var row = actionRow(rec, 'srch', i);
      if (rt && tf) {
        var ctx = el('span', { class: 'action-ctx' },
          '<span class="ctx-time ctx-' + place.time + '">' + ico(TIME_SVG[place.time], 'ico-sm') + ' ' + esc(tf.short) + '</span> · ' +
          '<button type="button" class="link-btn" data-goroute="' + esc(rt.id) + '">' + esc(rt.title) + '</button>');
        row.querySelector('.action-main').appendChild(ctx);
      }
      tbl.appendChild(row);
    });
    main.appendChild(tbl);
    main.querySelectorAll('[data-goroute]').forEach(function (b) {
      b.addEventListener('click', function () { openRoute(b.getAttribute('data-goroute'), true); });
    });
  }

  /* ---------- matrix (quick reference) ---------- */
  function renderMatrix() {
    main.innerHTML = '';
    main.appendChild(el('div', { class: 'route-head' },
      '<h2>Whole-guideline matrix</h2>' +
      '<p class="route-head-sub">Rows are what the patient presents with; columns are when to act. ' +
      'Each level is shown by icon and label, not colour alone. Select any action to open its detail.</p>'));

    var legend = el('div', { class: 'matrix-legend' });
    legend.innerHTML = TIMES.map(function (tf) {
      return '<span class="leg leg-' + tf.id + '">' + ico(TIME_SVG[tf.id], 'ico-sm') + ' ' + esc(tf.label) + '</span>';
    }).join('');
    main.appendChild(legend);

    var scroll = el('div', { class: 'matrix-scroll' });
    var tbl = el('table', { class: 'matrix' });
    var thead = el('thead');
    thead.innerHTML = '<tr><th class="m-rowh">Patient presents with</th>' +
      TIMES.map(function (tf) {
        return '<th class="m-col m-col-' + tf.id + '">' + ico(TIME_SVG[tf.id], 'ico-sm') + ' ' + esc(tf.label) + '</th>';
      }).join('') + '</tr>';
    tbl.appendChild(thead);

    var tbody = el('tbody');
    ROUTES.forEach(function (rt) {
      var groups = recsForRoute(rt.id);
      var tr = el('tr');
      var rowh = el('th', { class: 'm-rowh', scope: 'row' });
      rowh.innerHTML = '<button type="button" class="m-routebtn" data-goroute="' + esc(rt.id) + '">' +
        '<span class="m-routeico">' + ico(ROUTE_SVG[rt.icon] || 'flag') + '</span>' +
        '<span><span class="m-routetitle">' + esc(rt.title) + '</span>' +
        '<span class="m-routesub">' + esc(rt.sub) + '</span></span></button>';
      tr.appendChild(rowh);
      TIMES.forEach(function (tf) {
        var cell = el('td', { class: 'm-cell m-cell-' + tf.id });
        var list = groups[tf.id];
        if (!list.length) { cell.innerHTML = '<span class="m-none">—</span>'; }
        else {
          cell.innerHTML = list.map(function (rec) {
            return '<button type="button" class="m-item" data-rec="' + esc(rec.id) + '" data-route="' + esc(rt.id) + '" data-time="' + esc(tf.id) + '">' +
              '<span class="m-item-ico">' + ico(TIME_SVG[tf.id], 'ico-sm') + '</span>' +
              '<span>' + esc(rec.title) + '</span></button>';
          }).join('');
        }
        tr.appendChild(cell);
      });
      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody);
    scroll.appendChild(tbl);
    main.appendChild(scroll);

    main.querySelectorAll('[data-goroute]').forEach(function (b) {
      b.addEventListener('click', function () { openRoute(b.getAttribute('data-goroute'), true); });
    });
    main.querySelectorAll('.m-item').forEach(function (b) {
      b.addEventListener('click', function () {
        var routeId = b.getAttribute('data-route');
        var recId = b.getAttribute('data-rec');
        openRoute(routeId, true);
        setTimeout(function () {
          var t = document.querySelector('#view-main .action-trigger[aria-controls="p-' + recId + '-' + b.getAttribute('data-time') + '"]');
          if (t) { if (t.getAttribute('aria-expanded') !== 'true') t.click(); t.scrollIntoView({ block: 'center' }); t.focus(); }
        }, 80);
      });
    });
  }

  /* ---------- review pack (printable) ---------- */
  function renderReview() {
    main.innerHTML = '';
    var html = '<div class="review">';
    html += '<div class="route-head"><h2>Clinical review pack</h2>' +
      '<p class="route-head-sub">For the IIH UK clinical review team. Use your browser’s Print to produce a single PDF to mark up. ' +
      'This pack reproduces the matrix mapping, the full route / timeframe placements, and the questions we need answered.</p></div>';

    html += '<div class="callout callout-warning"><strong>' + esc(DRAFT.label || 'Draft') + '.</strong> ' + esc(DRAFT.note || '') +
      (DRAFT.rationaleHref ? ' Full rationale: <a href="' + esc(DRAFT.rationaleHref) + '" target="_blank" rel="noopener noreferrer">' + esc(DRAFT.rationaleTitle || 'decision rationale') + '</a>.' : '') + '</div>';

    html += '<h3 class="review-h">Questions for the review team</h3><ol class="review-qs">';
    QS.forEach(function (q) { html += '<li>' + esc(q) + '</li>'; });
    html += '</ol>';

    /* ---- editorial fidelity self-audit ---- */
    var counts = { faithful: [], condensed: [], editorial: [] };
    RECS.forEach(function (rec) {
      var s = SOURCES[rec.id];
      var c = s ? s.confidence : 'editorial';
      (counts[c] || (counts[c] = [])).push(rec);
    });
    html += '<h3 class="review-h">Editorial fidelity self-audit</h3>';
    html += '<p class="review-method">Each summarised action below is paired with the verbatim guideline statement. The flag indicates how close the summary wording is to the source, to help you prioritise where to look. ' +
      '<strong>Route assignment and the immediate / short-term / long-term timing are a separate editorial layer</strong> — these are clinical judgements that need your sign-off regardless of the text flags.</p>';
    html += '<div class="audit-summary">';
    ['faithful', 'condensed', 'editorial'].forEach(function (k) {
      var a = AUDIT[k] || { label: k, tone: 'muted' };
      html += '<div class="audit-pill audit-' + a.tone + '"><span class="audit-n">' + counts[k].length + '</span> ' + esc(a.label) + '</div>';
    });
    html += '</div>';
    var flagged = counts.condensed.concat(counts.editorial);
    if (flagged.length) {
      html += '<p class="review-method">Items to look at most closely (' + flagged.length + '): ' +
        flagged.map(function (r) { return esc(r.title); }).join('; ') + '.</p>';
    }

    html += '<h3 class="review-h">Route &amp; timeframe mapping with verbatim source (all recommendations)</h3>';
    ROUTES.forEach(function (rt) {
      var groups = recsForRoute(rt.id);
      html += '<div class="review-route"><h4>' + esc(rt.title) + ' <span class="review-src">' + esc(rt.source) + '</span></h4>';
      if (rt.redflag) html += '<p class="review-flag"><strong>Red flag:</strong> ' + esc(rt.redflag) + '</p>';
      TIMES.forEach(function (tf) {
        var list = groups[tf.id];
        if (!list.length) return;
        html += '<p class="review-band"><strong>' + esc(tf.label) + '</strong></p><ul class="review-list">';
        list.forEach(function (rec) {
          var s = strengthOf(rec.strength);
          var src = SOURCES[rec.id];
          html += '<li><strong>' + esc(rec.title) + '</strong> — ' + esc(rec.summary) +
            ' <span class="review-tags">[' + esc(s.label) + ' · ' + esc(rec.q) + ' · evidence: ' + esc(rec.evidence || 'n/a') + ']</span>';
          if (src) {
            html += ' ' + auditChip(src.confidence) +
              '<div class="review-verbatim"><span class="review-verbatim-label">Source (p ' + esc(src.page) + '):</span> ' +
              (src.quotes || []).map(function (q) { return '“' + esc(q) + '”'; }).join(' ') + '</div>';
          }
          html += '</li>';
        });
        html += '</ul>';
      });
      html += '</div>';
    });

    html += '<h3 class="review-h">Methodology note</h3><p class="review-method">' + esc(META.gradingNote || '') + '</p>';
    html += '</div>';
    main.innerHTML = html;
  }

  /* =========================================================
     DRAFT BANNER (persistent until clinical sign-off)
     ========================================================= */
  (function () {
    var bn = document.getElementById('draft-banner');
    if (bn && DRAFT.isDraft) {
      bn.innerHTML = '<div class="inner">' +
        ico('alert', 'ico-sm') + ' <strong>' + esc(DRAFT.label) + '</strong> — ' +
        'recommendation strength, routes and timeframes are an editorial layer awaiting clinical review team approval. ' +
        (DRAFT.rationaleHref ? '<a href="' + esc(DRAFT.rationaleHref) + '" target="_blank" rel="noopener noreferrer">Why / decision rationale ' + ico('arrowR', 'ico-sm') + '</a>' : '') +
        '</div>';
      bn.hidden = false;
    }
  }());

  /* =========================================================
     INIT
     ========================================================= */
  var savedView = 'symptoms', savedRoute = null;
  try { savedView = localStorage.getItem(STORE_VIEW) || 'symptoms'; savedRoute = localStorage.getItem(STORE_ROUTE); } catch (e) {}
  if (savedRoute && routeOf(savedRoute)) { state.route = savedRoute; }
  syncSearchBox();
  setView(['symptoms', 'route', 'matrix', 'review'].indexOf(savedView) >= 0 ? savedView : 'symptoms', false);
  if (state.route) setActiveRouteLink(state.route);

}());
