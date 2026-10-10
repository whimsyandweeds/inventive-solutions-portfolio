(function(){
  if(document.getElementById("bot")) return;
  var b=document.createElement("button");
  b.id="bot"; b.type="button"; b.setAttribute("aria-label","Contact Tonya"); b.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>';
  var box=document.createElement("div");
  box.id="chat"; box.hidden=true;
  box.innerHTML='<div class="chat-head">Contact Tonya<button id="chat-x" type="button">×</button></div><div id="chat-log"></div><div class="chat-pick"><a class="pick" href="mailto:whimsyandweeds@gmail.com">Email</a><a class="pick" href="sms:7029603010">Text</a></div><form id="chat-form"><input id="chat-q" placeholder="Or ask the board" autocomplete="off"><button type="button" id="chat-send">Send</button></form>';
  document.body.appendChild(b); document.body.appendChild(box);
  var style=document.createElement("style");
  style.textContent="#bot{position:fixed;right:18px;bottom:28px;z-index:90;width:52px;height:52px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(61,232,255,.45);background:linear-gradient(160deg,rgba(61,232,255,.18),rgba(12,14,18,.22));backdrop-filter:blur(8px);color:#eaf2ff;border-radius:50%;padding:0;box-shadow:0 8px 24px rgba(0,0,0,.25)}#chat{position:fixed;right:18px;bottom:86px;z-index:90;width:min(320px,calc(100% - 36px));background:linear-gradient(180deg,rgba(22,24,28,.55),rgba(12,14,18,.28));backdrop-filter:blur(10px);color:#f4f1ea;border:1px solid rgba(210,210,210,.45);border-radius:16px;padding:12px}#chat[hidden]{display:none}#chat-log{max-height:180px;overflow:auto;font-size:14px}#chat-log p{margin:6px 0}.chat-pick{display:flex;gap:8px;margin-top:10px}.chat-pick .pick{flex:1;text-align:center;text-decoration:none;border:1px solid rgba(61,232,255,.45);color:#3de8ff;border-radius:999px;padding:8px 10px;font-weight:700}#chat form{display:flex;gap:8px;margin-top:8px}#chat input{flex:1;border:1px solid #2c3138;border-radius:10px;background:#0c0e12;color:#fff;padding:8px}#chat-send{border:0;background:#2a2a2e;color:#fff;border-radius:10px;padding:8px 10px}#chat-x{position:absolute;top:8px;right:8px;border:0;background:transparent;color:#d1d5db;font-size:18px;line-height:1;padding:4px 8px}";
  document.head.appendChild(style);
  var lines=[
    "No idea. We don't clock in. Email whimsyandweeds@gmail.com and bother a person.",
    "Cute question. The board does not have that. whimsyandweeds@gmail.com does, allegedly.",
    "I could invent an answer. That feels like a you problem. Write whimsyandweeds@gmail.com."
  ];
  function say(t){var p=document.createElement("p"); p.textContent=t; document.getElementById("chat-log").appendChild(p);}
  function answer(q){
    var s=q.toLowerCase();
    if(/phone|call|text|number/.test(s)) return "Text Tonya. 702-960-3010. Hit the Text button and it opens on your phone.";
    if(/email|contact|reach|hold of|who do i|login|password|code|locked|remember/.test(s)) return "Need a person? Text Tonya at 702-960-3010, or email whimsyandweeds@gmail.com.";
    if(/whimsy|weeds|who are/.test(s)) return "Whimsy and Weeds. Private boards. If you need a person, whimsyandweeds@gmail.com.";
    if(/hour|open|saturday|sunday|close|when/.test(s)) return "Saturday hours? Bold. We don't post those. Email whimsyandweeds@gmail.com and ask a person who clocks in.";
    return lines[Math.floor(Math.random()*lines.length)];
  }
  b.onclick=function(){box.hidden=!box.hidden;if(!box.hidden&&!document.getElementById("chat-log").childElementCount) say("Contact Tonya. Text 702-960-3010, or email.");};
  document.getElementById("chat-x").onclick=function(){box.hidden=true;};
  document.getElementById("chat-send").onclick=function(){
    var q=document.getElementById("chat-q").value.trim();
    if(!q) return;
    say(q);
    say(answer(q));
    document.getElementById("chat-q").value="";
  };
  document.getElementById("chat-form").onsubmit=function(e){e.preventDefault(); document.getElementById("chat-send").click();};
})();
