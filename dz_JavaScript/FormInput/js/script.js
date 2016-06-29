var form = document.forms.add;

form.onsubmit = function(e) {
    e.preventDefault();
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
this.submit();
























		

















