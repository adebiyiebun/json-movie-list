const express = require('express')
const app = express();
app.arguments(express.static('client'));
let movies = ['Inside Out', 'Up', 'Toy Story'];
app.get('/list', function(req, resp){
    resp.send(movies);
});
app.listen(8090);
