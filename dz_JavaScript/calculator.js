// Задача калькулятор

var x = prompt('Введите первое число', '');
var z = prompt('введите знак - сложение,вычитание,умножение или деление', '');
var y = prompt('Введите второе число', '');
var r;
x = parseFloat(x);
y = parseFloat(y);

function calc(r) {
   if (isNaN(x)) {
     alert( "Некорректно введено первое число" );
     return null;
   };
   if (z !== "+" && z !== "-" && z !== "*" && z !== "/") {
     alert("Некорректно введен знак"); 
     return null;
   };
   if (isNaN(y)) {
     alert( "Некорректно введено второе число" );
     return null;
   };
   if (z === '+') {
      return (+x) + (+y);
   } else if (z === '-') {
      return  x - y;
   } else if (z === '*') {
      return  x * y;
   } else if (y == 0) {
      alert("На ноль делить нельзя");
      return null;
   } else {
      return x / y; 
   }
}
var result = calc(r);
if (result !== null)
  alert(result);


// Задача калькулятор

var x,y; // Ввод пользователя
x = userInput('first');
var z = prompt('Enter operation sign', '');
y = userInput('second');
alert(calc(x,y,z)); //Выводим результат

function userInput(name) { //Функция, которая получает числа от пользователя. Запускает цикл до тех пор, пока пользователь не введет корректное значение
	var number;
	do {
		number = prompt("Enter " + name + " number");
		number = checkNumber(number);
	} while (number === false);
	return number;
}

function checkNumber(number) { // Функция проверяет введенное число и выводит сообщение об ошибке, если ввод не число
    if (isNaN(parseFloat(number))) {
        alert('Вы ввели не число!');
        return false;
    }
    return parseFloat(number);
}

function calc(x,y,z) { // Калькулятор
switch(z) {
    case "+" : return x + y;
    case "-" : return x - y;
    case "*" : return x * y;
	case "/" : if (y === 0)
			return "Division by zero!";
		return x / y;
	default: return "Operation " + z + " is not supported";
   }
}