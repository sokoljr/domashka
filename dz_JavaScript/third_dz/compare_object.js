// Задача: есть массив объектов (создать вручную, не меньше 4-х объектов, из них должно быть несколько объектов с равными значениями свойства height). Объект описывает человека, есть ключи name, surname, weight, height. Отсортировать "людей" в массиве по росту. Если рост одинаковый - то по фамилии. Использовать метод sort для массивов

var person1 = {name: "Sergey", surname: "Sokol", weight: 95, height: 190},
person2 = {name: "John", surname: "Huge", weight: 90, height: 190},
person3 = {name: "Max", surname: "Kill", weight: 87, height: 167},
person4 = {name: "Mikel", surname: "Rodzinskii", weight: 78, height: 175},
person5 = {name: "Maria", surname: "Luna", weight: 32, height: 190},
person6 = {name: "Alice", surname: "Bora", weight: 45, height: 132},
person7 = {name: "Maya", surname: "Cari", weight: 78, height: 112};

var array = [person1, person2, person3, person4, person5, person6, person7];

function compare(person1, person2) {
  if(person1.height == person2.height) {
    return person1.surname > person2.surname;
  } else {
    return person1.height - person2.height;
    }
}

array.sort(compare);

for(var i = 0; i < array.length; i++) {
  alert(array[i].height); 
}

console.log(array);