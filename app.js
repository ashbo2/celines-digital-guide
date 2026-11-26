/* Celine's Digital Guide — app logic
   - Content files call GUIDE.addModule / GUIDE.addTasks / GUIDE.addPage.
   - Pages are chosen by the part of the address after "#", e.g. #/lesson/m1-zones.
   - Progress and text size are saved in this browser (localStorage). */

const GUIDE = { modules: [], tasks: [], pages: {} };
GUIDE.addModule = m => GUIDE.modules.push(m);
GUIDE.addTasks = list => GUIDE.tasks.push(...list);
GUIDE.addPage = (id, p) => { GUIDE.pages[id] = p; };

/* ── Saved state (wrapped: storage can be unavailable) ── */
const store = {
  get(k, d) { try { const v = localStorage.getItem('celine.' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('celine.' + k, JSON.stringify(v)); } catch (e) {} }
};

function allLessons() {
  const out = [];
  GUIDE.modules.forEach((m, mi) => m.lessons.forEach((l, li) => out.push({ ...l, module: m, mi, li })));
  return out;
}
function findLesson(id) { return allLessons().find(l => l.id === id); }
function doneSet() { return store.get('done', {}); }
function isDone(id) { return !!doneSet()[id]; }
function setDone(id, v) { const d = doneSet(); if (v) d[id] = true; else delete d[id]; store.set('done', d); }
function nextLesson() {
  const list = allLessons();
  return list.find(l => !isDone(l.id)) || null;
}
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

/* ── Text size ── */
const SIZES = [18, 20, 22, 25, 28, 32];
function applySize() {
  const i = store.get('size', 1);
  document.documentElement.style.fontSize = SIZES[i] + 'px';
}
function changeSize(delta) {
  let i = store.get('size', 1) + delta;
  i = Math.max(0, Math.min(SIZES.length - 1, i));
  store.set('size', i); applySize();
}

/* ── Read aloud (uses the browser's built-in voice) ── */
function stopReading() { if ('speechSynthesis' in window) speechSynthesis.cancel(); updateReadBtn(false); }
function updateReadBtn(on) {
  const b = document.getElementById('read-btn');
  if (b) b.innerHTML = on ? '&#9209;&#65039; Stop reading' : '&#128266; Read this page to me';
}
function readPage() {
  if (!('speechSynthesis' in window)) { alertBox('Sorry — this browser cannot read out loud.'); return; }
  if (speechSynthesis.speaking) { stopReading(); return; }
  const area = document.querySelector('[data-readable]');
  if (!area) return;
  const clone = area.cloneNode(true);
  clone.querySelectorAll('.browser-mockup,.win-desktop,.win-window,.iphone,.ios-cc,.spot-screen,.mock-marker,.practice-picture-note,.quiz-options,.quiz-feedback,.spot-msg,.spot-actions,.lesson-nav,button,.portal-login').forEach(e => e.remove());
  const title = (document.querySelector('.page h1') || {}).innerText || '';
  const text = title + '. ' + clone.innerText.replace(/\s+/g, ' ');
  const chunks = text.match(/[^.!?]+[.!?]*/g) || [text];
  const voices = speechSynthesis.getVoices().filter(v => v.lang && v.lang.startsWith('en'));
  const voice = voices.find(v => /Samantha|Natural|Google US English|Aria|Jenny/i.test(v.name)) || voices[0];
  chunks.forEach((c, i) => {
    const u = new SpeechSynthesisUtterance(c.trim());
    u.rate = 0.88; if (voice) u.voice = voice;
    if (i === chunks.length - 1) u.onend = () => updateReadBtn(false);
    speechSynthesis.speak(u);
  });
  updateReadBtn(true);
}
function alertBox(msg) {
  const d = document.createElement('div');
  d.className = 'tip-box'; d.innerHTML = '<p>' + esc(msg) + '</p>';
  document.querySelector('.page').prepend(d);
}

/* ── Views ── */
const app = () => document.getElementById('app');

function viewHome() {
  const list = allLessons();
  const doneCount = list.filter(l => isDone(l.id)).length;
  const nl = nextLesson();
  const started = doneCount > 0;
  const pct = Math.round(doneCount / list.length * 100);
  return `
  <div class="page">
    <div class="home-hello">
      <h1>Hello, Celine!</h1>
      <p class="lead">What would you like to do today?</p>
    </div>
    <div class="doors">
      <a class="door learn" href="${nl ? '#/lesson/' + nl.id : '#/learn'}">
        <span class="door-icon">&#128218;</span>
        <span class="door-title">${started ? 'Continue my lessons' : 'Start my lessons'}</span>
        <span class="door-sub">${nl ? (started ? 'Pick up where you left off: <strong>' + esc(nl.title) + '</strong>' : 'Begin at the very beginning. Go at your own pace.') : 'You’ve finished every lesson! Visit any one again any time.'}</span>
      </a>
      <a class="door" href="#/howto">
        <span class="door-icon">&#128269;</span>
        <span class="door-title">How do I&hellip;?</span>
        <span class="door-sub">Stuck on something right now? Find quick, step-by-step help for a task.</span>
      </a>
    </div>
    <div class="mod-card">
      <strong>Your lessons:</strong> ${doneCount} of ${list.length} finished
      <div class="progress-line"><div style="width:${pct}%"></div></div>
    </div>
    <div class="home-more">
      <a class="bar-btn" href="#/learn">&#128203; See all lessons</a>
      <a class="bar-btn" href="#/accounts">&#128273; My accounts &amp; websites</a>
      <a class="bar-btn" href="#/help">&#128222; Help &amp; who to call</a>
      <a class="bar-btn" href="#/cheatsheet">&#128221; One-page cheat sheet</a>
    </div>
  </div>`;
}

function viewLearn() {
  const nl = nextLesson();
  const mods = GUIDE.modules.map((m, mi) => {
    const done = m.lessons.filter(l => isDone(l.id)).length;
    const items = m.lessons.map(l => {
      const d = isDone(l.id), n = nl && nl.id === l.id;
      return `<a class="lesson-link ${d ? 'done' : ''} ${n ? 'next' : ''}" href="#/lesson/${l.id}">
        <span class="check">${d ? '&#10003;' : ''}</span><span>${esc(l.title)}</span>
        ${n ? '<span class="next-tag">Up next &#8594;</span>' : ''}</a>`;
    }).join('');
    return `<div class="mod-card">
      <div class="crumb">Part ${mi + 1} &middot; ${done} of ${m.lessons.length} finished</div>
      <h2>${esc(m.title)}</h2>
      <div class="mod-intro">${m.intro}</div>
      ${items}
    </div>`;
  }).join('');
  return `<div class="page">
    <h1>All Lessons</h1>
    <p class="lead">Lessons with a green check are ones you've finished. You can open any lesson, in any order, as many times as you like.</p>
    ${mods}
  </div>`;
}

function viewLesson(id) {
  const list = allLessons();
  const idx = list.findIndex(l => l.id === id);
  if (idx < 0) return viewNotFound();
  const l = list[idx], prev = list[idx - 1], next = list[idx + 1];
  store.set('last', id);
  const d = isDone(id);
  return `<div class="page">
    <div class="crumb"><a href="#/learn">All lessons</a> &middot; Part ${l.mi + 1}: ${esc(l.module.title)} &middot; Lesson ${l.li + 1} of ${l.module.lessons.length}</div>
    <h1>${esc(l.title)}</h1>
    <div class="readbar"><button class="bar-btn" id="read-btn" data-action="read">&#128266; Read this page to me</button></div>
    <div class="lesson-body" data-readable>${l.html}</div>
    <div class="lesson-nav">
      ${prev ? `<a class="bar-btn" href="#/lesson/${prev.id}">&#8592; Back</a>` : `<a class="bar-btn" href="#/learn">&#8592; All lessons</a>`}
      <button class="bar-btn finish ${d ? 'done' : ''}" data-action="finish" data-id="${id}">${d ? '&#10003; Finished! (tap to undo)' : '&#10003; I finished this lesson'}</button>
      ${next ? `<a class="bar-btn primary" href="#/lesson/${next.id}">Next &#8594;</a>` : `<a class="bar-btn primary" href="#/learn">All done &#127881;</a>`}
    </div>
  </div>`;
}

/* taskMatches(q) lives in search.js */
function taskLink(t) { return `<a class="task-link" href="#/howto/${t.id}"><span class="t-icon">${t.icon}</span><span>${esc(t.title)}</span></a>`; }
function renderTaskResults(q) {
  const box = document.getElementById('task-results');
  if (!box) return;
  const m = q && q.trim() ? taskMatches(q) : null;
  const everything = () => {
    const groups = [...new Set(GUIDE.tasks.map(t => t.group))];
    return groups.map(g => `<div class="task-group"><h2>${esc(g)}</h2><div class="task-list">${GUIDE.tasks.filter(t => t.group === g).map(taskLink).join('')}</div></div>`).join('');
  };
  if (!m) { box.innerHTML = everything(); return; }
  let h = '';
  if (m.tasks.length) h += `<div class="task-group"><h2>Here's what might help</h2><div class="task-list">${m.tasks.map(taskLink).join('')}</div></div>`;
  if (m.lessons.length) h += `<div class="task-group"><h2>Lessons that explain this</h2><div class="task-list">${m.lessons.map(l => `<a class="task-link" href="#/lesson/${l.id}"><span class="t-icon">&#128218;</span><span>${esc(l.title)}</span></a>`).join('')}</div></div>`;
  if (!h) {
    h = `<div class="no-results"><p><strong>I couldn't find a match for "${esc(q)}." That's okay!</strong></p>
      <p>Try saying it a different way, or use one or two simple words, like <em>bill</em>, <em>password</em>, <em>print</em>, <em>email</em>, or <em>scam</em>.
      Still stuck? <a href="#/help">Call Ari, Anijke, or Asher</a>.</p></div>`;
  }
  box.innerHTML = h + `<details class="all-tasks"><summary>Show the full list of everything</summary>${everything()}</details>`;
}
function viewHowto() {
  const examples = ['How do I pay my electric bill?', 'The words are too small', 'Someone called saying they’re my bank', 'I can’t find something I downloaded'];
  return `<div class="page">
    <h1>How do I&hellip;?</h1>
    <p class="lead">Type your question in your own words &mdash; a full sentence is fine. Or pick from the list below.</p>
    <form class="search-row" id="task-form" role="search" onsubmit="return false">
      <input class="search-box" id="task-search" type="search" placeholder="Type your question here" autocomplete="off" aria-label="Type your question">
      <button class="bar-btn primary search-go" type="submit">&#128269; Search</button>
    </form>
    <div class="examples"><span>For example:</span> ${examples.map(e => `<button class="example-chip" data-action="example" data-q="${esc(e)}">${esc(e)}</button>`).join('')}</div>
    <div id="task-results" aria-live="polite"></div>
  </div>`;
}
function viewTask(id) {
  const t = GUIDE.tasks.find(x => x.id === id);
  if (!t) return viewNotFound();
  const lessons = (t.lessons || []).map(findLesson).filter(Boolean);
  return `<div class="page">
    <div class="crumb"><a href="#/howto">How do I&hellip;?</a> &middot; ${esc(t.group)}</div>
    <h1>${t.icon} ${esc(t.title)}</h1>
    <div class="readbar"><button class="bar-btn" id="read-btn" data-action="read">&#128266; Read this page to me</button></div>
    <div class="task-card" data-readable>
      ${t.pattern ? `<div class="pattern-card"><div class="pattern-label">The pattern (works for any company)</div><p style="margin:6px 0 0">${t.pattern}</p></div>` : ''}
      <ol class="big-steps">${t.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      ${t.tip ? `<div class="tip-box"><div class="box-label">Good to know</div><p>${t.tip}</p></div>` : ''}
      ${t.warn ? `<div class="warning-box"><div class="box-label">Be careful</div><p>${t.warn}</p></div>` : ''}
    </div>
    ${lessons.length ? `<p style="margin-top:22px"><strong>Want the full explanation, with pictures?</strong></p>
      <div class="task-list">${lessons.map(l => `<a class="task-link" href="#/lesson/${l.id}"><span class="t-icon">&#128218;</span><span>Lesson: ${esc(l.title)}</span></a>`).join('')}</div>` : ''}
    <div class="lesson-nav"><a class="bar-btn" href="#/howto">&#8592; Back to the list</a></div>
  </div>`;
}
function viewPage(id) {
  const p = GUIDE.pages[id];
  if (!p) return viewNotFound();
  return `<div class="page">
    <h1>${p.title}</h1>
    ${p.lead ? `<p class="lead">${p.lead}</p>` : ''}
    <div class="readbar"><button class="bar-btn" id="read-btn" data-action="read">&#128266; Read this page to me</button></div>
    <div data-readable>${p.html}</div>
  </div>`;
}
function viewNotFound() {
  return `<div class="page"><h1>That page isn't here</h1><p class="lead">No problem — this happens on the internet sometimes.</p><a class="bar-btn primary" href="#/">&#127968; Go to the Home page</a></div>`;
}

/* ── After a page is drawn: small enhancements ── */
function enhance() {
  // Label pretend screens so they aren't mistaken for the real thing
  document.querySelectorAll('[data-readable] .browser-mockup, [data-readable] .win-window, [data-readable] .win-desktop, [data-readable] .iphone').forEach(el => {
    if (el.parentElement.closest('.browser-mockup,.win-window,.win-desktop,.iphone')) return;
    const n = document.createElement('div');
    n.className = 'practice-picture-note';
    n.innerHTML = '&#128444;&#65039; Practice picture &mdash; not the real thing, so clicking it won’t do anything';
    el.parentNode.insertBefore(n, el);
  });
  // Give each gentle question a "Show me the answer" button
  document.querySelectorAll('.quiz').forEach(q => {
    const h = q.querySelector('.quiz-header');
    if (h && /check your understanding|one more/i.test(h.textContent)) h.textContent = 'Think it through — no pressure';
    if (!q.querySelector('.show-me')) {
      const b = document.createElement('button');
      b.className = 'bar-btn show-me'; b.dataset.action = 'quiz-show'; b.textContent = 'Just show me the answer';
      q.appendChild(b);
    }
  });
  const s = document.getElementById('task-search');
  if (s) {
    const q = decodeURIComponent((location.hash.split('?q=')[1] || ''));
    s.value = q; renderTaskResults(q);
    let timer;
    s.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => renderTaskResults(s.value), 300); });
    document.getElementById('task-form').addEventListener('submit', () => { clearTimeout(timer); renderTaskResults(s.value); s.blur(); });
  }
}

