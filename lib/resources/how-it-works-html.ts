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
  .term{background:#e7eefc;color:#1c3a8a;border-radius:4px;padding:0 4px}
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
      <span class="mk-pill">RO → UA</span>
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
    <p class="note">Румунські терміни підсвічені й автоматично копляться в особистий Глосарій учня.</p>

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
  var data={
    explain:{l:"Поясни",h:'Простими словами: <span class="term">fotosinteză</span> — рослина з <span class="term">lumină</span> (світла) і <span class="term">apă</span> (води) робить собі їжу. Усе відбувається в <span class="term">cloroplaste</span>.'},
    translate:{l:"Переклади",h:'<span class="term">fotosinteză</span> = фотосинтез · <span class="term">frunză</span> = листок · <span class="term">lumină</span> = світло · <span class="term">oxigen</span> = кисень'},
    solve:{l:"Розв'яжи",h:'Завдання з підручника: «Ce gaz produce planta?» → відповідь <span class="term">oxigen</span> (кисень), що виділяється під час <span class="term">fotosinteză</span>.'},
    test:{l:"Перевір",h:'1/5 · Де відбувається <span class="term">fotosinteza</span>?&nbsp; ▢ în rădăcină&nbsp; ▢ în <span class="term">cloroplaste</span>&nbsp; ▢ în sol. За 100% — картинка-нагорода.'},
    analyze:{l:"Розбір",h:'Розбір параграфа: умови (<span class="term">lumină</span>, <span class="term">apă</span>) → процес (<span class="term">fotosinteză</span>) → результат (<span class="term">oxigen</span>), а також дихання рослини.'},
    socratic:{l:"Сократ",h:'А що, на твою думку, станеться з рослиною без <span class="term">lumină</span>? Подумай — я веду питаннями, а ти відповідаєш.'},
    ask:{l:"Мовні вправи",h:'Мовна вправа зі словами уроку: встав форму — «planta produce <span class="term">oxigen</span>». Множина: <span class="term">frunză</span> → <span class="term">frunze</span>. Артикль: <span class="term">frunza</span>.'},
    exercises:{l:"Вправи",h:'Інтерактивна вправа: збери правильний ланцюжок — <span class="term">lumină</span> → <span class="term">apă</span> → <span class="term">fotosinteză</span> → <span class="term">oxigen</span>.'},
    explore:{l:"Цікаве",h:'А ти знав? Одне доросле дерево за день дає стільки <span class="term">oxigen</span>, що вистачить приблизно двом людям.'},
    doctranslate:{l:"Переклад документа",h:'Не навчальна функція — допомога батькам-іммігрантам. Переклад будь-яких документів: листи, інструкції, оголошення, довідки → чистий переклад + коротке пояснення, що це і що робити далі.'}
  };
  var ans=document.getElementById("ans"),lbl=document.getElementById("lbl");
  document.querySelectorAll(".act").forEach(function(b){b.addEventListener("click",function(){
    document.querySelectorAll(".act").forEach(function(x){x.classList.toggle("on",x===b);});
    var d=data[b.getAttribute("data-act")];lbl.textContent=d.l;ans.innerHTML=d.h;
  });});
  var tphoto=document.getElementById("tphoto"),tdoc=document.getElementById("tdoc"),drop=document.getElementById("drop");
  tdoc.addEventListener("click",function(){tdoc.classList.add("on");tphoto.classList.remove("on");drop.textContent="Завантаж pdf підручника та обери сторінки для роботи. Не більше 5-ти сторінок";});
  tphoto.addEventListener("click",function(){tphoto.classList.add("on");tdoc.classList.remove("on");drop.textContent="Зроби якісні фото підручника та завантаж їх сюди. Бажано не більше 5-ти фотографій.";});
  var mf=document.getElementById("mf"),md=document.getElementById("md");
  mf.addEventListener("click",function(){mf.classList.add("on");md.classList.remove("on");});
  md.addEventListener("click",function(){md.classList.add("on");mf.classList.remove("on");});
})();
</script>
</body>
</html>`;
