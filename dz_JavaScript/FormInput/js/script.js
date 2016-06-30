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
}
this.submit();




























		

















