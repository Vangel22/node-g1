const http = require("http");
const url = require("url");

const {
  welcome,
  test,
  handleNotFound,
  handleUser,
} = require("./handler/handler");

const server = http.createServer((req, res) => {
  // 200 = OK
  // res.writeHead(200, {
  //     'Content-Type': 'text/plain'
  // });
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/welcome") {
    welcome(req, res);
  } else if (parsedUrl.pathname === "/test") {
    test(req, res);
  } else if (parsedUrl.pathname === "/user") {
    handleUser(req, res, parsedUrl.query.username);
  } else {
    handleNotFound(req, res);
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server started at port 3000!");
});
