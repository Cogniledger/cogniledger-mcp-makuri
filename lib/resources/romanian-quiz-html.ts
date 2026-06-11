// Self-contained HTML for the Romanian mini-quiz MCP Apps widget.
// Zero network calls, no external assets, no window.openai/ui bridge.
// Template-literal safety: no backticks and no ${ sequences anywhere inside.

export const romanianQuizHtml = `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Makuri — мини-тест румынского</title>
<style>
  *{box-sizing:border-box}
  html,body{margin:0}
  body{padding:12px;background:transparent;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
  .mk{max-width:560px;margin:0 auto;border-radius:16px;overflow:hidden;border:1px solid #e6e6ee;box-shadow:0 10px 34px rgba(90,60,190,.14)}
  .mk-top{background:linear-gradient(105deg,#4f63e6 0%,#7d44ec 52%,#b23fdc 100%);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
  .mk-brand{display:flex;align-items:center;gap:11px}
  .mk-logo{width:40px;height:40px;border-radius:11px;background:#221d44;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .mk-name{color:#fff;font-size:15px;font-weight:700;letter-spacing:.05em}
  .mk-sub{color:rgba(255,255,255,.82);font-size:11px}
  .mk-seg{display:inline-flex;background:rgba(255,255,255,.16);border-radius:9px;padding:2px}
  .mk-seg button{border:0;background:transparent;color:#fff;font-size:11px;padding:4px 10px;border-radius:7px;cursor:pointer}
  .mk-seg button.on{background:#fff;color:#7d44ec;font-weight:700}
  .mk-body{background:#fff;padding:16px 18px 18px}
  .bar{height:6px;background:#eee;border-radius:3px;overflow:hidden;margin-bottom:14px}
  .bar i{display:block;height:100%;background:linear-gradient(90deg,#4f63e6,#b23fdc);width:0;transition:width .25s}
  .qn{font-size:12px;color:#9a9aa2;margin-bottom:6px}
  .qt{font-size:15.5px;font-weight:600;color:#2a2a30;margin-bottom:12px;line-height:1.45}
  .opts{display:grid;gap:8px}
  .opt{text-align:left;border:1px solid #e2e2ea;background:#fafafb;border-radius:10px;padding:10px 12px;font-size:14px;color:#2a2a30;cursor:pointer;font-family:inherit;transition:border-color .12s,background .12s}
  .opt:hover{border-color:#7d44ec;background:#f6f2fd}
  .opt.ok{border-color:#1f9d55;background:#e9f8ef;font-weight:600}
  .opt.bad{border-color:#d64545;background:#fdeeee}
  .opt:disabled{cursor:default}
  .next{margin-top:14px;border:0;border-radius:10px;background:#7d44ec;color:#fff;font-size:13.5px;font-weight:700;padding:10px 18px;cursor:pointer;display:none;font-family:inherit}
  .next.on{display:inline-block}
  .res-lvl{font-size:25px;font-weight:800;color:#7d44ec;margin:4px 0 2px}
  .res-sc{font-size:13px;color:#7a7a82;margin-bottom:10px}
  .res-note{font-size:12.5px;color:#7a7a82;background:#f6f7fb;border:1px solid #ececf2;border-radius:10px;padding:10px 12px;line-height:1.55;margin-bottom:14px}
  .cta{display:inline-block;border-radius:10px;background:linear-gradient(105deg,#4f63e6,#b23fdc);color:#fff;text-decoration:none;font-size:13.5px;font-weight:700;padding:11px 16px}
  .url{display:flex;align-items:center;gap:8px;margin-top:10px;flex-wrap:wrap}
  .url code{font-size:12px;background:#f6f7fb;border:1px solid #ececf2;border-radius:7px;padding:5px 8px;color:#444}
  .copy{border:1px solid #d8d8e2;background:#fff;border-radius:7px;font-size:11.5px;padding:5px 9px;cursor:pointer;color:#555;font-family:inherit}
  .again{margin-top:14px;border:0;background:none;color:#7d44ec;font-size:12.5px;cursor:pointer;text-decoration:underline;display:block;font-family:inherit;padding:0}
  .hide{display:none}
</style>
</head>
<body>
<h1 class="sr">Мини-тест румынского языка от Makuri: 6 вопросов, примерная оценка уровня, ссылка на полный бесплатный тест.</h1>
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
      <div><div class="mk-name">MAKURI</div><div class="mk-sub" id="sub"></div></div>
    </div>
    <div class="mk-seg"><button id="btn-ru" class="on" type="button">RU</button><button id="btn-uk" type="button">UK</button></div>
  </div>
  <div class="mk-body">
    <div class="bar"><i id="bar"></i></div>
    <div id="quiz">
      <div class="qn" id="qn"></div>
      <div class="qt" id="qt"></div>
      <div class="opts" id="opts"></div>
      <button class="next" id="next" type="button"></button>
    </div>
    <div id="result" class="hide">
      <div class="res-lvl" id="lvl"></div>
      <div class="res-sc" id="sc"></div>
      <div class="res-note" id="note"></div>
      <a class="cta" id="cta" href="https://makuri.eu/words/level-test" target="_blank" rel="noopener noreferrer"></a>
      <div class="url"><code>makuri.eu/words/level-test</code><button class="copy" id="copy" type="button"></button></div>
      <button class="again" id="again" type="button"></button>
    </div>
  </div>
</div>
<script>
(function(){
  "use strict";
  var I18N={
    ru:{
      sub:"Мини-тест румынского · 6 вопросов",
      q:"Вопрос ", of:" из 6", next:"Дальше", show:"Результат",
      lvl:["Начальный уровень (примерно A1)","Базовый уровень (примерно A2)","Средний уровень (примерно B1)"],
      score:"Правильных ответов: ",
      note:"Это примерная оценка по 6 вопросам. Точный уровень (A1–C1+) покажет полный бесплатный тест из 20 вопросов по методологии ILR — без регистрации.",
      cta:"Пройти полный тест", copy:"Копировать ссылку", copied:"Скопировано!", again:"Пройти ещё раз"
    },
    uk:{
      sub:"Міні-тест румунської · 6 питань",
      q:"Питання ", of:" із 6", next:"Далі", show:"Результат",
      lvl:["Початковий рівень (приблизно A1)","Базовий рівень (приблизно A2)","Середній рівень (приблизно B1)"],
      score:"Правильних відповідей: ",
      note:"Це приблизна оцінка за 6 питаннями. Точний рівень (A1–C1+) покаже повний безкоштовний тест із 20 питань за методологією ILR — без реєстрації.",
      cta:"Пройти повний тест", copy:"Копіювати посилання", copied:"Скопійовано!", again:"Пройти ще раз"
    }
  };
  var Q=[
    {ru:{t:"Что означает \u00ABmul\u021Bumesc\u00BB?",o:["пожалуйста","до свидания","спасибо","извините"]},
     uk:{t:"Що означає \u00ABmul\u021Bumesc\u00BB?",o:["будь ласка","до побачення","дякую","вибачте"]},c:2},
    {ru:{t:"Как сказать \u00ABдоброе утро\u00BB по-румынски?",o:["Bun\u0103 diminea\u021Ba","Noapte bun\u0103","Bun\u0103 seara","La revedere"]},
     uk:{t:"Як сказати \u00ABдоброго ранку\u00BB румунською?",o:["Bun\u0103 diminea\u021Ba","Noapte bun\u0103","Bun\u0103 seara","La revedere"]},c:0},
    {ru:{t:"Выберите правильную форму: Eu ___ la \u0219coal\u0103.",o:["mergi","merg","merge","mergem"]},
     uk:{t:"Оберіть правильну форму: Eu ___ la \u0219coal\u0103.",o:["mergi","merg","merge","mergem"]},c:1},
    {ru:{t:"\u00ABКнига\u00BB с определённым артиклем — это…",o:["carte","c\u0103r\u021Bi","cartea","cartele"]},
     uk:{t:"\u00ABКнига\u00BB з означеним артиклем — це…",o:["carte","c\u0103r\u021Bi","cartea","cartele"]},c:2},
    {ru:{t:"Выберите правильную форму: Dac\u0103 a\u0219 avea timp, ___ mai mult.",o:["citesc","cite\u0219te","a\u0219 citi","citind"]},
     uk:{t:"Оберіть правильну форму: Dac\u0103 a\u0219 avea timp, ___ mai mult.",o:["citesc","cite\u0219te","a\u0219 citi","citind"]},c:2},
    {ru:{t:"Что означает \u00ABa se descurca\u00BB?",o:["спорить","справляться","спускаться","описывать"]},
     uk:{t:"Що означає \u00ABa se descurca\u00BB?",o:["сперечатися","давати собі раду","спускатися","описувати"]},c:1}
  ];
  var lang="ru", idx=0, score=0, answered=false;
  function el(id){return document.getElementById(id);}
  function setLang(l){
    lang=l;
    el("btn-ru").classList.toggle("on",l==="ru");
    el("btn-uk").classList.toggle("on",l==="uk");
    el("sub").textContent=I18N[l].sub;
    if(el("result").classList.contains("hide")){renderQ(true);}else{renderResult();}
  }
  function renderQ(keepState){
    var t=I18N[lang], q=Q[idx];
    el("qn").textContent=t.q+(idx+1)+t.of;
    el("qt").textContent=q[lang].t;
    el("bar").style.width=((idx)/Q.length*100)+"%";
    var box=el("opts"); box.innerHTML="";
    for(var i=0;i<q[lang].o.length;i++){
      (function(i){
        var b=document.createElement("button");
        b.type="button"; b.className="opt"; b.textContent=q[lang].o[i];
        if(answered&&keepState){
          b.disabled=true;
          if(i===q.c){b.classList.add("ok");}
        }else{
          b.addEventListener("click",function(){answer(i,b);});
        }
        box.appendChild(b);
      })(i);
    }
    var n=el("next");
    n.textContent=(idx===Q.length-1)?t.show:t.next;
    n.classList.toggle("on",answered&&!!keepState);
  }
  function answer(i,btn){
    if(answered)return;
    answered=true;
    var q=Q[idx], kids=el("opts").children;
    for(var k=0;k<kids.length;k++){kids[k].disabled=true;}
    if(i===q.c){score++;btn.classList.add("ok");}
    else{btn.classList.add("bad");kids[q.c].classList.add("ok");}
    el("next").classList.add("on");
  }
  function renderResult(){
    var t=I18N[lang];
    var li=score<=2?0:(score<=4?1:2);
    el("quiz").classList.add("hide");
    el("result").classList.remove("hide");
    el("bar").style.width="100%";
    el("lvl").textContent=t.lvl[li];
    el("sc").textContent=t.score+score+" / "+Q.length;
    el("note").textContent=t.note;
    el("cta").textContent=t.cta;
    el("copy").textContent=t.copy;
    el("again").textContent=t.again;
  }
  el("next").addEventListener("click",function(){
    if(idx===Q.length-1){renderResult();return;}
    idx++;answered=false;renderQ(false);
  });
  el("again").addEventListener("click",function(){
    idx=0;score=0;answered=false;
    el("result").classList.add("hide");
    el("quiz").classList.remove("hide");
    renderQ(false);
  });
  el("copy").addEventListener("click",function(){
    var url="https://makuri.eu/words/level-test", t=I18N[lang], b=el("copy");
    function done(){b.textContent=t.copied;setTimeout(function(){b.textContent=t.copy;},1600);}
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(url).then(done,function(){fallback();});
    }else{fallback();}
    function fallback(){
      var ta=document.createElement("textarea");ta.value=url;document.body.appendChild(ta);
      ta.select();try{document.execCommand("copy");done();}catch(e){}
      document.body.removeChild(ta);
    }
  });
  el("btn-ru").addEventListener("click",function(){setLang("ru");});
  el("btn-uk").addEventListener("click",function(){setLang("uk");});
  setLang("ru");renderQ(false);
})();
</script>
</body>
</html>`;
