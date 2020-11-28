const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8080;

const app = express();

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log("We are live on port 8080");
});
app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.post("/api", (req, res) => {
  var data = req.body;
  // console.log(req);

  var smtpTransport = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    auth: {
      user: "postmaster@sandbox8792f464660f480abad468646931bbfb.mailgun.org",
      pass: "bcf8ba6230d0999d92218a2c3b235844-f7d0b107-bdd35ba6",
    },
  });

  var mailOptions = {
    from: data.email,
    to: data.email,
    subject: data.email,
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    console.log(error, response);
    if (error) {
      res.status(400).send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});
