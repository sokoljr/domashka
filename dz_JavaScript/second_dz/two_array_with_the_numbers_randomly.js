//Создать массив и заполнить его десятью значениями в пределах -100...100 при помощи Math.random. Возвести каждый элемент массива в квадрат и вернуть массив, который будет содержать элементы > 100;
 generation = function(max,min) { // Функция генерации чисел
  max = 100;
  min = -100
 return Math.floor(Math.random() * (max - min)) + min;
};

arr = [] // создаем массив в котором генерируются 10 значений
inArr = function(val) {
 for(var i=0; i<=arr.length; i++) {
   if(arr[i] === val) 
     return true;
 }
};

while(arr.length<10) { // Массив состоит из 10 значений
 tmp = generation()
if(inArr(tmp)) continue; 
 arr.push(tmp)
}
console.log(arr);


arr2 = [] // создаем массив в который будут возращатся возведенные в квадрат значения >100 
var length = arr.length;
var num;
for(var i = 0; i < length; i++) {
 num = arr[i];
 if(num !== null) {
   arr2.push(num * num);
 }
}
console.log(arr2);