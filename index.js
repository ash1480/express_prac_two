const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
// const port = process.env.PORT || 3000;
// const ashvar = process.env.ASHVAR || "server is up";

app.use(express.static("public"));

app.route("/logIn").get((req, res) => {
  const file = path.join(__dirname, "/public/logIn.html");
  res.sendFile(file);
});

app.route("/signUp").get((req, res) => {
  const file = path.join(__dirname, "/public/signUp.html");
  res.sendFile(file);
});

app.get(/i*.css$/, (req, res) => {
  const file = path.join(__dirname, "public/css/home.css");
  res.sendFile(file);
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
