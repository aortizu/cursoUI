var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var plus = document.querySelector('#plus');
var rest = document.querySelector('#rest');
var mult = document.querySelector('#mult');
var divi = document.querySelector('#divi');
var result = document.querySelector('#result');
var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    calculate();
});

function calculate() {
    result.innerHTML = "0";
    if (plus.checked || rest.checked || mult.checked || divi.checked) {
        if (input1.value != '' && input2.value != '') {
            if (plus.checked) {
                result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
            }
            else if (rest.checked) {
                result.innerHTML = parseInt(input1.value) - parseInt(input2.value);
            }
            else if (mult.checked) {
                result.innerHTML = parseInt(input1.value) * parseInt(input2.value);
            }
            else if (divi.checked) {
                result.innerHTML = parseInt(input1.value) / parseInt(input2.value);
            }
        }
        else {
            result.innerHTML = "Error, please insert a valid value";
        }
    }else{
        result.innerHTML = "Error, please select an operation";
    }

}
