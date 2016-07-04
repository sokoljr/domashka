//первое ДЗ
/*var uls = document.getElementsByTagName ("ul"); // Находим все "ul"
var topLi = uls[0].firstElementChild; // Находим верхний li в первом ul

var topMenuItemsHTML = "";
do {
    if (topLi !== null)
        topMenuItemsHTML += topLi.firstElementChild.innerHTML + " ";
    topLi = topLi.nextElementSibling;
} while(topLi !== null);

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
console.log("Текст из copyright: " + copyright);*/


//Второе ДЗ Jquery
$(document).ready(function() {
	var $menu_top = $('ul.menu_top');

	var $liSub = $($menu_top[0]).find('li:nth-child(2)');// при нажатии всплывает меню
	$liSub.on("click", subClick);
	function subClick() {
	$(".menu_top__submenu").toggleClass("hidden");
	};

	var $lis = $($menu_top[0]).find('li');
	var $newLi = $('<li class="menu_top__item"><a href="#">Third</a></li>').insertAfter($($lis[1]));// вставка элемента после подменю
	$newLi.css({"font-size" : "15px", "color" : "white"});
	
	$newLi.on('click', imageClick);// функция скрытия и отображения картинки
    function imageClick() {
        $('img').fadeToggle(1000);;
    };
    
    var $leftMenu = $("ul.left_menu"); //изменение цвета фона и шрифта для каждого четного элемента
  	var $lisLeft = $($leftMenu[0]).find('li:nth-child(2n+1)'); 
    $lisLeft.css({'font-size' : '18px', 'background-color': 'red'});

	var $liBottomLast = $($menu_top[1]).find('li:nth-child(5)'); //Замена года 2014 на 2016
	$liBottomLast.html("2016 All &copy; rights reserved");
});



    
