let blink = document.querySelector(".blink");
setInterval(function() {
  blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
}, 500);
