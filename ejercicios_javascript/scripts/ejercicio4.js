var matrix = [
    ['star trek', '2016', 'sci-fi'],
    ['star wars', '2017', 'sci-fi'],
    ['matix', '2000', 'sci-fi'],
    ['iron man', '2009', 'sci-fi'],
    ['Zootopia', '2016', 'animation']
];
var div = document.querySelector('div');
var table = document.createElement('table');
var tr;
var td;

for (var i = 0; i < matrix.length; i++) {
    tr = document.createElement("tr");
    for (var j = 0; j < matrix[0].length; j++) {
        
      td = document.createElement("td");  
      td.appendChild(document.createTextNode(matrix[i][j]));
      tr.appendChild(td);
    }
    table.appendChild(tr);
}
div.appendChild(table);