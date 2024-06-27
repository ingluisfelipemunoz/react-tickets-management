const express = require("express");
const endpoints = require("./endpoints");
const app = express();
app.use(express.json());

//endpoints
app.get("/", (req, res) => {
  const name = req?.query?.name || "world";
  res.json({ message: `Hello, ${name}` });
});

app.use("/api", endpoints);

const PORT = 3001;
app.listen(PORT, () => {
  console.log("listen in port: ", PORT);
});
