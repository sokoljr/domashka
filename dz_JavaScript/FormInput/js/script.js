var form = document.forms.add;
var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i] = form.onsubmit;
}

    
form.onsubmit = function age() {
    var number; 
    var result;
    number = +document.getElementById("age").value;
        if (isNaN(number) || number < 12 || number > 80) {
            result = "Неверный возраст";
            document.getElementById('result').innerHTML = result; 
        }
        return !result;
};

form.onsubmit = function name() {
    var name; 
    var result2;
    num = document.getElementById("name").value;
        if (name == null) {
            result2 = "Ошибка ввода имени";
            document.getElementById('result').innerHTML = result2;
        }
        return !result2;
}

/*
var form = document.forms.add;
form.onsubmit = function(e) {
    e.preventDefault();
    var result;
    
    function age() {
        var number;
        number = document.getElementById("age").value;
        if (isNaN(number) || number < 1 || number > 99) {
            result = "Неверный возраст";
        } else {
            result = " ";
        }
        document.getElementById('result').innerHTML = result;
    }
    age();
    this.submit()
}

function email() {
        var regexp = /^.+@.+\..+$/ ;
        var email;
        email = document.getElementById("email").value;
        if (regexp.test(email) != -1) {
            result = "Неверный адресс почты";
        } else {
            result = " ";
        }
        document.getElementById('result').innerHTML = result;
    }
    email();
*/


























		

















