var btn = document.querySelector('#button');
var serviceUrl = "https://api.github.com/search/repositories?q=";
var repository = document.querySelector('#repository');
var form = document.querySelector('form');
var ul = document.querySelector('ul');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    callService();
});

function callService() {
    while (ul.firstChild) ul.removeChild(ul.firstChild);
    if (repository.value != '') {
        var url = serviceUrl + repository.value;
        getJoke(url).then(function(data) {
            console.log(data);
            for (var i = 0; i < data.items.length; i++) {
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(data.items[i].full_name));
                ul.appendChild(li);
            }

        }).catch(function(error) {
            console.log("An error occurred: " + error);
        })
    }
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
                    reject(Error("It broke"));
                }
            });
    });
};