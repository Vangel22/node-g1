const express = require("express");

const {
  getStudents,
  createStudent,
  deleteStudent,
} = require("./handlers/students");

const app = express();

// Middleware koj ni ovozmozuva req.body da bide vo JSON format
// po default e FormData
app.use(express.json());

// const server = http.createServer((req, res));

// GET, POST, PUT, PATCH, DELETE

// POST, PUT, PATCH, DELETE (optional)
// imaat telo, req.body

app.get("/students", getStudents);
app.post("/students", createStudent);
app.delete("/students/:index", deleteStudent);

app.listen(3000, () => console.log("Server running at port 3000!"));
