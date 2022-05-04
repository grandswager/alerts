function onload() {
  document.getElementById("alert-info-text").innerText = "Starting May 4th, we will add cookies and Local Storage."

  if (localStorage.getItem("textarea-text") !== "" || localStorage.getItem("textarea-text") !== null) {
    document.getElementById("alert-success").style.opacity = "100";
    document.getElementById("alert-success-text").innerText = "Successfully saved text."
    document.getElementById("alert-success").style.display = "block";
    document.getElementById("text-to-save").value = localStorage.getItem("textarea-text");
  }
}

function noMore() {
  localStorage.setItem("textarea-text", "");
  document.getElementById("alert-success").style.opacity = "100";
  document.getElementById("alert-success-text").innerText = "Successfully deleted text."
  document.getElementById("alert-success").style.display = "block";
}

function save() {
  localStorage.setItem("textarea-text", document.getElementById("text-to-save").value);
}

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
