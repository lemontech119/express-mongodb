const express = require("express");
const { getUserByTest } = require("../controllers");
const router = express.Router();

router.get("/test", getUserByTest);

module.exports = router;
