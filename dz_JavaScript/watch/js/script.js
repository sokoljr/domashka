var buttons = document.getElementsByTagName ("button");

buttons[0].addEventListener("click", time);
function time(e) {
	var d = new Date();
	document.getElementById("watch").innerHTML = d.toLocaleTimeString();
	};
setInterval("time(e)", 1000);




		

















