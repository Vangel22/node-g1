// Third party -> express
// Local -> modul/file koj sami si go kreirame
// Core -> modul koj doagja od Node

// vnimavajte na imenuvanje
// const testObject = require("./test");

// CommonJS - module.exports/require , ES modules - exports/import

const { readFile, writeFile } = require("./files"); // local
const { semos, test } = require("./test"); // local
const http = require("http"); // core
const express = require("express"); // third party

// import { semos, test } from "./test"

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

// Callback
// pravime baranje za izrabotka na karticka
// cekame nekoj od banka da ni se javi da ja podigneme

// parametarot fn e funkcija
const callback = (fn, name) => {
  //greetMe("Petar")
  fn(name);
};

const greetMe = (name) => {
  console.log("Hello", name);
};

const carName = (carName) => {
  console.log("Vroom", carName);
};

// Koga ke povikame funkcija samo nejzinoto ime t.e greetMe -> togas samo davame referenca do nea

callback(greetMe, "Petar");
callback(carName, "Audi");

// Callback hell

// Callback -> ES5
// Promise -> ES6
// Async/await -> ES7

// Promise koristime koga imame async operacii
// Statusi
// resolved, rejected, pending

// Cekor 1
// const writeFile = () => {};

// Cekor 2
// const writeFile = () => {
//   return new Promise();
// };

// Cekor 3
// const writeFile = () => {
// prv parametar na promise e funkcija
//   return new Promise(() => {
//     console.log("arrow");
//   });
//   return new Promise(function () {
//     console.log("function");
//   });
// };

// Cekor 4
// const writeFile = () => {
// na funkcijata gi dodavame dvete callback funkcii, dokolku uspee i dokolku ne uspee. Imenuvanjeto ne e bitno
//   return new Promise((success, fail) => {});
//   return new Promise((resolve, reject) => { });
// };

// Cekor 5
// const writeFile = () => {
//   // success i fail se callback funkcii
//   return new Promise((success, fail) => {
//     // ime na fajl, sodrzina, error callback
//     // fs.writeFileSync -> ako koristime sinhron povik nema da se povika narednata linija se dodeka ovaa linija ne zavrsi
//     fs.writeFile("data.txt", "Hello Semos!", (err) => {
//       if (err) return fail(err);
//       return success();
//     });
//   });
// };

// writeFile()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally("Jas se izvrsuvam sekogas");

// probajte so fajl sto ne postoi za da vidite greska
readFile("data.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("hello guys"));

writeFile("data.txt", "Zdravo studenti, jas sum Vangel!");

// async/await
