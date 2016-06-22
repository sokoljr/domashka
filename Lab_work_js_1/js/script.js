//Вывод свойств объекта window на страницу, каждое с новой строчки
var properties = '';
for (var property in window) {
    properties += '<p>' + property + ': ' + window[property] + '</p>';
}
document.write(properties);

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
	window.scrollTo(0, 0); // Здесь не понял как скролить основное окно ?!
}
scrollBotoom();

function userAgent() { // Здесь Алерт вылетает раньше чем новое окно с w3schools .... 			
	alert(window.navigator.userAgent);
}
setTimeout(userAgent, 2000);

function closeWin() {    // закрывает новое окно
    newWin.close();   
}
setTimeout(closeWin, 4000);