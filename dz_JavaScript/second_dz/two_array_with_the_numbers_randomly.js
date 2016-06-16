//Создать массив и заполнить его десятью значениями в пределах -100...100 при помощи Math.random. Возвести каждый элемент массива в квадрат и вернуть массив, который будет содержать элементы > 100;
 generation = function(max,min) { // Функция генерации чисел
  max = 100;
  min = -100;
 return Math.floor(Math.random() * (max - min)) + min;
}

arr = [] // создаем массив в котором генерируются 10 значений
inArr = function(val) {
 for(var i=0; i<=arr.length; i++) {
   if(arr[i] === val) 
     return true;
 }
}

while(arr.length<10) { // Массив состоит из 10 значений
 tmp = generation()
if(inArr(tmp)) continue; 
 arr.push(tmp)
}

arr2 = [] // создаем массив в который будут возращатся возведенные в квадрат значения >100 
var length = arr.length;
var num;
for(var i = 0; i < length; i++) {
 num = arr[i];
 num = num*num;
  if (num > 100) {
    arr2.push(num);
  }
}

console.log(arr);
console.log(arr2);


//Создать массив и заполнить его десятью значениями в пределах -100...100 при помощи Math.random. Возвести каждый элемент массива в квадрат и вернуть массив, который будет содержать элементы > 100;
var arr = [],
arr2 = [],
min = -100,
max = 100,
number = 10;

function generate(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for(i = 0; i < number, i++) {
  arr.push(generate(min,max))
}

for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * arr[i];
  if (arr[i] > 100) {
    arr2.push(arr[i]);
  }
}

console.log(arr);
console.log(arr2);

