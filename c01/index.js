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
    console.log("test", test);
    console.log("test1", test1);
  }
  //   console.log("test", test);
  //   console.log("test1", test1);
}

// greetMe();

// var e function scope
// let i const se block scope

//immutable - ne promenlivi
// mutable - promenlivi vrednosti

// Data types
// Primitive - string, number, boolean
// Non primitive - array, object

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
  }
}

console.log(calculate(2, 3, "+"));
