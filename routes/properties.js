const express = require("express");
const router = express.Router();

const { index, show, store, showSlug } = require("../controllers/propertiesController");
//Rotte

// Index - Read all
router.get("/", index);

// Show - Read one -
router.get("/:id", show);
router.get("/:slug", showSlug);

//Store - Create
router.post("/", store);

//export router
module.exports = router;
