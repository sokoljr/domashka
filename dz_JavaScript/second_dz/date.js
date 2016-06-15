//Написать функцию, которая будет сравнивать два объекта Date и сообщать, какая дата была раньше или если они равны.
var date1=new Date(),
    date2=new Date(2016,6,15);
compare(date2,date1)

function compare(date1,date2) {
  if(date1.getTime() >date2.getTime()) {
    alert ("Первая дата позже второй");
  }
  else if (date1.getTime() == date2.getTime()) {
    alert("Одновременно");
  }
  else {
    alert("вторая дата позже первой");
  }
}