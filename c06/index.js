// Node.js -> async, event-driven, server environment for JS
// Express.js -> framework za Node.js

// Infrastrukturen kod
const express = require("express");
const { postHandler, searchHandler } = require("./handlers/handler");

const app = express();

// https://viknimi.com/post/1?page=1&zone=AT123
// PROTOCOL:HOST/RESOURCE/PARAMETER/QUERYSTRING

// app.get(); // GET
// app.post(); // POST
// app.put(); // PUT
// app.patch(); //PATCH
// app.delete(); // DELETE

function authenticate(req, res, next) {
  const isLoggedIn = true; // Simulacija za logiran korisnik
  if (isLoggedIn) {
    next();
  } else {
    res.status(401).send("Neovlasten pristap!");
  }
}

app.use(authenticate);

app.use((req, res, next) => {
  console.log(`
        Време ${new Date().toLocaleString()} Метод: ${req.method}, Патека: ${
    req.path
  }  
    `);
  next();
});

app.get("/", (req, res) => {
  // query
  // params

  // Nekoj taen resurs

  // zemi gi site postovi od data.txt
  // ili databaza
  const posts = [
    {
      title: "Hello",
      content: "Zdravo na site!",
    },
  ];
  res.send(`<h1>${posts[0].title}</h1>`); // HTML, Text, any other data type
  // res.send
  // res.json // Vrakja JSON
});

app.get("/search", searchHandler);
app.get("/post/:op/:numOne/:numTwo", postHandler); //:id ni znaci dinamicen parametar

app.listen(3000, () => console.log("Server started at port 3000!"));

// Controllers/handlers
// Models/data.txt
// Views/index.html
