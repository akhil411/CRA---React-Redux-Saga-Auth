const router = require("express").Router();
const userController = require("../../controllers/userController");
const axios = require("axios");


router.route("/register")
    .post(userController.register);

module.exports = router;
