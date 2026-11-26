/* "How do I…?" search — built to forgive full-sentence questions, everyday words, and typos.
   How it works:
   1. Clean up the question (lowercase, contractions, "wi-fi" → "wifi", common phrases like "light bill").
   2. Drop filler words ("how do I", "my", "please"...).
   3. Add related words for everyday terms ("electric" → LADWP, "pills" → refill, "stuck" → frozen).
   4. Score every quick-help card and lesson; small typos still match ("pasword" → password). */

const SEARCH_STOP = new Set(`a about after again all also am an and any anything are as at be been before being but by can could
did do does doing done for from get gets getting go going got had has have having he her here hers him his how i if in into is it its
just keep keeps kind let like make me might more most much my myself need needs new no not now of off on once one only or other our out
over please really right said say says see seem seems she should so some someone something sometimes still such sure tell than that the
their them then there these they thing things this those though through to too try trying up us use used using very want wants was way we
well were what when where which while who why will with without would yes yet you your yours im ive id dont cant wont isnt doesnt didnt
help know figure find out show okay ok also hi hello thanks thank`.split(/\s+/));

// Whole phrases she might type → words the cards use. Checked before splitting into words.
const SEARCH_PHRASES = [
  [/\b(light|power|electric|electricity|water|dwp) bill\b/g, ' ladwp electric water utility bill '],
  [/\bgas (bill|company)\b/g, ' socalgas gas utility bill '],
  [/\b(cable|tv|internet|wifi) bill\b/g, ' spectrum internet utility bill '],
  [/\bsocial security\b/g, ' social security ssa '],
  [/\b(wifi|internet|online)\b.{0,15}\b(not|down|out|off|broken|gone)\b/g, ' wifi internet spectrum restart '],
  [/\b(not|no longer|stopped) (working|work|loading|load|responding|respond|opening|open)\b/g, ' broken refresh restart '],
  [/\bwill not (work|load|open|respond|turn on|connect)\b/g, ' broken frozen refresh restart '],
  [/\b(too small|so small|tiny|hard to (see|read)|can not (see|read)|bigger|larger)\b/g, ' text size bigger zoom '],
  [/\b(locked out|can not (get|sign|log) in|forgot)\b/g, ' forgot password sign '],
  [/\b(lab|test|blood) (results?|work)\b/g, ' test results mychart portal doctor '],
  [/\b(my (son|daughter|kids?|children|family|grandkids?|grandchildren))\b/g, ' family call favorites ari anijke asher '],
  [/\b(ari|anijke|asher)\b/g, ' family call favorites '],
  [/\bpop ?ups?\b/g, ' popup '],
  [/\b(sign|log)(ged)? ?(in|on)\b/g, ' login sign '],
  [/\b(sign|log)(ged)? ?(out|off)\b/g, ' sign out logout '],
  [/\b(text|verification|security|one time) codes?\b/g, ' verification code '],
  [/\bwhere did (it|that|my) .{0,20}go\b/g, ' find download lost '],
  [/\bput (it )?on paper\b/g, ' print '],
  [/\bpicture of (the|my) screen\b/g, ' screenshot '],
  [/\bsee my screen\b/g, ' screen remote help share '],
  [/\bapple (id|account)\b/g, ' apple account '],
  [/\bphone number\b/g, ' phone number contact '],
  [/\bgift cards?\b/g, ' gift card scam '],
  [/\b(numbers?|callers?|people|calls)\b.{0,12}\b(not know|not recognize|unknown|strange)\b/g, ' unknown block caller voicemail '],
  [/\b(screen|computer|phone|it)\b.{0,10}\b(black|dark|blank)\b/g, ' frozen restart '],
  [/\b(someone|somebody|a man|a woman|a person|a stranger|they|he|she|a guy|a lady)\b.{0,30}\b(call|called|calling|text|texted|email|emailed|message|messaged)\b/g, ' scam suspicious call '],
  [/\b(said|says|saying|claim|claimed|claiming|pretend|pretending)\b.{0,25}\b(bank|medicare|social security|irs|amazon|apple|microsoft|police|grandson|granddaughter)\b/g, ' scam suspicious '],
  [/\b(ask|asked|asking|want|wants|wanted)\b.{0,12}\b(code|password|money|gift|account number|social security number|pay)\b/g, ' scam '],
];

