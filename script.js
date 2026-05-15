// ════════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════════

function getConsonant(hira) {
  const map = {
    'あ':'a','い':'a','う':'a','え':'a','お':'a',
    'か':'k','き':'k','く':'k','け':'k','こ':'k',
    'さ':'s','し':'s','す':'s','せ':'s','そ':'s',
    'た':'t','ち':'t','つ':'t','て':'t','と':'t',
    'な':'n','に':'n','ぬ':'n','ね':'n','の':'n',
    'は':'h','ひ':'h','ふ':'h','へ':'h','ほ':'h',
    'ま':'m','み':'m','む':'m','め':'m','も':'m',
    'や':'y','ゆ':'y','よ':'y',
    'ら':'r','り':'r','る':'r','れ':'r','ろ':'r',
    'わ':'w','を':'w','ん':'n'
  };
  return map[hira] || map[hira[0]] || null;
}

const SEION = [
  { group: 'あ行', chars: [
    {h:'あ',r:'a'},{h:'い',r:'i'},{h:'う',r:'u'},{h:'え',r:'e'},{h:'お',r:'o'}
  ]},
  { group: 'か行', chars: [
    {h:'か',r:'ka'},{h:'き',r:'ki'},{h:'く',r:'ku'},{h:'け',r:'ke'},{h:'こ',r:'ko'}
  ]},
  { group: 'さ行', chars: [
    {h:'さ',r:'sa'},{h:'し',r:'shi'},{h:'す',r:'su'},{h:'せ',r:'se'},{h:'そ',r:'so'}
  ]},
  { group: 'た行', chars: [
    {h:'た',r:'ta'},{h:'ち',r:'chi'},{h:'つ',r:'tsu'},{h:'て',r:'te'},{h:'と',r:'to'}
  ]},
  { group: 'な行', chars: [
    {h:'な',r:'na'},{h:'に',r:'ni'},{h:'ぬ',r:'nu'},{h:'ね',r:'ne'},{h:'の',r:'no'}
  ]},
  { group: 'は行', chars: [
    {h:'は',r:'ha'},{h:'ひ',r:'hi'},{h:'ふ',r:'fu'},{h:'へ',r:'he'},{h:'ほ',r:'ho'}
  ]},
  { group: 'ま行', chars: [
    {h:'ま',r:'ma'},{h:'み',r:'mi'},{h:'む',r:'mu'},{h:'め',r:'me'},{h:'も',r:'mo'}
  ]},
  { group: 'や行', chars: [
    {h:'や',r:'ya'},{h:'ゆ',r:'yu'},{h:'よ',r:'yo'}
  ]},
  { group: 'ら行', chars: [
    {h:'ら',r:'ra'},{h:'り',r:'ri'},{h:'る',r:'ru'},{h:'れ',r:'re'},{h:'ろ',r:'ro'}
  ]},
  { group: 'わ行・ん', chars: [
    {h:'わ',r:'wa'},{h:'を',r:'wo'},{h:'ん',r:'n'}
  ]},
];

const DAKUTEN = [
  { group: 'が行', chars: [
    {h:'が',r:'ga', type:'dakuten'},{h:'ぎ',r:'gi', type:'dakuten'},{h:'ぐ',r:'gu', type:'dakuten'},{h:'げ',r:'ge', type:'dakuten'},{h:'ご',r:'go', type:'dakuten'}
  ]},
  { group: 'ざ行', chars: [
    {h:'ざ',r:'za', type:'dakuten'},{h:'じ',r:'ji', type:'dakuten'},{h:'ず',r:'zu', type:'dakuten'},{h:'ぜ',r:'ze', type:'dakuten'},{h:'ぞ',r:'zo', type:'dakuten'}
  ]},
  { group: 'だ行', chars: [
    {h:'だ',r:'da', type:'dakuten'},{h:'ぢ',r:'di', type:'dakuten'},{h:'づ',r:'du', type:'dakuten'},{h:'で',r:'de', type:'dakuten'},{h:'ど',r:'do', type:'dakuten'}
  ]},
  { group: 'ば行', chars: [
    {h:'ば',r:'ba', type:'dakuten'},{h:'び',r:'bi', type:'dakuten'},{h:'ぶ',r:'bu', type:'dakuten'},{h:'べ',r:'be', type:'dakuten'},{h:'ぼ',r:'bo', type:'dakuten'}
  ]},
];

