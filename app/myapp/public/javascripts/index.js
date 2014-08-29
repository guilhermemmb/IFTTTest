
function ready() {
	var btn = document.querySelector("#btn");

    document.querySelector("#textBox").value = "antes";

	btn.onclick = function() {
		var inputText = document.querySelector("#inputText");

		var text = inputText.value;

		document.querySelector("#textBox").value = text;
	}
}

window.addEventListener("load",ready,false);
window.onload = ready;
