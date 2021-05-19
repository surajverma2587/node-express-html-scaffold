const { Router } = require("express");

const { sendHelloData, sendByeData } = require("../controllers/apiControllers");

const apiRouter = Router();

apiRouter.get("/hello", sendHelloData);
apiRouter.get("/bye", sendByeData);

module.exports = apiRouter;
