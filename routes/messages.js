const express = require("express");
const router = express.Router();

const { store } = require("../controllers/messagesController");

//Rotte

//Store - Create
router.post("/:id/messages", store);

//export router
module.exports = router;
