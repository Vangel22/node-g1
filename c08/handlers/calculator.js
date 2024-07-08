const fs = require("fs");
// get
// rezultatot od 1 + 2

const getCalculator = async (req, res) => {
  try {
    let output = await parseTemplate("calculator_form");
    res.status(200).send(output); // ja vrakja html stranicata calculator_form
  } catch (err) {
    console.log(err);
    res.status(500).send("Invalid Server Error!");
  }
};

// post
// 1 + 2 = rezultat
// kalkuliraj

const postCalculator = async (req, res) => {
  const { a, b, op } = req.body;

  if (a === "" || b === "") {
    return res.status(400).send("Bad request!");
  }

  let result = "";

  switch (op) {
    case "sobiranje":
      result = `${Number(a) + Number(b)}`;
      break;
    case "odzemanje":
      result = `${Number(a) - Number(b)}`;
      break;
  }

  try {
    let output = await parseTemplate("calculator", {
      podatok: result,
      ime: "Semos",
    });
    res.status(200).send(output);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

// Login form
// POST ili GET - koga ke klikneme na kopceto
// email pass -> req.body
// res.send(OK)
// res.send(NOT OK)

// Parse template - za da procitame fajl
const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) reject(err);

        // null ne e true
        // if(null) {
        //     console.log("here i am true?")
        // }

        if (data) {
          console.log("data", data);
          for (d in data) {
            // prva iteracija data vo calculator.html
            // vtora iteracija ime vo calculator.html
            console.log("d", d);
            // d e klucot i se zamenuva koga ke imam match
            // d vo prva iteracija e podatok
            // d vo vtora iteracija e ime

            content = content.replace(`{{${d}}}`, data[d]);
            // content = content.replace(`{{podatok}}`, 13);
            // content = content.replace(`{{ime}}`, "Semos");

            // content ni e sodrzinata vo tekst od calculator.html

            // data[d] -> 11
            // data[d] -> Semos
          }

          // data { data: '11', ime: 'Semos' }
          // d data
          // d ime
        }

        return resolve(content);
      }
    );
  });
};

// parseTemplate("calculator_form")

// __dirname ni e momentalniot folder kade sto se naogja ovoj fajl

module.exports = {
  getCalculator,
  postCalculator,
};
