const express = require("express");
const router = express.Router();

const { index, store } = require("../controllers/reviewsController");

//Rotte

// Index - Read all
router.get("/:id/reviews", index);

//Store - Create
router.post("/:id/reviews", store);

//export router
module.exports = router;
