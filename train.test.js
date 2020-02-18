/*let c = (n) => {
  return n*(n+1)*(2*n+1)/6;
}

test('n = -1', () => {
  expect(c(-1)).toBe(0); 
});

test('n = 0', () => {  
  expect(c(0)).toBe(0); 
});

test('n = 1', () => {
  expect(c(1)).toBe(1); 
});*/

const folderPath = require('./train_component');
var json = require('./data.json');

/*const fs = require('fs');
let _test = JSON.parse(fs.readFileSync('data.json'));/*

/*var fs = require('fs'),
  JSONStream = require('JSONStream'),
  es = require('event-stream');

var getStream = function () {
    var jsonData = 'data.json',
        stream = fs.createReadStream(jsonData, {encoding: 'utf8'}),
        parser = JSONStream.parse('*');
        return stream.pipe(parser);
};*/

test('Xsquere', () => {
  let n = 64;
  //console.log(' => ', ((1 << 32) -1 ));
  //console.log(BigInt(Math.pow(2, n-1)));
  //console.log(BigInt(folderPath.__Xsquere()));
  //console.log(folderPath.fibonacci(10)-1);
  //let js = folderPath.js;
  /*getStream()
  .pipe(es.mapSync(function (data) {
    console.log(data);
    }));*/
  //console.log(_test);
  //>Find all users older than 24 
  console.log('over 24 => ', json.filter(x => x.age > 24).reduce((x, y) => x + ', ' + y.name, 0).substring(3));

  //Find the total age of all users
  console.log('total age => ', json.reduce((x, y) => x + y.age, 0));

  //List all female coders 
  console.log('List all female coders => ', json.filter(x => x.gender === 'f').reduce((x, y) => x + ', ' + y.name, 0).substring(3));

  //List all users in the US in ascending order*
  console.log('users in the US => ', json.filter(x => x.us).sort((a, b) => a.age - b.age).reduce((x, y) => x + ', ' + y.name, 0).substring(3));

  //Sort all users by age
  console.log('Sort all users by age => ', json.sort((a, b) => a.age - b.age).reduce((x, y) => x + ', ' + y.name, 0).substring(3));

  //Find the total age of male coders under 25
  console.log('total age of male => ', json.filter(x => x.age < 25).reduce((x, y) => x + y.age, 0));

  //List all-male coders over 30
  console.log('all-male coders over 30 => ', json.filter(x => x.gender === 'm' && x.age > 30).reduce((x, y) => x + ', ' + y.name, 0).substring(3));

  //Find the total age of everyone in texas, new york and vegas combined
  console.log('everyone in texas, new york and vegas => ', json.filter(x => x.location === 'texas' || x.location === 'new york' || x.location === 'las vegas').reduce((x, y) => x + ', ' + y.name, 0).substring(3));

  //expect(BigInt(Xsquere(2, 1, n))).toBe(_Xsquere(n)); 
});