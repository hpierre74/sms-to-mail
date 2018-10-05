const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const sendMail = require("./api/mail.js");
const getMailAdress = require("./utils/mail.utils.js");
const getBody = require("./utils/body.utils.js");

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/sendMail", (req, res) => {
  return sendMail({
    email: getMailAdress(req.body.Body),
    subject: `Text Received From Mobile ${req.body.From}`,
    text: getBody(req.body.Body)
  })
    .then(success => {
      console.log(success);

      res.status(200).send();
    })
    .catch(error => {
      console.error(error);

      res.status(500).send();
    });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
