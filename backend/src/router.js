const express = require("express");

const router = express.Router();

const citationControllers = require("./controllers/citationControllers");

router.get("/citations", citationControllers.browse);
router.post("/citations", citationControllers.add);

module.exports = router;
