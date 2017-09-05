var express = require('express');

var app =express();




app.use(express.static('public'));

app.listen(8080,function () {
  console.log('Express server is up on port 8080');
})
app.get('/favicon.ico', function(req, res) {
  res.status(204);
});
