var validate = document.getElementById("addForm");

validate.addEventListener("click", yourAge);

function yourAge () {
    var number;
    var result;

    number = document.getElementById("age").value;

    if (isNaN(number) || number < 1 || number > 99) {
        result = "Неверный возраст";
    } else {
        result = " ";
    }
    document.getElementById('result').innerHTML = result;
}



















		

















