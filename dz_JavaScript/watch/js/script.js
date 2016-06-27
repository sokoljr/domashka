var buttons = document.getElementsByTagName ("button");
var timer;

buttons[0].addEventListener("click", start);
buttons[1].addEventListener("click", reset);
document.getElementById("watch").innerHTML =  "00:00:00" // нулевой счетчик

function start() { // функция запускает часы
  time();
  timer = setInterval(time, 1000);
};

function reset() { // функция сбрасывает время
  window.clearInterval(timer);
  document.getElementById("watch").innerHTML =  "00:00:00"
};

function time() { // функция самих часов
	var d = new Date();
	document.getElementById("watch").innerHTML = d.toLocaleTimeString();
};





		

















