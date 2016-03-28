var express = require('express');
var app = express();

var port = process.env.PORT || 7000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.render('index');
})

app.listen(port, function() {
    console.log('listening on port ' + port);
})