const { Router } = require("express");

const {
  renderIndexPage,
  renderHelloPage,
  renderByePage,
} = require("../controllers/htmlControllers");

const htmlRouter = Router();

htmlRouter.get("/hello", renderHelloPage);
htmlRouter.get("/bye", renderByePage);
htmlRouter.get("*", renderIndexPage);

module.exports = htmlRouter;
