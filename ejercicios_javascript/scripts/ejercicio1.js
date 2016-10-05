var btn = document.querySelector('#button');
var section = document.querySelector('section');
var el = document.querySelector('.js-fade');
var myArr;

document.getElementById("container").onload = function() {
    el.classList.remove('is-paused');
};

btn.addEventListener('click', function(e) {
    getResponse();
});


function getResponse() {

    var xmlhttp = new XMLHttpRequest();
    var url = "http://api.icndb.com/jokes/random";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myArr = JSON.parse(this.responseText);
            section.innerHTML = myArr.value.joke;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}