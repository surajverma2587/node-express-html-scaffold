const path = require("path");

const renderIndexPage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/index.html");

  res.sendFile(filePath);
};

const renderHelloPage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/hello.html");

  res.sendFile(filePath);
};

const renderByePage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/bye.html");

  res.sendFile(filePath);
};

module.exports = {
  renderIndexPage,
  renderHelloPage,
  renderByePage,
};
