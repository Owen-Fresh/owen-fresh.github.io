// Open First Modal

var modal1 = document.getElementById("modal-1");
var btn1 = document.getElementById("btn-1");
var close1 = document.getElementsByClassName("close-1")[0];
var close2 = document.getElementsByClassName("close-2")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}

close1.onclick = function() {
  modal1.style.display = "none";
}

close2.onclick = function() {
  modal1.style.display = "none";
}


// Open Second Modal

var modal2 = document.getElementById("modal-2");
var btn2 = document.getElementById("btn-2");

var back1 = document.getElementsByClassName("back-1")[0];
var bill1 = document.getElementById("btn-1");

btn2.onclick = function() {
  modal1.style.display = "none";
  modal2.style.display = "block";
}

back1.onclick = function() {
  modal2.style.display = "none";
  modal1.style.display = "block";
}