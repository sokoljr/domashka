var buttons = document.getElementsByTagName ("button");
var timer;

buttons[0].addEventListener("click", start);
buttons[1].addEventListener("click", reset);
document.getElementById("watch").innerHTML =  "00:00:00"; // нулевой счетчик

function time() { // функция самих часов
	var d = new Date();
	document.getElementById("watch").innerHTML = d.toLocaleTimeString();
};

function start() { // функция запускает часы
  time();
  timer = setInterval(time, 1000);
};

function reset() { // функция сбрасывает время
  clearInterval(timer);
  document.getElementById("watch").innerHTML =  "00:00:00";
};

// сeкундомер
var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var reset = document.querySelector('.reset');
var lap = document.querySelector('.lap');

document.getElementById("stopw").innerHTML =  "00:00:00";

start.addEventListener("click", startSec);
stop.addEventListener("click", stopSec);
reset.addEventListener("click", resetSec);
lap.addEventListener("click", lapSec);


















		

















