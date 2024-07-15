const posts = require("../models/blog");

const getForm = async (req, res) => {
  res.render("formular");
};

// POST baranje
const postForm = async (req, res) => {
  // const { title, content } = req.body
  await posts.add(req.body);
  // isto kako chas 7 vo handlers/students.js
  res.redirect("/posts");
};

const getBlogPosts = async (req, res) => {
  const blogPosts = await posts.list();
  res.render("blog", { data: blogPosts }); //blog.ejs
};

const getBrishi = async (req, res) => {
  // req.query.i => go imame indeksot
  // <a class="delete-btn" href="/brishi?i=<%= i %>" >Бриши</a> -> Vo blog.ejs
  await posts.remove(req.query.i);
  res.redirect("/posts"); // postback
};

module.exports = {
  getForm,
  postForm,
  getBlogPosts,
  getBrishi,
};
