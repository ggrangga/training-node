var express = require('express');
var app = express();
app.get('/', function (req, res) {
  var n = 4;



  for(var x = 0; x < n; x++){    
    //console.log(x);
  }  let c = (n) => {
    return n*(n+1)*(2*n+1)/6;
  }
  console.log(c(9))
  res.send('Hello World!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});