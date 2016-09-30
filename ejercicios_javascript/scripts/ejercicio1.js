var btn = document.querySelector('#button');
var section = document.querySelector('section');

document.getElementById("container").onload = function() {
    load()
};

btn.addEventListener('click', function(e) {
    getResponse();
});


var el = document.querySelector('.js-fade');

function load() {
    el.classList.remove('is-paused');
}

var myArr;

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