// Everyday words → related words used in the cards. Keys/values are stemmed when loaded.
const SEARCH_SYNONYMS = {
  electric: 'ladwp utility bill', electricity: 'ladwp utility bill', power: 'ladwp utility', water: 'ladwp utility', dwp: 'ladwp',
  gas: 'socalgas utility', cable: 'spectrum', tv: 'spectrum', television: 'spectrum',
  internet: 'wifi spectrum', online: 'wifi internet', connection: 'wifi', connect: 'wifi', router: 'wifi spectrum', modem: 'wifi spectrum',
  bill: 'pay payment', bills: 'pay payment', pay: 'bill payment', owe: 'bill pay', due: 'bill pay',
  bank: 'wells fargo balance account', money: 'bank balance', balance: 'bank', check: 'deposit bank balance', cheque: 'deposit check',
  wells: 'bank', wellsfargo: 'wells fargo bank balance', paid: 'pay bill bank', wrong: 'help', fargo: 'bank', account: 'login',
  doctor: 'mychart portal message ucla', dr: 'doctor mychart portal', physician: 'doctor mychart', nurse: 'doctor mychart',
  ucla: 'myuclahealth mychart doctor', myhealth: 'myuclahealth mychart', mychart: 'doctor portal', portal: 'mychart',
  medicine: 'refill prescription medication', medication: 'refill prescription', meds: 'refill prescription medication',
  pill: 'refill prescription medication', pills: 'refill prescription medication', prescription: 'refill medication', pharmacy: 'refill prescription',
  appointment: 'visit doctor mychart', telehealth: 'zoom video visit', video: 'zoom facetime visit',
  facetime: 'video call', zoom: 'video meeting visit', meeting: 'zoom video',
  medicare: 'card claims', ssa: 'social security', benefits: 'social security medicare',
  email: 'aol mail', mail: 'aol email', aol: 'email mail', inbox: 'email aol', message: 'email text', junk: 'spam email', spam: 'email junk',
  attach: 'attachment send file', attachment: 'attach file email',
  picture: 'photo screenshot', photo: 'picture', pic: 'photo picture',
  file: 'download document', document: 'file download', pdf: 'file download document', downloaded: 'download', saved: 'download file',
  lost: 'find', missing: 'find', disappeared: 'find', gone: 'find',
  frozen: 'freeze stuck restart', respond: 'frozen stuck', stuck: 'frozen restart', freeze: 'frozen', hung: 'frozen', spinning: 'frozen', crash: 'frozen restart',
  broken: 'refresh troubleshoot restart', error: 'broken refresh', blank: 'broken refresh', slow: 'broken restart',
  wifi: 'internet', wireless: 'wifi',
  password: 'login forgot', passcode: 'password', login: 'password sign', username: 'login password',
  code: 'verification', verification: 'code',
  scam: 'fraud suspicious', fraud: 'scam', fake: 'scam', suspicious: 'scam', hacker: 'scam scammed', hacked: 'scammed scam',
  scammer: 'scam', virus: 'popup scam', stranger: 'scam', strange: 'suspicious scam', weird: 'suspicious scam',
  stolen: 'scammed', tricked: 'scammed', lottery: 'scam', prize: 'scam', irs: 'scam',
  amazon: 'order shopping', buy: 'shopping order amazon', shop: 'buy amazon', shopping: 'buy amazon', order: 'buy amazon', purchase: 'buy order',
  package: 'track delivery amazon', delivery: 'track package', delivered: 'track package', shipped: 'track package', tracking: 'track package',
  refund: 'return', return: 'refund amazon',
  grocery: 'groceries instacart', groceries: 'instacart grocery', supermarket: 'groceries', store: 'groceries shopping',
  ralphs: 'groceries', vons: 'groceries', gelsons: 'groceries', bristol: 'groceries', instacart: 'groceries',
  food: 'groceries restaurant delivery', dinner: 'restaurant food delivery', lunch: 'restaurant food', restaurant: 'food delivery',
  takeout: 'restaurant food delivery', uber: 'food delivery', ubereats: 'food delivery', grubhub: 'food delivery', doordash: 'food delivery', eat: 'food restaurant',
  ticket: 'ticketmaster event', tickets: 'ticketmaster event', concert: 'tickets ticketmaster', show: 'tickets ticketmaster', game: 'tickets', event: 'tickets ticketmaster',
  print: 'printer', printer: 'print', printing: 'print', copy: 'print',
  screenshot: 'picture screen', screen: 'display',
  font: 'text size bigger', words: 'text size', letters: 'text size', magnify: 'text size bigger', small: 'text size bigger', bigger: 'text size',
  call: 'phone favorites', phone: 'call', dial: 'call phone', ring: 'call phone', calls: 'call phone', voicemail: 'voicemail message',
  block: 'caller voicemail', unknown: 'block caller', robocall: 'scam block',
  app: 'appstore download', apps: 'app', install: 'app download', download: 'file find',
  website: 'address browser', site: 'website', address: 'website', google: 'website search', chrome: 'browser website', edge: 'browser website',
  remote: 'screen share help', share: 'screen remote',
};

