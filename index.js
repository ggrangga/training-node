var express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
//mongoose.connect(keys.mongoURI);
mongoose.connect('mongodb://noOne:noOne654321@ds217438.mlab.com:17438/training', {useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
    console.log("Database Master Data is Connected");
}).catch((err) => {
    console.log("Database Master Data is Not Connected", err);
});

require('./Train');

var app = express();
app.get('/', function (req, res) {
  const fs = require('fs');
  const Train = mongoose.model('trains');

  var books = '1661-0.txt';
  fs.readFile(books, 'utf8', async function(err, data) {
    //53419-0
    if (err) throw err;
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    var curr = 0;
    var _arr = [];
    var found = [];
    var arr = 0;

    /*var xdata = [];
    var sentences = "";
    [...data].forEach(x => {
      if(x === '.'){
        xdata.push(sentences);
        sentences = "";
      }else{
        sentences += x;
      }
    });

    console.log(xdata.length);
    console.log(xdata[20]);*/
    
    [...data].forEach((_x, index, array) => {
      let _data = data.substring(curr, index);
      if(_data.length > 0){
        if([...alpha].every(x => _data.includes(x) || _data.includes(x.toUpperCase()))){
          _arr[arr] = _data;
          found[arr++] = curr + ' >|< ' + index;
          curr = index+1;
        }
      }
    });
    console.log(_arr.length);
    const results = {"book": books, "length":_arr.length,"text":_arr,"found":found+''};
    
    const existingTrain = await Train.findOne({"book": books});
    if(existingTrain){

    }else{
      //const train = await new Train({...results}).save();
    }
    
    res.send(results);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});