const express = require("express");

const { midAuthentication } = require("../middlewares");

const {
  getUserByTest,
  googleSignUp,
  getMyUserData,
} = require("../controllers");

const router = express.Router();

router.get("/test", getUserByTest);
router.get("/me", midAuthentication, getMyUserData);
router.post("/google/login", googleSignUp);

module.exports = router;
