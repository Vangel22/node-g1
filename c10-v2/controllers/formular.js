const studenti = require("../models/studenti");

const getForm = (req, res) => {
  res.render("formular");
};

const postForm = async (req, res) => {
  const { ime, prezime, prosek } = req.body;
  const data = {
    ime: ime, // dokolku ni e ist klucot i vrednosta go pisuvame samo ednoto
    prezime,
    prosek,
  };
  await studenti.add(data);
  // await studenti.add(req.body); // ke raboti isto
  res.redirect("/studenti");
};

const getStudenti = async (req, res) => {
  let data = await studenti.list();
  res.render("studenti", { data }); //studenti.ejs
};

const getBrishi = async (req, res) => {
  await studenti.remove(req.query.i);
  res.redirect("/studenti"); // postback
};

module.exports = {
  getForm,
  postForm,
  getStudenti,
  getBrishi,
};
