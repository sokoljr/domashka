

//- выполнить то же задание для бокового меню, только получить все дочерние узлы-элементы через свойство children и перебирать элементы в цикле for
//- найти картинку и получить адрес файла в переменную (свойство .src - img.src)
//- получить в переменную текст 2014 © All rights reserved со страницы.
//Вывести все переменные в консоль

//Обратите внимание, что скрипт подключен после вывода всех элементов, внизу <body>. Если подключить раньше,
//то элементы, которые идут после тега <script> найдены не будут (их еще нет на момент выполнения javascript)

//1. ul с верхним меню. Перебор элементоd при помощи навигационных свойств

//находим все ul в документе
var uls = document.getElementsByTagName('ul');

//первый ul содержит верхнее меню (так как оно идет первым из всех ul в документе), получаем первый элемент списка (li)
var topLi = uls[0].firstElementChild;

//перебираем все li через навигационное свойство nextElementSibling и записываем в переменную все пункты меню
var topMenuItemsHTML = "";
do {
    //если элемент li существует, то записываем innerHTML внутреннего тега <a> в переменную
    if (topLi !== null)
        topMenuItemsHTML += topLi.firstElementChild.innerHTML + " ";
    topLi = topLi.nextElementSibling;
}while(topLi !== null);

//Все элементы списка отработают хорошо, кроме вложенного в пункт Товары подменю - у него нет внутреннего тега <а> и есть внутренний список,
//который попадет в innerHTML. Решить вопрос можно использованием свойства textContent, которое выводит только вложенный текст без тегов.
//Также нужно убирать пробелы, которые возникают из-за отступов в HTML

//2. Выполнить задание 1 для бокового меню, перебирать элементы в цикле for

//третий ul содержит боковое меню (после верхнего и его подменю), получаем сразу все li в коллекцию элементов
var sideLis = uls[2].children;

var sideMenuItemsHTML = "";
for (var i=0; i < sideLis.length; i++) {
    sideMenuItemsHTML += sideLis[i].firstElementChild.innerHTML + " ";
}

//3. Получить все теги img, потом получить адрес файла в картинке с велосипедом
var imgs = document.getElementsByTagName('img');
var imgSrc = imgs[0].src;

//4. Получить в переменную текст 2014 © All rights reserved со страницы
//
//Выбираем последний ul из коллекции ul страницы (нижнее меню), в нем последний li
var copyright = uls[uls.length - 1].lastElementChild.innerHTML;

//5. Вывод в консоль
console.log("Верхнее меню: " + topMenuItemsHTML);
console.log("Боковое меню: " + sideMenuItemsHTML);
console.log("Адрес файла картинки: " + imgSrc);
console.log("Текст из copyright: " + copyright);