const fs = require("fs");

const readFile = (fileName) => {
  // fullfiled, pending, rejected
  // Promise koristime za da se spravime so async povici
  return new Promise((success, fail) => {
    // fs.readFile e async funkcija
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

// Callback

// callback -> handleReadFile
// const readFile = (callback, fileName) => {
//   fs.readFile(fileName, "utf-8", (err, data) => {
//     if (err) {
//       callback(err); // handleReadFile(err)
//       // Callback hell
//       // callback(fn(err))
//     } else {
//       callback(data); // handleReadFile(data)
//     }
//   });
// };

// const handleReadFile = (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// };

// readFile(handleReadFile, "data.txt");

// Callback
// Promise
// Async/await

const writeFile = (fileName, data) => {
  // success i fail se callback funkcii
  // ako fail() se izvrsi promisot ima status -> rejected
  // ako success() se izvrsi promisot ima status -> resolved
  return new Promise((success, fail) => {
    // ime na fajl, sodrzina, error callback
    // fs.writeFileSync -> ako koristime sinhron povik nema da se povika narednata linija se dodeka ovaa linija ne zavrsi
    fs.writeFile(fileName, data, (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

module.exports = {
  readFile,
  writeFile,
};
