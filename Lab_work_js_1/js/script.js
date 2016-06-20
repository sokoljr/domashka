var all = " "; // вывод всех свойств window
  for (var prop in window) {
    all += window.prop + "<br>";
  }
  document.write(all);

var newWin;

function openWin() { // функция запускает новое окно
	newWin = window.open('http://www.w3schools.com/', 'w3schools', "left=800,top=300,width=200,height=200");
}
openWin();

function resizeWinTo() {  // функция меняет размер
    newWin.resizeTo(500, 500);
    newWin.focus();
}
resizeWinTo();

function scrollBotoom() {
	window.scrollTo(1300, 1300); // Здесь не понял как скролить основное окно ?!
}
scrollBotoom();

function userAgent() { // Здесь Алерт вылетает раньше чем новое окно с w3schools .... 			
	alert(window.navigator.userAgent)
}
setTimeout(userAgent, 2000);

function closeWin() {    // закрывает новое окно
    newWin.close();   
}
setTimeout(closeWin, 4000);