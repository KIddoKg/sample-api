const express = require("express");
const cors = require("cors");
const lowDb = require("lowdb");
const routes = require("./src/routers/language_routes.js");
const app = express();
const server = require("http").Server(app);
const PORT = 5000;

const modules = Object.keys(routes);

app.use(cors());

app.use(express.json({ limit: "50mb" }));

const checkRoute = require("./src/routers/language_routes");
checkRoute(app);

app.get("/", (req, res) => {
  res.send(
    `<h2 align="center" style="margin-top: 100px;">SUNTECH DEMO API</h2>`
  );
});

server.listen(process.env.PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
