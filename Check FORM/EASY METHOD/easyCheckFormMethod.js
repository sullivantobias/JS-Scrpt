function checkNames (fields) {
  if (!fields.value) {
    fields.style.borderColor = 'red';
    return false;
  } else {
    fields.style.borderColor = 'green';

    return true;
  }
}

function checkEmail (field) {
  var reg = /@./;
  
  if (!reg.test (field.value)) {
    field.style.borderColor = 'red';
    return false;
  } else {
    field.style.borderColor = 'green'
    return true
  }
}

function checkpassword (field) {
  if (field.value.length < 6) {
    field.style.borderColor = 'red';
    return false;
  } else {
    field.style.borderColor = 'green'
    return true;
  }
}

function validateForm (form) {
  var first = [checkNames (form.firstName),  checkNames (form.lastName)]
  var email = checkEmail (form.email);
  var pass = checkpassword (form.password);
  if (first[0] && first[1] && email && pass) {
    alert("sent")
    return true
  } else {
    alert('please check fields')
    return false;
  }
}
