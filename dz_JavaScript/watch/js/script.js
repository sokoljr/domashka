var buttons = document.getElementsByTagName ("button");
var div = document.getElementById("watch");
var timer;
var time = 0;
document.getElementById("watch").innerHTML =  "00:00:00:00";

buttons[0].addEventListener("click", startTime);
buttons[1].addEventListener("click", resetTime);
buttons[2].addEventListener("click", startStopwatch);
buttons[3].addEventListener("click", stopStopwatch);

function watch() {
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
		if (hours < 10) 
			hours = "0" + hours;  
		if (minutes < 10) 
			minutes = "0" + minutes; 
		if (seconds < 10) 
			seconds = "0" + seconds;
	var newtime = hours + ":" + minutes + ":" + seconds;
	div.innerHTML = newtime;
};

function stopwatch () {
	time++;
	var h = Math.floor(time/100/60/60);﻿
	var min = Math.floor(time/100/60);
	var second = Math.floor(time/100);
	var tenth = time % 100;
		if (h >= 99)
			h = 0;
		if (h < 10) 
			h = "0" + h;
		if (min >= 60) 
			min = min % 60;
		if (min < 10) 
			min = "0" + min; 
		if (second >= 60) 
			second = second % 60; 
		if (second < 10) 
			second = "0" + second; 
		div.innerHTML = h + ":" + min + ":" + second + ":" + tenth;
};

function startTime() {
  clearInterval(timer);
  watch();
  timer = setInterval(watch, 1000);
};

function resetTime() {
  clearInterval(timer);
  div.innerHTML =  "00:00:00:00";
  time = 0;
};

function startStopwatch () {
	clearInterval(timer);
	stopwatch();
	timer = setInterval(stopwatch,10);
};

function stopStopwatch () {
	clearInterval(timer);
};






















		

















