// Aplikaciski kod

const searchHandler = (req, res) => {
  // http://localhost:3000/search?genre=action&test=100&page=2
  const genre = req.query.genre;
  const test = req.query.test;
  const page = req.query.page || 1;

  res.send(`Пребарување за: ${genre}, Страница: ${page}`);
};

const postHandler = (req, res) => {
  const { op, numOne, numTwo } = req.params;
  // sekogas id e vo type string

  res.send(`Post with id: ${id}`);
};

module.exports = {
  searchHandler,
  postHandler,
};
