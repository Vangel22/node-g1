const express = require("express");
// module.exports require
// exports / import "something" from "path"

const {
  getForm,
  getBlogPosts,
  getBrishi,
  postForm,
} = require("./controllers/formular");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// rutite
app.get("/form", getForm);
app.post("/form", postForm);
app.get("/posts", getBlogPosts);
app.get("/brishi", getBrishi);

app.listen(3000, () => console.log("Server started at port 3000!"));
