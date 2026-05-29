export const howItWorksHtml = `<!doctype html>
<html lang="uk">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Makuri — як це працює</title>
<style>
  :root{
    --bg:#ffffff;--surface:#f5f4f1;--ink:#1d1b18;--muted:#6f6c66;--line:#e7e3dc;
    --accent:#5b4fe0;--accent-bg:#efeefc;--term-bg:#e6eefc;--term-ink:#1c3a8a;
  }
  @media (prefers-color-scheme: dark){
    :root{--bg:#1f1e1c;--surface:#2a2926;--ink:#f0ede7;--muted:#a8a49c;--line:#3a3833;
      --accent:#a99cff;--accent-bg:#2d2a45;--term-bg:#22304f;--term-ink:#bcd0ff;}
  }
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:transparent;font-size:14px;line-height:1.6}
  .wrap{max-width:680px;margin:0 auto;padding:14px}
  .card{background:var(--bg);border:1px solid var(--line);border-radius:14px;padding:16px 18px}
  .head{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:14px}
  .brand{display:flex;align-items:center;gap:10px}
  .logo{width:34px;height:34px;border-radius:50%;background:var(--accent-bg);color:var(--accent);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px}
  .name{font-size:15px;font-weight:600;letter-spacing:.04em}
  .sub{font-size:12px;color:var(--muted)}
  .pills{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
  .pill{font-size:11px;padding:3px 9px;border-radius:8px;border:1px solid var(--line);color:var(--muted);background:var(--bg)}
  .pill.on{background:var(--accent-bg);color:var(--accent);border-color:var(--accent)}
  .seg{display:inline-flex;border:1px solid var(--line);border-radius:8px;overflow:hidden}
  .seg button{border:0;background:var(--bg);color:var(--muted);font-size:11px;padding:4px 10px;cursor:pointer}
  .seg button.on{background:var(--accent-bg);color:var(--accent)}
  .step{font-size:12px;color:var(--muted);margin:0 0 6px}
  .tabs{display:flex;gap:8px;margin-bottom:8px}
  .tab{flex:1;text-align:center;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--muted);font-size:13px;padding:8px;cursor:pointer}
  .tab.on{background:var(--accent-bg);color:var(--accent);border-color:var(--accent);font-weight:600}
  .drop{border:1px dashed var(--line);border-radius:8px;padding:12px;text-align:center;color:var(--muted);font-size:13px;background:var(--surface)}
  .note{font-size:11px;color:var(--muted);margin:6px 0 0}
  .chips{display:grid;grid-template-columns:repeat(auto-fit,minmax(116px,1fr));gap:7px}
  .chip{display:flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink);font-size:12px;padding:8px 9px;cursor:pointer;text-align:left}
  .chip.on{background:var(--accent-bg);color:var(--accent);border-color:var(--accent);font-weight:600}
  .ans{background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:12px 14px;min-height:60px}
  .term{background:var(--term-bg);color:var(--term-ink);border-radius:4px;padding:0 4px}
  .feats{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px;margin-top:16px}
  .feat{border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:12px;color:var(--muted)}
  .foot{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid var(--line)}
  .foot a{color:var(--accent);text-decoration:none;font-size:13px}
  h1{all:unset}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
</style>
</head>
<body>
<div class="wrap">
  <h1 class="sr">Makuri: завантаж підручник PDF або фото, обери дію, отримай відповідь рідною мовою з підсвіченими румунськими термінами.</h1>
  <div class="card">

    <div class="head">
      <div class="brand">
        <div class="logo">M</div>
        <div>
          <div class="name">MAKURI</div>
          <div class="sub">AI-репетитор для дітей-іммігрантів 10–16</div>
        </div>
      </div>
      <div class="pills">
        <span class="pill on">RO → UA</span>
        <span class="pill">14 мов</span>
        <span class="seg" role="group" aria-label="Режим">
          <button id="m-fast" class="on" type="button">Швидкий</button>
          <button id="m-deep" type="button">Глибокий</button>
        </span>
      </div>
    </div>

    <p class="step">1 · Завантаж матеріал — два рівноправні способи</p>
    <div class="tabs">
      <button class="tab on" id="in-pdf" type="button">Документ (PDF)</button>
      <button class="tab" id="in-photo" type="button">Фото</button>
    </div>
    <div class="drop" id="drop">Перетягни PDF підручника або обери діапазон сторінок</div>
    <p class="note">PDF рекомендуємо — за замовчуванням на десктопі. Фото — за замовчуванням на телефоні. Обидва входи незалежні.</p>

    <p class="step" style="margin-top:14px">2 · Обери дію</p>
    <div class="chips" id="chips">
      <button class="chip on" data-act="explain" type="button">Поясни</button>
      <button class="chip" data-act="translate" type="button">Переклади</button>
      <button class="chip" data-act="solve" type="button">Розв'яжи</button>
      <button class="chip" data-act="test" type="button">Перевір</button>
      <button class="chip" data-act="analyze" type="button">Розбір</button>
      <button class="chip" data-act="socratic" type="button">Сократ</button>
      <button class="chip" data-act="ask" type="button">Запитати</button>
      <button class="chip" data-act="exercises" type="button">Вправи</button>
      <button class="chip" data-act="explore" type="button">Цікаве</button>
      <button class="chip" data-act="doctranslate" type="button">Переклад документа</button>
    </div>

    <p class="step" style="margin-top:14px">3 · Результат рідною мовою — <span id="lbl" style="color:var(--accent)">Поясни</span></p>
    <div class="ans" id="ans">Простими словами: <span class="term">fotosinteză</span> — рослина з <span class="term">lumină</span> (світла) і <span class="term">apă</span> (води) робить собі їжу. Усе відбувається в <span class="term">cloroplaste</span>.</div>
    <p class="note">Румунські терміни підсвічені й автоматично копляться в особистий Глосарій учня.</p>

    <div class="feats">
      <div class="feat">Глосарій термінів</div>
      <div class="feat">Чат-уточнення після відповіді</div>
      <div class="feat">Запам'ятовує сильні та слабкі теми</div>
      <div class="feat">Тести з нагородами</div>
      <div class="feat">Швидкий / Глибокий режим</div>
      <div class="feat">До 3 мовних пар на учня</div>
    </div>

    <p class="note" style="margin-top:10px">Прогрес дитини — в окремому кабінеті для батьків (учень його не бачить).</p>

    <div class="foot">
      <span class="sub">Безкоштовно без реєстрації: Словарик + тест рівня румунської (ILR / CEFR)</span>
      <a href="https://makuri.eu" target="_blank" rel="noopener noreferrer">Відкрити Makuri ↗</a>
    </div>

  </div>
</div>
<script>
(function(){
  var data={
    explain:{l:"Поясни",h:'Простими словами: <span class="term">fotosinteză</span> — рослина з <span class="term">lumină</span> (світла) і <span class="term">apă</span> (води) робить собі їжу. Усе відбувається в <span class="term">cloroplaste</span>.'},
    translate:{l:"Переклади",h:'<span class="term">fotosinteză</span> = фотосинтез · <span class="term">frunză</span> = листок · <span class="term">lumină</span> = світло · <span class="term">oxigen</span> = кисень'},
    solve:{l:"Розв'яжи",h:'Завдання з підручника: «Ce gaz produce planta?» → відповідь <span class="term">oxigen</span> (кисень), що виділяється під час <span class="term">fotosinteză</span>.'},
    test:{l:"Перевір",h:'1/5 · Де відбувається <span class="term">fotosinteza</span>?&nbsp; ▢ în rădăcină&nbsp; ▢ în <span class="term">cloroplaste</span>&nbsp; ▢ în sol. За 100% — картинка-нагорода.'},
    analyze:{l:"Розбір",h:'Розбір параграфа: умови (<span class="term">lumină</span>, <span class="term">apă</span>) → процес (<span class="term">fotosinteză</span>) → результат (<span class="term">oxigen</span>) і зв\\'язок із диханням.'},
    socratic:{l:"Сократ",h:'А що, на твою думку, станеться з рослиною без <span class="term">lumină</span>? Подумай — я веду питаннями, а ти відповідаєш.'},
    ask:{l:"Запитати",h:'Ти: «А вночі рослина теж дихає?» — Так. Без <span class="term">lumină</span> <span class="term">fotosinteza</span> спиняється, але дихання триває.'},
    exercises:{l:"Вправи",h:'Інтерактивна вправа: збери правильний ланцюжок — <span class="term">lumină</span> → <span class="term">apă</span> → <span class="term">fotosinteză</span> → <span class="term">oxigen</span>.'},
    explore:{l:"Цікаве",h:'А ти знав? Одне доросле дерево за день дає стільки <span class="term">oxigen</span>, що вистачить приблизно двом людям.'},
    doctranslate:{l:"Переклад документа",h:'Не навчальна функція — допомога батькам-іммігрантам. Сфоткай лист із пошти чи оголошення → чистий переклад + коротке пояснення, що це і що робити далі.'}
  };
  var ans=document.getElementById("ans"),lbl=document.getElementById("lbl");
  document.querySelectorAll(".chip").forEach(function(b){b.addEventListener("click",function(){
    document.querySelectorAll(".chip").forEach(function(x){x.classList.toggle("on",x===b);});
    var d=data[b.getAttribute("data-act")];lbl.textContent=d.l;ans.innerHTML=d.h;
  });});
  function seg(a,b,onText,offText,dropText){a.addEventListener("click",function(){a.classList.add("on");b.classList.remove("on");if(dropText)document.getElementById("drop").textContent=dropText;});}
  var pdf=document.getElementById("in-pdf"),photo=document.getElementById("in-photo"),drop=document.getElementById("drop");
  pdf.addEventListener("click",function(){pdf.classList.add("on");photo.classList.remove("on");drop.textContent="Перетягни PDF підручника або обери діапазон сторінок";});
  photo.addEventListener("click",function(){photo.classList.add("on");pdf.classList.remove("on");drop.textContent="Сфоткай сторінку підручника (до 10 фото, по одній сторінці на знімок)";});
  var f=document.getElementById("m-fast"),dp=document.getElementById("m-deep");
  f.addEventListener("click",function(){f.classList.add("on");dp.classList.remove("on");});
  dp.addEventListener("click",function(){dp.classList.add("on");f.classList.remove("on");});
})();
</script>
</body>
</html>`;
