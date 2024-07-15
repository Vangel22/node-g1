const fs = require("fs");
const DATA_SOURCE = `${__dirname}/../blog.json`;

const readFile = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(DATA_SOURCE, "utf-8", (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

const writeFile = async (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(DATA_SOURCE, data, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

const add = async (data) => {
  let file = await readFile(); //blog.json
  let fileData = JSON.parse(file);
  fileData.push(data);
  await writeFile(JSON.stringify(fileData));
};

const remove = async (index) => {
  // req.query.i
  index = Number(index);
  let file = await readFile();
  let fileData = JSON.parse(file);
  let newFileData = fileData.filter((blog, i) => i !== index); // site sto ne se ednakvi na isprateniot index
  await writeFile(JSON.stringify(newFileData));
};

const list = async () => {
  let file = await readFile();
  let fileData = JSON.parse(file);
  return fileData;
};

module.exports = {
  add,
  remove,
  list,
};
