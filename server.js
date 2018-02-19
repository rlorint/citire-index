var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('combined'));

app.get('/api/tenants', function(request, response) {
  response.send([
    {id:1, username: "dccestari" ,pass: "daniel"},
    {id:2, username: "rcestari" ,pass: "roxana"},
    {id:3, username: "mlorint" ,pass: "mircea"},
    {id:4, username: "nlorint" ,pass: "nely"}
  ]);
});

app.listen(3000, function() {
  console.log("listening on port ...");
})
