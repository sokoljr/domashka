var buttons = document.getElementsByTagName ("button");
var div = document.getElementById("watch");
var timer;
var sec = 0;
document.getElementById("watch").innerHTML =  "00:00:00:000";

buttons[0].addEventListener("click", startTime);
buttons[1].addEventListener("click", resetTime);
buttons[2].addEventListener("click", startStopwatch);
buttons[3].addEventListener("click", stopStopwatch);

function time() {
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var ms = d.getMilliseconds();
		if (hours <= 9) 
			hours = "0" + hours;  
		if (minutes <= 9) 
			minutes = "0" + minutes; 
		if (seconds <= 9) 
			seconds = "0" + seconds;
		if (ms <= 99)
			ms = "0" + ms;
	var newtime = hours + ":" + minutes + ":" + seconds + ":" + ms;
	div.innerHTML = newtime;
};

function stopwatch () {
	if(sec > 9) {
		div.innerHTML = "00:00:" + sec;
	} else 
		div.innerHTML = "00:00:0" + sec;
	sec++;
	if(sec >59) {
		div.innerHTML = "00:01:" + sec;
	}
};

function startTime() {
  clearInterval(timer);
  time();
  timer = setInterval(time, 1000);
};

function resetTime() {
  clearInterval(timer);
  div.innerHTML =  "00:00:00:000";
  sec = 0;
};

function startStopwatch () {
	clearInterval(timer);
	stopwatch();
	timer = setInterval(stopwatch,1000);
};

function stopStopwatch () {
	clearInterval(timer);
};






















		

















