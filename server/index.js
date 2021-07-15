const express = require("express");
const app = express();

app.use(express.static("public"));

const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
