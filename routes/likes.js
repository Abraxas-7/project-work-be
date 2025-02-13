const express = require("express");
const router = express.Router();

const { update } = require("../controllers/likesController");

//Rotte

//Modify - Update
router.patch("/:id/likes", update);

//export router
module.exports = router;
