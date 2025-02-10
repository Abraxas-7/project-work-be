const express = require("express");
const router = express.Router();

const {
  index,
  show,
  store,
  destroy,
} = require("../controllers/reviewsController");

//Rotte

// Index - Read all
router.get("/", index);

// Show - Read one -
router.get("/:id", show);

//Store - Create
router.post("/", store);

// Destroy - Delete
router.delete("/:id", destroy);

//export router
module.exports = router;
