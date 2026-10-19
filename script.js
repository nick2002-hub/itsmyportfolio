// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ===== THEME TOGGLE (dark / light) =====
var root = document.documentElement;
var themeBtn = document.getElementById("theme");
function setTheme(t){
  root.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "\u263E" : "\u2600";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
var saved = "dark";
try { saved = localStorage.getItem("theme") || "dark"; } catch (e) {}
setTheme(saved);
themeBtn.addEventListener("click", function(){
  setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

// ===== TYPING ROLE =====
// Edit this list to change the words that are typed after "a".
var roles = ["IT Graduate", "IT Support", "Web Developer"];
var roleEl = document.getElementById("role");
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduce) {
  roleEl.textContent = roles[0];
} else {
  var r = 0, c = 0, deleting = false;
  (function tick(){
    var word = roles[r];
    roleEl.textContent = word.slice(0, c);
    var delay = deleting ? 45 : 90;
    if (!deleting && c === word.length) { deleting = true; delay = 1400; }
    else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
    else { c += deleting ? -1 : 1; }
    setTimeout(tick, delay);
  })();
}
