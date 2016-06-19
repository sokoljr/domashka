var all = " "; // вывод всех свойств window
  for (var prop in window) {
    all += window.prop + "\n";
  }
  console.log(all);

function userAgent() { // Здесь Алерт вылетает раньше чем новое окно с w3schools .... 			
	alert(window.navigator.userAgent)
}
userAgent();

var newWin;

function openWin() { // функция запускает новое окно
	newWin = window.open('http://www.w3schools.com/', 'w3schools', "left=800,top=300,width=200,height=200");
};

function resizeWinTo() {  // не меняет размер ?!
    newWin.resizeTo(500, 500);
    newWin.focus();
};

function closeWin() {    // закрывает новое окно
    newWin.close();   
};


window.scrollTo(0,0); // Здесь не понял как скролить основное окно ?!







