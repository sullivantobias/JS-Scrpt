var button =  document.querySelector ('button');
var inputs = document.querySelectorAll('input');
var form = document.forms[0];
var reg = /@/;

button.addEventListener("click", function (e) {
  if (inputs[0].value && 
      inputs[1].value && 
      reg.test(inputs[2].value) && 
      inputs[3].value.length > 6) {
        alert ('sent');
        return true;
  } else {
    e.preventDefault();
    alert ('Check you fields ');
    return false;
  }
})