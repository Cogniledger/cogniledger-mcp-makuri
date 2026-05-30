export const howItWorksHtml = `<!doctype html>
<html lang="uk">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Makuri — як це працює</title>
<style>
  *{box-sizing:border-box}
  html,body{margin:0}
  body{padding:12px;background:transparent;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
  .mk{max-width:680px;margin:0 auto;border-radius:16px;overflow:hidden;border:1px solid #e6e6ee;box-shadow:0 10px 34px rgba(90,60,190,.14)}
  .mk-top{background:linear-gradient(105deg,#4f63e6 0%,#7d44ec 52%,#b23fdc 100%);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
  .mk-brand{display:flex;align-items:center;gap:11px}
  .mk-logo{width:40px;height:40px;border-radius:11px;background:#221d44;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .mk-name{color:#fff;font-size:15px;font-weight:700;letter-spacing:.05em}
  .mk-sub{color:rgba(255,255,255,.82);font-size:11px}
  .mk-right{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
  .mk-pill{font-size:11px;padding:4px 10px;border-radius:8px;color:#fff;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.28)}
  .mk-seg{display:inline-flex;background:rgba(255,255,255,.16);border-radius:9px;padding:2px}
  .mk-seg button{border:0;background:transparent;color:#fff;font-size:11px;padding:4px 10px;border-radius:7px;cursor:pointer}
  .mk-seg button.on{background:#fff;color:#7d44ec;font-weight:700}
  .mk-body{background:#fff;padding:16px 18px 18px}
  .tabs{display:flex;gap:20px;border-bottom:1px solid #eee;margin-bottom:12px}
  .tab{display:flex;align-items:center;gap:6px;padding:4px 2px 10px;font-size:13px;color:#8a8a92;cursor:pointer;border:0;background:none;border-bottom:2px solid transparent}
  .tab.on{color:#2f6df6;border-bottom-color:#2f6df6;font-weight:600}
  .badge{font-size:9px;background:#e7eefc;color:#2f6df6;border-radius:4px;padding:1px 5px;letter-spacing:.05em;font-weight:700}
  .drop{border:1px dashed #d8d8e2;border-radius:10px;padding:12px;text-align:center;color:#8a8a92;font-size:13px;background:#fafafb}
  .note{font-size:11px;color:#9a9aa2;margin:6px 0 0}
  .acts{display:grid;grid-template-columns:repeat(auto-fit,minmax(124px,1fr));gap:8px;margin-top:12px}
  .act{display:flex;align-items:center;gap:8px;border:0;border-radius:12px;color:#fff;font-size:12.5px;font-weight:600;padding:10px 11px;cursor:pointer;opacity:.92;transition:transform .12s,opacity .12s,box-shadow .12s;text-align:left}
  .act:hover{opacity:1}
  .act.on{opacity:1;transform:translateY(-1px);box-shadow:0 6px 16px rgba(0,0,0,.2),0 0 0 3px rgba(255,255,255,.75)}
  .ic{display:inline-flex;width:22px;height:22px;border-radius:6px;background:rgba(255,255,255,.22);align-items:center;justify-content:center;flex-shrink:0}
  .ic svg{width:15px;height:15px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
  .ic svg.f{fill:#fff;stroke:none}
  .rlabel{font-size:12px;color:#9a9aa2;margin:16px 0 6px;display:flex;align-items:center;gap:5px}
  .ans{background:#f6f7fb;border:1px solid #ececf2;border-radius:10px;padding:12px 14px;font-size:14px;line-height:1.65;color:#2a2a30;min-height:58px}
  .term{background:#e7eefc;color:#1c3a8a;border-radius:4px;padding:0 4px;cursor:pointer;border-bottom:1px dotted #6b86d6}
  .term:hover{background:#d8e4fb}
  .langpill{cursor:pointer;font-family:inherit;line-height:1.2}
  .langpill:hover{background:rgba(255,255,255,.3)}
  .tip{position:fixed;z-index:50;background:#221d44;color:#fff;font-size:12px;line-height:1.35;padding:6px 9px;border-radius:7px;box-shadow:0 6px 18px rgba(0,0,0,.28);max-width:220px;pointer-events:none;opacity:0;transform:translateY(2px);transition:opacity .1s,transform .1s}
  .tip.on{opacity:1;transform:none}
  .tip b{display:block;font-weight:700;font-size:11px;color:#c7b8ff;margin-bottom:1px}
  .feats{display:grid;grid-template-columns:repeat(auto-fit,minmax(152px,1fr));gap:8px;margin-top:16px}
  .feat{border:1px solid #ececf2;border-radius:9px;padding:8px 10px;font-size:12px;color:#7a7a82;background:#fcfcfd}
  .foot{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid #eee}
  .fmeta{font-size:12px;color:#7a7a82}
  .flink{color:#7d44ec;font-size:13px;text-decoration:none;font-weight:600}
</style>
</head>
<body>
<h1 class="sr">Makuri: завантаж PDF підручника або фото, обери дію, отримай відповідь рідною мовою з підсвіченими румунськими термінами.</h1>
<div class="mk">
  <div class="mk-top">
    <div class="mk-brand">
      <div class="mk-logo">
        <svg viewBox="0 0 48 48" width="27" height="27" aria-hidden="true">
          <path d="M14 16 C9 16 7 24 9 31 C10 34.5 14.5 34 16.5 31 Z" fill="#fff"/>
          <path d="M34 16 C39 16 41 24 39 31 C38 34.5 33.5 34 31.5 31 Z" fill="#fff"/>
          <ellipse cx="24" cy="26" rx="12" ry="11" fill="#fff"/>
          <ellipse cx="24" cy="18.5" rx="8.5" ry="6.5" fill="#fff"/>
          <circle cx="19.4" cy="24" r="1.8" fill="#221d44"/>
          <circle cx="28.6" cy="24" r="1.8" fill="#221d44"/>
          <ellipse cx="24" cy="29.2" rx="2.5" ry="1.9" fill="#221d44"/>
          <path d="M24 31 v2.3 M20.4 33.7 c2.1 1.6 5.1 1.6 7.2 0" stroke="#221d44" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        </svg>
      </div>
      <div>
        <div class="mk-name">MAKURI</div>
        <div class="mk-sub">AI-репетитор для дітей-іммігрантів 10–16</div>
      </div>
    </div>
    <div class="mk-right">
      <button class="mk-pill langpill" id="langpill" type="button" aria-label="Змінити мову відповіді"><span id="langtxt">RO → UA</span> ⇄</button>
      <span class="mk-pill">14 мов</span>
      <span class="mk-seg"><button id="mf" class="on" type="button">⚡ Швидкий</button><button id="md" type="button">Глибокий</button></span>
    </div>
  </div>

  <div class="mk-body">
    <div class="tabs">
      <button class="tab" id="tphoto" type="button">📷 Фото</button>
      <button class="tab on" id="tdoc" type="button">📄 Документ <span class="badge">PDF</span></button>
    </div>
    <div class="drop" id="drop">Завантаж pdf підручника та обери сторінки для роботи. Не більше 5-ти сторінок</div>

    <div class="acts">
      <button class="act on" data-act="explain" style="background:#2f6df6" type="button"><span class="ic"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg></span>Поясни</button>
      <button class="act" data-act="translate" style="background:#14b8a6" type="button"><span class="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"/></svg></span>Переклади</button>
      <button class="act" data-act="solve" style="background:#8b5cf6" type="button"><span class="ic"><svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="M14 6l4 4"/></svg></span>Розв'яжи</button>
      <button class="act" data-act="test" style="background:#ef4444" type="button"><span class="ic"><svg viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="M9 13l2 2 4-4"/></svg></span>Перевір</button>
      <button class="act" data-act="analyze" style="background:#f59e0b" type="button"><span class="ic"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/></svg></span>Розбір</button>
      <button class="act" data-act="socratic" style="background:#06b6d4" type="button"><span class="ic"><svg viewBox="0 0 24 24"><path d="M3 8l9-5 9 5M5 8v10M19 8v10M9 8v10M15 8v10M3 18h18"/></svg></span>Сократ</button>
      <button class="act" data-act="ask" style="background:#ec4899" type="button"><span class="ic"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/></svg></span>Мовні вправи</button>
      <button class="act" data-act="exercises" style="background:#f97316" type="button"><span class="ic"><svg class="f" viewBox="0 0 24 24"><circle cx="8" cy="8" r="2"/><circle cx="16" cy="8" r="2"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/></svg></span>Вправи</button>
      <button class="act" data-act="explore" style="background:#d63ec9" type="button"><span class="ic"><svg viewBox="0 0 24 24"><path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z"/></svg></span>Цікаве</button>
      <button class="act" data-act="doctranslate" style="background:#10b981" type="button"><span class="ic"><svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 17h6"/></svg></span>Переклад документа</button>
    </div>

    <div class="rlabel">📋 РЕЗУЛЬТАТ — <span id="lbl" style="color:#2f6df6;font-weight:600">Поясни</span></div>
    <div class="ans" id="ans">Простими словами: <span class="term">fotosinteză</span> — рослина з <span class="term">lumină</span> (світла) і <span class="term">apă</span> (води) робить собі їжу. Усе відбувається в <span class="term">cloroplaste</span>.</div>
    <p class="note" id="glossnote">Румунські терміни підсвічені — торкнись будь-якого, щоб побачити переклад. Усі терміни автоматично копляться в особистий Глосарій учня.</p>

    <div class="feats">
      <div class="feat">📚 Глосарій термінів</div>
      <div class="feat">📓 Блокнот — зберегти відповідь</div>
      <div class="feat">🏆 Тести з нагородами</div>
      <div class="feat">🧠 Запам'ятовує учня</div>
      <div class="feat">⚡ Швидкий / Глибокий режим</div>
      <div class="feat">🌐 До 3 мовних пар на учня</div>
      <div class="feat">💬 Зворотний зв'язок прямо в кабінеті — питання чи побажання (текст + скріншот)</div>
    </div>
    <p class="note">Прогрес дитини — в окремому кабінеті для батьків (учень його не бачить).</p>

    <div class="foot">
      <span class="fmeta">Безкоштовно без реєстрації: Словарик + тест рівня румунської</span>
      <a class="flink" href="https://makuri.eu" target="_blank" rel="noopener noreferrer">Відкрити Makuri →</a>
    </div>
  </div>
</div>
<script>
(function(){
  // Result-panel labels follow the UI language (the buttons stay in UA); the
  // ANSWER content + glossary switch with the student's native language (UA/RU).
  var LABELS={explain:"Поясни",translate:"Переклади",solve:"Розв'яжи",test:"Перевір",analyze:"Розбір",socratic:"Сократ",ask:"Мовні вправи",exercises:"Вправи",explore:"Цікаве",doctranslate:"Переклад документа"};

  var I18N={
    ua:{
      pair:"RO → UA",
      dropDoc:"Завантаж pdf підручника та обери сторінки для роботи. Не більше 5-ти сторінок",
      dropPhoto:"Зроби якісні фото підручника та завантаж їх сюди. Бажано не більше 5-ти фотографій.",
      note:"Румунські терміни підсвічені — торкнись будь-якого, щоб побачити переклад. Усі терміни автоматично копляться в особистий Глосарій учня.",
      data:{
        explain:'Простими словами: <span class="term">fotosinteză</span> — рослина з <span class="term">lumină</span> (світла) і <span class="term">apă</span> (води) робить собі їжу. Усе відбувається в <span class="term">cloroplaste</span>.',
        translate:'<span class="term">fotosinteză</span> = фотосинтез · <span class="term">frunză</span> = листок · <span class="term">lumină</span> = світло · <span class="term">oxigen</span> = кисень',
        solve:'Завдання з підручника: «Ce gaz produce planta?» → відповідь <span class="term">oxigen</span> (кисень), що виділяється під час <span class="term">fotosinteză</span>.',
        test:'1/5 · Де відбувається <span class="term">fotosinteza</span>?&nbsp; ▢ în rădăcină&nbsp; ▢ în <span class="term">cloroplaste</span>&nbsp; ▢ în sol. За 100% — картинка-нагорода.',
        analyze:'Розбір параграфа: умови (<span class="term">lumină</span>, <span class="term">apă</span>) → процес (<span class="term">fotosinteză</span>) → результат (<span class="term">oxigen</span>), а також дихання рослини.',
        socratic:'А що, на твою думку, станеться з рослиною без <span class="term">lumină</span>? Подумай — я веду питаннями, а ти відповідаєш.',
        ask:'Мовна вправа зі словами уроку: встав форму — «planta produce <span class="term">oxigen</span>». Множина: <span class="term">frunză</span> → <span class="term">frunze</span>. Артикль: <span class="term">frunza</span>.',
        exercises:'Інтерактивна вправа: збери правильний ланцюжок — <span class="term">lumină</span> → <span class="term">apă</span> → <span class="term">fotosinteză</span> → <span class="term">oxigen</span>.',
        explore:'А ти знав? Одне доросле дерево за день дає стільки <span class="term">oxigen</span>, що вистачить приблизно двом людям.',
        doctranslate:'Не навчальна функція — допомога батькам-іммігрантам. Переклад будь-яких документів: листи, інструкції, оголошення, довідки → чистий переклад + коротке пояснення, що це і що робити далі.'
      },
      gloss:{"fotosinteză":"фотосинтез","fotosinteza":"фотосинтез","lumină":"світло","apă":"вода","cloroplaste":"хлоропласти","frunză":"листок","frunze":"листки","frunza":"листок (з артиклем)","oxigen":"кисень"}
    },
    ru:{
      pair:"RO → RU",
      dropDoc:"Загрузи pdf учебника и выбери страницы для работы. Не более 5-ти страниц",
      dropPhoto:"Сделай качественные фото учебника и загрузи их сюда. Желательно не более 5-ти фотографий.",
      note:"Румынские термины подсвечены — нажми на любой, чтобы увидеть перевод. Все термины автоматически собираются в личный Глоссарий ученика.",
      data:{
        explain:'Простыми словами: <span class="term">fotosinteză</span> — растение из <span class="term">lumină</span> (света) и <span class="term">apă</span> (воды) делает себе еду. Всё происходит в <span class="term">cloroplaste</span>.',
        translate:'<span class="term">fotosinteză</span> = фотосинтез · <span class="term">frunză</span> = лист · <span class="term">lumină</span> = свет · <span class="term">oxigen</span> = кислород',
        solve:'Задача из учебника: «Ce gaz produce planta?» → ответ <span class="term">oxigen</span> (кислород), который выделяется во время <span class="term">fotosinteză</span>.',
        test:'1/5 · Где происходит <span class="term">fotosinteza</span>?&nbsp; ▢ în rădăcină&nbsp; ▢ în <span class="term">cloroplaste</span>&nbsp; ▢ în sol. За 100% — картинка-награда.',
        analyze:'Разбор параграфа: условия (<span class="term">lumină</span>, <span class="term">apă</span>) → процесс (<span class="term">fotosinteză</span>) → результат (<span class="term">oxigen</span>), а также дыхание растения.',
        socratic:'А что, по-твоему, случится с растением без <span class="term">lumină</span>? Подумай — я веду вопросами, а ты отвечаешь.',
        ask:'Языковое упражнение со словами урока: вставь форму — «planta produce <span class="term">oxigen</span>». Множественное: <span class="term">frunză</span> → <span class="term">frunze</span>. Артикль: <span class="term">frunza</span>.',
        exercises:'Интерактивное упражнение: собери правильную цепочку — <span class="term">lumină</span> → <span class="term">apă</span> → <span class="term">fotosinteză</span> → <span class="term">oxigen</span>.',
        explore:'А ты знал? Одно взрослое дерево за день даёт столько <span class="term">oxigen</span>, что хватит примерно двум людям.',
        doctranslate:'Не учебная функция — помощь родителям-иммигрантам. Перевод любых документов: письма, инструкции, объявления, справки → чистый перевод + краткое пояснение, что это и что делать дальше.'
      },
      gloss:{"fotosinteză":"фотосинтез","fotosinteza":"фотосинтез","lumină":"свет","apă":"вода","cloroplaste":"хлоропласты","frunză":"лист","frunze":"листья","frunza":"лист (с артиклем)","oxigen":"кислород"}
    }
  };

  var lang="ua", act="explain", tab="doc";
  var ans=document.getElementById("ans"),
      lbl=document.getElementById("lbl"),
      drop=document.getElementById("drop"),
      glossnote=document.getElementById("glossnote"),
      langtxt=document.getElementById("langtxt"),
      langpill=document.getElementById("langpill");

  function renderAnswer(){lbl.textContent=LABELS[act];ans.innerHTML=I18N[lang].data[act];}
  function renderChrome(){var L=I18N[lang];langtxt.textContent=L.pair;glossnote.textContent=L.note;drop.textContent=(tab==="doc"?L.dropDoc:L.dropPhoto);}

  // Action buttons -> swap RESULT panel (canned sample per action)
  document.querySelectorAll(".act").forEach(function(b){b.addEventListener("click",function(){
    document.querySelectorAll(".act").forEach(function(x){x.classList.toggle("on",x===b);});
    act=b.getAttribute("data-act");renderAnswer();hideTip();
  });});

  // Input tabs
  var tphoto=document.getElementById("tphoto"),tdoc=document.getElementById("tdoc");
  tdoc.addEventListener("click",function(){tab="doc";tdoc.classList.add("on");tphoto.classList.remove("on");renderChrome();});
  tphoto.addEventListener("click",function(){tab="photo";tphoto.classList.add("on");tdoc.classList.remove("on");renderChrome();});

  // Fast / Deep (cosmetic indicator)
  var mf=document.getElementById("mf"),md=document.getElementById("md");
  mf.addEventListener("click",function(){mf.classList.add("on");md.classList.remove("on");});
  md.addEventListener("click",function(){md.classList.add("on");mf.classList.remove("on");});

  // Native-language switch (UA <-> RU) — re-renders answer + glossary
  langpill.addEventListener("click",function(){lang=(lang==="ua"?"ru":"ua");renderChrome();renderAnswer();hideTip();});

  // Glossary tooltip: tap a highlighted RO term -> translation in current language
  var tip=document.createElement("div");tip.className="tip";document.body.appendChild(tip);
  function hideTip(){tip.classList.remove("on");}
  ans.addEventListener("click",function(e){
    var t=e.target.closest&&e.target.closest(".term");if(!t){hideTip();return;}
    var key=t.textContent.trim().toLowerCase().replace(/[.,!?;:]+$/,"");
    var g=I18N[lang].gloss[key];if(!g){hideTip();return;}
    tip.innerHTML='<b>'+t.textContent.trim()+'</b>'+g;
    var r=t.getBoundingClientRect();
    tip.style.left=Math.max(8,r.left)+"px";
    tip.style.top=(r.bottom+6)+"px";
    tip.classList.add("on");
    e.stopPropagation();
  });
  document.addEventListener("click",function(e){if(!(e.target.closest&&e.target.closest(".term")))hideTip();});

  renderChrome();renderAnswer();
})();
</script>
</body>
</html>`;
