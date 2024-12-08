import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/devesh", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/devesh", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/devesh", (req, res) => {
  //Deleting user
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
