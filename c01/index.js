// Scope - global, function or local, block
var name = "Vangel"; // globalen scope
// console.log("Moeto ime e: ", name);

// function scope
function greetMe() {
  var semos = "Semos";
  console.log("Zdravo ", semos);
  if (true) {
    // block scope
    // sekogas ke se izvrsuva
    const test = 10;
    let test1 = 11;
    var test2 = 12;
    console.log("test", test);
    console.log("test1", test1);
  }
  //   console.log("test", test);
  //   console.log("test1", test1);
  console.log("test2", test2);
}

// greetMe();

// var e function scope
// let i const se block scope

//immutable - ne promenlivi
// mutable - promenlivi vrednosti

// Data types
// Primitive data types
// 1. Number - numeric data
// 2. String - textual data
// 3. Boolean - true and false
// 4. Null - vrednost na objekt koj sto ne postoi
// 5. Undefined - neinicijalizirana variabla
// 6. Symbol - unikatna i nepromenliva vrednost

// Non Primitive data types
// 1. Array
// 2. Object
// 3. Function

let kurs = "Node.js";
const brojka = 1;
const check = true;

// kluc, vrednost
const testObj = {
  kurs: "Node.js",
  fakultet: "FINKI",
};

// console.log(testObj.fakultet);
// Dot notation
testObj.fakultet = "Evropski";
// Bracket notation
testObj["fakultet"] = "Evropski";

// console.log(testObj.fakultet);
// console.log(testObj["fakultet"]);

const array = [1, 2, 3, 4];
// find, sort, map, filter, reduce
array.push(5);
array.pop();
// console.log(array);

function addTwoNumbers(a, b) {
  return a + b;
}

// Pecatenje na rezultat
// console.log("vrednost", addTwoNumbers(2, 2));

// Vrakanje i skladiranje na rezultat
const sum = addTwoNumbers(2, 2); // vrakja rezultat i se zapisuva vo sum konstantata
// console.log(sum);

// Calculator
// 1 + 1 - dva operandi i edna operacija
// Bonus - kako da proverime dali a,b e brojka
// Bonus - da go napravite so switch

// Zadaca:
// Napravete opercija za mnozenje, delenje, modulo, razlika - sobiranje ima

function calculate(a, b, operacija) {
  if (operacija === "sobiranje" || operacija === "+") {
    return a + b;
  } else if (operacija === "odzemanje" || operacija === "-") {
    return a - b;
  } else if (operacija === "mnozenje" || operacija === "*") {
    return a * b;
  } else if (operacija === "delenje" || operacija === "/") {
    return a + b;
  } else {
    return "Nevalidna operacija";
  }
}

console.log(calculate(2, 3, "+"));

// Functions

// Named
function named() {
  console.log("named");
}
named();

// Arrow
const arrowFun = (param1, param2) => {
  console.log(param1, param2);
};
arrowFun(1, 1);

// Function Expression
const res = function (param1, param2) {
  console.log(param1, param2);
};
res(1, 1);

// function namedArrow(param1, param2) {}

function greet() {
  console.log("Zdravo grupa 1");
}

// IIFE - Immediately invoked function expression
// Cekor 1 - obicni zagradi za zapocnuvanje na IIFE
// ()
// Cekor 2 - arrow funkcija vnatre vo zagradite
// ( () => {} )
// ( function() {} )
// Cekor 3
// (() => {
// console.log("Zdravo grupa 1");
// })
// Cekor 4 - da ja povikame ovaa funkcija
// (() => {
//   console.log("Zdravo grupa 1");
// })();

// Moze da koristime async await vo IIFE
// (async () => {
//   // await fetch();
//   console.log("Zdravo grupa 1");
// })();

// Higher order function - HOC - Concept called Closure
function operate(func, a, b) {
  // slucaj so calcTest
  // func -> calcTest
  // a -> 2
  // b -> 2
  // slucaj so calcMinus
  // func -> calcMinus
  // a -> 3
  // b -> 1
  return func(a, b);
  // calcTest(2, 2)
  // calcMinus(3, 1)
}

function calcTest(a, b) {
  // a -> 2
  // b -> 2
  return a + b; // 4
}

function calcMinus(a, b) {
  // a -> 3
  // b -> 1
  return a - b; // 2
}

// console.log(operate(calcTest, 2, 2));
// console.log(operate(calcMinus, 3, 1));

// Uslovi
const tryOut = false;
const tryOutTwo = true;

if (tryOut) {
  console.log("Proba");
}

// true => false
// false => true

// negacija
if (!tryOut) {
  console.log("Negacija");
}

// OR operacija
// true i false => true
// false i true => true
// true i true => true
// false i false => false
if (tryOut || tryOutTwo) {
  console.log("ili");
}

// AND operacija
// true i true => true
// false i true => false
// true i false => false
// false i false => false
if (tryOut && tryOutTwo) {
  console.log("i");
}

if (!tryOut && tryOutTwo) {
  console.log("i kombinacija?");
}

if (tryOut || !tryOutTwo) {
  console.log("ili");
} else {
  console.log("greska");
}

if (true || (false && false)) {
  console.log("testiranje eden");
}

if (true && (true || false)) {
  console.log("testiranje dva");
}

// Pogolemo > i Pomalo <

// if(10 >= 10) {
//   console.log('da ne?');
// }

// Od tri ocenki presmetajte vkupno
// Potoa presmetajte prosek
// I soodvetno vratete dali ucenikot ima prosek Odlicen, Mn.dobar, Dobar, Dovolen, Nedovolen
function determineGrade(score1, score2, score3) {
  // total
  // prosek
}

// 5 + 5 + 5 = 15
//3 -> Nedovolen
// 6 -> Dovolen
// 9 -> Dobar
// 12 -> Mn.dobar
// 15 -> Odlicen