/* ── Router ── */
function route() {
  stopReading();
  const h = location.hash.replace(/^#\/?/, '').split('?')[0];
  const [a, b] = h.split('/');
  let html, title = "Celine's Digital Guide";
  if (!a) html = viewHome();
  else if (a === 'learn') { html = viewLearn(); title = 'All Lessons'; }
  else if (a === 'lesson') { html = viewLesson(b); const l = findLesson(b); if (l) title = l.title; }
  else if (a === 'howto' && b) { html = viewTask(b); }
  else if (a === 'howto') { html = viewHowto(); title = 'How do I...?'; }
  else if (GUIDE.pages[a]) { html = viewPage(a); title = GUIDE.pages[a].title.replace(/<[^>]+>/g, ''); }
  else if (/^m\d-/.test(a) && findLesson(a)) { location.replace('#/lesson/' + a); return; } // old v1 links
  else html = viewNotFound();
  app().innerHTML = html;
  document.title = title + " — Celine's Guide";
  window.scrollTo(0, 0);
  enhance();
  updatePageProgress();
  const h1 = document.querySelector('.page h1');
  if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
}

/* ── Tabs (kept from v1; lesson content calls this) ── */
function showTab(btn, id) {
  const c = btn.closest('.tab-container');
  c.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  c.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
  const prev = c.previousElementSibling;
  if (prev && prev.classList.contains('try-it-callout')) prev.classList.add('interacted');
}

/* ── One click handler for everything interactive ── */
document.addEventListener('click', e => {
  const t = e.target.closest('button, [data-action]');
  if (!t) return;
  const act = t.dataset.action;
  if (act === 'size-down') return changeSize(-1);
  if (act === 'size-up') return changeSize(1);
  if (act === 'read') return readPage();
  if (act === 'example') {
    const s = document.getElementById('task-search');
    if (s) { s.value = t.dataset.q; renderTaskResults(s.value); }
    return;
  }
  if (act === 'finish') {
    const id = t.dataset.id, now = !isDone(id);
    setDone(id, now);
    t.classList.toggle('done', now);
    t.innerHTML = now ? '&#10003; Finished! (tap to undo)' : '&#10003; I finished this lesson';
    return;
  }

  // Gentle questions: a wrong pick gets a nudge, not a red X; she can try again.
  if (t.classList.contains('quiz-option') || act === 'quiz-show') {
    const quiz = t.closest('.quiz');
    if (quiz.classList.contains('answered')) return;
    const fbs = quiz.querySelectorAll('.quiz-feedback');
    fbs.forEach(f => f.classList.remove('show', 'nudge-fb'));
    const reveal = () => {
      quiz.querySelectorAll('.quiz-option').forEach(o => { if (o.dataset.correct === 'true') o.classList.add('correct'); });
      quiz.classList.add('answered');
      const sm = quiz.querySelector('.show-me'); if (sm) sm.remove();
    };
    if (act === 'quiz-show') { reveal(); if (fbs[1]) { fbs[1].classList.add('show', 'nudge-fb'); } return; }
    if (t.dataset.correct === 'true') { t.classList.add('correct'); fbs[0].classList.add('show'); reveal(); }
    else {
      t.classList.add('nudge');
      let n = quiz.querySelector('.nudge-line');
      if (!n) { n = document.createElement('div'); n.className = 'quiz-feedback nudge-fb nudge-line'; quiz.querySelector('.quiz-options').after(n); }
      n.textContent = 'Not quite that one — that’s okay! Have another look and try a different answer.';
    }
    return;
  }

  // "Can you spot it?"
  const spot = t.closest('.spot');
  if (spot && (t.classList.contains('spot-target') || t.classList.contains('spot-decoy') || act === 'spot-show')) {
    const yes = spot.querySelector('.spot-msg.yes'), hint = spot.querySelector('.spot-msg.hint');
    if (t.classList.contains('spot-target') || act === 'spot-show') {
      spot.querySelectorAll('.spot-target').forEach(x => x.classList.add('spot-found'));
      hint.classList.remove('show'); yes.classList.add('show');
      const sb = spot.querySelector('[data-action="spot-show"]'); if (sb) sb.remove();
    } else {
      hint.innerHTML = (t.dataset.say ? esc(t.dataset.say) + ' ' : 'Not that one — good try! ') + (spot.dataset.hint ? '<strong>Hint:</strong> ' + spot.dataset.hint : '');
      hint.classList.add('show');
    }
  }
});

/* ── "How far down the page" line ── */
function updatePageProgress() {
  const f = document.getElementById('page-progress-fill');
  if (!f) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  f.style.width = (max > 0 ? Math.min(100, window.scrollY / max * 100) : 0) + '%';
}
window.addEventListener('scroll', () => requestAnimationFrame(updatePageProgress), { passive: true });
window.addEventListener('resize', updatePageProgress);

window.addEventListener('hashchange', route);
document.addEventListener('DOMContentLoaded', () => { applySize(); route(); });
if ('speechSynthesis' in window) speechSynthesis.onvoiceschanged = () => {};
