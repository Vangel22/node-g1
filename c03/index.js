// Third party -> express
// Local -> modul/file koj sami si go kreirame
// Core -> modul koj doagja od Node

// vnimavajte na imenuvanje
// const testObject = require("./test");

const { semos, test } = require("./test");

// Object destructuring

console.log("semos", semos);
console.log("test", test);

const testObject = {
  name: "Semos",
  group: "Grupa 1",
  city: "Skopje",
};

const { group } = testObject;

console.log("Group", group);

// Spread operator

const newObj = {
  ...testObject,
  // name: "Semos",
  // group: "Grupa 1",
  // city: "Skopje",
  name: "Semos Edukacija",
};

console.log(testObject);
console.log(newObj);
