(function(){
  if(document.getElementById("bot")) return;

  var q2map={
    "New website":["Landing page","Full site","Redesign","Not sure"],
    "AI tool":["Custom AI","Integration","App feature","Not sure"],
    "Business ops":["Process setup","Automation","Tools/setup","Not sure"],
    "Something else":["Consulting","One-off","Partnership","Not sure"]
  };

  var b=document.createElement("button");
  b.id="bot"; b.type="button"; b.setAttribute("aria-label","Contact Tonya");
  b.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>';

  var box=document.createElement("div");
  box.id="chat"; box.hidden=true;
  box.innerHTML='<div class="chat-head">Contact Tonya<button id="chat-x" type="button" aria-label="Close">×</button></div>'+
    '<div id="chat-log"></div>'+
    '<div id="chat-q3" hidden>'+
      '<textarea id="chat-notes" placeholder="Optional" rows="3"></textarea>'+
    '</div>'+
    '<div class="chat-pick" id="chat-contact" hidden>'+
      '<button class="pick" type="button" id="chat-email">Email</button>'+
      '<a class="pick" id="chat-text" href="sms:7029603010">Text</a>'+
    '</div>'+
    '<button type="button" id="chat-restart" hidden>Start over</button>'+
    '<form id="chat-form" method="POST" action="https://formsubmit.co/OpsBlock.io@gmail.com" target="chat-send-frame">'+
      '<input type="hidden" name="_subject" value="Chat message from the board">'+
      '<input type="hidden" name="_cc" value="whimsyandweeds@gmail.com">'+
      '<input type="hidden" name="_captcha" value="false">'+
      '<input type="hidden" name="_template" value="table">'+
      '<input type="hidden" name="looking_for" id="chat-f-looking" value="">'+
      '<input type="hidden" name="details" id="chat-f-details" value="">'+
      '<input type="hidden" name="notes" id="chat-f-notes" value="">'+
      '<input type="hidden" name="message" id="chat-f-message" value="">'+
      '<input type="hidden" name="page" id="chat-f-page" value="">'+
    '</form>';
  document.body.appendChild(b);
  document.body.appendChild(box);

  var style=document.createElement("style");
  style.textContent="#bot{position:fixed;right:18px;bottom:28px;z-index:90;width:52px;height:52px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(61,232,255,.45);background:linear-gradient(160deg,rgba(61,232,255,.18),rgba(12,14,18,.22));backdrop-filter:blur(8px);color:#eaf2ff;border-radius:50%;padding:0;box-shadow:0 8px 24px rgba(0,0,0,.25)}#chat{position:fixed;right:18px;bottom:86px;z-index:90;font-family:Inter,sans-serif;width:min(320px,calc(100% - 36px));background:linear-gradient(180deg,rgba(22,24,28,.55),rgba(12,14,18,.28));backdrop-filter:blur(10px);color:#f4f1ea;border:1px solid rgba(210,210,210,.45);border-radius:16px;padding:12px}#chat[hidden]{display:none}.chat-head{padding-right:28px;font-weight:600;margin-bottom:4px}#chat-log{max-height:240px;overflow:auto;font-size:14px}#chat-log p{margin:6px 0}.chat-opts{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0}.chat-opt{border:1px solid rgba(61,232,255,.45);color:#3de8ff;background:transparent;border-radius:999px;padding:8px 10px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}.chat-opt.on{background:rgba(61,232,255,.16)}.chat-opt[disabled]{opacity:.6;cursor:default}.chat-pick{display:flex;gap:8px;margin-top:10px}.chat-pick[hidden],#chat-q3[hidden],#chat-restart[hidden]{display:none}.chat-pick .pick{flex:1;text-align:center;text-decoration:none;border:1px solid rgba(61,232,255,.45);color:#3de8ff;background:transparent;border-radius:999px;padding:8px 10px;font:inherit;font-weight:700;cursor:pointer}#chat-notes{display:block;width:100%;box-sizing:border-box;min-height:64px;margin-top:4px;border:1px solid #2c3138;border-radius:10px;background:#0c0e12;color:#fff;padding:8px;font:inherit;resize:vertical}#chat-restart{margin-top:8px;border:0;background:transparent;color:#d1d5db;font:inherit;font-size:12px;padding:0;cursor:pointer;text-decoration:underline}#chat-form{display:none}#chat-x{position:absolute;top:8px;right:8px;border:0;background:transparent;color:#d1d5db;font-size:18px;line-height:1;padding:4px 8px}";
  document.head.appendChild(style);

  if(location.pathname.indexOf("/ads")===0){
    var adsStyle=document.createElement("style");
    adsStyle.textContent="#bot{border-color:rgba(200,143,192,.55);background:linear-gradient(160deg,rgba(200,143,192,.22),rgba(18,16,23,.28));color:#f4e8f2}#chat{background:linear-gradient(180deg,rgba(26,23,32,.7),rgba(18,16,23,.4));border-color:rgba(200,143,192,.45);color:#e9ddd6}.chat-pick .pick,.chat-opt{border-color:rgba(200,143,192,.5);color:#c88fc0}.chat-opt.on{background:rgba(200,143,192,.2)}#chat-notes{border-color:rgba(200,143,192,.35);background:#121017;color:#e9ddd6}";
    document.head.appendChild(adsStyle);
  }
  if(document.getElementById("door")){
    var doorStyle=document.createElement("style");
    doorStyle.textContent="#bot{border-color:rgba(210,210,210,.55);background:linear-gradient(160deg,rgba(244,241,234,.16),rgba(12,14,18,.22));color:#f4f1ea}#chat{font-family:Inter,sans-serif;background:linear-gradient(180deg,rgba(12,14,18,.62),rgba(12,14,18,.34));border-color:rgba(210,210,210,.45);color:#f4f1ea}.chat-pick .pick,.chat-opt{border-color:rgba(210,210,210,.45);color:#f4f1ea}.chat-opt.on{background:rgba(210,210,210,.16)}#chat-notes{border-color:rgba(210,210,210,.35);background:rgba(12,14,18,.55);color:#f4f1ea}";
    document.head.appendChild(doorStyle);
  }

  var log=document.getElementById("chat-log");
  var q3=document.getElementById("chat-q3");
  var notes=document.getElementById("chat-notes");
  var contact=document.getElementById("chat-contact");
  var restart=document.getElementById("chat-restart");
  var started=false;
  var sent=false;
  var answers={looking_for:"",details:"",notes:""};

  function say(t){
    var p=document.createElement("p");
    p.textContent=t;
    log.appendChild(p);
    log.scrollTop=log.scrollHeight;
    return p;
  }

  function messageBody(){
    var lines=["Looking for: "+(answers.looking_for||"—"),"Details: "+(answers.details||"—")];
    var extra=(notes.value||"").trim();
    lines.push("Notes: "+(extra||"(none)"));
    lines.push("Page: "+location.pathname);
    return lines.join("\n");
  }

  function syncFields(){
    answers.notes=(notes.value||"").trim();
    document.getElementById("chat-f-looking").value=answers.looking_for;
    document.getElementById("chat-f-details").value=answers.details;
    document.getElementById("chat-f-notes").value=answers.notes;
    document.getElementById("chat-f-message").value=messageBody();
    document.getElementById("chat-f-page").value=location.pathname;
    document.getElementById("chat-text").href="sms:7029603010?body="+encodeURIComponent(messageBody());
  }

  function addPills(labels, onPick){
    var wrap=document.createElement("div");
    wrap.className="chat-opts";
    labels.forEach(function(label){
      var btn=document.createElement("button");
      btn.type="button";
      btn.className="chat-opt";
      btn.textContent=label;
      btn.onclick=function(){
        if(btn.disabled) return;
        Array.prototype.forEach.call(wrap.querySelectorAll(".chat-opt"), function(el){
          el.disabled=true;
          el.classList.toggle("on", el===btn);
        });
        onPick(label);
      };
      wrap.appendChild(btn);
    });
    log.appendChild(wrap);
    log.scrollTop=log.scrollHeight;
  }

  function startSurvey(){
    log.innerHTML="";
    q3.hidden=true;
    contact.hidden=true;
    restart.hidden=true;
    notes.value="";
    sent=false;
    answers={looking_for:"",details:"",notes:""};
    syncFields();
    say("What are you looking for?");
    addPills(["New website","AI tool","Business ops","Something else"], function(choice){
      answers.looking_for=choice;
      say("Which fits best?");
      addPills(q2map[choice], function(detail){
        answers.details=detail;
        say("Anything else I should know?");
        q3.hidden=false;
        contact.hidden=false;
        restart.hidden=false;
        syncFields();
        notes.focus();
      });
    });
  }

  b.onclick=function(){
    box.hidden=!box.hidden;
    if(!box.hidden && !started){
      started=true;
      startSurvey();
    }
  };
  document.getElementById("chat-x").onclick=function(){ box.hidden=true; };
  restart.onclick=function(){ startSurvey(); };

  notes.addEventListener("input", syncFields);

  document.getElementById("chat-email").onclick=function(){
    if(!answers.looking_for || !answers.details) return;
    syncFields();
    var iframe=document.getElementById("chat-send-frame");
    if(!iframe){
      iframe=document.createElement("iframe");
      iframe.name="chat-send-frame";
      iframe.id="chat-send-frame";
      iframe.style.display="none";
      document.body.appendChild(iframe);
    }
    if(sent){
      say("This inquiry was already sent. Use Start over if you want to send another.");
      return;
    }
    sent=true;
    document.getElementById("chat-form").submit();
    say("Sent. Tonya will follow up.");
  };
  document.getElementById("chat-text").addEventListener("click", function(){
    syncFields();
  });
  document.getElementById("chat-form").addEventListener("submit", function(){
    syncFields();
  });
})();
