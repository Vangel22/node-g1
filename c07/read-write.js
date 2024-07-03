const fs = require("fs");

const read = async () => {
  // Alice
  // sinhron kod
  // console.log("dali ke se izvrsam pred da zavrsi linija 5?");
  // Bob
  // sinhron kod -> samo koga ke zavrsi ke dojde na linija 10
  // console.log("dali ke se izvrsam pred da zavrsi linija 9?");
  // fs.readFileSync("data.json", "utf-8"); // nema callback bidejki e sinhrono
  // asinhron kod

  // Statusi: pending, fullfiled, rejected
  return new Promise((success, fail) => {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) return fail(err);
      data = JSON.parse(data);
      // Od JSON vo objekt
      return success(data);
    });
  });
};

const write = async (data) => {
  return new Promise((success, fail) => {
    data = JSON.stringify(data);
    // data ke bide vo JSON format
    fs.writeFile("data.json", data, (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

// Raboti aplikacijata
// Alice i Bob probuvaat da go procitat data.json

module.exports = {
  read,
  write,
};