/* ── tiny text tools ── */
function sStem(w) {
  if (w.length > 5 && w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3);
  if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2);
  if (w.length > 4 && /(sses|xes|ches|shes)$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
}
function sNormalize(text) {
  let t = ' ' + String(text).toLowerCase().replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/[’‘`]/g, "'") + ' ';
  t = t.replace(/\b(can't|cannot|can not)\b/g, ' can not ').replace(/\bwon't\b/g, ' will not ').replace(/n't\b/g, ' not ')
       .replace(/'(s|m|re|ve|ll|d)\b/g, ' ')
       .replace(/\bcant\b/g, ' can not ').replace(/\bwont\b/g, ' will not ').replace(/\b(do|does|did|is|are|was|were|has|have|could|would|should)nt\b/g, ' $1 not ')
       .replace(/\bwi-?fi\b/g, 'wifi').replace(/\be-?mail/g, 'email').replace(/\bset ?up\b/g, 'setup')
       .replace(/[^a-z0-9 ]+/g, ' ');
  return t.replace(/\s+/g, ' ');
}
function sTokens(text) { return sNormalize(text).split(' ').filter(Boolean).map(sStem); }
function sEdit(a, b, max) { // Levenshtein distance, giving up early past `max`
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]; let best = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (cur[j] < best) best = cur[j];
    }
    if (best > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

let SYN = null, INDEX = null;
function buildSearch() {
  SYN = {};
  for (const [k, v] of Object.entries(SEARCH_SYNONYMS)) SYN[sStem(k)] = v.split(' ').map(sStem);
  const entry = (kind, ref, fields) => {
    const weights = {};
    fields.forEach(([text, w]) => sTokens(text).forEach(t => { if (!SEARCH_STOP.has(t)) weights[t] = Math.max(weights[t] || 0, w); }));
    return { kind, ref, weights, vocab: Object.keys(weights) };
  };
  INDEX = [
    ...GUIDE.tasks.map(t => entry('task', t, [[t.title, 3], [(t.keywords || '') + ' ' + t.group, 2], [t.steps.join(' ') + ' ' + (t.tip || '') + ' ' + (t.warn || '') + ' ' + (t.pattern || ''), 1]])),
    ...allLessons().map(l => entry('lesson', l, [[l.title, 3], [l.html, 0.5]])),
  ];
}

/* Turn her question into weighted search words. */
function queryTerms(q) {
  let t = sNormalize(q);
  SEARCH_PHRASES.forEach(([re, rep]) => { t = t.replace(re, rep); });
  const base = t.split(' ').filter(Boolean).map(sStem).filter(w => !SEARCH_STOP.has(w) && w.length > 1);
  const terms = new Map();
  base.forEach(w => terms.set(w, 1));
  base.forEach(w => (SYN[w] || []).forEach(s => { if (!terms.has(s)) terms.set(s, 0.6); }));
  return { base, terms };
}

function scoreEntry(e, terms) {
  let s = 0, hits = 0;
  for (const [term, qw] of terms) {
    let w = e.weights[term];
    if (!w && term.length >= 4) { // forgive small typos
      const max = term.length >= 8 ? 2 : 1;
      for (const v of e.vocab) { if (v.length >= 4 && v[0] === term[0] && sEdit(term, v, max) <= max) { w = Math.max(w || 0, e.weights[v] * 0.7); } }
    }
    if (w) { s += w * qw; if (qw === 1) hits++; }
  }
  return { s, hits };
}

function taskMatches(q) {
  if (!INDEX) buildSearch();
  const { base, terms } = queryTerms(q);
  if (!terms.size) return null;
  const scored = INDEX.map(e => ({ e, ...scoreEntry(e, terms) })).filter(x => x.s > 0);
  const tasks = scored.filter(x => x.e.kind === 'task').sort((a, b) => b.s - a.s);
  const top = tasks.length ? tasks[0].s : 0;
  const goodTasks = tasks.filter(x => x.s >= Math.max(1.5, top * 0.35)).slice(0, 8).map(x => x.e.ref);
  const lessons = scored.filter(x => x.e.kind === 'lesson').sort((a, b) => b.s - a.s);
  const ltop = lessons.length ? lessons[0].s : 0;
  const goodLessons = lessons.filter(x => x.s >= Math.max(2, ltop * 0.5)).slice(0, 4).map(x => x.e.ref);
  return { tasks: goodTasks, lessons: goodLessons, words: base };
}
