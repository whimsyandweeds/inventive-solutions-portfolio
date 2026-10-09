(function(){
  if(document.getElementById("bot")) return;
  var b=document.createElement("button");
  b.id="bot"; b.type="button"; b.setAttribute("aria-label","Ask"); b.textContent="💬";
  var box=document.createElement("div");
  box.id="chat"; box.hidden=true;
  box.innerHTML='<div class="chat-head">Ask<button id="chat-x" type="button">×</button></div><div id="chat-log"></div><form id="chat-form"><input id="chat-q" placeholder="Ask the board" autocomplete="off"><button type="button" id="chat-send">Send</button></form>';
  document.body.appendChild(b); document.body.appendChild(box);
  var style=document.createElement("style");
  style.textContent="#bot{position:fixed;right:18px;bottom:28px;z-index:40;width:48px;height:48px;border-radius:50%;border:1px solid rgba(255,255,255,.45);background:linear-gradient(160deg,rgba(255,255,255,.28),rgba(12,14,18,.22));backdrop-filter:blur(6px);color:#fff;font-size:20px}#chat{position:fixed;right:18px;bottom:86px;z-index:40;width:min(320px,calc(100% - 36px));background:linear-gradient(180deg,rgba(22,24,28,.55),rgba(12,14,18,.28));backdrop-filter:blur(10px);color:#f4f1ea;border:1px solid rgba(255,255,255,.28);border-radius:16px;padding:12px}#chat[hidden]{display:none}#chat-log{max-height:180px;overflow:auto;font-size:14px}#chat-log p{margin:6px 0}#chat form{display:flex;gap:8px;margin-top:8px}#chat input{flex:1;border:1px solid #2c3138;border-radius:10px;background:#0c0e12;color:#fff;padding:8px}#chat-send,#chat-x{border:0;background:#2a2a2e;color:#fff;border-radius:10px;padding:8px 10px}";
  document.head.appendChild(style);
  var lines=[
    "No idea. We don't clock in. Email whimsyandweeds@gmail.com and bother a person.",
    "Cute question. The board does not have that. whimsyandweeds@gmail.com does, allegedly.",
    "I could invent an answer. That feels like a you problem. Write whimsyandweeds@gmail.com."
  ];
  function say(t){var p=document.createElement("p"); p.textContent=t; document.getElementById("chat-log").appendChild(p);}
  function answer(q){
    var s=q.toLowerCase();
    if(/email|phone|call|text|contact|reach|hold of|who do i|login|password|code|locked|remember/.test(s)) return "Locked out? Email whimsyandweeds@gmail.com. That is the human door.";
    if(/whimsy|weeds|who are/.test(s)) return "Whimsy and Weeds. Private boards. If you need a person, whimsyandweeds@gmail.com.";
    if(/hour|open|saturday|sunday|close|when/.test(s)) return "Saturday hours? Bold. We don't post those. Email whimsyandweeds@gmail.com and ask a person who clocks in.";
    return lines[Math.floor(Math.random()*lines.length)];
  }
  b.onclick=function(){box.hidden=!box.hidden;};
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
