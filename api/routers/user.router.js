const express = require("express");

const { getUserByTest, googleSignUp } = require("../controllers");

const router = express.Router();

router.get("/test", getUserByTest);
router.post("/google/signup", googleSignUp);

module.exports = router;
