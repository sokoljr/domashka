var validation = {
    name: /^[а-яёА-ЯЁ-]{2,}$/,
    surname: /^[а-яёА-ЯЁ-]{2,}$/,
    age: /^\d{1,3}$/,
    email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
    gender: /(male|famale)/
};

var form = document.getElementsByTagName('form');
var result = document.getElementById('result');

form.onsubmit = function(e) {
    e.preventDefault();
    if (!validateForm()) {
        return;
    }
    alert("Данные введены правильно, форма отправляется");
    this.submit();
};

function validateForm() {
    for (var field in validation) {
        if (!validation[field].test(form.elements[field].value)) {
            result.innerHTML = "Ошибка ввода, поле " + field;
            return false; 
        }
    }
    return true;
}

























		

















