// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ===== TYPING INTRO =====
// Edit these lines to change what the terminal types.
var lines = [
  { cmd: "whoami",         out: "Jermaine Nico T. Daño" },
  { cmd: "cat education",  out: "Information Technology graduate" },
  { cmd: "ls skills/",     out: "HTML  CSS  JavaScript  C++" },
  { cmd: "echo $STATUS",   out: "Learning, building, open to work." }
];

var el = document.getElementById("typed");
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function esc(s){ return s.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
function row(l){
  return '<div><span class="p">$</span> ' + esc(l.cmd) + '</div><div class="out">' + esc(l.out) + '</div>';
}

if (reduce) {
  el.innerHTML = lines.map(row).join("");
} else {
  var done = "", i = 0;
  (function nextLine(){
    if (i >= lines.length) return;
    var l = lines[i], c = 0;
    (function typeCmd(){
      el.innerHTML = done + '<div><span class="p">$</span> ' + esc(l.cmd.slice(0, c)) + '</div>';
      if (c++ < l.cmd.length) { setTimeout(typeCmd, 60); return; }
      setTimeout(function(){
        done += row(l);
        el.innerHTML = done;
        i++;
        setTimeout(nextLine, 400);
      }, 300);
    })();
  })();
}
