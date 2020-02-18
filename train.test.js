const folderPath = require('./train_component');
var json = require('./data.json');

test('Xsquere', () => {
  let n = 64;
  /*console.log('over 24 => ', json.filter(x => x.age > 24).reduce((x, y) => x + ', ' + y.name, 0).substring(3));

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
  */
  //expect(BigInt(Xsquere(2, 1, n))).toBe(_Xsquere(n)); 
});

let str = [
  'Abcdefghijklmnopqrstuvwxyz',
  'the quick brown fox jumps over the lazy dog',
  'a quick movement of the enemy will jeopardize five gunboats',
  'Pack my box with five dozen liquor jugs.',
  'five boxing wizards jump quickly at it',
  '7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog',
  'The_quick_brown_fox_jumps_over_the_lazy_dog',
  '"Five quacking Zephyrs jolt my wax bed."'
];

function checkPangram(string) {
  var regex = /([a-z])(?!.*\1)/g;
  return (string.match(regex) || []).length === 26;
}

var alpha = 'abcdefghijklmnopqrstuvwxyz';

test('pangram 0', () => {
  expect([...alpha].every(x => str[0].includes(x) || str[0].includes(x.toUpperCase()))).toBe(true); 
});
test('pangram 1', () => {
  expect([...alpha].every(x => str[1].includes(x) || str[1].includes(x.toUpperCase()))).toBe(true); 
});
test('pangram 2', () => {
  expect([...alpha].every(x => str[2].includes(x) || str[2].includes(x.toUpperCase()))).toBe(false); 
});
test('pangram 3', () => {
  expect([...alpha].every(x => str[3].includes(x) || str[3].includes(x.toUpperCase()))).toBe(true); 
});
test('pangram 4', () => {
  expect([...alpha].every(x => str[4].includes(x) || str[4].includes(x.toUpperCase()))).toBe(true); 
});
test('pangram 5', () => {
  expect([...alpha].every(x => str[5].includes(x) || str[5].includes(x.toUpperCase()))).toBe(false); 
});
test('pangram 6', () => {
  expect([...alpha].every(x => str[6].includes(x) || str[6].includes(x.toUpperCase()))).toBe(true); 
});
test('pangram 7', () => {
  expect([...alpha].every(x => str[7].includes(x) || str[7].includes(x.toUpperCase()))).toBe(true); 
});

/*let fs = require('fs'),
  PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
  //fs.writeFile("./pdf2json/test/F1040EZ.json", JSON.stringify(pdfData));
  console.log(pdfData);
});

pdfParser.loadPDF("./world-war-z.js");*/