const HANDAKUTEN = [
  { group: 'ぱ行', chars: [
    {h:'ぱ',r:'pa', type:'handakuten'},{h:'ぴ',r:'pi', type:'handakuten'},{h:'ぷ',r:'pu', type:'handakuten'},{h:'ぺ',r:'pe', type:'handakuten'},{h:'ぽ',r:'po', type:'handakuten'}
  ]},
];

const COMBO = [
  { group: 'き組', chars: [
    {h:'きゃ',r:'kya', type:'combo'},{h:'きゅ',r:'kyu', type:'combo'},{h:'きょ',r:'kyo', type:'combo'}
  ]},
  { group: 'し組', chars: [
    {h:'しゃ',r:'sha', type:'combo'},{h:'しゅ',r:'shu', type:'combo'},{h:'しょ',r:'sho', type:'combo'}
  ]},
  { group: 'ち組', chars: [
    {h:'ちゃ',r:'cha', type:'combo'},{h:'ちゅ',r:'chu', type:'combo'},{h:'ちょ',r:'cho', type:'combo'}
  ]},
  { group: 'に組', chars: [
    {h:'にゃ',r:'nya', type:'combo'},{h:'にゅ',r:'nyu', type:'combo'},{h:'にょ',r:'nyo', type:'combo'}
  ]},
  { group: 'ひ組', chars: [
    {h:'ひゃ',r:'hya', type:'combo'},{h:'ひゅ',r:'hyu', type:'combo'},{h:'ひょ',r:'hyo', type:'combo'}
  ]},
  { group: 'み組', chars: [
    {h:'みゃ',r:'mya', type:'combo'},{h:'みゅ',r:'myu', type:'combo'},{h:'みょ',r:'myo', type:'combo'}
  ]},
  { group: 'り組', chars: [
    {h:'りゃ',r:'rya', type:'combo'},{h:'りゅ',r:'ryu', type:'combo'},{h:'りょ',r:'ryo', type:'combo'}
  ]},
  { group: 'ぎ組', chars: [
    {h:'ぎゃ',r:'gya', type:'combo'},{h:'ぎゅ',r:'gyu', type:'combo'},{h:'ぎょ',r:'gyo', type:'combo'}
  ]},
  { group: 'じ組', chars: [
    {h:'じゃ',r:'ja', type:'combo'},{h:'じゅ',r:'ju', type:'combo'},{h:'じょ',r:'jo', type:'combo'}
  ]},
  { group: 'び組', chars: [
    {h:'びゃ',r:'bya', type:'combo'},{h:'びゅ',r:'byu', type:'combo'},{h:'びょ',r:'byo', type:'combo'}
  ]},
  { group: 'ぴ組', chars: [
    {h:'ぴゃ',r:'pya', type:'combo'},{h:'ぴゅ',r:'pyu', type:'combo'},{h:'ぴょ',r:'pyo', type:'combo'}
  ]},
];

function getAllByFilter(filter) {
  let s = [], d = [], h = [], c = [];
  SEION.forEach(g => g.chars.forEach(x => s.push({...x, type:'seion'})));
  DAKUTEN.forEach(g => g.chars.forEach(x => d.push({...x, type:'dakuten'})));
  HANDAKUTEN.forEach(g => g.chars.forEach(x => h.push({...x, type:'handakuten'})));
  COMBO.forEach(g => g.chars.forEach(x => c.push({...x, type:'combo'})));
  if (filter === 'seion') return s;
  if (filter === 'dakuten') return [...d, ...h];
  if (filter === 'handakuten') return h;
  if (filter === 'combo') return c;
  return [...s, ...d, ...h, ...c];
}

// ════════════════════════════════════════════════
// LEARN TAB
// ════════════════════════════════════════════════

