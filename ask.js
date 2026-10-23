(function(){
  if(document.getElementById("bot")) return;
  var b=document.createElement("button");
  b.id="bot"; b.type="button"; b.setAttribute("aria-label","Contact Tonya"); b.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>';
  var box=document.createElement("div");
  box.id="chat"; box.hidden=true;
  box.innerHTML='<div class="chat-head">Contact Tonya<button id="chat-x" type="button">×</button></div><div id="chat-log"></div><div class="chat-pick"><a class="pick" href="mailto:whimsyandweeds@gmail.com">Email</a><a class="pick" href="sms:7029603010">Text</a></div><form id="chat-form"><input id="chat-q" placeholder="Message Tonya" autocomplete="off"><button type="button" id="chat-send">Send</button></form>';
  document.body.appendChild(b); document.body.appendChild(box);
  var style=document.createElement("style");
  style.textContent="#bot{position:fixed;right:18px;bottom:28px;z-index:90;width:52px;height:52px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(61,232,255,.45);background:linear-gradient(160deg,rgba(61,232,255,.18),rgba(12,14,18,.22));backdrop-filter:blur(8px);color:#eaf2ff;border-radius:50%;padding:0;box-shadow:0 8px 24px rgba(0,0,0,.25)}#chat{position:fixed;right:18px;bottom:86px;z-index:90;font-family:Inter,sans-serif;width:min(320px,calc(100% - 36px));background:linear-gradient(180deg,rgba(22,24,28,.55),rgba(12,14,18,.28));backdrop-filter:blur(10px);color:#f4f1ea;border:1px solid rgba(210,210,210,.45);border-radius:16px;padding:12px}#chat[hidden]{display:none}#chat-log{max-height:180px;overflow:auto;font-size:14px}#chat-log p{margin:6px 0}.chat-pick{display:flex;gap:8px;margin-top:10px}.chat-pick .pick{flex:1;text-align:center;text-decoration:none;border:1px solid rgba(61,232,255,.45);color:#3de8ff;border-radius:999px;padding:8px 10px;font-weight:700}#chat form{display:flex;gap:8px;margin-top:8px}#chat input{flex:1;border:1px solid #2c3138;border-radius:10px;background:#0c0e12;color:#fff;padding:8px}#chat-send{border:0;background:#2a2a2e;color:#fff;border-radius:10px;padding:8px 10px}#chat-x{position:absolute;top:8px;right:8px;border:0;background:transparent;color:#d1d5db;font-size:18px;line-height:1;padding:4px 8px}";
  document.head.appendChild(style);
  if(location.pathname.indexOf("/ads")===0){
    var adsStyle=document.createElement("style");
    adsStyle.textContent="#bot{border-color:rgba(200,143,192,.55);background:linear-gradient(160deg,rgba(200,143,192,.22),rgba(18,16,23,.28));color:#f0d6ec}#chat{background:linear-gradient(180deg,rgba(26,23,32,.7),rgba(18,16,23,.4));border-color:rgba(200,143,192,.4);color:#e9ddd6}.chat-pick .pick{border-color:rgba(200,143,192,.5);color:#c88fc0}#chat input{border-color:rgba(200,143,192,.3);background:rgba(18,16,23,.6);color:#e9ddd6}#chat-send{background:rgba(200,143,192,.25);color:#e9ddd6}";
    document.head.appendChild(adsStyle);
  }
  if(location.pathname.indexOf("/ads")===0){
    var adsStyle=document.createElement("style");
    adsStyle.textContent="#bot{border-color:rgba(200,143,192,.55);background:linear-gradient(160deg,rgba(200,143,192,.22),rgba(18,16,23,.28));color:#f4e8f2}#chat{background:linear-gradient(180deg,rgba(26,23,32,.7),rgba(18,16,23,.4));border-color:rgba(200,143,192,.45);color:#e9ddd6}.chat-pick .pick{border-color:rgba(200,143,192,.5);color:#c88fc0}#chat input{border-color:rgba(200,143,192,.35);background:#121017;color:#e9ddd6}#chat-send{background:rgba(200,143,192,.25);color:#e9ddd6}";
    document.head.appendChild(adsStyle);
  }
  if(document.getElementById("door")){
    var doorStyle=document.createElement("style");
    doorStyle.textContent="#bot{border-color:rgba(210,210,210,.55);background:linear-gradient(160deg,rgba(244,241,234,.16),rgba(12,14,18,.22));color:#f4f1ea}#chat{font-family:Inter,sans-serif;background:linear-gradient(180deg,rgba(12,14,18,.62),rgba(12,14,18,.34));border-color:rgba(210,210,210,.45);color:#f4f1ea}.chat-pick .pick{border-color:rgba(210,210,210,.45);color:#f4f1ea}#chat input{border-color:rgba(210,210,210,.35);background:rgba(12,14,18,.55);color:#f4f1ea}#chat-send{background:rgba(210,210,210,.2);color:#f4f1ea}";
    document.head.appendChild(doorStyle);
  }
  var lines=[
    "No idea. We don't clock in. Email whimsyandweeds@gmail.com and bother a person.",
    "Cute question. The board does not have that. whimsyandweeds@gmail.com does, allegedly.",
    "I could invent an answer. That feels like a you problem. Write whimsyandweeds@gmail.com."
  ];
  function say(t){var p=document.createElement("p"); p.textContent=t; document.getElementById("chat-log").appendChild(p);}
  function answer(q){
    var s=q.toLowerCase();
    if(/phone|call|text|number/.test(s)) return "Hit the Text button and it opens on your phone.";
    if(/email|contact|reach|hold of|who do i|login|password|code|locked|remember/.test(s)) return "Need a person? Use the Email or Text buttons.";
    if(/whimsy|weeds|who are/.test(s)) return "Whimsy and Weeds. Private boards. If you need a person, whimsyandweeds@gmail.com.";
    if(/hour|open|saturday|sunday|close|when/.test(s)) return "Saturday hours? Bold. We don't post those. Email whimsyandweeds@gmail.com and ask a person who clocks in.";
    return lines[Math.floor(Math.random()*lines.length)];
  }
  b.onclick=function(){box.hidden=!box.hidden;if(!box.hidden&&!document.getElementById("chat-log").childElementCount) say("Contact Tonya. Send a message and it goes straight to me.");};
  document.getElementById("chat-x").onclick=function(){box.hidden=true;};
  document.getElementById("chat-send").onclick=function(){
    var q=document.getElementById("chat-q").value.trim();
    if(!q) return;
    say(q);
    var form=document.createElement("form");
    form.method="POST";
    form.action="https://formsubmit.co/OpsBlock.io@gmail.com";
    form.target="chat-send-frame";
    form.style.display="none";
    var fields={_subject:"Chat message from the board",_cc:"whimsyandweeds@gmail.com",_captcha:"false",_template:"table",message:q,page:location.pathname};
    Object.keys(fields).forEach(function(k){var i=document.createElement("input");i.type="hidden";i.name=k;i.value=fields[k];form.appendChild(i);});
    var iframe=document.getElementById("chat-send-frame");
    if(!iframe){iframe=document.createElement("iframe");iframe.name="chat-send-frame";iframe.id="chat-send-frame";iframe.style.display="none";document.body.appendChild(iframe);}
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    say("Sent. Tonya will see it.");
    document.getElementById("chat-q").value="";
  };
  document.getElementById("chat-form").onsubmit=function(e){e.preventDefault(); document.getElementById("chat-send").click();};
})();
