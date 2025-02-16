const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploads");
const { store } = require("../controllers/imagesController");

// Rotta per caricare le immagini
router.post("/:id/upload-images", upload.array("images", 20), store);

module.exports = router;