function buildLearn(filter='all') {
  const container = document.getElementById('learn-content');
  container.innerHTML = '';

  const sections = [];
  if (filter === 'all' || filter === 'seion') sections.push({ data: SEION, type: 'seion', label: 'Sons purs — Seion 清音' });
  if (filter === 'all' || filter === 'dakuten') sections.push({ data: DAKUTEN, type: 'dakuten', label: 'Sons voisés — Dakuten 濁音' });
  if (filter === 'all' || filter === 'handakuten' || filter === 'dakuten') sections.push({ data: HANDAKUTEN, type: 'handakuten', label: 'Sons aspirés — Handakuten 半濁音' });
  if (filter === 'all' || filter === 'combo') sections.push({ data: COMBO, type: 'combo', label: 'Combinaisons — Yōon 拗音' });

  sections.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.innerHTML = `<div class="section-label" style="margin-bottom:.4rem">${section.label}</div>`;

    section.data.forEach(group => {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'hira-group';
      groupDiv.innerHTML = `<div class="group-header"><span class="group-title">${group.group}</span><div class="group-line"></div></div>`;
      const grid = document.createElement('div');
      grid.className = 'hira-grid';

      group.chars.forEach(item => {
        const card = document.createElement('div');
        card.className = 'hira-card' + (section.type === 'combo' ? ' combo' : '');
        card.innerHTML = `
          <div class="hira-char">${item.h}</div>
          <div class="hira-rom">${item.r}</div>
          <div class="hira-rom-hidden">${item.r}</div>`;
        card.addEventListener('click', () => {
          const rom = card.querySelector('.hira-rom');
          rom.style.opacity = (rom.style.opacity === '0') ? '1' : '0';
        });
        grid.appendChild(card);
      });

      groupDiv.appendChild(grid);
      sectionDiv.appendChild(groupDiv);
    });

    container.appendChild(sectionDiv);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildLearn(btn.dataset.filter);
  });
});

// ════════════════════════════════════════════════
// TABS
// ════════════════════════════════════════════════

document.querySelectorAll('nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
  });
});

// ════════════════════════════════════════════════
// FLASHCARDS
// ════════════════════════════════════════════════

let fcCards = [], fcIndex = 0, fcFlipped = false, fcMode = 'hira2rom';

function buildFlashDeck() {
  const set = document.getElementById('fc-set').value;
  fcMode = document.getElementById('fc-mode').value;
  fcCards = getAllByFilter(set === 'dakuten' ? 'dakuten' : set);
  fcIndex = 0; fcFlipped = false;
  document.getElementById('flashcard-inner').classList.remove('flipped');
  updateFlashCard();
}

function updateFlashCard() {
  const card = fcCards[fcIndex];
  const inner = document.getElementById('flashcard-inner');
  inner.classList.remove('flipped');
  fcFlipped = false;

  if (fcMode === 'hira2rom') {
    document.getElementById('fc-front-char').style.fontFamily = "'Noto Serif JP', serif";
    document.getElementById('fc-front-char').style.fontSize = '5rem';
    document.getElementById('fc-front-char').style.color = 'var(--ink)';
    document.getElementById('fc-front-char').textContent = card.h;
    document.getElementById('fc-back-rom').textContent = card.r;
    document.getElementById('fc-back-char').textContent = card.h;
  } else {
    document.getElementById('fc-front-char').style.fontFamily = "'Cormorant Garamond', serif";
    document.getElementById('fc-front-char').style.fontSize = '3.5rem';
    document.getElementById('fc-front-char').style.color = 'var(--ink)';
    document.getElementById('fc-front-char').textContent = card.r;
    document.getElementById('fc-back-rom').textContent = card.h;
    document.getElementById('fc-back-char').textContent = card.r;
    document.getElementById('fc-back-rom').style.fontFamily = "'Noto Serif JP', serif";
    document.getElementById('fc-back-rom').style.fontSize = '4rem';
  }

  const pct = ((fcIndex + 1) / fcCards.length * 100).toFixed(0);
  document.getElementById('fc-counter').textContent = `${fcIndex+1} / ${fcCards.length}`;
  document.getElementById('fc-progress-bar').style.width = pct + '%';
}

document.getElementById('flashcard-wrap').addEventListener('click', () => {
  const inner = document.getElementById('flashcard-inner');
  if (!fcFlipped) {
    inner.classList.add('flipped');
    fcFlipped = true;
  } else {
    fcIndex = (fcIndex + 1) % fcCards.length;
    updateFlashCard();
  }
});

document.getElementById('fc-prev').addEventListener('click', () => {
  fcIndex = (fcIndex - 1 + fcCards.length) % fcCards.length;
  updateFlashCard();
});
document.getElementById('fc-next').addEventListener('click', () => {
  fcIndex = (fcIndex + 1) % fcCards.length;
  updateFlashCard();
});
document.getElementById('fc-shuffle').addEventListener('click', () => {
  for (let i = fcCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcCards[i], fcCards[j]] = [fcCards[j], fcCards[i]];
  }
  fcIndex = 0; updateFlashCard();
});
document.getElementById('fc-start').addEventListener('click', buildFlashDeck);

// ════════════════════════════════════════════════
// QUIZ
// ════════════════════════════════════════════════

let quizDeck = [], quizIndex = 0, quizCorrect = 0, quizWrong = 0, quizMode = 'hira2rom';
let quizAnswered = false;
let currentPool = [];

