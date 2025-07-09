const express = require("express");
const router = express.Router();
const { getSummarizedNews } = require("../controllers/newsController.cjs");

router.get("/summarized", getSummarizedNews);

module.exports = router;
