var modal1 = document.getElementById("modal-1");
var modal2 = document.getElementById("modal-2");
var modal3 = document.getElementById("modal-3");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var close1 = document.getElementsByClassName("close-1")[0];
var close2 = document.getElementsByClassName("close-2")[0];
var confirm1 = document.getElementById("confirm-1");
var confirm2 = document.getElementById("confirm-2");
var fail1 = document.getElementById("fail-1");
var fail2 = document.getElementById("fail-2");
var success1 = document.getElementById("success-1");
var success2 = document.getElementById("success-2");
var balance1 = document.getElementById("balance-1");
var balance2 = document.getElementById("balance-2");
var balance3 = document.getElementById("balance-3");
var bills1 = document.getElementById("bills-1");
var bills2 = document.getElementById("bills-2");


btn1.onclick = function() {
  modal1.style.display = "block";
}

close1.onclick = function() {
  modal1.style.display = "none";
}

close2.onclick = function() {
  modal1.style.display = "none";
}

confirm1.onclick = function() {
  btn2.style.display = "block";
  fail1.style.display = "none";
  success1.style.display = "block";
  modal1.style.display = "none";
  bills1.style.display = "none";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

confirm2.onclick = function() {
  balance1.style.display = "none";
  balance2.style.display = "block";
  balance3.style.display = "block";
  fail2.style.display = "none";
  success2.style.display = "block";
  modal2.style.display = "none";
  bills2.style.display = "none";
}

balance3.onclick = function() {
  modal3.style.display = "block";
}