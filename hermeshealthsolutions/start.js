var back = document.getElementsByClassName("back-1")[0];
var start = document.getElementById("start");

setTimeout(() => {
  start.style.display = "block"
}, 10000);

window.onclick = function(event) {
  if (event.target == start) {
    start.style.display = "none";
  }
}

back.onclick = function() {
  start.style.display = "none";
}