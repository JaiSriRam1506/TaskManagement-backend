const express = require("express");
const { AuthController } = require("../../controllers");

const { AuthMiddleware } = require("../../middleware");

/* to send the req to proper controllers */

const router = express.Router();

/* this is 4the level of routing till user */
router.post("/register", AuthController.register);
router.post("/signIn", AuthController.signIn);
router.post("/signOut", AuthController.signOut);
router.patch("/update", AuthController.update);
router.get("/userInfo", AuthController.userInfo);

module.exports = router;

//http://localhost:4000/api/v1/user/register
