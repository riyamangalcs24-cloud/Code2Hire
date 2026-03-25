const express = require("express");
const router = express.Router();

const { getQuestions } = require("./questioncontroller");

router.get("/", getQuestions);

module.exports = router;