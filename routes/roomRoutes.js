const express = require("express");
const { createRoom, joinRoom } = require("../controllers/roomController");

const router = express.Router();

router.route("/create").post(createRoom);
router.route("/join").post(joinRoom);

module.exports = router;