function startQuiz() {
  const cons = [...document.querySelectorAll('.qcons:checked')].map(i => i.value);
  const types = [...document.querySelectorAll('.qtype:checked')].map(i => i.value);
  quizMode = document.querySelector('input[name="qmode"]:checked').value;
  const count = parseInt(document.querySelector('input[name="qcount"]:checked').value);

  let pool = [];
  const hasFilter = cons.length > 0 || types.length > 0;

  if (!hasFilter) {
    pool = getAllByFilter('all');
  } else {
    // consonnes = seion uniquement
    if (cons.length > 0) {
      SEION.forEach(g => g.chars.forEach(x => {
        if (cons.includes(getConsonant(x.h))) pool.push({...x, type:'seion'});
      }));
    }
    // types = catégories supplémentaires explicites
    if (types.includes('dakuten')) {
      DAKUTEN.forEach(g => g.chars.forEach(x => pool.push({...x})));
    }
    if (types.includes('handakuten')) {
      HANDAKUTEN.forEach(g => g.chars.forEach(x => pool.push({...x})));
    }
    if (types.includes('combo')) {
      COMBO.forEach(g => g.chars.forEach(x => {
        if (cons.length === 0 || cons.includes(getConsonant(x.h))) pool.push({...x});
      }));
    }
  }

  if (!pool.length) {
    alert('Aucun hiragana sélectionné !');
    return;
  }

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  quizDeck = pool.slice(0, Math.min(count, pool.length));
  currentPool = pool;

  quizIndex = 0;
  quizCorrect = 0;
  quizWrong = 0;

  document.getElementById('quiz-setup').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-active').style.display = 'block';
  document.getElementById('q-total').textContent = quizDeck.length;

  showQuestion();
}

function showQuestion() {
  quizAnswered = false;

  const q = quizDeck[quizIndex];

  document.getElementById('q-num').textContent = quizIndex + 1;
  document.getElementById('q-correct').textContent = quizCorrect;
  document.getElementById('q-wrong').textContent = quizWrong;

  const qDiv = document.getElementById('quiz-question');

  if (quizMode === 'hira2rom') {
    qDiv.innerHTML = `<div class="q-char">${q.h}</div>`;
  } else {
    qDiv.innerHTML = `<div class="q-rom">${q.r}</div>`;
  }

  const distractors = currentPool
    .filter(x => x.h !== q.h)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const answers = [...distractors, q].sort(() => Math.random() - 0.5);

  const aDiv = document.getElementById('quiz-answers');
  aDiv.innerHTML = '';

  answers.forEach(ans => {
    const btn = document.createElement('button');
    btn.className = 'quiz-answer' + (quizMode === 'hira2rom' ? ' rom' : '');
    btn.textContent = quizMode === 'hira2rom' ? ans.r : ans.h;

    btn.addEventListener('click', () => checkAnswer(btn, ans, q));

    aDiv.appendChild(btn);
  });

  document.getElementById('quiz-next').style.display = 'none';
}

function checkAnswer(btn, selected, correct) {
  if (quizAnswered) return;

  quizAnswered = true;

  const allBtns = document.querySelectorAll('.quiz-answer');
  allBtns.forEach(b => b.disabled = true);

  if (selected.h === correct.h) {
    btn.classList.add('correct');
    quizCorrect++;
  } else {
    btn.classList.add('wrong');
    quizWrong++;

    allBtns.forEach(b => {
      if (
        (quizMode === 'hira2rom' && b.textContent === correct.r) ||
        (quizMode === 'rom2hira' && b.textContent === correct.h)
      ) {
        b.classList.add('correct');
      }
    });
  }

  document.getElementById('q-correct').textContent = quizCorrect;
  document.getElementById('q-wrong').textContent = quizWrong;

  if (quizIndex + 1 < quizDeck.length) {
    document.getElementById('quiz-next').style.display = 'inline-block';
  } else {
    setTimeout(showResult, 800);
  }
}

function nextQuestion() {
  quizIndex++;
  showQuestion();
}

function showResult() {
  document.getElementById('quiz-active').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';

  const pct = Math.round((quizCorrect / quizDeck.length) * 100);

  document.getElementById('result-score').textContent =
    `${quizCorrect}/${quizDeck.length}`;

  const msgs = [
    [0, 'Continuez à pratiquer, la persévérance est la clé.'],
    [50, 'Bon début — les hiragana s\'apprivoisent avec le temps.'],
    [70, 'Bien joué ! Vous connaissez déjà la moitié.'],
    [85, 'Excellent travail ! Presque parfait.'],
    [100, 'Score parfait ! Vous maîtrisez ces hiragana.'],
  ];

  const msg = msgs.reduce((a, m) => (pct >= m[0] ? m : a), msgs[0]);

  document.getElementById('result-msg').textContent = msg[1];
}

