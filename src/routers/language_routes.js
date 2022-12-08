const express = require("express");
const LanguageController = require("../controllers/language_controller.js");

let router = express.Router();
const languages = (app) => {
  router.post("/check", LanguageController.checkValidLanguage);
  return app.use("/", router);
};
module.exports = languages;
