var form = document.forms.questions;

form.onsubmit = function(e) {
    e.preventDefault();
    var errors = document.querySelector('p.errors');
    if(form.elements.name.value.length < 2) {
        errors.innerHTML = "Your name is too short";
        return;
    }
    if(form.elements.surname.value.length < 2) {
        errors.innerHTML = "Your surname is too short";
        return;
    }
    if(form.elements.age.value.length > 3) {
        errors.innerHTML = "Your age is so big";
        return;
    }
    this.submit();
};


















		

















