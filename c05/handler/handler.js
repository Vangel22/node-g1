function welcome(req, res) {
  res.end("Welcome to our page");
}

function test(req, res) {
  res.end("Welcome to our test page");
}

function handleUser(req, res, username) {
  // dodadete specijalni znaci
  // maksimum 20 karakteri
  // barem edna golema bukva
  const usernamePattern = /^[a-zA-Z0-9_]{3,}/; // Vangel123
  //   const usernamePattern = new RegExp("^[a-zA-Z0-9_]{3,}");
  if (usernamePattern.test(username)) {
    res.end(`Hello ${username}`);
  } else {
    res.end("Invalid username format!");
  }
}

function handleNotFound(req, res) {
  res.end("404 Not Found");
}

// 100 - Informacioni
// 200 - Uspeh
// 300 - Rerutiranja
// 400 - Klientski greski
// 500 - Serverski greski

module.exports = {
  welcome,
  test,
  handleUser,
  handleNotFound,
};
