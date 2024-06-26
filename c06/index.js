// Node.js -> async, event-driven, server environment for JS
// Express.js -> framework za Node.js

// Infrastrukturen kod
const express = require("express");
const { postHandler, searchHandler } = require("./handlers/handler");
const { getStudents } = require("./handlers/students");

const app = express();

// https://viknimi.com/post/1?page=1&zone=AT123
// PROTOCOL:HOST/RESOURCE/PARAMETER/QUERYSTRING

// app.get(); // GET
// app.post(); // POST
// app.put(); // PUT
// app.patch(); //PATCH
// app.delete(); // DELETE

function authenticate(req, res, next) {
  const isLoggedIn = false; // Simulacija za logiran korisnik
  if (isLoggedIn) {
    next();
  } else {
    res.status(401).send("Neovlasten pristap!");
  }
}

// app.use("/search", authenticate); // ova se misli za site ruti koi sodrzat /search
// app.use(authenticate); // Ova se misli za site ruti koi se pobarani

app.use((req, res, next) => {
  console.log(`
        Време ${new Date().toLocaleString()} Метод: ${req.method}, Патека: ${
    req.path
  }  
    `);
  next();
});

app.get("/", authenticate, (req, res) => {
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
app.get("/students/:id", getStudents);

// app.get(
//   "/students/:studentId",
//   (req, res) => {
//     const studentId = req.params.studentId;
//     const studentName = req.query.name; // Alice

//     const student = students.find(
//       (student) => student.id === Number(studentId)
//     );

//     // Ako ne najdeme student student ke bide undefined
//     if (!student) {
//       return res.status(404).send("Student not found!");
//     }

//     console.log("name", studentName);
//     // Ako vo query imame ime na student i proveruvam dali najdeniot student go ima istoto ime
//     if (
//       studentName &&
//       student.name.toLowerCase() !== studentName.toLowerCase()
//     ) {
//       return res.status(404).send("Student not found with provided name!");
//     }

//     return student;
//   }
// );

app.listen(3000, () => console.log("Server started at port 3000!"));

// Controllers/handlers
// Models/data.txt
// Views/index.html
