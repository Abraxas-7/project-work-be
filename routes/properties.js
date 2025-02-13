const express = require("express");
const router = express.Router();

const { index, show, store } = require("../controllers/propertiesController");
//Rotte

// Index - Read all
router.get("/", index);

// Show - Read one -
router.get("/:id", show);

//Store - Create
router.post("/", store);

//export router
module.exports = router;
