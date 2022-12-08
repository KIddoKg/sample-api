const dictionary = require("@vntk/dictionary");

let checkValidLanguage = (req, res) => {
  const clientText = req.body.text;
  if (dictionary.has(clientText)) {
    return res.status(200).json({
      message: "Chính xác",
    });
  }
  return res.status(400).json({
    message: "Không có từ này",
  });
};

module.exports = {
  checkValidLanguage,
};
