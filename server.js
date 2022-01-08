const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use("/articles", articleRouter);
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(5000, () => console.log("App available on http://localhost:5000"));
