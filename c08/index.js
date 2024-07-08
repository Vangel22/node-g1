// Infrastrucure code
const express = require("express");
const { getCalculator, postCalculator } = require("./handlers/calculator");

const app = express();

app.use(express.urlencoded({ extended: true }));
// ako e false nema opcija za vgnezdeni objekti i nizi

// qs
// querystring

// ?name=John&test[podatok]=nesto
// req.query.name

// req.body dali e po default e json?
// req.body dali e po default e form data

app.get("/calculator", getCalculator);
app.post("/calculator", postCalculator);

app.listen(3000, () => console.log("Serverot raboti na porta 3000!"));

// Zadaca
// 1. Dodadete mnozenje i delenje vo calculator_form
// 2. Dodadete gi ovie slucai (case) vo postCalculator
// 3. Izvrsete go kodot i pokazete gi rezultatite
