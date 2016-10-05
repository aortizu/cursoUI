var btn = document.querySelector('#button');
var section = document.querySelector('section');
var serviceUrl = "http://api.icndb.com/jokes/random";

document.getElementById("container").onload = function() {
    section.classList.remove('is-paused');
};

btn.addEventListener('click', function(e) {
    callService();
});

function callService() {
    getJoke(serviceUrl).then(function(data) {
        if (data.value.joke) {
            section.innerHTML = data.value.joke;
        }
        else {
            section.classList.add('error');
            section.innerHTML = "An error occurred: It broke, service down";
        }

    }).catch(function(error) {
        section.classList.add('error');
        section.innerHTML = "An error occurred: " + error;
    })
}

function getJoke(url) {

    return new Promise(function(resolve, reject) {

        nanoajax.ajax({
                url: url
            },
            function(code, responseText, request) {
                if (code === 200) {
                    var data = JSON.parse(responseText);
                    resolve(data);
                }
                else {
                    reject(Error("It broke, service down"));
                }
            });
    });
};