const btn = document.getElementById("btnBigger");
btn.onclick = function () {
  document.getElementById("textArea").style.fontSize = "24pt";
};

function changeTextAreaStyle() {
  let text = document.getElementById("textArea");
  text.style.fontWeight = "bold";
  text.style.color = "blue";
  text.style.textDecoration = "underline";
}

function removeTextAreaStyle() {
  let text = document.getElementById("textArea");
  text.style.fontWeight = "normal";
  text.style.color = "black";
  text.style.textDecoration = "none";
}

function modifyText() {
  let text = document.getElementById("textArea");
  let uppercaseText = text.value.toUpperCase();

  let splitText = uppercaseText.split(".");
  let newText = splitText.join("-Moo");

  text.value = newText;
}
