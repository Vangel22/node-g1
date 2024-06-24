// Barame astraioncode.com
// My computer ->
// Internet Provajder (Telekom, CableNet) Kesirana verzija od Fejsbuk bidejki mnogu lugje go koristat od toj internet provajder ->
// Root Servers (13 serveri vo svetot) ->
// TLD (Top level domain server) .com, .net, .org, ->
// Authoritative servers

// astraioncode.com -> 192.168.222.03

// Ni ovozmozuva komunikacija preku internet

// HTTP - Hyper text transfer protocol
// zdravo studenti - nase baranje kako klienti i stiga kako cist tekst
// problem: Man in the middle
// response -> zdravo semos

// HTTPS - secure
// zdravo studenti - nase baranje kako klienti i stiga kako enkriptiran tekst
// response -> zdravo studenti

// Client server

// GET, POST, PUT, PATCH, DELETE
// request -> klientot
// response -> serverot

// CRUD - Create, Read, Update, Delete

// baranje na ruta -> /dictionary/test
const http = require("http");
const url = require("url");
// http e na porta 80
// https e na porta 443

// Ovoj primer vi e za da gi razbereme portite
// const server = http.createServer((req, res) => {
//   res.end("Hello students!");
// });

// server.listen(10001, () => {
//   console.log("Server started!");
// });

// const newServer = http.createServer((req, res) => {
//   res.end("Hello world!");
// });

// newServer.listen(10000, () => {
//   console.log("Server started!");
// });

// localhost -> 127.0.0.1 -> ova e lokalno

// const server = http.createServer((req, res) => {
//   // req.url
//   // req.params -> vo express
//   // req.query ->

//   // /home ni e ruta
//   //   if (req.url === "/home") {
//   //     res.write("Hello you are home");
//   //   } else {
//   //     res.write("Hello from elsewhere");
//   //   }

//   //   const parsedUrl = url.parse(req.url, true);
//   //   const pathname = parsedUrl.pathname;
//   //   const param = pathname.split("/");
//   //   console.log(param[2]);

//   switch (req.url) {
//     case "/home":
//       return res.end("Home!");
//     case "/about":
//       return res.end("About!");
//     case "/contact":
//       return res.end("Contact!");
//     default:
//       return res.end("Hello everyone!");
//   }
// });

// server.listen(10000, () => {
//   console.log("Server started!");
// });

function handler(req, res) {
  const url = req.url;
  console.log("url", url);

  // sobiranje/2/2 -> 4
  // razlika/4/3 -> 1

  //   const ["", "sobiranje", "2", "2"] = req.url.split("/");
  const [, operacija, numOne, numTwo] = req.url.split("/"); // array destructuring
  //   /sobiranje/2/2
  // [0] = ""
  // "sobiranje"
  // "2"
  // "2"
  //   console.log(_, operacija, numOne, numTwo);

  let result = "";
  switch (operacija) {
    // HINT
    case "sobiranje":
      result = Number(numOne) + Number(numTwo);
      //   result = convertMilesToKm(10);
      //   res.end(`${result}`);
      res.end(result.toString());
      break;
    case "razlika":
      result = Number(numOne) - Number(numTwo);
      res.end(result.toString());
      break;
    default:
      res.end("Welcome to calculator app!");
  }
}

// const newServer = http.createServer((req, res) => {
//     const url = req.url;

//   // sobiranje/2/2 -> 4
//   // razlika/4/3 -> 1

//   //   const ["", "sobiranje", "2", "2"] = req.url.split("/");
//   const [_, operacija, numOne, numTwo] = req.url.split("/"); // array destructuring

//   let result;
//   switch (operacija) {
//     case "sobiranje":
//       result = Number(numOne) + Number(numTwo);
//       res.end(result);
//       break;
//     case "razlika":
//       result = Number(numOne) - Number(numTwo);
//       res.end(result);
//       break;
//   }
// })

const newServer = http.createServer(handler);
newServer.listen(10000);
