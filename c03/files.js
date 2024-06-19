const fs = require("fs");

const readFile = (fileName) => {
  return new Promise((success, fail) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const writeFile = (fileName, data) => {
  // success i fail se callback funkcii
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
