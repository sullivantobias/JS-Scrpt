function checkFields(field) {

    var temp = field.value;
    if (temp == "") {
        return false;
    } else {
        return true;
    }

}

function checkForm(func) {
    var nameOk = checkFields(func.name);
    var surnameOk = checkFields(func.surname);
    var ageOk = checkFields(func.age);

    if (nameOk && surnameOk && ageOk) {
        alert("Form Sent");
        return true;
    } else {
        alert("Please check you form");
        return false;
    }
}
var submit = document.querySelector('button');

submit.addEventListener('mouseout', function () {
    submit.classList.remove('submitButton');
});
submit.addEventListener('mouseover', function () {
    submit.classList.add('submitButton');
});