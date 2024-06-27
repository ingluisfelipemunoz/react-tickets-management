const express = require("express");
const endpoints = require("./endpoints");
const cors = require("cors");
const { getCodeSandboxHost } = require("@codesandbox/utils");

const app = express();
app.use(express.json());
const codeSandboxHost = getCodeSandboxHost(3000);
console.log("codesandboxhost", codeSandboxHost);
app.use(cors());
/*app.use(
  cors({
    origin: codeSandboxHost,
  }),
);*/
//endpoints
app.get("/", (req, res) => {
  const name = req?.query?.name || "world";
  res.json({ message: `Hello, ${name}` });
});
let a = 0;

app.use("/api", endpoints);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("listen in port: ", PORT);
});