function resetQuiz() {
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-setup').style.display = 'block';
}

// ════════════════════════════════════════════════
// GOJUON TABLE
// ════════════════════════════════════════════════

function buildGojuon() {
  const rows = [
    ['','a','i','u','e','o'],
    ['∅','あ','い','う','え','お'],
    ['k','か','き','く','け','こ'],
    ['s','さ','し','す','せ','そ'],
    ['t','た','ち','つ','て','と'],
    ['n','な','に','ぬ','ね','の'],
    ['h','は','ひ','ふ','へ','ほ'],
    ['m','ま','み','む','め','も'],
    ['y','や','—','ゆ','—','よ'],
    ['r','ら','り','る','れ','ろ'],
    ['w','わ','—','—','—','を'],
    ['n','ん','—','—','—','—'],
  ];
  const table = document.getElementById('gojuon-table');
  rows.forEach((row, ri) => {
    const tr = document.createElement('tr');
    row.forEach((cell, ci) => {
      const td = document.createElement(ri === 0 || ci === 0 ? 'th' : 'td');
      td.textContent = cell;
      td.style.cssText = `
        padding: .6rem 1rem;
        text-align: center;
        border: 1px solid rgba(255,255,255,0.06);
        font-size: ${ri === 0 || ci === 0 ? '0.8rem' : '1.3rem'};
        color: ${cell === '—' ? 'rgba(138,122,106,0.3)' : ri === 0 || ci === 0 ? 'var(--muted)' : 'var(--text-on-dark)'};
        font-family: ${ri === 0 || ci === 0 ? "'Cormorant Garamond', serif" : "'Noto Serif JP', serif"};
        letter-spacing: ${ri === 0 || ci === 0 ? '0.1rem' : '0'};
        background: ${ri === 0 || ci === 0 ? 'rgba(255,255,255,0.03)' : 'transparent'};
      `;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

// ════════════════════════════════════════════════
// PHRASES
// ════════════════════════════════════════════════

const PHRASES = [
  {
    cat: 'Politesse',
    icon: '🙏',
    items: [
      { h:'こんにちは',                    r:'konnichiwa',                      fr:'Bonjour' },
      { h:'おはようございます',            r:'ohayou gozaimasu',                fr:'Bonjour (le matin)' },
      { h:'こんばんは',                    r:'konbanwa',                        fr:'Bonsoir' },
      { h:'おやすみなさい',                r:'oyasumi nasai',                   fr:'Bonne nuit' },
      { h:'さようなら',                    r:'sayounara',                       fr:'Au revoir' },
      { h:'またあした',                    r:'mata ashita',                     fr:'À demain' },
      { h:'またね',                        r:'mata ne',                         fr:'À bientôt' },
      { h:'ありがとうございます',          r:'arigatou gozaimasu',              fr:'Merci beaucoup' },
      { h:'どういたしまして',              r:'dou itashimashite',               fr:'De rien' },
      { h:'すみません',                    r:'sumimasen',                       fr:'Excusez-moi / Pardon' },
      { h:'もうしわけありません',          r:'moushiwake arimasen',             fr:'Je suis vraiment désolé(e)' },
      { h:'おねがいします',                r:'onegaishimasu',                   fr:'S\'il vous plaît' },
      { h:'はい',                          r:'hai',                             fr:'Oui' },
      { h:'いいえ',                        r:'iie',                             fr:'Non' },
      { h:'そうです',                      r:'sou desu',                        fr:'C\'est ça / En effet' },
      { h:'わかりません',                  r:'wakarimasen',                     fr:'Je ne comprends pas' },
      { h:'わかりました',                  r:'wakarimashita',                   fr:'J\'ai compris' },
      { h:'もういちどいってください',      r:'mou ichido itte kudasai',         fr:'Répétez, s\'il vous plaît' },
      { h:'ゆっくりはなしてください',      r:'yukkuri hanashite kudasai',       fr:'Parlez plus lentement, s\'il vous plaît' },
      { h:'えいごをはなせますか',          r:'eigo wo hanasemasu ka',           fr:'Parlez-vous anglais ?' },
      { h:'にほんごがすこしわかります',    r:'nihongo ga sukoshi wakarimasu',   fr:'Je comprends un peu le japonais' },
      { h:'はじめまして',                  r:'hajimemashite',                   fr:'Enchanté(e)' },
      { h:'よろしくおねがいします',        r:'yoroshiku onegaishimasu',         fr:'Ravi(e) de vous rencontrer' },
      { h:'いただきます',                  r:'itadakimasu',                     fr:'Bon appétit (avant de manger)' },
      { h:'ごちそうさまでした',            r:'gochisousama deshita',            fr:'Merci pour le repas (après)' },
    ]
  },
  {
    cat: 'Faire connaissance',
    icon: '😊',
    items: [
      { h:'おなまえはなんですか',          r:'onamae wa nan desu ka',           fr:'Quel est votre nom ?' },
      { h:'わたしのなまえは～です',        r:'watashi no namae wa ~ desu',      fr:'Je m\'appelle ...' },
      { h:'どこからきましたか',            r:'doko kara kimashita ka',          fr:'D\'où venez-vous ?' },
      { h:'ふらんすからきました',          r:'furansu kara kimashita',          fr:'Je viens de France' },
      { h:'なんさいですか',                r:'nansai desu ka',                  fr:'Quel âge avez-vous ?' },
      { h:'～さいです',                    r:'~ sai desu',                      fr:'J\'ai ... ans' },
      { h:'しごとはなんですか',            r:'shigoto wa nan desu ka',          fr:'Quel est votre travail ?' },
      { h:'にほんがすきです',              r:'nihon ga suki desu',              fr:'J\'aime le Japon' },
      { h:'にほんごをべんきょうしています',r:'nihongo wo benkyou shite imasu',  fr:'J\'apprends le japonais' },
      { h:'ともだちになりませんか',        r:'tomodachi ni narimasen ka',       fr:'On peut être amis ?' },
      { h:'またあいましょう',              r:'mata aimashou',                   fr:'On se reverra' },
    ]
  },
  {
    cat: 'Au restaurant',
    icon: '🍜',
    items: [
      { h:'ひとりです',                    r:'hitori desu',                     fr:'Une personne (pour une table)' },
      { h:'ふたりです',                    r:'futari desu',                     fr:'Deux personnes' },
      { h:'よやくをしています',            r:'yoyaku wo shite imasu',           fr:'J\'ai une réservation' },
      { h:'これをください',                r:'kore wo kudasai',                 fr:'Je voudrais ceci' },
      { h:'おなじものをください',          r:'onaji mono wo kudasai',           fr:'La même chose, s\'il vous plaît' },
      { h:'おすすめはなんですか',          r:'osusume wa nan desu ka',          fr:'Qu\'est-ce que vous recommandez ?' },
      { h:'おいしいです',                  r:'oishii desu',                     fr:'C\'est délicieux !' },
      { h:'みずをください',                r:'mizu wo kudasai',                 fr:'De l\'eau, s\'il vous plaît' },
      { h:'からいですか',                  r:'karai desu ka',                   fr:'C\'est épicé ?' },
      { h:'にくをたべません',              r:'niku wo tabemasen',               fr:'Je ne mange pas de viande' },
      { h:'さかなはたべられません',        r:'sakana wa taberaremasen',         fr:'Je ne mange pas de poisson' },
      { h:'～ぬきでおねがいします',        r:'~ nuki de onegaishimasu',         fr:'Sans ... s\'il vous plaît' },
      { h:'おかわりをください',            r:'okawari wo kudasai',              fr:'Une autre portion, s\'il vous plaît' },
      { h:'もちかえりできますか',          r:'mochikaeri dekimasu ka',          fr:'Est-ce que je peux emporter ?' },
      { h:'おかいけいをおねがいします',    r:'okaikei wo onegaishimasu',        fr:'L\'addition, s\'il vous plaît' },
      { h:'べつべつにはらえますか',        r:'betsubetsu ni haraemasu ka',      fr:'Pouvons-nous payer séparément ?' },
    ]
  },
  {
    cat: 'Transport',
    icon: '🚃',
    items: [
      { h:'～えきはどこですか',              r:'~ eki wa doko desu ka',             fr:'Où est la gare de ... ?' },
      { h:'このでんしゃは～にとまりますか',  r:'kono densha wa ~ ni tomarimasu ka', fr:'Ce train s\'arrête-t-il à ... ?' },
      { h:'～まではいくらですか',            r:'~ made wa ikura desu ka',           fr:'Combien coûte le trajet jusqu\'à ... ?' },
      { h:'つぎのえきはどこですか',          r:'tsugi no eki wa doko desu ka',      fr:'Quel est le prochain arrêt ?' },
      { h:'なんじにでますか',                r:'nanji ni demasu ka',                fr:'À quelle heure part-il ?' },
      { h:'なんじにつきますか',              r:'nanji ni tsukimasu ka',             fr:'À quelle heure arrive-t-il ?' },
      { h:'のりかえはありますか',            r:'norikae wa arimasu ka',             fr:'Y a-t-il une correspondance ?' },
      { h:'まよってしまいました',            r:'mayotte shimaimashita',             fr:'Je me suis perdu(e)' },
      { h:'くうこうへいきたいです',          r:'kuukou e ikitai desu',              fr:'Je veux aller à l\'aéroport' },
      { h:'ここでとめてください',            r:'koko de tomete kudasai',            fr:'Arrêtez-vous ici, s\'il vous plaît' },
      { h:'～まであるいていけますか',        r:'~ made aruite ikemasu ka',          fr:'Peut-on aller à ... à pied ?' },
      { h:'みちをおしえてください',          r:'michi wo oshiete kudasai',          fr:'Indiquez-moi le chemin, s\'il vous plaît' },
      { h:'ちずをみせてください',            r:'chizu wo misete kudasai',           fr:'Montrez-moi la carte, s\'il vous plaît' },
      { h:'ちかてつのいりぐちはどこですか',  r:'chikatetsu no iriguchi wa doko desu ka', fr:'Où est l\'entrée du métro ?' },
    ]
  },
  {
    cat: 'À l\'hôtel',
    icon: '🏨',
    items: [
      { h:'よやくをしています',              r:'yoyaku wo shite imasu',             fr:'J\'ai une réservation' },
      { h:'いちばんやすいへやはいくらですか',r:'ichiban yasui heya wa ikura desu ka',fr:'Quel est le prix de la chambre la moins chère ?' },
      { h:'なんじにへやをあければいいですか',r:'nanji ni heya wo akereba ii desu ka',fr:'À quelle heure dois-je libérer la chambre ?' },
      { h:'かぎをなくしました',              r:'kagi wo nakushimashita',            fr:'J\'ai perdu ma clé' },
      { h:'もうふをください',                r:'moufu wo kudasai',                  fr:'Une couverture, s\'il vous plaît' },
      { h:'おふろをつかいたいです',          r:'ofuro wo tsukaitai desu',           fr:'Je voudrais prendre un bain' },
      { h:'なんじにあさごはんがありますか',  r:'nanji ni asagohan ga arimasu ka',   fr:'À quelle heure est le petit-déjeuner ?' },
      { h:'にもつをあずけてもいいですか',    r:'nimotsu wo azukete mo ii desu ka',  fr:'Puis-je laisser mes bagages ici ?' },
      { h:'へやをそうじしてください',        r:'heya wo souji shite kudasai',       fr:'Nettoyez la chambre, s\'il vous plaît' },
      { h:'もうひとばんとまりたいです',      r:'mou hitoban tomaritai desu',        fr:'Je voudrais rester une nuit de plus' },
    ]
  },
  {
    cat: 'Shopping',
    icon: '🛍️',
    items: [
      { h:'いくらですか',                    r:'ikura desu ka',                     fr:'Combien ça coûte ?' },
      { h:'たかいですね',                    r:'takai desu ne',                     fr:'C\'est cher !' },
      { h:'みせてください',                  r:'misete kudasai',                    fr:'Montrez-moi ça, s\'il vous plaît' },
      { h:'これをかいます',                  r:'kore wo kaimasu',                   fr:'Je prends ceci' },
      { h:'いりません',                      r:'irimasen',                          fr:'Je n\'en veux pas' },
      { h:'ためしにきていいですか',          r:'tameshi ni kite ii desu ka',        fr:'Puis-je essayer ?' },
      { h:'ほかのいろはありますか',          r:'hoka no iro wa arimasu ka',         fr:'Avez-vous d\'autres couleurs ?' },
      { h:'ちいさいのはありますか',          r:'chiisai no wa arimasu ka',          fr:'Avez-vous une taille plus petite ?' },
      { h:'おおきいのはありますか',          r:'ookii no wa arimasu ka',            fr:'Avez-vous une taille plus grande ?' },
      { h:'ふくろをください',                r:'fukuro wo kudasai',                 fr:'Un sac, s\'il vous plaît' },
      { h:'かーどではらえますか',            r:'kaado de haraemasu ka',             fr:'Puis-je payer par carte ?' },
      { h:'もうすこしやすくなりますか',      r:'mou sukoshi yasuku narimasu ka',    fr:'Pouvez-vous baisser le prix ?' },
      { h:'おつりがちがいます',              r:'otsuri ga chigaimasu',              fr:'La monnaie est incorrecte' },
      { h:'りょうしゅうしょをください',      r:'ryoushuusho wo kudasai',            fr:'Un reçu, s\'il vous plaît' },
    ]
  },
  {
    cat: 'Quotidien',
    icon: '🗓️',
    items: [
      { h:'なんじですか',                    r:'nanji desu ka',                     fr:'Quelle heure est-il ?' },
      { h:'～じです',                        r:'~ ji desu',                         fr:'Il est ... heures' },
      { h:'きょうはなんにちですか',          r:'kyou wa nannichi desu ka',          fr:'On est quel jour aujourd\'hui ?' },
      { h:'おてあらいはどこですか',          r:'otearai wa doko desu ka',           fr:'Où sont les toilettes ?' },
      { h:'そこはなんじにあきますか',        r:'soko wa nanji ni akimasu ka',       fr:'À quelle heure c\'est ouvert ?' },
      { h:'やすみのひはいつですか',          r:'yasumi no hi wa itsu desu ka',      fr:'Quels sont les jours de fermeture ?' },
      { h:'しゃしんをとってもいいですか',    r:'shashin wo totte mo ii desu ka',    fr:'Puis-je prendre une photo ?' },
      { h:'いっしょにしゃしんをとりませんか',r:'issho ni shashin wo torimasen ka', fr:'Une photo ensemble ?' },
      { h:'てんきはどうですか',              r:'tenki wa dou desu ka',              fr:'Quel temps fait-il ?' },
      { h:'あついですね',                    r:'atsui desu ne',                     fr:'Il fait chaud, n\'est-ce pas ?' },
      { h:'さむいですね',                    r:'samui desu ne',                     fr:'Il fait froid, n\'est-ce pas ?' },
      { h:'ここはどこですか',                r:'koko wa doko desu ka',              fr:'Où suis-je ?' },
      { h:'ちかくにコンビニはありますか',    r:'chikaku ni konbini wa arimasu ka',  fr:'Y a-t-il un konbini (épicerie) près d\'ici ?' },
    ]
  },
  {
    cat: 'Urgences',
    icon: '🚨',
    items: [
      { h:'たすけてください',                r:'tasukete kudasai',                  fr:'Au secours !' },
      { h:'きゅうきゅうしゃをよんでください',r:'kyuukyuusha wo yonde kudasai',      fr:'Appelez une ambulance' },
      { h:'けいさつをよんでください',        r:'keisatsu wo yonde kudasai',         fr:'Appelez la police' },
      { h:'びょういんはどこですか',          r:'byouin wa doko desu ka',            fr:'Où est l\'hôpital ?' },
      { h:'ぐあいがわるいです',              r:'guai ga warui desu',                fr:'Je me sens mal' },
      { h:'ここがいたいです',                r:'koko ga itai desu',                 fr:'J\'ai mal ici' },
      { h:'くすりがほしいです',              r:'kusuri ga hoshii desu',             fr:'J\'ai besoin de médicaments' },
      { h:'さいふをなくしました',            r:'saifu wo nakushimashita',           fr:'J\'ai perdu mon portefeuille' },
      { h:'すりにあいました',                r:'suri ni aimashita',                 fr:'Je me suis fait voler (pickpocket)' },
      { h:'ふらんすたいしかんはどこですか',  r:'furansu taishikan wa doko desu ka', fr:'Où est l\'ambassade de France ?' },
      { h:'まいごになりました',              r:'maigo ni narimashita',              fr:'Je me suis perdu(e)' },
    ]
  },
];

function buildPhrases() {
  const container = document.getElementById('phrases-content');
  container.innerHTML = '';
  PHRASES.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'phrase-category';
    section.innerHTML = `
      <div class="phrase-cat-header">
        <span class="phrase-cat-icon">${cat.icon}</span>
        <div class="section-label" style="margin-bottom:0">${cat.cat}</div>
      </div>
      <div class="group-line" style="margin-bottom:0.8rem"></div>`;
    const grid = document.createElement('div');
    grid.className = 'phrase-grid';
    cat.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'phrase-card';
      card.innerHTML = `
        <div class="phrase-hira">${item.h}</div>
        <div class="phrase-rom">${item.r}</div>
        <div class="phrase-fr">${item.fr}</div>`;
      grid.appendChild(card);
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
}

// ════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════

buildLearn('all');
buildFlashDeck();
buildGojuon();
buildPhrases();
