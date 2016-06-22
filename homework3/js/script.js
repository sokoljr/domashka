var uls = document.getElementsByTagName ("ul"); // Находим все "ul"
var topLi = uls[0].firstElementChild; // Находим верхний li в первом ul
//перебираем все li через навигационное свойство nextElementSibling и записываем в переменную все пункты меню
var topMenuItemsHTML = "";
do {
    //если элемент li существует, то записываем innerHTML внутреннего тега <a> в переменную
    if (topLi !== null)
        topMenuItemsHTML += topLi.firstElementChild.innerHTML + " ";
    topLi = topLi.nextElementSibling;
}while(topLi !== null);

var leftLi = uls[2].children; // находим все li в боковом меню
var leftMenuItemsHTML = "";
for (var i=0; i < leftLi.length; i++) {
    leftMenuItemsHTML += leftLi[i].firstElementChild.innerHTML + " ";
};

var imgs = document.getElementsByTagName('img'); // находим картинку
var imgSrc = imgs[0].src;

var copyright = uls[uls.length - 1].lastElementChild.innerHTML; // находим в последнем ul последнее li

console.log("Верхнее меню: " + topMenuItemsHTML);
console.log("Боковое меню: " + leftMenuItemsHTML);
console.log("Картинка: " + imgSrc);
console.log("Текст из copyright: " + copyright);


    
