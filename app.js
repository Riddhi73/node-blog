const express = require("express");
const morgan = require('morgan')
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(morgan('dev'))

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Mario is dead",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.use((req, res) => {
  res.render("404");
});
