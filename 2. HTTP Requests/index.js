import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me!</h1><p>My Name is Devesh</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me!</h1><p>My Phone Number is XXXXXXXXXX</p>");
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
